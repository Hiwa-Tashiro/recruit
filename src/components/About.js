import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAuthSession } from 'aws-amplify/auth';

function About() {
  const [data, setData] = useState();

  useEffect(() => {
    const test = async () => {
      const session = await fetchAuthSession();
      const token = await session?.tokens?.idToken?.toString();

      await fetch("https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/recruitlambda1-dev?str1=itabasisan arigatou&str2=text",
        {
          method: "GET",
          headers: { Authorization: token }
        }
      )
        .then((res) => res.json()) // JSON形式に変換
        .then((json) => { 
          console.log(json);
          setData(json); 
        })
        .catch((error) => console.log(error)); // エラー発生時に出力

    }

    test();
  }, [])

  return (
    <div>
      <div>About</div>
      <div><Link to='/home'>Home</Link></div>
      <div><Link to='/'>App</Link></div>
      <div>{data?.text1['hoge']}</div>
      <div>{data?.text2}</div>
      <div>{data?.text3}</div>
    </div>
  )
}

export default About;