import Home from "./pages/Home"
import Product from "./pages/Product";
import ProDescription from "./pages/ProDescription";
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout";
import ShoppingCartContext from "../Hooks/ShoppingCartContext";
import Success from "./components/Success";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <ShoppingCartContext>
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="product" element={<Product/>}/>
      <Route path="product/:id" element={<Product/>}/>
      <Route path="Description/:id" element={<ProDescription/>}/>
      <Route path="Description" element={<ProDescription/>}/>
     <Route path="Cart" element={<Cart/>}/>
       <Route path="success" element={<Success/>}/>
     <Route path="Cart/:id" element={<Cart/>}/>
     <Route  path="Checkout" element={<Checkout/>}/>
     <Route  path="Checkout/:id" element={<Checkout/>}/>
     
    </Routes>
    <ToastContainer/>
    </ShoppingCartContext>
  )
}

export default App

