
import iconHaburg from '../assets/img/icon-hamb.png'
import CartWidget from './CartWidget'

export const NavBar = () => {
  return (
    <div>
    <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
   
    <div class="submenu">
  <button>Productos</button>
  <div class="submenu-content">
  <a href="#">Producto1</a>
  <a href="#">Producto2</a>
  <a href="#">Producto3</a>
  </div>
</div>
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
        <li>
            <CartWidget />
        </li>

    </ul>
    
    <img className='w-10 h-6 cursor-pointer sm:hidden' src={iconHaburg} alt="" />
    </div>
  )
}
