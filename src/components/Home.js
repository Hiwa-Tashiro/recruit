import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";

function Home(){
  const [status, setStatus] = useState();
  const [name, setName] = useState();
  const [cookies, setCookie, removeCookie] = useCookies();
  const { state } = useLocation()

  useEffect(() => {
    setStatus(state)
    setCookie("recruit_year",2025)
  }, [])

  const handlerChange = (e) => {
    setName(e.target.value);
  };
  const handlerDelete = () => {
    removeCookie("name");
  };
  const handleSubmit = () => {
    setCookie("name", name);
  };

  return (
    <div>
      <div>Home</div>
      <div><Link to='/about'>About</Link></div>
      <button><Link to='/'>App</Link></button>

      <div className="App">
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="name" onChange={handlerChange} />
          </label>
          <input type="submit" value="保存" />
          <button onClick={handlerDelete}>削除</button>
          <div>{cookies.name}</div>
          <div>{status?.student_id}</div>
        </form>

        <form>
          <input type="datetime-local"></input>
        </form>
      </div>

    </div>
  )
}

export default Home;