import { Link } from 'react-router-dom';

function Home(){
  return (
    <div>
      <div>Home</div>
      <div><Link to='/about'>About</Link></div>
      <button><Link to='/'>App</Link></button>
    </div>
  )
}

export default Home;