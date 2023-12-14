
import { useEffect, useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import { Header } from "./components/header"
import { getProducts } from "./services/productsService";
import { MainRouter } from "./router/MainRouter";

function App() {
  
  const [greeting,  setGreeting] = useState('¡Bienvenidos, Gracias por Visitar Nuestra Tienda!');
  const [ products, setProducts] = useState ([]);

  useEffect (() =>{
    getProducts(8).then((res) => {
      setProducts (res.data.products)

    })
  },[])
  //console.log (products)
  
  return (
    <div>
      <main className="px-4 pt-6 bg-slate-50">
        <Header />
       
      </main>

      <div className="text-center text-black text-2xl">
        <ItemListContainer greeting={greeting} products = {products} />
      </div>
    </div>
  );
}

export default App;