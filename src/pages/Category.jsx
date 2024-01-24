import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import { useGetProductByCategory } from "../hooks/useProducts";

export const Category = () => {
  const { id } = useParams();
  const { products } = useGetProductByCategory(id);

  return (
    <ItemListContainer greeting={`Categoría: ${id}`} products={products} />
  );
};
