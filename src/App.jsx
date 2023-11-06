// import { Products } from "./components/Products";
// 
// import { Header } from "./components/Header";
// import { Cart } from "./components/Cart.jsx"
// import Footer from "./components/Footer.jsx"
import { CartProvider } from "./context/cart.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./view/Home.jsx";
function App() {

  return (
    <CartProvider> 
      <Routes>
        <Route path="/" element={<Home />} />
     
      </Routes>
      
    </CartProvider>
  );
}

export default App;
