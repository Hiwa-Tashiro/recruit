import React, { useState, useEffect } from "react";
import SC05_css from "../css/SC05.module.css";
import { Bar, Component42, Component43, Component44, Component45, Component46, Component47, Component48, Component49, Component50, Component52, Component54, Component56, Component58, Component62, Itizi3, Itizi4, Delete, Register, Return, Flag3, Job1, Jobfair1, Jobfair4, Jobfair3, Jobfair5, Resume1, Resume2, Resume4, Resume5, Itizi2, Itizi1, Itizi5, Zadan2, Zadan3, Zadan4, Zadan5, Zadan1, Yaku, Sei, J1,J2, J3, J4, J5, R1, R2, R4, R5, I1, I2, I3, I4, I5, Z1, Z2, Z3, Z4, Z5 } from '../ui-components';
import { BrowserRouter as Router, Routes, Route, useNavigate, data, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';




function SC05() {
    const [jobfairOptions, setJobfairOptions] = useState([]);
    const [student_dataset, setStudentDataset] = useState([]);
    const [interview_dataset, setInterviewDataset] = useState([]);
    const [cookies, setCookie] = useCookies();
    const function_id = 'SC05';
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
    const handleComponentJobfair3Click = () => {
        setIsPopupVisible(true); // ポップアップを表示
    };
    const closePopup = () => {
        setIsPopupVisible(false); // ポップアップを閉じる
    };
    const handleEditClick = () => {
        navigate('/SC04', {state:{ student_id: status?.student_id }}); // ページ遷移とstateの設定
    };
    //登録ボタンの処理
    const handleLogFormData = () => {
        const validateForm = () => {
            const newErrors = {};
            if (!formData.name) newErrors.name = <span className={SC05_css.required}>氏名は必須です。</span>;
            if (!formData.university) newErrors.university = <span className={SC05_css.required}>大学名は必須です。</span>;
            if (!formData.know_opportunity) newErrors.know_opportunity = <span className={SC05_css.required}>当社を知ったきっかけは必須です。</span>;
            if (!formData.tel) newErrors.tel = <span className={SC05_css.required}>電話番号は必須です。</span>;
            if (!formData.email) newErrors.email = <span className={SC05_css.required}>メールは必須です。</span>;
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
            navigate("/");
            window.location.reload();
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
                if (status?.student_id) {
                    await setStudentDataset(json['student_dataset'][0]);
                    if (json['student_dataset'][0]['phase_num'] >= 3) {
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

    const [formData, setFormData] = useState({
        furigana: "", sexual: "", name: "", know_opportunity: "", birthday: "", jobfair_id: "", graduate_year: "2025年度", tel: "",
        university: "", email_is_own: "", email: "", subject: "", file_path: "", post: "", note: "", address: "", recruit_is_decline: "", updated_at: "",
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

    // 説明会日時を取得してフォーマット
    const selectedJobfair = jobfairOptions?.find(
        (option) => option.jobfair_id === formData.jobfair_id
    );
    const formattedJobfairDate = selectedJobfair
        ? (() => {
            const dateObj = new Date(selectedJobfair.date);
            const month = String(dateObj.getMonth() + 1).padStart(2, "0");
            const day = String(dateObj.getDate()).padStart(2, "0");
            const hours = String(dateObj.getHours()).padStart(2, "0");
            const minutes = String(dateObj.getMinutes()).padStart(2, "0");
            return `${month}月${day}日 ${hours}時${minutes}分`;
        })()
        : "未設定";

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
        const isValidNumber = /^[0-9+\-*/#]*$/;

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
            setErrors({ ...errors, tel: <span className={SC05_css.required}>電話番号は数字のみ入れてください。</span> });
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
        if (!formData.name) newErrors.name = <span className={SC05_css.required}>氏名は必須です。</span>;
        if (!formData.university) newErrors.university = <span className={SC05_css.required}>大学名は必須です。</span>;
        if (!formData.know_opportunity) newErrors.know_opportunity = <span className={SC05_css.required}>当社を知ったきっかけは必須です。</span>;
        if (!formData.tel) newErrors.tel = <span className={SC05_css.required}>電話番号は必須です。</span>;
        if (!formData.email) newErrors.email = <span className={SC05_css.required}>メールは必須です。</span>;

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



        <div className={SC05_css.form_container}>
            <h1 className={`${SC05_css.h1} ${SC05_css.title}`}>学生情報</h1>
            <div className={SC05_css.return_container}>
                <button onClick={() => navigate(-1)}
                    className={`${SC05_css.modoru} ${SC05_css.main_button}`}>
                    戻る</button></div>
            <div className={SC05_css.parent_container}>
                <div className={SC05_css.bordered_container}>
                    <div className={SC05_css.line_overlay}></div>
                    <div className={SC05_css.components_wrapper}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            {(() => {
            if (student_dataset.student_id && student_dataset.jobfair_id) {
            if (student_dataset.phase_num === 0) {
                return <div><J3 /></div>; // jobfair_is_attendが1または2の場合
            } else if (student_dataset.phase_num === 1) {
                return <div><J4 /></div>; // phase_numが1かつjobfair_is_attendが0の場合
            } else if (student_dataset.phase_num >= 2) {
                return <J5 />; // 
            } 
            }
            else if (student_dataset.student_id && !student_dataset.jobfair_id) {
            return<div>
            <div>
                <J2 />
            </div>
            </div>;
            }
            return <J1 />; // student_id または jobfair_id が存在しない場合
        })()}
                            {(() => {
                                if (student_dataset.student_id && student_dataset.jobfair_id) {
                                    if (student_dataset.jobfair_is_attend === 0 && student_dataset.phase_num == 1 && student_dataset.resume_is_submit === 0) {
                                        return <div className={SC05_css.fixed_height}><R2 /></div>;
                                    } else if (student_dataset.phase_num === 2 && student_dataset.resume_is_submit === 1) {
                                        return <div className={SC05_css.fixed_height}><R4 /></div>;
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
                                        return <div ><I3 /></div>;
                                    } else if (student_dataset.phase_num === 3 && interview_dataset.result === 0) {
                                        return <div><I4 /></div>; // 
                                    } else if (student_dataset.phase_num === 2 && student_dataset.resume_is_submit === 1) {
                                        return <div><I2 /></div>; // 上記以外の場合
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
                                        return <div><Z3 /></div>;
                                    } else if (student_dataset.phase_num === 4 && interview_dataset.result === 0) {
                                        return <div><Z4 /></div>; // 
                                    } else if (student_dataset.phase_num === 3 && interview_dataset.result === 0) {
                                        return <div><Z2 /></div>; // 上記以外の場合
                                    } else {
                                        return <Z1 />; // 上記以外の場合
                                    }
                                }
                                return <Z1 />; // student_id または jobfair_id が存在しない場合

                            })()}
                            {/* ポップアップの定義 */}
                            {isPopupVisible && (
                                <div className={SC05_css.popup}>
                                    <div className={SC05_css.popup_content}>
                                        <p>ポップアップの内容をここに記載します。</p>
                                        <button className={SC05_css.main_button} onClick={closePopup}>閉じる</button>
                                    </div>
                                </div>
                            )}
                            <Yaku /><Sei /></div>
                    </div>
                </div>
            </div>

            <table className={SC05_css.table} style={{ border: '1px solid black', borderCollapse: 'collapse', width: '90%' }}>
                <tbody>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px', width: '8%' }}>フリガナ</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{formData.furigana || ''}</td>
                        <th style={{ border: '1px solid black', padding: '8px', width: '9%' }}>性別</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>
                            {String(formData.sexual) === '0'
                                ? '男性'
                                : String(formData.sexual) === '1'
                                    ? '女性'
                                    : String(formData.sexual) === '2'
                                        ? 'その他'
                                        : ''}
                        </td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>氏名</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{formData.name || ''}</td>
                        <th style={{ border: '1px solid black', padding: '8px' }}>会社を知ったきっかけ</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{formData.know_opportunity || ''}</td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>生年月日</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>  {formData.birthday || ''}{formData.birthday && (
                            <span>（満{calculateAge(formData.birthday)}歳）</span>)}</td>
                        <th style={{ border: '1px solid black', padding: '8px' }}>説明会日時</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>
                            {formattedJobfairDate}
                        </td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>卒業年度</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{formData.graduate_year || ''}年</td>
                        <th style={{ border: '1px solid black', padding: '8px' }}>TEL</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{formData.tel || ''}</td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>大学</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{formData.university || ''}</td>
                        <th style={{ border: '1px solid black', padding: '8px' }}>{String(formData.email_is_own) === '0'
                            ? 'E-mail'
                            : String(formData.email_is_own) === '1'
                                ? '紹介会社E-mail'
                                : ''}</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{formData.email || ''}</td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>学部・学科</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{formData.subject || ''}</td>
                        <th style={{ border: '1px solid black', padding: '8px' }}>格納パス</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}><a href={formData.file_path} target="_blank">{formData.file_path || ''}</a></td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '15px' }}>郵便番号</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{formData.post || ''}</td>
                        <th style={{ border: '1px solid black', padding: '8px' }}>備考</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{formData.note || ''}</td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '30px' }}>住所</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{formData.address || ''}</td>
                        <th style={{ border: '1px solid black', padding: '8px' }}>辞退</th>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{formData.recruit_is_decline ? '辞退済み' : ''}</td>
                    </tr>
                </tbody>
            </table>

            <form onSubmit={handleSubmit} className={SC05_css.grid_container}>
                <div className={SC05_css.parent_container1}>
                    <div>
                        <button
                            type="button"
                            className={`${SC05_css.button} ${SC05_css.register_button} ${SC05_css.main_button}`}
                            onClick={handleEditClick} // クリック時にページ遷移をトリガー
                        >編集</button>
                    </div>
                </div>
                <div className={SC05_css.parent_container2}>
                    <button onClick={handleDelete}
                        disabled={!status?.student_id} // Disable the button if `student_id` is null or undefined
                        style={!status?.student_id ? { cursor: "not-allowed", opacity: 0.5 } : {}}
                        className={`${SC05_css.button} ${SC05_css.delete_button}`}>
                        削除
                    </button>
                    {isDeletePopupVisible && (
                        <div className={SC05_css.popup}>
                            <div className={SC05_css.popup_content}>
                                <p>{deleteConfirmMessage}</p>
                                <button className={`${SC05_css.confirm_button} ${SC05_css.main_button}`} onClick={confirmDelete}>はい</button>
                                <button className={`${SC05_css.cancel_button} ${SC05_css.main_button}`} onClick={closeDeletePopup}>いいえ</button>
                            </div>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}
export default SC05;
