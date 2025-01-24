import React from 'react';
import { useEffect, useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { fetchAuthSession } from 'aws-amplify/auth';
import I18n from './i18n';
import '@aws-amplify/ui-react/styles.css';

import { useCookies } from "react-cookie";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import SC01 from "./components/SC01"; // 遷移元のページ
import SC03 from "./components/SC03"; // 遷移先のページ
import SC04 from "./components/SC04";
import SC05 from "./components/SC05";
import SC06 from "./components/SC06";


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
                            <Route path="/" element={<SC01 />} />
                            <Route path="/SC03" element={<SC03 />} />
                            <Route path="/SC04" element={<SC04 />} />
                            <Route path="/SC05" element={<SC05 />} />
                            <Route path="/SC06" element={<SC06 />} />
                        </Routes>
                    </BrowserRouter>
                )
            }}
        </Authenticator>
    )
}

export default AppRoutes;