import {BrowserRouter,Route,Routes} from "react-router-dom";
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

const AppRoutes = () => {
return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </BrowserRouter>
)
}

export default AppRoutes;