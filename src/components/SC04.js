import React, { useState, useEffect } from "react";
import SC04_css from "../css/SC04.module.css";
import { Bar, Component42, Component43, Component44, Component45, Component46, Component47, Component48, Component49, Component50, Component52, Component54, Component56, Component58, Component62, Itizi3, Itizi4, Delete, Register, Return, Flag3, Job1, Jobfair1, Jobfair4, Jobfair3, Jobfair5, Resume1, Resume2, Resume4, Resume5, Itizi2, Itizi1, Itizi5, Zadan2, Zadan3, Zadan4, Zadan5, Zadan1, Yaku, Sei, J1,J3,J4,J5,R1,R2,R4,R5,I1,I2,I3,I4,I5,Z1,Z2,Z3,Z4,Z5,J2 } from '../ui-components';
import { BrowserRouter as Router, Routes, Route, useNavigate, data, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';




function SC04() {
  const [jobfairOptions, setJobfairOptions] = useState([]);
  const [student_dataset, setStudentDataset] = useState([]);
  const [interview_dataset, setInterviewDataset] = useState([]);
  const [cookies, setCookie] = useCookies();
  const function_id = 'SC04';
  const { state } = useLocation()
  const [status, setStatus] = useState(state);
  useEffect(() => {
    setStatus(state)
  }, [])

  let nendo = [];
  for (let i = -2; i <= 3; i++) {
    nendo.push(cookies.recruit_year + i)
  }



  const navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false); // ポップアップの表示状態を管理
  const [popupMessage, setPopupMessage] = useState(""); // ポップアップに表示するメッセージ
  const [formIsReadyToSend, setFormIsReadyToSend] = useState(false); // フォームが送信準備完了か
  const [isCustomPopupVisible, setIsCustomPopupVisible] = useState(false);
  const [customPopupContent, setCustomPopupContent] = useState(""); // Content for the custom popup
  
  const handleComponentJobfair3Click = () => {
    setCustomPopupContent("こちらが新しいポップアップの内容です。"); // Set custom content
    setIsCustomPopupVisible(true); // Show the custom popup
  };
  
  const closeCustomPopup = () => {
    setIsCustomPopupVisible(false); // Close the custom popup
  };
  const closePopup = () => {
    setIsPopupVisible(false); // ポップアップを閉じる
  };

  //登録ボタンの処理
  const handleLogFormData = () => {
    const validateForm = () => {
      const newErrors = {};
      if (!formData.name) newErrors.name = <span className={SC04_css.required}>氏名は必須です。</span>;
      if (!formData.university) newErrors.university = <span className={SC04_css.required}>大学名は必須です。</span>;
      if (!formData.know_opportunity) newErrors.know_opportunity = <span className={SC04_css.required}>当社を知ったきっかけは必須です。</span>;
      if (!formData.tel) newErrors.tel = <span className={SC04_css.required}>電話番号は必須です。</span>;
      if (!formData.email) newErrors.email = <span className={SC04_css.required}>メールは必須です。</span>;
      return newErrors;
    };
  
    // バリデーションチェック
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // エラーを表示
      return; // エラーがある場合は送信中止
    }
  
    // 確認ダイアログ用の設定
    const fieldNames = {
      furigana: "フリガナ",
      sexual: "性別",
      graduate_year: "卒業年度",
      subject: "学部学科",
    };
  
    // 必須ではないが、確認が必要なフィールド
    const requiredFields = ["furigana", "sexual", "graduate_year", "subject"];
    const missingFields = requiredFields.filter((field) => {
      const value = formData[field];
      return value === undefined || value === null || value === "" || value === false;
    });
  
    if (missingFields.length > 0) {
      const missingFieldsInJapanese = missingFields.map((field) => fieldNames[field]);
      const confirmMessage = `以下の項目が未入力です。送信を続けますか？\n\n${missingFieldsInJapanese.join(", ")}`;
      setPopupMessage(confirmMessage); // メッセージをセット
      setIsPopupVisible(true); // ポップアップを表示
      return; // 送信を中止
    }
    
    // 問題がない場合は送信
    sendFormData();
  };
  
  // データ送信処理を関数に分離
  const sendFormData = () => {
    console.log("Current formData:", formData);
  
    try {
      fetch(
        "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/insertFormData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formdata: formData,
            student_id: status?.student_id,
            user: cookies.user,
            recruit_year: cookies.recruit_year,
            function_id: function_id,
            updated_at: student_dataset.updated_at,
            
          }),
        }
      )
        .then((res) => res.json())
        .then((json) => console.log(json));
        navigate('/SC05', {state:{ student_id: status?.student_id}}); 

    } catch (error) {
      console.error("Error sending data to Lambda:", error);
      alert("Failed to send data to Lambda: " + error.message);
    }
  };
  

  
  // ポップアップの続行ボタン処理
  const confirmSend = () => {
    setIsPopupVisible(false); // ポップアップを非表示
    sendFormData(); // データ送信を実行
  };
  //削除ボタンの処理
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false); // 削除ポップアップの表示状態
  const [deleteConfirmMessage, setDeleteConfirmMessage] = useState("この情報を削除しますか？");

  const handleDelete = async () => {
    // ポップアップを表示
    setIsDeletePopupVisible(true);
  };

  const confirmDelete = async () => {
    // 削除を実行
    setIsDeletePopupVisible(false);

    try {
      const response = await fetch("https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/delete_student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student_id: status?.student_id,
          user: cookies.user,
          function_id: function_id,
          updated_at: student_dataset.updated_at,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("削除に失敗しました。");
    }
  };

  const closeDeletePopup = () => {
    setIsDeletePopupVisible(false); // ポップアップを閉じる
  };
  //


  // 説明会日時のデータ取得
  useEffect(() => {
    const fetchJobfairDates = async () => {
      try {
        const response = await fetch("https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/jobfair_select", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recruit_year: cookies.recruit_year,
            student_id: status?.student_id,
          }),
        });
        const json = await response.json();
        console.log(json);
        await setJobfairOptions(json['jobfairlist']);
        if(status?.student_id){
          await setStudentDataset(json['student_dataset'][0]);
          if(json['student_dataset'][0]['phase_num'] >= 3){
            await setInterviewDataset(json['interview_dataset'][json['student_dataset'][0]['phase_num'] - 3]);
            console.log(json['interview_dataset'][json['student_dataset'][0]['phase_num'] - 3]);
          }
        }

      } catch (error) {
        console.log(error);
      }
    };
    fetchJobfairDates();
  }, []);

  //履歴書提出ボタンの処理
  const handleRirekisho = async () => {
    try {
      const response = await fetch("https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/rirekishoteishutu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student_id: status?.student_id,
          phase_num: student_dataset.phase_num,
          user: cookies.user,
          updated_at: student_dataset.updated_at,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      window.location.reload();
      console.log(result);
    } catch (error) {
      console.error("Error rirekisho:", error);
      alert("登録失敗");
    }
  };
  //

  //ポップアップの処理
  const [isAttendancePopupVisible, setIsAttendancePopupVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [errorMessage, setErrorMessage] = useState("");
    // 初期値を設定する
    useEffect(() => {
      setSelectedOption(student_dataset?.jobfair_is_attend); // 初期値を設定
    }, [student_dataset]);
  // Show popup
  const openAttendancePopup = () => {
    setIsAttendancePopupVisible(true);
    setErrorMessage(""); // Reset any previous error
  };

  // Close popup
  const closeAttendancePopup = () => {
    setIsAttendancePopupVisible(false);
    setErrorMessage(""); // Clear error message
  };

  const [j2WarningMessage, setJ2WarningMessage] = useState("");

  const handleJ2Click = () => {
    setJ2WarningMessage("説明会日時が登録されていません。"); // Update the warning message
  };


  // Submit attendance option
  const handleAttendanceSubmit = async () => {
    try {
      const response = await fetch(
        " https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/SC02",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            student_id: status?.student_id, // Replace with the actual student_id
            jobfair_is_attend: selectedOption,
            user: cookies.user, // Replace with the actual user
            updated_at: student_dataset.updated_at,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
            setSelectedOption(selectedOption);// 保存後も値を保持
            closeAttendancePopup();

    } catch (error) {
      console.error("Error updating attendance:", error);
      alert("登録に失敗しました。");
    }
  };

  // Reset attendance option to null
  const handleResetAttendance = async () => {
    try {
      const response = await fetch(
        "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/SC02",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            student_id: status?.student_id,
            jobfair_is_attend: null,
            user: cookies.user,
            updated_at: student_dataset.updated_at,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);

      setSelectedOption(null); // Reset selection in the UI
      closeAttendancePopup();
      
    } catch (error) {
      console.error("Error resetting attendance:", error);
      alert("取り消しに失敗しました。");
    }
  };



  const [formData, setFormData] = useState({
    furigana: "", sexual: "", name: "", know_opportunity: "", birthday: "", jobfair_id: "", graduate_year: "2025年度", tel: "",
    university: "", email_is_own: "", email: "", subject: "", file_path: "", post: "", note: "", address: "", recruit_is_decline: "", updated_at:"",
  });
  // 初期値を student_dataset からコピー
  useEffect(() => {
    if (student_dataset) {
      setFormData({ ...formData, ...student_dataset });
    }
  }, [student_dataset]);



  const [errors, setErrors] = useState({});


  const [age, setAge] = useState(null);
  const handleAgeChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "birthday") {
      calculateAge(value);
    }
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  // 満何歳かの計算
  const calculateAge = (birthdayDate) => {
    const today = new Date();
    const birthday = new Date(birthdayDate);
    if (!isNaN(birthday)) {
      let age = today.getFullYear() - birthday.getFullYear();
      const monthDiff = today.getMonth() - birthday.getMonth();
      const dayDiff = today.getDate() - birthday.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--; // 誕生日がまだ来ていない場合
      }
      return age;
    }
    return null; // 入力が無効な場合
  };

  // 生年月日が変更されたら自動的に計算
  useEffect(() => {
    if (formData.birthday) {
      setAge(calculateAge(formData.birthday));
    } else {
      setAge(null);
    }
  }, [formData.birthday]);

  //電話番号の入力制限
  const handleTelChange = (e) => {
    const { name, value } = e.target;

  // 数字以外の文字を検出する正規表現
  const isValidNumber  = /^[0-9+\-*/#]*$/;

  // 電話番号が13桁以上であれば入力を制限
  if (name === "tel" && value.length > 13) {
    return;
  }

  // バリデーション: 数字以外が入力された場合の警告
  if (!isValidNumber.test(value)) {
    setErrors({
      ...errors,
      [name]: "正しい値を入力してください",
    });
    return; // 数字以外が入力された場合、フォームデータを更新しない
  } else {
    setErrors({
      ...errors,
      [name]: "", // エラーをクリア
    });
  }

  setFormData({
    ...formData,
    [name]: value,
  });

  // 電話番号の長さチェック
  if (name === "tel") {
    if (value.length < 10) {
      setErrors({
        ...errors,
        [name]: "電話番号は10桁以上で入力してください。",
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  }
};

  // 郵便番号の処理
  const handlePostChange = (e) => {
    const { value } = e.target;
    // 数字とハイフンのみ許可
    const sanitizedValue = value.replace(/[^0-9-]/g, "");
    // 前半3桁と後半4桁にハイフンを自動挿入
    const formattedValue = sanitizedValue
      .replace(/^(\d{3})(\d{1,4})$/, "$1-$2") // フォーマット適用
      .substring(0, 8); // 最大8文字に制限
    setFormData({ ...formData, post: formattedValue });
  };

  // 許可する文字: 半角英数字と一部記号
  const handleEmailInputChange = (e) => {
    const { value } = e.target;
    const sanitizedValue = value.replace(/[^a-zA-Z0-9@._-]/g, "");
    setFormData({ ...formData, email: sanitizedValue });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked)
    setFormData({ ...formData, [name]: checked ? 1 : 0 });
  };
  const validateTel = (tel,) => {
    const telPattern = /^[0-9]*$/; // 数字のみ許可
    return telPattern.test(tel);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "tel" && !validateTel(value)) {
      setErrors({ ...errors, tel: <span className={SC04_css.required}>電話番号は数字のみ入れてください。</span> });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
    setFormData({ ...formData, [name]: value });
    // 入力のたびにエラーをクリア
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = <span className={SC04_css.required}>氏名は必須です。</span>;
    if (!formData.university) newErrors.university = <span className={SC04_css.required}>大学名は必須です。</span>;
    if (!formData.know_opportunity) newErrors.know_opportunity = <span className={SC04_css.required}>当社を知ったきっかけは必須です。</span>;
    if (!formData.tel) newErrors.tel = <span className={SC04_css.required}>電話番号は必須です。</span>;
    if (!formData.email) newErrors.email = <span className={SC04_css.required}>メールは必須です。</span>;

    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return; // エラーがあれば送信しない
    }
  }
  // 削除処理: ユーザー確認後にフォームデータをリセット
  const handleReset = () => {
    const confirmDelete = window.confirm("本当に削除しますか?");
    if (confirmDelete) {
      setFormData({ furigana: "", sexual: "", name: "", know_opportunity: "", birthday: "", date: "", graduate_year: "2025", tel: "", university: "", email: "", subject: "", file_path: "", post: "", note: "", address: "", recruit_is_decline: "", });
      setErrors({});
    }
  };


  return (

    <div className={SC04_css.form_container}>
      <h1 className={`${SC04_css.h1} ${SC04_css.title}`}>登録者情報</h1>
      <div className={SC04_css.return_container}>
      <button onClick={() => navigate("/SC05", {state:{ student_id: status?.student_id}})}
        className={`${SC04_css.modoru} ${SC04_css.main_button}`}>
          戻る</button></div>
      <div className={SC04_css.parent_container}>
      <div className={SC04_css.bordered_container}>
      <div className={SC04_css.line_overlay}></div> 
        <div className={SC04_css.components_wrapper}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {(() => {
              if (student_dataset.student_id && student_dataset.jobfair_id) {
                if (student_dataset.phase_num === 0) {
                  return <div onClick={openAttendancePopup}><J3 /></div>; // jobfair_is_attendが1または2の場合
                } else if (student_dataset.phase_num === 1) {
                  return <div onClick={openAttendancePopup}><J4 /></div>; // phase_numが1かつjobfair_is_attendが0の場合
                } else if (student_dataset.phase_num >= 2) {
                  return <J5 />; // 
                } 
              }
              else if (student_dataset.student_id && !student_dataset.jobfair_id) {
                return<div>
                <div onClick={handleJ2Click}>
                  <J2 />
                </div>
                {j2WarningMessage && (
                  <p className={SC04_css.warning_message}>{j2WarningMessage}</p>
                )}
              </div>;
              }
              return <J1 />; // student_id または jobfair_id が存在しない場合
            })()}
            {(() => {
              if (student_dataset.student_id && student_dataset.jobfair_id) {
                if (student_dataset.jobfair_is_attend === 0 && student_dataset.phase_num == 1 && student_dataset.resume_is_submit === 0) {
                  return <div className={SC04_css.fixed_height}><div onClick={handleRirekisho}><R2 /></div></div>;
                } else if (student_dataset.phase_num === 2 && student_dataset.resume_is_submit === 1) {
                  return <div className={SC04_css.fixed_height}><div onClick={handleRirekisho}><R4 /></div></div>;
                } else if (student_dataset.phase_num >= 3) {
                  return <R5 />; // 
                } else {
                  return <R1 />; // 上記以外の場合
                }
              }
              return <R1 />; // student_id または jobfair_id が存在しない場合
            })()}
            {(() => {
              if (student_dataset.student_id && student_dataset.jobfair_id) {
                if (student_dataset.phase_num >= 4) {
                  return <I5 />;
                } else if (student_dataset.phase_num === 3 && (interview_dataset.result === 1 || interview_dataset.result === 2 || interview_dataset.result === null)) {
                  return <div><Link to='/SC06' state={{student_id: status?.student_id,phase_num:3}}><I3 /></Link></div>;
                } else if (student_dataset.phase_num === 3 && interview_dataset.result === 0) {
                  return <div><Link to='/SC06' state={{student_id: status?.student_id,phase_num:3}}><I4 /></Link></div>;// 
                } else if (student_dataset.phase_num === 2 && student_dataset.resume_is_submit === 1) {
                  return <div><Link to='/SC06' state={{student_id: status?.student_id,phase_num:3}}><I2 /></Link></div>; // 上記以外の場合
                } else {
                  return <I1 />; // 上記以外の場合
                }
              }
              return <I1 />; // student_id または jobfair_id が存在しない場合
            })()}
            {(() => {
              if (student_dataset.student_id && student_dataset.jobfair_id) {
                if (student_dataset.phase_num >= 5) {
                  return <Z5 />;
                } else if (student_dataset.phase_num === 4 && (interview_dataset.result === 1 || interview_dataset.result === 2 || interview_dataset.result === null)) {
                  return <div><Link to='/SC06' state={{student_id: status?.student_id,phase_num:4}}><Z3 /></Link></div>;
                } else if (student_dataset.phase_num === 4 && interview_dataset.result === 0) {
                  return <div><Link to='/SC06' state={{student_id: status?.student_id,phase_num:4}}><Z4 /></Link></div>; // 
                } else if (student_dataset.phase_num === 3 && interview_dataset.result === 0) {
                  return <div><Link to='/SC06' state={{student_id: status?.student_id,phase_num:4}}><Z2 /></Link></div>;// 上記以外の場合
                } else {
                  return <Z1 />; // 上記以外の場合
                }
              }
              return <Z1 />; // student_id または jobfair_id が存在しない場合
            })()}
    <div className={SC04_css.container}>
      {isAttendancePopupVisible && (
        <div className={SC04_css.popup}>
          <div className={SC04_css.popup_content}>
            <h2>出席状況</h2>
            <div>
              <label>
                <input
                  type="radio"
                  name="jobfair_is_attend"
                  value="0"
                  checked={selectedOption == 0}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                出席
              </label>
              <label>
                <input
                  type="radio"
                  name="jobfair_is_attend"
                  value="1"
                  checked={selectedOption == 1}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                欠席
              </label>
              <label>
                <input
                  type="radio"
                  name="jobfair_is_attend"
                  value="2"
                  checked={selectedOption == 2}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                キャンセル
              </label>
            </div>
            {errorMessage && (
              <p className={SC04_css.error_message}>{errorMessage}</p>
            )}
            <div className={SC04_css.popup_buttons}>
              <button
                onClick={handleAttendanceSubmit}
                className={SC04_css.popup_confirm_button}
              >
                登録
              </button>
              <button
                onClick={closeAttendancePopup}
                className={SC04_css.cancel_button}
              >
                キャンセル
              </button>
              <button
                onClick={handleResetAttendance}
                className={SC04_css.popup_cancel_button}
              >
                取り消し
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
          <Yaku /><Sei /></div>
          </div>
          </div>
      </div>


      <form onSubmit={handleSubmit} className={SC04_css.grid_container}>
        <div className={SC04_css.grid_item}>
          <label htmlFor="furigana">フリガナ(*)</label>
          <input
            type="text"
            id="furigana"
            name="furigana"
            value={formData.furigana || ""}
            onChange={handleInputChange}
            className={SC04_css.short_input}
            maxLength="255"
          />

          {errors.furigana && <p className={SC04_css.error_message}>{errors.furigana}</p>}
        </div>
        <div className={SC04_css.grid_item}>
          <label htmlFor="sexual">性別(*)</label>
          <select
            id="sexual"
            name="sexual"
            value={String(formData.sexual) || ""}
            onChange={handleInputChange}
            className={SC04_css.short_input}
          >
            <option value="null"></option>
            <option value="0">男性</option>
            <option value="1">女性</option>
            <option value="2">その他</option>
          </select>
          {errors.sexual && <p className={SC04_css.error_message}>{errors.sexual}</p>}
        </div>
        <div className={SC04_css.grid_item}>
          <label htmlFor="name">氏名<span className={SC04_css.required}>(*)</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name || ""}
            onChange={handleNameChange}
            className={SC04_css.short_input}
            maxLength="255"
          />
          <div className={SC04_css.short}></div>
          {errors.name && <p className={SC04_css.error_message}>{errors.name}</p>}
        </div>
        <div className={SC04_css.grid_item}>
          <label htmlFor="know_opportunity">会社を知ったきっかけ<span className={SC04_css.required}>(*)</span></label>
          <input
            type="text"
            id="know_opportunity"
            name="know_opportunity"
            value={formData.know_opportunity || ""}
            onChange={handleInputChange}
            className={SC04_css.short_input}
            maxLength="255"
          />
          {errors.know_opportunity && <p className={SC04_css.error_message}>{errors.know_opportunity}</p>}
        </div>

        <div>
          <div className={SC04_css.grid_item}>
            <label htmlFor="birthday">生年月日</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={formData.birthday || ""}
              onChange={handleAgeChange}
              className={SC04_css.short_input}
            />
          </div>
          {age !== null && (
            <div>
              <p>満{age}歳</p>
            </div>
          )}
        </div>

        <div className={SC04_css.grid_item}>
          <label htmlFor="jobfair_id">説明会日時</label>
          <select
            id="jobfair_id"
            name="jobfair_id"
            value={formData.jobfair_id || ""}
            onChange={handleInputChange}
            className={SC04_css.short_input}
            disabled={student_dataset.phase_num >= 2} // phase_numが2以上の場合に無効化
          >
    <option value="">選択してください</option>
    {jobfairOptions?.map((option) => {
      const dateObj = new Date(option.date);

      // 月、日、時、分を整形
      const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // 2桁表示
      const day = String(dateObj.getDate()).padStart(2, "0");       // 2桁表示
      const hours = String(dateObj.getHours()).padStart(2, "0");   // 2桁表示
      const minutes = String(dateObj.getMinutes()).padStart(2, "0"); // 2桁表示
      const formattedDate = `${month}月${day}日${hours}時${minutes}分`;

      return (
        <option value={option.jobfair_id}>
          {formattedDate}
        </option>
      );
    })}
  </select>
</div>
        <div className={SC04_css.grid_item}>
          <label htmlFor="graduate_year">卒業年度(*)</label>
          <select
            id="graduate_year"
            name="graduate_year"
            value={formData.graduate_year || ""}
            onChange={handleInputChange}
            className={SC04_css.short_input}
          >
            {nendo.map((year) => (
              <option key={year} value={year}>
                {year}年
              </option>
            ))}
          </select>
          {errors.graduate_year && <p className={SC04_css.error_message}>{errors.graduate_year}</p>}
        </div>
        <div className={SC04_css.grid_item}>
          <label htmlFor="tel">TEL<span className={SC04_css.required}>(*)</span></label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={formData.tel || ""}
            placeholder="例: 080-1234-5678"
            onChange={handleTelChange}
            className={SC04_css.short_input}
            
          />
          {errors.tel && <p className={SC04_css.error_message}>{errors.tel}</p>}
        </div>
        <div className={SC04_css.grid_item}>
          <label htmlFor="university">大学<span className={SC04_css.required}>(*)</span></label>
          <input
            type="text"
            id="university"
            name="university"
            value={formData.university || ""}
            maxLength="255"
            onChange={handleInputChange}
          />
          {errors.university && <p className={SC04_css.error_message}>{errors.university}</p>}
        </div>
        <div className={SC04_css.grid_item}>
          <label htmlFor="email">E-mail<span className={SC04_css.required}>(*)</span></label>

          {/* セレクトボックスの作成 */}
          <select
            id="email_is_own"
            name="email_is_own"
            value={String(formData.email_is_own) || ""}
            onChange={handleInputChange}
            className={SC04_css.short_input}
          >
            <option value="null">選択してください</option>
            <option value="0">E-mail</option>
            <option value="1">紹介会社E-mail</option>
          </select>

          {/* E-mail 入力欄 */}
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email || ""}
            onChange={handleEmailInputChange} // ハンドラーを変更
            maxLength="255"
            placeholder={
              formData.email_is_own === "1"
                ? "紹介会社からのE-mailを入力"
                : "E-mailを入力"
            }
          />


          {errors.email && <p className={SC04_css.error_message}>{errors.email}</p>}
        </div>



        <div className={SC04_css.grid_item}>
          <label htmlFor="subject">学部・学科(*)</label>

          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject || ""}
            maxLength="255"
            onChange={handleInputChange}
          />
        </div>
        <div className={SC04_css.grid_item}>
          <label htmlFor="file_path">格納パス</label>
          <input
            type="file_path"
            id="file_path"
            name="file_path"
            value={formData.file_path || ""}
            maxLength="255"
            onChange={handleInputChange}
          />
        </div>

        <div className={SC04_css.grid_item}>
          <label htmlFor="post">郵便番号〒</label>
          <input
            type="text"
            id="post"
            name="post"
            value={formData.post || ""}
            onChange={handlePostChange} // ハンドラーを変更
            maxLength="8" // ハイフン込みで最大8文字
            placeholder="例: 123-4567" // プレースホルダーでフォーマットを表示
            className={SC04_css.short_input}
          />
        </div>

        <div className={SC04_css.grid_item}>
          <label htmlFor="note">備考</label>
          <textarea
            type="text"
            id="note"
            name="note"
            value={formData.note || ""}
            maxLength="255"
            onChange={handleInputChange}
            className={SC04_css.remarks_input} // クラスを追加
          />
        </div>

        <div className={SC04_css.grid_item}>
          <label htmlFor="address">住所</label>
          <textarea
            type="text"
            id="address"
            name="address"
            value={formData.address || ""}
            maxLength="255"
            onChange={handleInputChange}
            className={SC04_css.remarks_input} // クラスを追加
          />
        </div>

        <div className={SC04_css.grid_item_agree}>
        <input
            type="checkbox"
            id="recruit_is_decline"
            name="recruit_is_decline"
            checked={formData.recruit_is_decline==1}
            onClick={handleCheckboxChange}
          />
          <label htmlFor="recruit_is_decline">辞退</label>
        </div>

        <div className={SC04_css.parent_container1}>
          <button type="button"  onClick={handleLogFormData}   
          className={`${SC04_css.button} ${SC04_css.register_button} ${SC04_css.main_button}`}// ボタンのスタイルを指定
          >登録</button>
          {isPopupVisible && (
  <div className={SC04_css.popup}>
    <div className={SC04_css.popup_content}>
      <p>{popupMessage}</p>
      <button className={`${SC04_css.confirm_button} ${SC04_css.main_button}`} onClick={confirmSend}>送信を続ける</button>
      <button className={`${SC04_css.cancel_button} ${SC04_css.main_button}`} onClick={closePopup}>キャンセル</button>
    </div>
  </div>
)}</div>
<div className={SC04_css.parent_container2}>
          <button onClick={handleDelete}
          disabled={!status?.student_id} // Disable the button if `student_id` is null or undefined
          style={!status?.student_id ? { cursor: "not-allowed", opacity: 0.5 } : {}}
          className={`${SC04_css.button} ${SC04_css.delete_button}`}>
            削除
          </button>
          {isDeletePopupVisible && (
        <div className={SC04_css.popup}>
          <div className={SC04_css.popup_content}>
            <p>{deleteConfirmMessage}</p>
            <button className={`${SC04_css.confirm_button} ${SC04_css.main_button}`} onClick={confirmDelete}>はい</button>
            <button className={`${SC04_css.cancel_button} ${SC04_css.main_button}`} onClick={closeDeletePopup}>いいえ</button>
          </div>
        </div>
      )}
        </div>
      </form>
    </div>
  );
}
export default SC04;
