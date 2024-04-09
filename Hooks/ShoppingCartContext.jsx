import { useState, createContext, useEffect, useRef } from "react";
import { toast } from "react-toastify";

export const ShoppingcartContext = createContext();

const cartFromLocalStorage =
  JSON.parse(localStorage.getItem("cartitems")) || [];

function ShoppingCartContext(props) {
  const [cartitems, setCartitems] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
  }, [cartitems]);



  const handleAddProduct = (product) => {
    const productExit = cartitems.find((item) => item.id === product.id);

    if (productExit) {
    
        setCartitems(
          cartitems.map((item) =>
            item.id === productExit.id
              ? { ...productExit, Qty: productExit.quantity >productExit.Qty ?productExit.Qty + 1 : productExit.Qty}
              : item
          )
        );
        toast.success("Product added to cart");
   
    } else {
      setCartitems([...cartitems, { ...product, Qty: 1 }]);
      toast.success("Product added to cart");
    }
  };
  const handleRemoveProduct = (product) => {
    const productExit = cartitems.find((item) => item.id === product.id);
    if (productExit.Qty === 1) {
      setCartitems(cartitems.filter((item) => item.id !== product.id));
    } else {
      setCartitems(
        cartitems.map((item) =>
          item.id === product.id
            ? { ...productExit, Qty: productExit.Qty - 1 }
            : item
        )
      );
    }
  };
  const handleRemove = (product) => {

      setCartitems(cartitems.filter((item) => item.id !== product.id));
      toast.success(" Product removed",)
      
  };
  const increaseQuantity = (product) => {
    const productExit = cartitems.find((item) => item.id === product.id);
    if (productExit) {
      setCartitems(
        cartitems.map((item) =>
          item.id === product.id
            ? { ...productExit, Qty: productExit.quantity >productExit.Qty ?productExit.Qty + 1 : productExit.Qty}
            : item
        )
      );
    }
  };
  const setQty = (product, amount) => {
    const productExit = [...cartitems];
    if (amount >= 1) {
      productExit.find((item) => item.id === product.id).Qty = amount;
    } else {
      setCartitems(cartitems.filter((item) => item.id !== product.id));
    }

    setCartitems(productExit);
  };

  const calculateTotal = () => {
    return cartitems?.reduce(
      (sum, { Qty, price }) => sum + price * Qty,
      0
    );
  };
  const clearCart = ()=>{
setCartitems([])
  }
 
  const value = {
    handleAddProduct,
    cartitems,
    handleRemoveProduct,
    handleRemove,
    increaseQuantity,
    setQty,
    calculateTotal,
    setCartitems,
clearCart
  
  };
  return (
    <ShoppingcartContext.Provider value={value}>
 
      {props.children}
    </ShoppingcartContext.Provider>
  
  );
};



export default ShoppingCartContext;