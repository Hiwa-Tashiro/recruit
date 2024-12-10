import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCookies } from "react-cookie";

function Home(){
  const [name, setName] = useState();
  const [cookies, setCookie, removeCookie] = useCookies();

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
          <div>{cookies.token}</div>
        </form>
      </div>

    </div>
  )
}

export default Home;