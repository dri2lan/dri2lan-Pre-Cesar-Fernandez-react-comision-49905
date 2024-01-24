import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import Header from "../components/header";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
import { Category } from "../pages/Category";
import { Cart } from "../pages/Cart";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/cart/" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
