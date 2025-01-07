import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import { useCookies } from "react-cookie";


function Henshu({ switchComponent }) {
    const [cookies, setCookie] = useCookies();
    const recruit_year=2024;
    useEffect(()=>{
        setCookie("recruit_year",recruit_year)
    },[])
    const navigate = useNavigate();

    const handleClick = () => {
    navigate("/SC04");
    };

return (
<div>
    <h2>Component Switcher</h2>
    {/* ボタンで switchComponent を呼び出す */}
    <div><Link to='/SC04'>新規登録</Link></div>
    <div><Link to='/SC04' state={{student_id:58}}>編集</Link></div>
</div>
);
}

export default Henshu;
