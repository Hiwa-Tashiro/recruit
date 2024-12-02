import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../i18n';

Amplify.configure({
  aws_project_region: 'ap-northeast-1',
  aws_cognito_region: 'ap-northeast-1',
  aws_user_pools_id: 'ap-northeast-1_qCGkRlyWd',
  aws_user_pools_web_client_id: '21v7c1ui4627p4kt2381e8mjvk',
});

function App() {
  return (

    <div className="App App-header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit and save to reload.
        </p>
        <Link to='/about'>Go to About</Link>
      </header>
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default App;
