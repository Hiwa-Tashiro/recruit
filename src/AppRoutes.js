import React from 'react';
import { useEffect, useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { fetchAuthSession } from 'aws-amplify/auth';
import I18n from './i18n';
import '@aws-amplify/ui-react/styles.css';
import './css/common.css';

import { useCookies } from "react-cookie";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import SC01 from "./components/SC01"; // 遷移元のページ
import SC03 from "./components/SC03"; // 遷移先のページ
import SC04 from "./components/SC04";
import SC05 from "./components/SC05";
import SC06 from "./components/SC06";

const AppRoutes = () => {
    const [cookies, setCookie] = useCookies();
    const [user, setUser] = useState();
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        if (user) {
            const test = async () => {
                const session = await fetchAuthSession();
                const token = session?.tokens?.idToken?.toString();
                const username = session?.tokens?.signInDetails?.loginId;
                setCookie("token", token);
                setCookie("user", username);
                if (!cookies.recruit_year) {
                    setCookie("recruit_year", new Date().getFullYear());
                }
            }
            test();
            setAuthUser(true);
        }
    }, [user])

    return (
        <Authenticator>
            {({ user }) => {
                if(!authUser){
                    setUser(user);
                }
                else{
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
                }
            }}
        </Authenticator>
    )
}

export default AppRoutes;