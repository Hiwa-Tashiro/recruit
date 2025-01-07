import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function SC05() {
  const [status, setStatus] = useState();
  const { state } = useLocation()
  useEffect(() => {
    setStatus(state)
  }, [])


  return( 
    <div>{status?.student_id}</div>
  )
  

}

export default SC05;