import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ products }) => {
  const [countItem, setCountItem] = useState(1);
  const { count, setCount } = useContext(CartContext);

  const handleAdd = () => {
    setCountItem(countItem + 1);
  };

  const handleRemove = () => {
    setCountItem(Math.max(1, countItem - 1));
  };

  const handleAddProductToCart = () => {
    if (count && Array.isArray(count)) {
      const productExists = count.find((item) => item.id === products.id);

      if (productExists) {
        setCount(
          count.map((item) =>
            item.id === products.id
              ? { ...item, quantity: item.quantity + countItem }
              : item
          )
        );
      } else {
        setCount([...count, { id: products.id, quantity: countItem }]);
      }
      console.log("Updated Cart:", count);
      setCountItem(1);
    }
  };

  return (
    <div className="flex items-center justify-between text-sm space-x-6">
      <div className="flex items-center">
        <button
          onClick={handleRemove}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-2 rounded-full mr-2"
        >
          -
        </button>
        <span className="mx-2">{countItem}</span>
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-0 px-2 rounded-full ml-2"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddProductToCart}
        className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-0 px-4 rounded-full"
      >
        Agregar Producto
      </button>
    </div>
  );
};

ItemCount.propTypes = {
  products: PropTypes.object.isRequired,
};

export default ItemCount;
