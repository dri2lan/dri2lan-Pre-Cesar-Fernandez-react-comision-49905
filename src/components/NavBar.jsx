import { Link } from "react-router-dom";
import iconHaburg from "../assets/img/icon-hamb.png";
import CartWidget from "./CartWidget";
import { useCategory } from "../hooks/useCategory";

export const NavBar = () => {
  const { category } = useCategory();

  return (
    <nav className="absolute left-80 z-10">
      <ul className="sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Misión
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Contacto
          </a>
        </li>
        <div className="submenu text-rose-500 font-semibold w-500">
          <button className="hover:text-violet-400">Categorias</button>
          <div className="submenu-content bg-stone-200">
            <ul>
              <li key={"productos_list"}></li>
              {category.map((categoria) => {
                return (
                  <li key={categoria}>
                    <Link to={`/category/${categoria}`}>{categoria}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <li className="sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center absolute left-76 top-[1px]">
            <CartWidget />
          </li>
        </div>
      </ul>
      <img
        className="w-10 h-6 cursor-pointer sm:hidden"
        src={iconHaburg}
        alt=""
      />
    </nav>
  );
};

export default NavBar;
