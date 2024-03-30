import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CartImage from '../assets/CartImage.png'
const Cart = () =>{
return(
  
<div className='flex items-center justify-center flex-col pt-4'>
    <div className='flex  gap-[12rem] md:gap-[22rem]'>
        <p className='text-footDark text-xl'>Your Cart</p>
        <CloseIcon />
    </div>
    <div style={{ width: '100%', borderTop: '1px solid #E5E7EB', margin: '1rem 0' }}></div>


    <div className='flex justify-between gap-[1rem] md:gap-[5rem]  mt-[1rem] px-6'>
        <img src={CartImage} alt="" />
        <div>
            <h2 className='text-md'>1 piece dress and a head band</h2>
            <div className='flex mt-2 gap-2'> 
            <div className='flex gap-1'>
            <p className='text-Cart'> Color: </p>
            <span>Black</span>
            </div>
           <div className='flex gap-1'>
           <p className='text-Cart'>Size: </p>
           <span>Medium</span>
           </div>
            
            </div>
            <div>
        
            <div className="flex gap-4 mt-3">
            <h3 className="bg-increment w-[30px] h-[30px]  rounded-full text-center">-</h3>
            <p>1</p>
            <h3 className="bg-increment w-[30px] h-[30px]  rounded-full text-center">+</h3>
            </div>
            </div>
        </div>

        <div>
        <DeleteOutlineIcon style={{color:'red'}}/>
        <p className='mt-8'>₦8,500</p>
    </div>
    </div>
       
    <div className="pt-24">
        <div className="flex justify-between gap-[10rem] md:gap-[22rem]">
            <p>Total(5 items)</p>
            <p>₦8,500</p>
        </div>
        <button className='bg-cute text-white py-2 text-sm w-full mt-2 rounded-md'>Add to cart</button>
    </div>
</div>


)
}
export default Cart