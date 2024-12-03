import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../i18n';

function App() {

  const { userdata } = useAuthenticator((context) => [context.user]);
  console.log(userdata);

  return (
    <Authenticator>
      {({ signOut, user }) => {
        console.log(user);
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
              <button onClick={signOut}>Sign out</button>
            </div>

          </div>
        )
      }}
    </Authenticator>
  );
}

export default App;
