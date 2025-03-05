import SC01_css from '../css/SC01.module.css';
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

import SiscoBear from '../ui-components/siscobear.png';
import { useCookies } from "react-cookie";
import Papa from 'papaparse';
import { ConsoleLogger } from 'aws-amplify/utils';

function SC01() {
  const [data, setData] = useState([]);
  const [cookies, setCookie] = useCookies();
  const [searchQuery, setSearchQuery] = useState(cookies.searchQuery || "");
  const [selectedPhase, setSelectedPhase] = useState(cookies.selectedPhase || 0);
  const [formData, setFormData] = useState(cookies.formData || { date: "" });
  const [currentPage, setCurrentPage] = useState(cookies.currentPage || 1);
  const [students, setStudents] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [jobfairOptions, setJobfairOptions] = useState([]);
  const [phaseData, setPhaseData] = useState({});
  const [totalPhaseCount, setTotalPhaseCount] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);

  const itemsPerPage = 100;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  useEffect(() => {
    setPaginatedData([...filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )])
  }, [filteredData, currentPage])


  const function_id = 'SC01';


  //画面遷移
  const navigate = useNavigate();
  const handleClick = () => { navigate("/SC03"); };
  const handleClick2 = () => { navigate("/SC04"); };


  //フェーズ
  const handlePhaseChange = (phase) => {
    setSelectedPhase(phase);
    setCurrentPage(1);
    setSelectedIds([]);
    applyFilters(searchQuery, formData.date, phase, students);
    const totalCount = phaseData[phase]?.[`phase${phase}_count`] || 0;
    setTotalPhaseCount(totalCount);
  };

  //ページネーション
  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };//前のページに戻る
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };//次のページへ進む


  //チェックボックス
  const handleCheckboxChange = (studentId) => {
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(studentId)) {
        return prevSelectedIds.filter((id) => id !== studentId);
      } else {
        return [...prevSelectedIds, studentId];
      }
    });
  };


  //ポップアップ
  const [errorMessage, setErrorMessage] = useState("");
  const openPopup = () => {
    const hasInvalidStudents = selectedIds.some((studentId) => {
      const student = students.find((s) => s.student_id === studentId);
      if (!student) return false;
      if (selectedPhase === 3) {
        return selectedButtons[studentId]?.Studentsituation2 === 1; // 一次面接で不合格
      } else if (selectedPhase === 4) {
        return selectedButtons[studentId]?.Studentsituation2 === 1; // 座談会で不合格
      } else if (selectedPhase === 5) {
        return selectedButtons[studentId]?.Studentsituation2 === 1; // 最終面接で不合格
      }
      return false;
    });
    if (selectedIds.length === 0) {
      setErrorMessage("登録する学生を選択してください。");
      return;
    }
    if (hasInvalidStudents) {
      setErrorMessage("不合格が選択された学生を含めることはできません。");
      return;
    }
    setErrorMessage("");
    setIsPopupOpen(true);
  };
  const closeErrorMessage = () => {
    setErrorMessage("");
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const registerPopup = async () => {
    try {
      if (selectedIds.length === 0) {
        setErrorMessage("登録する学生を選択してください。");
        return;
      }
      const requestData = {
        phase_num: selectedPhase,
        students: selectedIds.map((studentId) => {
          const student = students.find((s) => s.student_id === studentId);
          let updated_at = null;
          if (selectedPhase <= 2) {
            updated_at = student?.updated_at;
          } else if (selectedPhase == 3) {
            updated_at = student?.interview_updated_at || null;
          } else if (selectedPhase == 4) {
            updated_at = student?.roundtable_updated_at || null;
          } else if (selectedPhase == 5) {
            updated_at = student?.final_updated_at || null;
          }
          return {
            student_id: studentId,
            name: student?.name || "",
            university: student?.university || "",
            resume_is_submit: student?.resume_is_submit || null,
            jobfair_is_attend: student?.jobfair_is_attend || null,
            result: student?.result,
            updated_at: updated_at,
          };
        }),
        user: cookies?.user,
        function_id: function_id,
        recruit_year: cookies?.recruit_year,
      };
      const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/bulkRegister";
      const response = await fetch(url, {
        method: "POST",
        headers: { Authorization: cookies?.token },
        body: JSON.stringify(requestData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("登録成功:", result);
      setIsPopupOpen(false);

      window.location.reload();
    } catch (error) {
      console.error("登録エラー:", error);
      alert("登録中にエラーが発生しました。");
    }
  };
  const getPopupContent = () => {
    const phaseTitles = [
      "説明会参加者",
      "履歴書提出者",
      "",
      "一次面接合格者",
      "座談会合格者",
      "最終面接合格者",
      "内定者"
    ];
    if (selectedPhase > 5) return null;
    const selectedStudents = students.filter((student) =>
      selectedIds.includes(student.student_id)
    );
    return (
      <div className={SC01_css.popup_content} onClick={(e) => e.stopPropagation()}>
        <h2>{`以下の学生を${phaseTitles[selectedPhase]}に登録しますか？`}</h2>

        <table className={SC01_css.studenttbl}>
          <thead>
            <tr>
              <th>氏名</th>
              <th>大学名</th>
            </tr>
          </thead>
          <tbody>
            {selectedStudents.map((student) => (
              <tr key={student.student_id}>
                <td>{student.name || ""}</td>
                <td>{student.university || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={SC01_css.popup_buttons}>
          <button className={SC01_css.close_button} onClick={closePopup}>
            閉じる
          </button>
          <button className={SC01_css.register_button} onClick={registerPopup}>
            登録
          </button>
        </div>
      </div>
    );
  };



  //面接日時
  const formatJapaneseDate = (datetime) => {
    if (!datetime) return "";

    const date = new Date(datetime);
    const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

    const month = String(date.getMonth() + 1).padStart(2, "0"); // 月を2桁に
    const day = String(date.getDate()).padStart(2, "0"); // 日を2桁に
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${month}月${day}日（${dayOfWeek}）`;
  };
  const formatJapaneseTime = (datetime) => {
    if (!datetime) return "";

    const date = new Date(datetime);
    const hours = String(date.getHours()).padStart(2, "0"); // 時を2桁に
    const minutes = String(date.getMinutes()).padStart(2, "0"); // 分を2桁に

    return `${hours}時${minutes}分`;
  };
  const [dates, setDates] = useState({
    Studentlistfirst: "",
    Studentlistround: "",
    Studentlistfinal: "",
  });
  const [activeCalendar, setActiveCalendar] = useState(null);
  const toggleCalendar = (studentId, field) => {
    setActiveCalendar((prev) =>
      prev?.student_id === studentId && prev?.field === field
        ? null
        : { student_id: studentId, field }
    );
  };
  const setCalendar = async (studentId, phase, date, updated_at) => {
    try {
      const response = await fetch("https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/setCalendar", {
        method: "POST",
        headers: { Authorization: cookies?.token },
        body: JSON.stringify({
          student_id: studentId,
          phase_num: phase,
          date: date,
          recruit_year: cookies?.recruit_year,
          updated_at: updated_at,
          user: cookies?.user,
          function_id: function_id
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! status: ${response.error}`);
      }

      const json = await response.json();

      const key = Object.keys(students).find(key => students[key].student_id == studentId)
      const updatedata = [...students]
      updatedata[key] = json.student_data
      setStudents(updatedata || [])
      setPhaseData(json.phases || {});

      applyFilters(searchQuery, formData.date, selectedPhase, updatedata)

      setSelectedButtons((prevState) => {
        const newState = {
          ...prevState,
          [studentId]: {
            ...prevState[studentId],
            ["Studentsituation2"]: json.student_data?.result,
          },
        };

        return newState;
      });

      console.log("Success:", json);

    } catch (error) {
      console.error(error);
    }
  };
  const handleDateChange = (studentId, field, value) => {
    setFilteredData((prevData) =>
      prevData.map((student) =>
        student.student_id === studentId
          ? { ...student, [field]: value }
          : student
      )
    );
  };



  //月日時分(曜日)
  const formatDate = (date) => {
    if (date) {
      const dateObj = new Date(date);
      const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
      const dayOfWeek = weekdays[dateObj.getDay()];
      const datePart = `${(dateObj.getMonth() + 1).toString().padStart(2, "0")}月${dateObj.getDate().toString().padStart(2, "0")}日（${dayOfWeek}）`;
      const timePart = `${dateObj.getHours().toString().padStart(2, "0")}時${dateObj.getMinutes().toString().padStart(2, "0")}分`;
      return { datePart, timePart };
    } else {
      return null;
    }
  };


  // 学生状況
  const [selectedButtons, setSelectedButtons] = useState({});
  const handleButtonClick = async (student_id, phase, group, buttonIndex, updated_at) => {
    const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/rec2-status";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { Authorization: cookies?.token },
        body: JSON.stringify({
          student_id: student_id,
          phase_num: phase,
          recruit_year: cookies?.recruit_year,
          group: group,
          buttonIndex: buttonIndex,
          updated_at: updated_at,
          function_id: function_id,
          user: cookies?.user,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error === "Record has been updated by another process.") {
          alert(errorData.error)
          return;
        } else {
          throw new Error(`HTTP error! status: ${errorData.error}`);
        }
      } else {
        const result = await response.json();
        console.log("Update successful:", result);

        setSelectedButtons((prevState) => {
          const newState = {
            ...prevState,
            [student_id]: {
              ...prevState[student_id],
              [group]: buttonIndex,
            },
          };

          if (group === "Studentsituation2" && buttonIndex === 1) {
            newState[student_id].isDeclined = true; // 不合格フラグ
          } else if (group === "Studentsituation2") {
            newState[student_id].isDeclined = false;
          }

          return newState;
        });

        const key = Object.keys(students).find(key => students[key].student_id == student_id)
        const updatedata = [...students]
        updatedata[key] = result.student_data
        setStudents(updatedata || [])
        setPhaseData(result.phases || {});

        applyFilters(searchQuery, formData.date, selectedPhase, updatedata)
      }
    } catch (error) {
      console.error("Error sending button index to Lambda:", error);
    }
  };

  const handleNaitei = async (student_id, command, updated_at) => {
    const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/naitei";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { Authorization: cookies?.token },
        body: JSON.stringify({
          student_id: student_id,
          recruit_year: cookies?.recruit_year,
          command: command,
          updated_at: updated_at,
          function_id: function_id,
          user: cookies?.user,
        }),
      });

      console.log(response)

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error === "Record has been updated by another process.") {
          alert(errorData.error)
          return;
        } else {
          throw new Error(`HTTP error! status: ${errorData.error}`);
        }
      } else {
        const result = await response.json();
        console.log("Update successful:", result);

        setSelectedButtons((prevState) => {
          const newState = {
            ...prevState,
            [student_id]: {
              ...prevState[student_id],
              ["Studentsituation2"]: result.student_data?.result,
            },
          };

          console.log(newState[student_id]);
          return newState;
        });

        const key = Object.keys(students).find(key => students[key].student_id == student_id)
        const updatedata = [...students]
        updatedata[key] = result.student_data
        setStudents(updatedata || [])
        setPhaseData(result.phases || {});

        applyFilters(searchQuery, formData.date, selectedPhase, updatedata)
      }
    } catch (error) {
      console.error("Error sending button index to Lambda:", error);
    }
  };

  //年度切り替え
  const currentYear = new Date().getFullYear();
  const baseYear = cookies?.recruit_year || currentYear;
  const range = 3; // 範囲（-3～+3）
  const [selectedYear, setSelectedYear] = useState(baseYear);
  const years = Array.from({ length: range * 2 + 1 }, (_, i) => baseYear - range + i);
  const handleChange = (event) => {
    const newYear = parseInt(event.target.value, 10);
    setSelectedYear(newYear);
    setCookie("recruit_year", newYear);
    console.log("Selected year:", newYear);
    window.location.reload();
  };


  //アップロード
  const inputfile = useRef(null);
  async function selectFile(e) {
    e.preventDefault();
    const datafile = inputfile.current.files[0];
    if (datafile) {
      const reader = new FileReader()

      reader.onload = (event) => {
        const readerfile = event.target.result;

        Papa.parse(readerfile, {
          header: true,
          skipEmptyLines: true, // 空行をスキップ
          complete: async (result) => {
            const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/registStudents";
            await fetch(url, {
              method: "POST",
              headers: { Authorization: cookies?.token },
              body: JSON.stringify({
                tabledata: result.data,
                recruit_year: cookies?.recruit_year,
                filename: datafile?.name,
                user: cookies?.user,
                function_id: function_id,
              })
            })
              .then((res) => res.json()) // JSON形式に変換
              .then((data) => {
                if(!data.eventdata){
                  throw new Error
                }
                if (data.errorMesseage) {
                  alert(data?.errorMesseage);
                }
                else {
                  alert("アップロードに成功しました");
                  window.location.reload();
                }
              })
              .catch((error) => {
                console.log(error)
                alert("アップロードに失敗しました");
              }); // エラー発生時に出力
          },
          error: (error) => {
            console.error('Error while parsing CSV:', error);
          },
        });
      }
      reader.readAsText(datafile, 'Shift-JIS')
    }
  }



  //データフェッチ
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/selectStudent";

        let recruit_year = cookies?.recruit_year
        if (!recruit_year) {
          recruit_year = new Date().getFullYear()
        }

        const response = await fetch(url, {
          method: "POST",
          headers: { Authorization: cookies?.token },
          body: JSON.stringify({
            function_id: function_id,
            user: cookies?.user,
            recruit_year: recruit_year,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        setStudents(json["tabledata"]);
        setJobfairOptions(json["jobfairlist"]);
        setPhaseData(json["phases"] || {});

        const initialButtons = {};
        (json["tabledata"] || []).forEach((student) => {
          initialButtons[student.student_id] = {
            Studentsituation: student.jobfair_is_attend,
            Studentsituation1: student.resume_is_submit || 0,
            Studentsituation2: student.result,
          };
        });
        setSelectedButtons(initialButtons);

        const savedSearchQuery = cookies.searchQuery || "";
        const savedFormData = cookies.formData || { date: "" };
        const savedPhase = cookies.selectedPhase ? Number(cookies.selectedPhase) : 0;

        console.log("Cookies:", { savedSearchQuery, savedFormData, savedPhase });

        let filterData = [...json["tabledata"]];

        if (savedPhase > 0) {
          filterData = filterData.filter((student) => student.phase_num >= savedPhase);
          setSelectedPhase(savedPhase);
        }

        if (savedFormData.date) {
          filterData = filterData.filter((student) => student.jobfair_id == savedFormData.date);
          console.log(savedFormData.date)
          setFormData(savedFormData);
        }

        if (savedSearchQuery) {
          filterData = filterData.filter((student) => {
            const jobfair_date = formatDate(student.jobfair_date)
            const interview_date = formatDate(student.interview_date)
            const roundtable_date = formatDate(student.roundtable_date)
            const final_date = formatDate(student.final_date)
            return (
              student.name.includes(savedSearchQuery) ||
              student.university.includes(savedSearchQuery) ||
              student.email?.includes(savedSearchQuery) ||
              student.know_opportunity.includes(savedSearchQuery) ||
              student.furigana?.includes(savedSearchQuery) ||
              `${jobfair_date?.datePart} ${jobfair_date?.timePart}`.includes(savedSearchQuery) ||
              `${interview_date?.datePart} ${interview_date?.timePart}`.includes(savedSearchQuery) ||
              `${roundtable_date?.datePart} ${roundtable_date?.timePart}`.includes(savedSearchQuery) ||
              `${final_date?.datePart} ${final_date?.timePart}`.includes(savedSearchQuery)
            )
          });
          setSearchQuery(savedSearchQuery);
        }

        setFilteredData(filterData);

        console.log("Filtered Data:", filterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cookies?.token]);


  useEffect(() => {
    setCookie("searchQuery", searchQuery, { path: "/" });
    setCookie("formData", formData, { path: "/" });
    setCookie("selectedPhase", selectedPhase, { path: "/" });
    setCookie("currentPage", currentPage, { path: "/" });
  }, [searchQuery, formData, selectedPhase, currentPage, setCookie]);

  useEffect(() => {
    const clearCookiesOnReload = () => {
      setCookie("searchQuery", "", { path: "/", maxAge: 0 });
      setCookie("formData", JSON.stringify({ date: "" }), { path: "/", maxAge: 0 });
      setCookie("selectedPhase", "0", { path: "/", maxAge: 0 });
      setCookie("currentPage", "1", { path: "/", maxAge: 0 });
    };

    window.addEventListener("beforeunload", clearCookiesOnReload);

    return () => {
      window.removeEventListener("beforeunload", clearCookiesOnReload);
    };
  }, [setCookie]);


  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    applyFilters(query, formData.date, selectedPhase, students);
  };

  const handleDateSelect = (e) => {
    const selectedJobfairId = e.target.value;
    setFormData({ date: selectedJobfairId });
    applyFilters(searchQuery, selectedJobfairId, selectedPhase, students);
  };

  const applyFilters = (query, selectedJobfairId, selectedPhaseNum, student_data) => {
    let filtered = [...student_data];

    if (selectedPhaseNum > 0) {
      filtered = filtered.filter((student) => student.phase_num >= selectedPhaseNum);
    }
    if (selectedJobfairId) {
      filtered = filtered.filter((student) => student.jobfair_id == selectedJobfairId);
    }

    if (query) {
      filtered = filtered.filter((student) => {
        const jobfair_date = formatDate(student.jobfair_date)
        const interview_date = formatDate(student.interview_date)
        const roundtable_date = formatDate(student.roundtable_date)
        const final_date = formatDate(student.final_date)
        return (
          student.name.includes(query) ||
          student.university.includes(query) ||
          student.email?.includes(query) ||
          student.know_opportunity.includes(query) ||
          student.furigana?.includes(query) ||
          `${jobfair_date?.datePart} ${jobfair_date?.timePart}`.includes(query) ||
          `${interview_date?.datePart} ${interview_date?.timePart}`.includes(query) ||
          `${roundtable_date?.datePart} ${roundtable_date?.timePart}`.includes(query) ||
          `${final_date?.datePart} ${final_date?.timePart}`.includes(query)
        )
      });
    }

    setCurrentPage(1);
    setFilteredData(filtered);
  };


  return (
    <div className={SC01_css.App}>
      <header className={SC01_css.App_header}>
        <div className={SC01_css.screen_container}>
          <main>

            {/* フェーズ */}
            <div className={SC01_css.Phase} >
              {[...Array(7).keys()].map((phase) => (
                <div
                  key={phase}
                  className={SC01_css.phase_wrapper}
                  style={{
                    position: "relative",
                    marginBottom: "20px",
                  }}
                >
                  {selectedPhase === phase && (
                    <div className={SC01_css.siscoBear}>
                      <img src={SiscoBear} alt="Sisco Bear" />
                    </div>
                  )}

                  <button
                    onClick={() => handlePhaseChange(phase)}
                    disabled={selectedPhase === phase}
                    className={`${SC01_css.phase_button} ${selectedPhase === phase ? SC01_css.disabled : ""
                      }`}
                  >
                    <div>
                      {["エントリー", "説明会", "履歴書", "一次面接", "座談会", "最終面接", "内定"][
                        phase
                      ]}
                      <br />
                      {phaseData[phase]?.[`phase${phase}_count`] || 0} 人
                    </div>
                  </button>
                </div>
              ))}
            </div>


            {/* 件数 */}
            <div className={SC01_css.Number}>
              <p>件数: {filteredData.length} 人</p>
            </div>


            {/* 学生登録画面遷移ボタン */}
            <div className={SC01_css.Studentregister}>
              <button onClick={handleClick2}>学生登録</button>
            </div>


            {/* 年度切り替え */}
            <div className={SC01_css.Nendo}>
              <select id="year-select" value={selectedYear} onChange={handleChange} >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}年
                  </option>
                ))}
              </select>
            </div>


            {/* 説明会日時プルダウン */}
            <div className={SC01_css.Infor2}>
              <select
                id="date"
                name="date"
                className={SC01_css.short_input}
                value={formatDate.date ? formatDate.date : cookies.formData?.date}
                onChange={handleDateSelect}
              >
                <option value="">説明会日時</option>
                {jobfairOptions?.map((option) => {
                  const dateObj = new Date(option.date);
                  return (
                    <option key={option.jobfair_id} value={option.jobfair_id}>
                      <div>{formatJapaneseDate(dateObj)}</div>
                      <div>{formatJapaneseTime(dateObj)}</div>
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={SC01_css.header}>
              {/* 説明会日程 */}
              <div className={SC01_css.Inforsessionschedule}>
                <button onClick={handleClick}>
                  説明会日程
                </button>
              </div>

              {/* 検索 */}
              <div className={SC01_css.Search}>
                <input
                  type="search"
                  id="search"
                  placeholder="氏名/フリガナ/大学名/メール/当社を知ったきっかけ"
                  value={searchQuery}
                  onChange={handleInputChange}
                />
              </div>

              {/* アップロード */}
              <div className={SC01_css.Upload}>
                <form onSubmit={selectFile}>
                  <div><input type="file" accept="text/csv" ref={inputfile} /></div>
                  <div><button type="submit">アップロード</button></div>
                </form>
              </div>
            </div>


            {/* 一括登録 */}
            <div>
              {errorMessage && (
                <div className={SC01_css.error_message_container}>
                  <p className={SC01_css.error_message_text}>{errorMessage}</p>
                  <button className={SC01_css.close_error_button} onClick={closeErrorMessage}>
                    閉じる
                  </button>
                </div>
              )}
              <div className={SC01_css.Bulkregister} onClick={selectedPhase !== 2 ? openPopup : null}>
                <button disabled={selectedPhase === 2} className={selectedPhase === 2 ? SC01_css.disabled : ""}>
                  一括登録
                </button>
              </div>
              {isPopupOpen && (
                <div className={SC01_css.popup_overlay} onClick={closePopup}>
                  {getPopupContent()}
                </div>
              )}
            </div>


            {/* 学生一覧 */}
            <div className={SC01_css.table_container}>
              <table className={SC01_css.student_table}>
                <thead>
                  <tr>
                    <th className={SC01_css.table_header}>選択</th>
                    <th className={SC01_css.table_header}>氏名</th>
                    <th className={SC01_css.table_header}>フリガナ</th>
                    <th className={SC01_css.table_header}>大学</th>
                    <th className={SC01_css.table_header_phase}>説明会日時</th>
                    <th className={SC01_css.table_header_phase}>一次面接日時</th>
                    <th className={SC01_css.table_header_phase}>座談会日時</th>
                    <th className={SC01_css.table_header_phase}>最終面接日時</th>
                    <th className={SC01_css.table_header}>当社を知ったきっかけ</th>
                    <th className={SC01_css.table_header}>学生状況</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData?.map((student) => (
                    <tr
                      key={student.student_id}
                      className={`${SC01_css.table_row} ${student.recruit_is_decline === 1 || selectedButtons[student.student_id]?.Studentsituation2 === 1
                        ? SC01_css.decline_row
                        : ""
                        } ${student.recruit_is_decline === 1 || selectedButtons[student.student_id]?.Studentsituation2 === 1
                          ? SC01_css.disabled_row
                          : ""
                        }`}
                    >

                      <td
                        className={`${SC01_css.td} ${student.recruit_is_decline === 1 ? SC01_css.disabled_td : ""
                          }`}
                      >
                        <input
                          type="checkbox"
                          className={SC01_css.checkbox}
                          checked={selectedIds.includes(student.student_id)}
                          onChange={() => handleCheckboxChange(student.student_id)}
                          disabled={student.recruit_is_decline === 1 || selectedButtons[student.student_id]?.Studentsituation2 === 1}
                        />
                      </td>


                      <td
                        className={`${SC01_css.td} ${SC01_css.name} ${student.recruit_is_decline === 1 ? SC01_css.disabled_name : ""}`}
                        style={{
                          color: student.recruit_is_decline === 1 ? "gray" : "inherit",
                        }}
                      >
                        <Link to='/SC05' state={{ student_id: student?.student_id }}>
                          {student.name}
                        </Link>
                      </td>

                      <td className={SC01_css.td}>{student.furigana}</td>
                      <td className={SC01_css.td}>{student.university}</td>
                      <td className={SC01_css.td}>
                        {formatDate(student.jobfair_date)?.datePart}
                        <br />
                        {formatDate(student.jobfair_date)?.timePart}
                      </td>


                      <td className={SC01_css.td}>
                        {activeCalendar?.student_id === student.student_id &&
                          activeCalendar?.field === "interview_date" ? (
                          (student.phase_num == 2 || (student.phase_num == 3 && student.result !== 1)) &&
                            student.recruit_is_decline !== 1 ? (
                            <input
                              type="datetime-local"
                              step="900"
                              value={student.interview_date || ""}
                              onChange={(e) =>
                                handleDateChange(
                                  student.student_id,
                                  "interview_date",
                                  e.target.value
                                )
                              }
                              onBlur={(e) => {
                                const newDate = e.target.value;

                                if (newDate || student.interview_updated_at) {
                                  setActiveCalendar(null);
                                  setCalendar(
                                    student.student_id,
                                    3,
                                    newDate,
                                    student.interview_updated_at
                                  );
                                } else {
                                  setActiveCalendar(null);
                                  console.warn(
                                    "日程が入力されていません。データベースに保存されませんでした。"
                                  );
                                }
                              }}
                              autoFocus
                            />
                          ) : (
                            <div className={`${SC01_css.calendar_disabled}`}></div>
                          )
                        ) : (
                          <div
                            onClick={() => {
                              if (
                                (student.phase_num == 2 || (student.phase_num == 3 && student.result !== 1)) &&
                                student.recruit_is_decline !== 1
                              ) {
                                toggleCalendar(student.student_id, "interview_date");
                              }
                            }}
                            className={`${SC01_css.calendar_placeholder} ${(student.phase_num == 2 || (student.phase_num == 3 && student.result !== 1)) &&
                              student.recruit_is_decline !== 1
                              ? SC01_css.abled
                              : SC01_css.disabled
                              }`}
                          >
                            {student.interview_date
                              ? formatJapaneseDate(student.interview_date)
                              : ""}
                            <br />
                            {student.interview_date
                              ? formatJapaneseTime(student.interview_date)
                              : ""}
                          </div>
                        )}
                      </td>

                      <td className={SC01_css.td}>
                        {activeCalendar?.student_id === student.student_id &&
                          activeCalendar?.field === "roundtable_date" ? (
                          student.recruit_is_decline !== 1
                            && ((student.phase_num == 3 && student.result === 0) || (student.phase_num == 4 && student.result !== 1))
                            ? (
                              <input
                                type="datetime-local"
                                step="900"
                                value={student.roundtable_date || ""}
                                onChange={(e) =>
                                  handleDateChange(
                                    student.student_id,
                                    "roundtable_date",
                                    e.target.value
                                  )
                                }
                                onBlur={(e) => {
                                  const newDate = e.target.value;

                                  if (newDate || student.roundtable_updated_at) {
                                    setActiveCalendar(null);
                                    setCalendar(
                                      student.student_id,
                                      4,
                                      newDate,
                                      student.roundtable_updated_at
                                    );
                                  } else {
                                    setActiveCalendar(null);
                                    console.warn(
                                      "日程が入力されていません。データベースに保存されませんでした。"
                                    );
                                  }
                                }}
                                autoFocus
                              />
                            ) : (
                              <div
                                className={`${SC01_css.calendar_disabled} ${SC01_css.disabled}`}
                              ></div>
                            )
                        ) : (
                          <div
                            onClick={() => {
                              if (
                                student.recruit_is_decline !== 1
                                && ((student.phase_num == 3 && student.result === 0) || (student.phase_num == 4 && student.result !== 1))
                              ) {
                                toggleCalendar(student.student_id, "roundtable_date");
                              }
                            }}
                            className={`${SC01_css.calendar_placeholder} ${student.recruit_is_decline !== 1
                              && ((student.phase_num == 3 && student.result === 0) || (student.phase_num == 4 && student.result !== 1))
                              ? SC01_css.abled
                              : SC01_css.disabled
                              }`}
                          >
                            {student.roundtable_date
                              ? formatJapaneseDate(student.roundtable_date)
                              : ""}
                            <br />
                            {student.roundtable_date
                              ? formatJapaneseTime(student.roundtable_date)
                              : ""}
                          </div>
                        )}
                      </td>

                      <td className={SC01_css.td}>
                        {activeCalendar?.student_id === student.student_id &&
                          activeCalendar?.field === "final_date" ? (
                          student.recruit_is_decline !== 1
                            && ((student.phase_num == 4 && student.result === 0) || (student.phase_num == 5 && student.result !== 1))
                            ? (
                              <input
                                type="datetime-local"
                                step="900"
                                value={student.final_date || ""}
                                onChange={(e) =>
                                  handleDateChange(
                                    student.student_id,
                                    "final_date",
                                    e.target.value
                                  )
                                }
                                onBlur={(e) => {
                                  const newDate = e.target.value;

                                  if (newDate || student.final_updated_at) {
                                    setActiveCalendar(null);
                                    setCalendar(
                                      student.student_id,
                                      5,
                                      newDate,
                                      student.final_updated_at
                                    );
                                  } else {
                                    setActiveCalendar(null);
                                    console.warn(
                                      "日程が入力されていません。データベースに保存されませんでした。"
                                    );
                                  }
                                }}
                                autoFocus
                              />
                            ) : (
                              <div
                                className={`${SC01_css.calendar_disabled} ${SC01_css.disabled}`}
                              ></div>
                            )
                        ) : (
                          <div
                            onClick={() => {
                              if (
                                student.recruit_is_decline !== 1
                                && ((student.phase_num == 4 && student.result === 0) || (student.phase_num == 5 && student.result !== 1))
                              ) {
                                toggleCalendar(student.student_id, "final_date");
                              }
                            }}
                            className={`${SC01_css.calendar_placeholder} ${student.recruit_is_decline !== 1
                              && ((student.phase_num == 4 && student.result === 0) || (student.phase_num == 5 && student.result !== 1))
                              ? SC01_css.abled
                              : SC01_css.disabled
                              }`}
                          >
                            {student.final_date
                              ? formatJapaneseDate(student.final_date)
                              : ""}
                            <br />
                            {student.final_date
                              ? formatJapaneseTime(student.final_date)
                              : ""}
                          </div>
                        )}
                      </td>

                      <td className={SC01_css.td}>{student.know_opportunity}</td>
                      <td className={SC01_css.td}>
                        {(
                          <>
                            {
                            student.recruit_is_decline === 1 ? (
                              <div className={SC01_css.Studentsituation_label}>辞退</div>
                            ) : student.phase_num === 0 || (student.phase_num === 1 && (student.jobfair_is_attend !== 0 || student.jobfair_is_attend === null)) ? (
                              <div>
                                <div className={SC01_css.Studentsituation_label}>説明会</div>
                                <div className={SC01_css.Studentsituation}>
                                  <button
                                    className={
                                      selectedButtons[student.student_id]?.Studentsituation === 0 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleButtonClick(
                                        student.student_id,
                                        student.phase_num,
                                        "Studentsituation",
                                        0,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    出席
                                  </button>
                                  <button
                                    className={
                                      selectedButtons[student.student_id]?.Studentsituation === 1 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleButtonClick(
                                        student.student_id,
                                        student.phase_num,
                                        "Studentsituation",
                                        1,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    欠席
                                  </button>
                                  <button
                                    className={
                                      selectedButtons[student.student_id]?.Studentsituation === 2 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleButtonClick(
                                        student.student_id,
                                        student.phase_num,
                                        "Studentsituation",
                                        2,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    キャンセル
                                  </button>
                                </div>
                              </div>
                            ) : student.phase_num === 1 || (student.phase_num === 2 && (student.resume_is_submit !== null || student.resume_is_submit === null)) ? (
                              <div>
                                <div className={SC01_css.Studentsituation_label}>履歴書</div>
                                <div className={SC01_css.Studentsituation1}>
                                  <button
                                    className={
                                      selectedButtons[student.student_id]?.Studentsituation1 === 1 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleButtonClick(
                                        student.student_id,
                                        student.phase_num,
                                        "Studentsituation1",
                                        1,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    提出
                                  </button>
                                  <button
                                    className={
                                      selectedButtons[student.student_id]?.Studentsituation1 === 0
                                        ? SC01_css.active
                                        : ""
                                    }
                                    onClick={() =>
                                      handleButtonClick(
                                        student.student_id,
                                        student.phase_num,
                                        "Studentsituation1",
                                        0,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    未提出
                                  </button>
                                </div>
                              </div>
                            ) : student.phase_num === 3 ? (
                              <div>
                                <div className={SC01_css.Studentsituation_label}>一次面接</div>
                                <div className={SC01_css.Studentsituation2}>
                                  <button
                                    className={
                                      selectedButtons[student.student_id]?.Studentsituation2 === 0 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleButtonClick(
                                        student.student_id,
                                        student.phase_num,
                                        "Studentsituation2",
                                        0,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    合格
                                  </button>
                                  <button
                                    className={
                                      selectedButtons[student.student_id]?.Studentsituation2 === 1 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleButtonClick(
                                        student.student_id,
                                        student.phase_num,
                                        "Studentsituation2",
                                        1,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    不合格
                                  </button>
                                  <button
                                    className={
                                      selectedButtons[student.student_id]?.Studentsituation2 === 2 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleButtonClick(
                                        student.student_id,
                                        student.phase_num,
                                        "Studentsituation2",
                                        2,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    未定
                                  </button>
                                </div>
                              </div>
                            ) : student.phase_num === 4 ? (
                              <div>
                                <div className={SC01_css.Studentsituation_label}>座談会</div>
                                <div className={SC01_css.Studentsituation2}>
                                  <button
                                    className={
                                      selectedButtons[student.student_id]?.Studentsituation2 === 0 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleButtonClick(
                                        student.student_id,
                                        student.phase_num,
                                        "Studentsituation2",
                                        0,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    合格
                                  </button>
                                  <button
                                    className={
                                      selectedButtons[student.student_id]?.Studentsituation2 === 1 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleButtonClick(
                                        student.student_id,
                                        student.phase_num,
                                        "Studentsituation2",
                                        1,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    不合格
                                  </button>
                                  <button
                                    className={
                                      selectedButtons[student.student_id]?.Studentsituation2 === 2 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleButtonClick(
                                        student.student_id,
                                        student.phase_num,
                                        "Studentsituation2",
                                        2,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    未定
                                  </button>
                                </div>
                              </div>
                            ) : (student.phase_num === 5 && selectedButtons[student.student_id]?.Studentsituation2 !== 0) ? (
                              <div>
                                <div className={SC01_css.Studentsituation_label}>最終面接</div>
                                <div className={SC01_css.Studentsituation2}>
                                  <button
                                    className={
                                      selectedButtons[student.student_id]?.Studentsituation2 === 0 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleButtonClick(
                                        student.student_id,
                                        student.phase_num,
                                        "Studentsituation2",
                                        0,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    合格
                                  </button>
                                  <button
                                    className={
                                      selectedButtons[student.student_id]?.Studentsituation2 === 1 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleButtonClick(
                                        student.student_id,
                                        student.phase_num,
                                        "Studentsituation2",
                                        1,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    不合格
                                  </button>
                                  <button
                                    className={
                                      selectedButtons[student.student_id]?.Studentsituation2 === 2 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleButtonClick(
                                        student.student_id,
                                        student.phase_num,
                                        "Studentsituation2",
                                        2,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    未定
                                  </button>
                                </div>
                              </div>
                            ) : student.phase_num === 6 || (student.phase_num === 5 && selectedButtons[student.student_id]?.Studentsituation2 === 0) ? (
                              <div>
                                <div className={SC01_css.Studentsituation_label}>内定</div>
                                <div className={SC01_css.Studentsituation1}>
                                  <button
                                    className={
                                      student.phase_num === 6 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleNaitei(
                                        student.student_id,
                                        1,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    承諾
                                  </button>
                                  <button
                                    className={
                                      student.phase_num === 5 ? SC01_css.active : ""
                                    }
                                    onClick={() =>
                                      handleNaitei(
                                        student.student_id,
                                        2,
                                        student.updated_at
                                      )
                                    }
                                    disabled={student.recruit_is_decline === 1}
                                  >
                                    未承諾
                                  </button>
                                </div>
                              </div>
                            ) : null}
                          </>
                        )}
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>


            {/* ページネーション */}
            <div className={SC01_css.Pagination}>
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={SC01_css.page_button}
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`${SC01_css.page_button} ${currentPage === index + 1 ? SC01_css.active : ""}`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={SC01_css.page_button}
              >
                &gt;
              </button>
            </div>

          </main>
        </div>
      </header>
    </div >


  );
}


export default SC01;
