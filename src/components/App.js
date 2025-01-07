import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { useCookies } from "react-cookie";

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../i18n';


function App() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const deleteUserData = () => {
    removeCookie("userId");
    removeCookie("token");
  };

  const userMesseage = (username) =>{
    let messeage
    if(username === 'htashiro'){
      messeage = 'fight';
    }
    else if(username === 'user'){
      messeage = 'gannba';
    }
    else{
      messeage = 'donnmai';
    }
    return messeage;
  }

  return (
    <Authenticator>
      {({ signOut, user }) => {

        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit and save to reload.
              </p>
              <Link to='/about'>Go to About</Link>
            </header>

            <div>
              <h1>Hello {user.userId}</h1>
              <div>{user.username}</div>
              <div>{userMesseage(user.username)}</div>
              <button onClick={() => {
                deleteUserData();
                signOut();
              }}>Sign out</button>
            </div>

          </div>
        )
      }}
    </Authenticator>
  );
}

export default App;
