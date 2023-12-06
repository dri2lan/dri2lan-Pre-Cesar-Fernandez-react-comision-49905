
import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";

import { Header } from "./components/header"

import Footer from "./components/Footer";

function App() {
  
  const [greeting, setGreeting] = useState('¡Bienvenidos, Gracias por Visitarnos!');
  
  return (
  <div>
      
    <main className="px-4 pt-6 bg-slate-50">
      <Header />
        </main>

    <div className="text-center text-black text-2xl">
      <ItemListContainer greeting={greeting} />
        </div>
   
    
    <ItemListContainer />

    <Footer />

  </div>
  );
}

export default App;
