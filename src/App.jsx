import Home from "./pages/Home"
import Product from "./pages/Product";
import ProDescription from "./pages/ProDescription";
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="product" element={<Product/>}/>
      <Route path="product/:id" element={<Product/>}/>
      <Route path="Description/:id" element={<ProDescription/>}/>
      <Route path="Description" element={<ProDescription/>}/>
     <Route path="Cart" element={<Cart/>}/>
     <Route  path="Checkout" element={<Checkout/>}/>
   
    </Routes>
  
    </>
  )
}

export default App
