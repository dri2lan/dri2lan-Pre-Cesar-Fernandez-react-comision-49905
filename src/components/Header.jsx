import { NavBar } from './NavBar'
import logo from '../assets/img/img-cen.png'

export const Header = () => {
  return (
    <header className="flex place-content-between items-center">
        <img className='w-20' src={logo} alt="" />
        <NavBar />
    </header>
  )
}
