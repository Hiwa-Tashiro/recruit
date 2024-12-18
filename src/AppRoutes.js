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


const AppRoutes = () => {
    const [cookies, setCookie] = useCookies();
    const [userId, setUserId] = useState(cookies?.userId);

    useEffect(()=>{
        if(userId){
            const test = async () => {
                const session = await fetchAuthSession();
                const token = await session?.tokens?.idToken?.toString();
                setCookie("userId", session?.userSub);
                setCookie("token", token);
                setCookie("user", session?.tokens?.signInDetails?.loginId);
                if(!cookies.recruit_year){
                    setCookie("recruit_year", new Date().getFullYear());
                }
            }
            test();
        }
    },[userId])

    return (
        <Authenticator hideSignUp={true}>
            {({ user }) => {
                setUserId(user.userId);
                return (
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<App />} />
                            <Route path='/home' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/app2' element={<App2 />} />
                        </Routes>
                    </BrowserRouter>
                )
            }}
        </Authenticator>
    )
}

export default AppRoutes;