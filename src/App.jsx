import { CartProvider } from "./context/CartContext";
import { MainRouter } from "./router/MainRouter";

function App() {
  //console.log (products)
  return (
    <div>
      <CartProvider className="px-4 pt-6 bg-slate-50">
        <MainRouter />
      </CartProvider>
    </div>
  );
}

export default App;
