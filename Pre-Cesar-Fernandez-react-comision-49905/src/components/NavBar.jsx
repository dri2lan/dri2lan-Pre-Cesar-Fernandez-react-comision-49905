import store from '../assets/img/store.svg'
import iconHaburg from '../assets/img/icon-hamb.png'
export const NavBar = () => {
  return (
    <>
    <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">

        <li>
            <a href="#">Productos</a>
        </li>
        <li>
            <a href="#">Misión</a>
        </li>
        <li>
            <a href="#">Visión</a>
        </li>
        <li>
            <a href="#">Contacto</a>
        </li>
        <li>
            <a href="#">Ubicación</a>
        </li>
    </ul>
    <img className='cursor-pointer' src={store} alt="" />
    <img className='w-10 h-6 cursor-pointer sm:hidden' src={iconHaburg} alt="" />
    </>
  )
}
