import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link} from 'react-router-dom';
import {ShoppingcartContext} from '../../Hooks/ShoppingCartContext';
import { useContext } from 'react';
const Cart = () =>{
    const imageFileUrl = `https://xwsfeqsmtvzdcxhmlvig.supabase.co/storage/v1/object/public/images/`;
    const { cartitems, handleRemoveProduct, handleRemove, increaseQuantity, calculateTotal,  isProductSoldOut } = useContext(ShoppingcartContext);

console.log(cartitems)
return(
  
<div className='flex items-center justify-center flex-col pt-4'>
    <div className='flex  gap-[12rem] md:gap-[22rem]'>
        <p className='text-footDark text-xl'>Your Cart</p>
        <Link to='/Product'>  <CloseIcon /></Link>
     
    </div>
    <div style={{ width: '100%', borderTop: '1px solid #E5E7EB', margin: '1rem 0' }}></div>

    {cartitems.length === 0 ?
    <div>
        <h3>Your cart is currently</h3>
     </div>
          :
    cartitems.map((prod) =>( 
        <>
       <div className='flex justify-between gap-[2rem] md:gap-[5rem] sm:gap-[0.5rem] mt-[1rem] '>
       <img className="w-[80px] h-[100px]" src={imageFileUrl + JSON.parse(prod?.images)[0]} alt="" />
        <div>
            <h2 className='text-md'>{prod.name}</h2>
            <div className='flex mt-2 gap-2'> 
            <div className='flex gap-1'>
            <p className='text-Cart'> Color: </p>
            <span>Black</span>
            </div>
           <div className='flex gap-1'>
           <p className='text-Cart'>Size: </p>
           <span>{prod.size}</span>
           </div>
            
            </div>
            <div>

            <div className="flex gap-4 mt-3">
            <h3 className="bg-increment w-[30px] h-[30px]  rounded-full text-center cursor-pointer"
              onClick={() => handleRemoveProduct(prod)}>-</h3>
             <p>{prod.Qty}</p>
        
             {prod.Qty >= prod.quantity ? (
                <div className="bg-increment w-[30px] h-[30px] rounded-full text-center cursor-pointer">
                <div style={{ opacity: 0.2 }}>+</div>
            </div>
) : (
    <h3 className="bg-increment w-[30px] h-[30px] rounded-full text-center cursor-pointer"
    onClick={() => increaseQuantity(prod)} >+</h3>
)}

             </div>

            </div>
        </div>

        <div>
        <DeleteOutlineIcon style={{color:'red' ,cursor:"pointer"}}  onClick={() => handleRemove(prod)}/>
        <p className='mt-8'>₦{prod.price}</p>
       </div>
       
       </div>
       </>
       )) }
       
    { cartitems.length > 0 &&<div className="pt-24">
   
        <div className="flex justify-between gap-[10rem] md:gap-[22rem]">
           <p>Total({calculateTotal()} items)</p>
            <p>₦{calculateTotal()}</p>
         </div>
           
     <Link to='/Checkout'>
        <button className='bg-cute text-white py-2 text-sm w-full mt-2 rounded-md'>CheckOut</button>
        </Link>
    </div>}
</div>


)
}
export default Cart