import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { BrowserRouter as Router, Routes, Route, useNavigate, data, useLocation } from "react-router-dom";

function SC06() {
    const [interview, setInterview] = useState();
    const [cookies] = useCookies();
    const { state } = useLocation()
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
                    setInterview(data.interview)
                    console.log(data);
                })
                .catch((error) => console.log(error)); // エラー発生時に出力
        }
        fetchlambda();
    }, [])

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

    return (
        <div>
            <h1>会社説明会</h1>

            <div>
                {editingcalender ? (
                    <input
                        type="datetime-local"
                        value={interview?.date}
                        onChange={(e) => (e)}
                        onBlur={() => setEditingcalender(null)}
                        autoFocus
                    />
                ) : (
                    <div
                        onClick={() => setEditingcalender(true)}
                    >{formatJapaneseDate(interview?.date)}</div>
                )
                }
            </div>
            <div>
                <select value={interview?.result}>
                    <option value="a">選択してください</option>
                    <option value="b">a</option>
                    <option value={null}>b</option>
                </select>
            </div>

        </div>
    )
}

export default SC06;