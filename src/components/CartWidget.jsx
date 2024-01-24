import { useContext } from "react";
import store from "../assets/img/store.svg";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { count } = useContext(CartContext);

  const totalQuantity = Array.isArray(count)
    ? count.reduce((total, item) => total + item.quantity, 0)
    : 0;

  return (
    <Link to="../cart">
      <div className="flex">
        <img className="cursor-pointer mr-4" src={store} alt="" />
        <span className="flex justify-start">{totalQuantity}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
