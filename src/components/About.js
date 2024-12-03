import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAuthSession } from 'aws-amplify/auth';

function About() {
  const [data, setData] = useState();

  useEffect(() => {
    const test = async () => {
      const session = await fetchAuthSession();
      const token = session?.tokens?.idToken?.toString();

      fetch("https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/recruitlambda1-dev",
        {
          method: "GET",
          headers: { Authorization: token }
        }
      )
        .then((res) => res.json()) // JSON形式に変換
        .then((json) => setData(json))
        .catch((error) => console.log(error)); // エラー発生時に出力

    }

    test();
  }, [])

  return (
    <div>
      <div>About</div>
      <div><Link to='/home'>Home</Link></div>
      <div><Link to='/'>App</Link></div>
      <div>{data?.body}</div>
    </div>
  )
}

export default About;