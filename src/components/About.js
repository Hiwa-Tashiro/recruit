import { Link } from 'react-router-dom';

function About(){
  return (
    <div>
      <div>About</div>
      <div><Link to='/home'>Home</Link></div>
      <div><Link to='/'>App</Link></div>
    </div>
  )
}

export default About;