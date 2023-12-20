import { NavBar } from './NavBar';
import { Link } from 'react-router-dom';
import logo from '../assets/img/img-cen.png';

export const Header = () => {
 return (
    <header className="flex justify-content-between items-center">
        <Link to="/">
          <img className='w-20' src={logo} alt="" />
        </Link>
        <NavBar />
               
    </header>
 );
};

export default Header;