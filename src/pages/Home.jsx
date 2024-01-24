import { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer";
import { useGetProducts } from "../hooks/useProducts";

export const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });

  const [greeting] = useState(
    "¡Bienvenidos, Gracias por Visitar Nuestra Tienda!"
  );

  const { products } = useGetProducts("products");

  return <ItemListContainer greeting={greeting} products={products} />;
};
