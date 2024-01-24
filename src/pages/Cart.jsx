import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import ItemCount from "../components/ItemCount";

export const Cart = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos del formulario enviados:", formData);
  };

  const [products, setProducts] = useState([]);
  const { count } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      const newProducts = [];

      for (let i = 0; i < count.length; i++) {
        const docRef = doc(db, "products", count[i].id);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          newProducts.push({
            id: docSnapshot.id,
            ...docSnapshot.data(),
            quantity: count[i].quantity,
          });
        }
      }

      setProducts(newProducts);
    };

    if (count.length > 0) {
      fetchProducts();
    }
  }, [count]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between bg-white p-4 mb-4 rounded shadow-md"
          >
            <div className="flex-shrink-0 w-20">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-bold mb-2">{product.title}</h3>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-gray-800 font-bold">${product.price}</p>
              <p className="text-gray-500">Category: {product.category}</p>
            </div>
            <ItemCount products={product} />
          </div>
        ))}
        {/* Formulario de envío */}
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-6xl dark:text-white">
          Ingrese sus datos
        </h1>
        <form className="mt-6 max-w-md w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Cart;
