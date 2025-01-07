import '../css/SC01.css';
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SiscoBear from '../ui-components/siscobear.png'; // 画像をインポート
import { useCookies } from "react-cookie";
import Papa from 'papaparse';

function SC01() {
  const [data, setData] = useState([]);
  const username = 'arisa';
  const functionid = 'SC01';

  const handleRowClick = (studentId) => {
    navigate(`/SC05/${studentId}`);
  };

  //Cookies
  const [cookies, setCookie] = useCookies();

  //Studentlist
  const [selectedIds, setSelectedIds] = useState([]);



  //checkbok
  const handleCheckboxChange = (studentId) => {
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(studentId)) {
        return prevSelectedIds.filter((id) => id !== studentId);
      } else {
        return [...prevSelectedIds, studentId];
      }
    });
  };

  //AppRoute
  const navigate = useNavigate();
  const handleClick = () => { navigate("/SC03"); };
  const handleClick2 = () => { navigate("/SC04"); };
  const handleClick3 = () => { navigate("/SC05"); };

  // Phase
  const [phaseData, setPhaseData] = useState({});
  const [selectedPhase, setSelectedPhase] = useState(0); // フェーズの選択状態を管理
  const [filteredData, setFilteredData] = useState([]);
  const [totalPhaseCount, setTotalPhaseCount] = useState(0);
  const handlePhaseChange = (phase) => {
    setSelectedPhase(phase); // フェーズを更新
    if (phase === 0) {
      setFilteredData(data); // 全データ表示
    } else {
      setFilteredData(data.filter((student) => student.phase_num >= phase)); // フィルタリング
    }
    const totalCount =
      phaseData[phase]?.[`phase${phase}_count`] || 0; // 指定フェーズの人数
    setTotalPhaseCount(totalCount);
  };



  //Day
  const formatJapaneseDate = (datetime) => {
    if (!datetime) return "";

    const date = new Date(datetime);
    const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

    const month = date.getMonth() + 1; // 月 (0-11なので+1)
    const day = date.getDate();
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${month}月${day}日 (${dayOfWeek})`;
  };
  const formatJapaneseTime = (datetime) => {
    if (!datetime) return "";

    const date = new Date(datetime);
    const hours = date.getHours(); // 時
    const minutes = date.getMinutes(); // 分

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          student_id: studentId,
          phase_num: phase,
          date: date,
          updated_at: updated_at,
          user: username,
          function_id: functionid



        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log("Success:", json);


    } catch (error) {
      console.error("Error in setCalendar:", error);
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


  //Infor
  const [jobfairOptions, setJobfairOptions] = useState([]);
  const [formData, setFormData] = useState({ date: "" });
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchJobfairDates = async () => {
      try {
        const response = await fetch(
          "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/selectStudent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              recruit_year: cookies?.recruit_year,
            }),
          });

        const json = await response.json();
        console.log("Fetched Data:", json);
        setStudents(json["tabledata"]);
        await setJobfairOptions(json['jobfairlist']);

      } catch (error) {
        console.log(error);
      }
    };
    fetchJobfairDates();
  }, []);
  const handleDateSelect = (e) => {
    const selectedJobfairId = e.target.value;
    console.log(selectedJobfairId);
    setFormData({ date: selectedJobfairId });

    let filtered = students;

    if (selectedJobfairId) {
      filtered = filtered.filter(
        (student) => student.jobfair_id == selectedJobfairId
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((student) =>
        student.name.includes(searchQuery) ||
        student.university.includes(searchQuery) ||
        student.email?.includes(searchQuery) ||
        student.know_opportunity.includes(searchQuery)
      );
    }
    setFilteredData(filtered);
  };



  // Studentstatus
  const [selectedButtons, setSelectedButtons] = useState({});
  const fetchData = async () => {
    try {
      const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/selectStudent";

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          function_id: functionid,
          user: username,
          recruit_year: cookies.recruit_year,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log("Fetched Data:", json);


      setData(json["tabledata"] || []);
      setFilteredData(json["tabledata"] || []);
      setPhaseData(json["phases"] || {});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [functionid, username]);

  const handleButtonClick = async (studentId, phase, group, buttonIndex, updated_at) => {

    const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/rec2-status";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student_id: studentId,
          phase_num: phase,
          group: group,
          buttonIndex: buttonIndex,
          updated_at: updated_at,
          function_id: functionid,
          user: username,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error === "Record has been updated by another process.") {
          alert("他のユーザーによってデータが変更されました。最新の情報を再取得してください。");
          await fetchData();
          return;
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } else {
        const result = await response.json();
        console.log("Update successful:", result);

        setSelectedButtons((prevState) => ({
          ...prevState,
          [studentId]: {
            ...prevState[studentId],
            [group]: buttonIndex,
          },
        }));

        await fetchData();
      }
    } catch (error) {
      console.error("Error sending button index to Lambda:", error);
    }
  };





  //Page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage); //全体の長さを割る
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };//前のページに戻る
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };//次のページへ進む



  //Nendo
  const baseYear = cookies.recruit_year;
  const range = 3; // 範囲（-2～+3）
  const [selectedYear, setSelectedYear] = useState(baseYear);

  const years = Array.from({ length: range * 2 + 1 }, (_, i) => baseYear - range + i);

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
    setCookie("recruit_year", event.target.value);
    console.log(cookies.recruit_year)
    window.location.reload();
  };


  //Search
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    let filtered = students;

    if (formData.date) {
      filtered = filtered.filter(
        (student) => student.jobfair_id == formData.date
      );
    }

    if (query) {
      filtered = filtered.filter((student) =>
        student.name.includes(query) ||
        student.university.includes(query) ||
        student.email?.includes(query) ||
        student.know_opportunity.includes(query)
      );
    }

    setFilteredData(filtered);
  };



  //Popup
  const [isPopupOpen, setIsPopupOpen] = useState(null);
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const registerPopup = () => {
    setIsPopupOpen(false);
  };


  const formatDate = (date) => {
    if (date) {
      const dateObj = new Date(date);
      const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
      const dayOfWeek = weekdays[dateObj.getDay()];
      const datePart = `${dateObj.getMonth() + 1}月${dateObj.getDate()}日（${dayOfWeek}）`;
      const timePart = `${dateObj.getHours()}時${dateObj.getMinutes()}分`;
      return { datePart, timePart };
    } else {
      return null;
    }
  };





  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/selectStudent";

        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            function_id: functionid,
            user: username,
            recruit_year: cookies.recruit_year
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        console.log("Fetched Data:", json); // デバッグ用

        const initialButtons = {};
        (json["tabledata"] || []).forEach((student) => {
          initialButtons[student.student_id] = {
            Studentsituation: student.jobfair_is_attend || 0,
            Studentsituation1: student.resume_is_submit || 0,
            Studentsituation2: student.result
          }
        });
        setSelectedButtons(initialButtons);

        setData(json["tabledata"] || []); // テーブルデータ
        setFilteredData(json["tabledata"] || []); // 初期表示用
        setPhaseData(json["phases"] || {}); // フェーズデータ
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [functionid, username]);

  const inputfile = useRef(null);
  async function selectFile(e) {
    e.preventDefault();
    const datafile = inputfile.current.files[0];
    if (datafile) {
      const reader = new FileReader()

      reader.onload = (event) => {
        const readerfile = event.target.result;

        Papa.parse(readerfile, {
          header: true, // CSVのヘッダー行をキーとして扱う
          skipEmptyLines: true, // 空行をスキップ
          complete: (result) => {
            const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/registStudents";
            fetch(url, {
              method: "POST",
              headers: { Authorization: cookies.token },
              body: JSON.stringify({
                tabledata: result.data,
                recruit_year: cookies.recruit_year,
                filename: datafile?.name,
                user: cookies.user,
                functionid: 'SC01',
              })
            })
              .then((res) => res.json()) // JSON形式に変換
              .then((data) => {
                console.log(data);
              })
              .catch((error) => console.log(error)); // エラー発生時に出力
          },
          error: (error) => {
            console.error('Error while parsing CSV:', error);
          },
        });
      }
      reader.readAsText(datafile, 'Shift-JIS')
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <main>
          <div className="Phase" >
            {[...Array(7).keys()].map((phase) => (
              <div
                key={phase}
                className="phase-wrapper"
                style={{
                  position: "relative",
                  marginBottom: "20px",
                }}
              >
                {selectedPhase === phase && (
                  <div className="siscoBear">
                    <img src={SiscoBear} alt="Sisco Bear" />
                  </div>
                )}
                <button
                  onClick={() => handlePhaseChange(phase)}
                  disabled={selectedPhase === phase}
                  className={`phase-button ${selectedPhase === phase ? "disabled" : ""
                    }`}
                >
                  <div>
                    {["エントリー", "説明会", "履歴書提出", "一次面接", "座談会", "最終面接", "内定者"][
                      phase
                    ]}
                    <br />
                    {phaseData[phase]?.[`phase${phase}_count`] || 0} 人
                  </div>
                </button>
              </div>
            ))}
          </div>

          <div className="Number">
            <p>件数: {filteredData.length} 人</p>
          </div>


          <div className="Studentregister">
            <button onClick={handleClick2}>学生登録</button>
          </div>


          <div className="Nendo">
            <select id="year-select" value={selectedYear} onChange={handleChange} >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}年
                </option>
              ))}
            </select>
          </div>

          <div className="Infor2">
            <select
              id="date"
              name="date"
              className="short-input"
              value={formatDate.date}
              onChange={handleDateSelect}
            >
              <option value="">説明会日時</option>
              {jobfairOptions?.map((option) => {
                const dateObj = new Date(option.date);
                const formattedDate = `${dateObj.getMonth() + 1
                  }月${dateObj.getDate()}日${dateObj.getHours()}時${dateObj.getMinutes()}分`;

                return (
                  <option key={option.jobfair_id} value={option.jobfair_id}>
                    {formattedDate}
                  </option>
                );
              })}
            </select>
          </div>



          <div className="Upload">
            <form onSubmit={selectFile}>
              <input type="file" accept="text/csv" ref={inputfile} />
              <button type="submit">アップロード</button>
            </form>
          </div>

          <div className="Search">
            <input
              type="search"
              id="search"
              placeholder="氏名/大学名/メール/当社を知ったきっかけ"
              value={searchQuery}
              onChange={handleInputChange}
            />
          </div>

          <div className="Inforsessionschedule">
            <button onClick={handleClick}>
              説明会日程
            </button>
          </div>


          <div>
            <div className="Bulkregister" onClick={openPopup}>
              <button >一括登録</button>
            </div>
            {isPopupOpen && (
              <div className="popup-overlay" onClick={closePopup}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                  <h2>ポップアップのタイトル</h2>
                  <p>ここにポップアップの内容を記述します。</p>
                  <button onClick={closePopup}>閉じる</button>
                  <button onClick={registerPopup}>登録</button>
                </div>
              </div>
            )}
          </div>

          <div className="table-container">
            <table className="student-table">
              <thead>
                <tr>
                  <th colSpan="10" className="table-title">学生一覧</th>
                </tr>
                <tr>
                  <th>選択</th>
                  <th>氏名</th>
                  <th>フリガナ</th>
                  <th>大学</th>
                  <th>説明会日時</th>
                  <th>一次面接日時</th>
                  <th>座談会日時</th>
                  <th>最終面接日時</th>
                  <th>当社を知ったきっかけ</th>
                  <th>学生状況</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((student) => (
                  <tr key={student.student_id}>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedIds.includes(student.student_id)}
                        onChange={() => handleCheckboxChange(student.student_id)}
                      />
                    </td>
                    <td
                      className="name"
                      onClick={() => handleRowClick(student.student_id)}
                      style={{ cursor: "pointer" }}
                    >
                      {student.name}
                    </td>

                    <td>{student.furigana}</td>
                    <td>{student.university}</td>
                    <td>
                      {formatDate(student.jobfair_date)?.datePart}
                      <br />
                      {formatDate(student.jobfair_date)?.timePart}
                    </td>



                    <td>
                      {activeCalendar?.student_id === student.student_id &&
                        activeCalendar?.field === "interview_date" ? (
                        selectedButtons[student.student_id]?.Studentsituation1 === 1 &&
                          student.phase_num >= 1 ? (
                          <input
                            type="datetime-local"
                            value={student.interview_date || ""}
                            onChange={(e) =>
                              handleDateChange(
                                student.student_id,
                                "interview_date",
                                e.target.value
                              )
                            }
                            onBlur={(e) => {
                              setActiveCalendar(null);
                              setCalendar(
                                student.student_id,
                                student.phase_num,
                                e.target.value,
                                student.interview_updated_at
                              );
                            }}
                            autoFocus
                          />
                        ) : (
                          <div
                            className="calendar-disabled"
                            style={{ color: "gray", cursor: "not-allowed" }}
                          >
                          </div>
                        )
                      ) : (
                        <div
                          onClick={() => {
                            if (
                              selectedButtons[student.student_id]?.Studentsituation1 === 1 &&
                              student.phase_num >= 1
                            ) {
                              toggleCalendar(student.student_id, "interview_date");
                            }
                          }}
                          className={`calendar-placeholder ${selectedButtons[student.student_id]?.Studentsituation1 !== 1 ||
                            student.phase_num < 1
                            ? "disabled"
                            : ""
                            }`}
                          style={{
                            color:
                              selectedButtons[student.student_id]?.Studentsituation1 !== 1 ||
                                student.phase_num < 1
                                ? "gray"
                                : "inherit",
                            cursor:
                              selectedButtons[student.student_id]?.Studentsituation1 !== 1 ||
                                student.phase_num < 1
                                ? "not-allowed"
                                : "pointer",
                          }}
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




                    <td>
                      {activeCalendar?.student_id === student.student_id &&
                        activeCalendar?.field === "roundtable_date" ? (
                        selectedButtons[student.student_id]?.Studentsituation2 === 0 &&
                          student.phase_num >= 3 ? (
                          <input
                            type="datetime-local"
                            value={student.roundtable_date || ""}
                            onChange={(e) =>
                              handleDateChange(
                                student.student_id,
                                "roundtable_date",
                                e.target.value
                              )
                            }
                            onBlur={(e) => {
                              setActiveCalendar(null);
                              setCalendar(
                                student.student_id,
                                student.phase_num,
                                e.target.value,
                                student.roundtable_updated_at
                              );
                            }}
                            autoFocus
                          />
                        ) : (
                          <div
                            className="calendar-disabled"
                            style={{ color: "gray", cursor: "not-allowed" }}
                          >
                          </div>
                        )
                      ) : (
                        <div
                          onClick={() => {
                            if (
                              selectedButtons[student.student_id]?.Studentsituation2 === 0 &&
                              student.phase_num >= 3
                            ) {
                              toggleCalendar(student.student_id, "roundtable_date");
                            }
                          }}
                          className={`calendar-placeholder ${selectedButtons[student.student_id]?.Studentsituation2 !== 0 ||
                            student.phase_num < 3
                            ? "disabled"
                            : ""
                            }`}
                          style={{
                            color:
                              selectedButtons[student.student_id]?.Studentsituation2 !== 0 ||
                                student.phase_num < 3
                                ? "gray"
                                : "inherit",
                            cursor:
                              selectedButtons[student.student_id]?.Studentsituation2 !== 0 ||
                                student.phase_num < 3
                                ? "not-allowed"
                                : "pointer",
                          }}
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



                    <td>
                      {activeCalendar?.student_id === student.student_id &&
                        activeCalendar?.field === "final_date" ? (
                        selectedButtons[student.student_id]?.Studentsituation2 === 0 &&
                          student.phase_num >= 4 ? (
                          <input
                            type="datetime-local"
                            value={student.final_date || ""}
                            onChange={(e) =>
                              handleDateChange(
                                student.student_id,
                                "final_date",
                                e.target.value
                              )
                            }
                            onBlur={(e) => {
                              setActiveCalendar(null);
                              setCalendar(
                                student.student_id,
                                student.phase_num,
                                e.target.value,
                                student.final_updated_at
                              );
                            }}
                            autoFocus
                          />
                        ) : (
                          <div
                            className="calendar-disabled"
                            style={{ color: "gray", cursor: "not-allowed" }}
                          >
                          </div>
                        )
                      ) : (
                        <div
                          onClick={() => {
                            if (
                              selectedButtons[student.student_id]?.Studentsituation2 === 0 &&
                              student.phase_num >= 4
                            ) {
                              toggleCalendar(student.student_id, "final_date");
                            }
                          }}
                          className={`calendar-placeholder ${selectedButtons[student.student_id]?.Studentsituation2 !== 0 ||
                            student.phase_num < 4
                            ? "disabled"
                            : ""
                            }`}
                          style={{
                            color:
                              selectedButtons[student.student_id]?.Studentsituation2 !== 0 ||
                                student.phase_num < 4
                                ? "gray"
                                : "inherit",
                            cursor:
                              selectedButtons[student.student_id]?.Studentsituation2 !== 0 ||
                                student.phase_num < 4
                                ? "not-allowed"
                                : "pointer",
                          }}
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



                    <td>{student.know_opportunity}</td>
                    <td>
                      {(student.phase_num === 0) && (
                        <div>
                          <p className="Studentsituation-label">説明会</p>
                          <div className="Studentsituation">
                            <button
                              className={
                                selectedButtons[student.student_id]?.Studentsituation === 0 ? "active" : ""}
                              onClick={() =>
                                handleButtonClick(
                                  student.student_id,
                                  student.phase_num,
                                  "Studentsituation",
                                  0,
                                  student.updated_at)
                              }
                            >
                              出席
                            </button>
                            <button
                              className={
                                selectedButtons[student.student_id]?.Studentsituation === 1 ? "active" : ""}
                              onClick={() =>
                                handleButtonClick(
                                  student.student_id,
                                  student.phase_num,
                                  "Studentsituation",
                                  1,
                                  student.updated_at)
                              }
                            >
                              欠席
                            </button>
                            <button
                              className={
                                selectedButtons[student.student_id]?.Studentsituation === 2 ? "active" : ""}
                              onClick={() =>
                                handleButtonClick(
                                  student.student_id,
                                  student.phase_num,
                                  "Studentsituation",
                                  2,
                                  student.updated_at)
                              }
                            >
                              キャンセル
                            </button>
                          </div>
                        </div>
                      )}

                      {(student.phase_num === 1 || student.phase_num === 2) && (
                        <div>
                          <p className="Studentsituation-label">履歴書</p>
                          <div className="Studentsituation1">
                            <button
                              className={
                                selectedButtons[student.student_id]?.Studentsituation1 === 1 ? "active" : ""}
                              onClick={() =>
                                handleButtonClick(
                                  student.student_id,
                                  student.phase_num,
                                  "Studentsituation1",
                                  1,
                                  student.updated_at)
                              }
                            >
                              提出
                            </button>
                            <button
                              className={
                                selectedButtons[student.student_id]?.Studentsituation1 === 0
                                  ? "active"
                                  : ""
                              }
                              onClick={() =>
                                handleButtonClick(
                                  student.student_id,
                                  student.phase_num,
                                  "Studentsituation1",
                                  0,
                                  student.updated_at)
                              }
                            >
                              未提出
                            </button>
                          </div>
                        </div>
                      )}



                      {(student.phase_num === 3) && (
                        <div>
                          <p className="Studentsituation-label">一次面接</p>
                          <div className="Studentsituation2">
                            <button
                              className={
                                selectedButtons[student.student_id]?.Studentsituation2 === 0
                                  ? "active"
                                  : ""
                              }
                              onClick={() =>
                                handleButtonClick(
                                  student.student_id,
                                  student.phase_num,
                                  "Studentsituation2",
                                  0,
                                  student.updated_at)
                              }
                            >
                              合格
                            </button>
                            <button
                              className={
                                selectedButtons[student.student_id]?.Studentsituation2 === 1
                                  ? "active"
                                  : ""
                              }
                              onClick={() =>
                                handleButtonClick(
                                  student.student_id,
                                  student.phase_num,
                                  "Studentsituation2",
                                  1,
                                  student.updated_at)
                              }
                            >
                              不合格
                            </button>
                            <button
                              className={
                                selectedButtons[student.student_id]?.Studentsituation2 === 2
                                  ? "active"
                                  : ""
                              }
                              onClick={() =>
                                handleButtonClick(
                                  student.student_id,
                                  student.phase_num,
                                  "Studentsituation2",
                                  2,
                                  student.updated_at)
                              }
                            >
                              未定
                            </button>
                          </div>
                        </div>
                      )}
                      {(student.phase_num === 4) && (
                        <div>
                          <p className="Studentsituation-label">座談会</p>
                          <div className="Studentsituation2">
                            <button
                              className={
                                selectedButtons[student.student_id]?.Studentsituation2 === 0
                                  ? "active"
                                  : ""
                              }
                              onClick={() =>
                                handleButtonClick(
                                  student.student_id,
                                  student.phase_num,
                                  "Studentsituation2",
                                  0,
                                  student.updated_at)
                              }
                            >
                              合格
                            </button>
                            <button
                              className={
                                selectedButtons[student.student_id]?.Studentsituation2 === 1
                                  ? "active"
                                  : ""
                              }
                              onClick={() =>
                                handleButtonClick(
                                  student.student_id,
                                  student.phase_num,
                                  "Studentsituation2",
                                  1,
                                  student.updated_at)
                              }
                            >
                              不合格
                            </button>
                            <button
                              className={
                                selectedButtons[student.student_id]?.Studentsituation2 === 2
                                  ? "active"
                                  : ""
                              }
                              onClick={() =>
                                handleButtonClick(
                                  student.student_id,
                                  student.phase_num,
                                  "Studentsituation2",
                                  2,
                                  student.updated_at)
                              }
                            >
                              未定
                            </button>
                          </div>
                        </div>
                      )}
                      {(student.phase_num === 5) && (
                        <div>
                          <p className="Studentsituation-label">最終面接</p>
                          <div className="Studentsituation2">
                            <button
                              className={
                                selectedButtons[student.student_id]?.Studentsituation2 === 0
                                  ? "active"
                                  : ""
                              }
                              onClick={() =>
                                handleButtonClick(
                                  student.student_id,
                                  student.phase_num,
                                  "Studentsituation2",
                                  0,
                                  student.updated_at)
                              }
                            >
                              合格
                            </button>
                            <button
                              className={
                                selectedButtons[student.student_id]?.Studentsituation2 === 1
                                  ? "active"
                                  : ""
                              }
                              onClick={() =>
                                handleButtonClick(
                                  student.student_id,
                                  student.phase_num,
                                  "Studentsituation2",
                                  1,
                                  student.updated_at)
                              }
                            >
                              不合格
                            </button>
                            <button
                              className={
                                selectedButtons[student.student_id]?.Studentsituation2 === 2
                                  ? "active"
                                  : ""
                              }
                              onClick={() =>
                                handleButtonClick(
                                  student.student_id,
                                  student.phase_num,
                                  "Studentsituation2",
                                  2,
                                  student.updated_at)
                              }
                            >
                              未定
                            </button>
                          </div>
                        </div>
                      )}

                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          <div className="Pagination">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="page-button"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
              >
                {index + 1}
              </button>
            ))}

            {totalPages > 5 && <span className="dots">...</span>}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="page-button"
            >
              &gt;
            </button>
          </div>

          <div className="Pagination1">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="page-button"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
              >
                {index + 1}
              </button>
            ))}

            {totalPages > 5 && <span className="dots">...</span>}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="page-button1"
            >
              &gt;
            </button>
          </div>



        </main>

      </header>
    </div>


  );
}


export default SC01;
