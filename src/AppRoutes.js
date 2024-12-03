import React from 'react';
import { useEffect,useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

const AppRoutes = () => {

    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => {

                return (
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<App />} />
                            <Route path='/home' element={<Home />} />
                            <Route path='/about' element={<About />} />
                        </Routes>
                    </BrowserRouter>
                )
            }}
        </Authenticator>
    )
}

export default AppRoutes;