import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";

function App2() {
  const [data, setData] = useState();
  const [cookies] = useCookies();

  useEffect(() => {
    const fetchlambda = async () => {
      const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/recruitlambda2-dev";
      await fetch(url + "?str1=itabasisan arigatou&str2=hugahuga",
        {
          method: "POST",
          headers: { Authorization: cookies.token },
          body: JSON.stringify(
            {
                id: cookies.userId,
                user: "tashiro",
            })
        }
      )
        .then((res) => res.json()) // JSON形式に変換
        .then((json) => { 
          console.log(json);
          setData(json); 
        })
        .catch((error) => console.log(error)); // エラー発生時に出力

    }

    fetchlambda();
    
  }, [])

  return (
    <div>
      <div>About</div>
      <div><Link to='/home'>Home</Link></div>
      <div><Link to='/'>App</Link></div>
      <div><Link to='/app2'>App2</Link></div>
      <div>{data?.text1['hoge'] || "null"}</div>
      <div>{data?.text2}</div>
      <div>{data?.text3}</div>
    </div>
  )
}

export default App2;