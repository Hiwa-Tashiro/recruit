import React from 'react';
import SC06_css from '../css/SC06.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { BrowserRouter as Router, Routes, Route, useNavigate, data, useLocation } from "react-router-dom";

function SC06() {
    const [interview, setInterview] = useState();
    const [attend, setAttend] = useState([]);
    const [result, setResult] = useState([]);
    const [student, setStudent] = useState([]);
    const [cookies] = useCookies();
    const { state } = useLocation();
    const function_id = 'SC06';
    const navigate = useNavigate();
    const [status, setStatus] = useState(state);
    useEffect(() => {
        setStatus(state)
    }, [])
    const [editingcalender, setEditingcalender] = useState();

    useEffect(() => {
        const fetchlambda = async () => {
            const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/sc06_default";
            await fetch(url,
                {
                    method: "POST",
                    headers: { Authorization: cookies.token },
                    body: JSON.stringify(
                        {
                            student_id: status?.student_id,
                            phase_num: status?.phase_num
                        })
                }
            )
                .then((res) => res.json()) // JSON形式に変換
                .then((data) => {
                    if (data.interview) {
                        setInterview(data.interview);
                    }
                    else {
                        setInterview({
                            date: null,
                            staff: [''],
                            attend: null,
                            result: null,
                            note: null
                        });
                    }
                    setStudent(data.student);
                    setAttend(data.attend);
                    setResult(data.result);
                    console.log(data);
                })
                .catch((error) => console.log(error)); // エラー発生時に出力
        }
        fetchlambda();
    }, [])

    const updateInterview = async (key, value) => {
        const updatedata = { ...interview };
        updatedata[key] = value;
        console.log(updatedata)
        setInterview(updatedata)
    }

    const updateStaff = async (key, value) => {
        const updatestaff = [...interview?.staff];
        updatestaff[key] = value;
        setInterview({ ...interview, staff: updatestaff })
        console.log({ ...interview, staff: updatestaff })
    }

    const addRow = () => {
        const updatestaff = [...interview?.staff]
        updatestaff.push("");
        setInterview({ ...interview, staff: updatestaff })
    };


    const formatJapaneseDate = (datetime) => {
        if (!datetime) return "日付を入力してください";

        const date = new Date(datetime);
        const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

        const month = String(date.getMonth() + 1).padStart(2, "0"); // 月 (0-11なので+1)
        const day = String(date.getDate()).padStart(2, "0");
        const dayOfWeek = daysOfWeek[date.getDay()];
        const hours = String(date.getHours()).padStart(2, "0");   // 2桁表示
        const minutes = String(date.getMinutes()).padStart(2, "0"); // 2桁表示

        return `${month}月${day}日 (${dayOfWeek}) ${hours}:${minutes}`;
    };

    const confirmInterview = async () => {
        console.log(interview.attend)
        console.log(interview.result)
        if (String(interview.attend) === "0" || String(interview.result) == "" || interview.result == null) {
            const fetchlambda = async () => {
                const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/updateInterview";
                await fetch(url,
                    {
                        method: "POST",
                        headers: { Authorization: cookies.token },
                        body: JSON.stringify(
                            {
                                student_id: status?.student_id,
                                phase_num: status?.phase_num,
                                interview: interview,
                                student : student,
                                user: cookies.user,
                                function_id: function_id
                            })
                    }
                )
                    .then((res) => res.json()) // JSON形式に変換
                    .then((data) => {
                        console.log(data);
                        if (data?.errorMesseage) {
                            alert(data?.errorMesseage);
                            return
                        }
                        else {
                            navigate('/SC04', { state: { student_id: status?.student_id } });
                        }
                    })
                    .catch((error) => console.log(error)); // エラー発生時に出力
            }

            await fetchlambda();
        }
        else {
            alert("面接に出席していません。")
            return;
        }

    }

    const deleteInterview = async () => {
        const fetchlambda = async () => {
            const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/deleteInterview";
            await fetch(url,
                {
                    method: "POST",
                    headers: { Authorization: cookies.token },
                    body: JSON.stringify(
                        {
                            student_id: status?.student_id,
                            phase_num: status?.phase_num,
                            interview: interview,
                            student : student,
                            user: cookies.user,
                            function_id: function_id
                        })
                }
            )
                .then((res) => res.json()) // JSON形式に変換
                .then((data) => {
                    console.log(data);
                    if (data?.errorMesseage) {
                        alert(data?.errorMesseage);
                        return
                    }
                    else {
                        navigate('/SC04', { state: { student_id: status?.student_id } });
                    }
                })
                .catch((error) => console.log(error)); // エラー発生時に出力
        }

        await fetchlambda();
    }

    return (
        <div>
            <div>
                <Link to='/SC04' state={{ student_id: status?.student_id }}>
                    <div>戻る</div>
                </Link>
            </div>
            <h1 style={{ textAlign: "center" }}>
                {status?.phase_num == 3 && (<label>一次面接</label>)}
                {status?.phase_num == 4 && (<label>座談会</label>)}
                {status?.phase_num == 5 && (<label>役員面接</label>)}
            </h1>

            <div>
                {editingcalender ? (
                    <input
                        type="datetime-local"
                        defaultValue={interview?.date}
                        onChange={(e) => updateInterview("date", e.target.value)}
                        onBlur={() => setEditingcalender(null)}
                        autoFocus
                    />
                ) : (
                    <div onClick={() => setEditingcalender(true)}>
                        {formatJapaneseDate(interview?.date)}
                    </div>
                )
                }
            </div>
            <div>出欠：
                <select value={interview?.attend} onChange={(e) => updateInterview("attend", e.target.value)}>
                    <option value="">未選択</option>
                    {attend?.map((option) => {
                        return (
                            <option key={option.attend_num} value={option.attend_num}>
                                {option.attend_name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div>
                結果：
                <select value={interview?.result} onChange={(e) => updateInterview("result", e.target.value)}>
                    <option value="">未選択</option>
                    {result?.map((option) => {
                        return (
                            <option key={option.result_num} value={option.result_num}>
                                {option.result_name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div>
                <table>
                    {interview?.staff.map((row, index) => (
                        <tr key={index}>
                            <th>担当</th>
                            <td><input type='text' defaultValue={row} onBlur={(e) => updateStaff(index, e.target.value)} /></td>
                        </tr>
                    ))}
                </table>
                <button onClick={addRow}>
                    +
                </button>
            </div>
            <div>
                <input type='textarea' defaultValue={interview?.note} onBlur={(e) => updateInterview("note", e.target.value)} />
            </div>
            <div >
                <div>
                    <button onClick={confirmInterview}>
                        <div>登録</div>
                    </button>
                </div>
                <div>
                    <button onClick={deleteInterview}>
                        <div>削除</div>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SC06;