import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";

function About() {
  const [data, setData] = useState();
  const [cookies] = useCookies();
  

  useEffect(() => {
    const fetchlambda = async () => {
      const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/recruitlambda1-dev";
      await fetch(url,
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            Authorization: cookies.token 
          },
          body: JSON.stringify(
            {
                formdata : {
                    student_id : 1,
                    recruit_year : cookies.recruit_year,
                },
                student_id: cookies.userId,
                user: cookies.user,
            })
        }
      )
        .then((res) => res.json()) // JSON形式に変換
        .then((data) => { 
          console.log(data);
          setData(data); 
        })
        .catch((error) => console.log(error)); // エラー発生時に出力

    }

    fetchlambda();
    
  }, [])

  return (
    <div>
      <div>About</div>
      <div><Link to='/home' state={{ student_id: 25565 }}>Home</Link></div>
      <div><Link to='/'>App</Link></div>
      <div><Link to='/app2'>App2</Link></div>
    </div>
  )
}

export default About;