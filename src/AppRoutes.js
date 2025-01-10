import React from 'react';
import { useEffect, useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { fetchAuthSession } from 'aws-amplify/auth';
import '@aws-amplify/ui-react/styles.css';

import { useCookies } from "react-cookie";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import App2 from './components/App2';

import SC01 from "./components/SC01"; // 遷移元のページ
import SC03 from "./components/SC03"; // 遷移先のページ
import SC04 from "./components/SC04";
import SC05 from "./components/SC05";
import Henshu from "./components/Henshu";


const AppRoutes = () => {
    const [cookies, setCookie] = useCookies();
    const [userId, setUserId] = useState(cookies?.userId);

    useEffect(() => {
        if (userId) {
            const test = async () => {
                const session = await fetchAuthSession();
                const token = await session?.tokens?.idToken?.toString();
                setCookie("userId", session?.userSub);
                setCookie("token", token);
                setCookie("user", session?.tokens?.signInDetails?.loginId);
                if (!cookies.recruit_year) {
                    setCookie("recruit_year", new Date().getFullYear());
                }
            }
            test();
        }
    }, [userId])

    return (
        <Authenticator>
            {({ user }) => {
                setUserId(user.userId);
                return (
                    <BrowserRouter>
                        <Routes>
                            <Route path='/app' element={<App />} />
                            <Route path='/home' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/app2' element={<App2 />} />

                            <Route path="/" element={<SC01 />} />
                            <Route path="/SC03" element={<SC03 />} />
                            <Route path="/SC04" element={<SC04 />} />
                            <Route path="/SC05" element={<SC05 />} />
                            <Route path="/henshu" element={<Henshu />} />
                        </Routes>
                    </BrowserRouter>
                )
            }}
        </Authenticator>
    )
}

export default AppRoutes;