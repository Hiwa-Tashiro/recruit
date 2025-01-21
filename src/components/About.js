import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";

function About() {
  const [data, setData] = useState();
  const [cookies] = useCookies();
  

  useEffect(() => {

    
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