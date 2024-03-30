import MailOutlineIcon from '@mui/icons-material/MailOutline';
import logofooter from '../assets/logofooter.png';
import youtube from '../assets/youtube.png';
import whatsup from '../assets/whatsup.png';
import facebook from '../assets/facebook.png';
const footer = () =>{
    return(
        <div className="mt-20 ">
            {/* Newsletter */}
         <div className=' bg-footerLight flex items-center pt-12 flex-col h-319'>
            <h1 className='text-xl font-bold'>NewsLetter</h1>
            <p className='mb-5 text-sm mt-2 text-footerDark p-4'>Subscribe to our newsletter to receive a discount on your first order, new <br />products notifications, and discover new brands you'll LOVE.</p>
            <div className="flex items-center w-715 sm:w-full bg-input border-b p-2 sm:m-3 rounded-md ">
  <MailOutlineIcon style={{color:"#9A9EA6"}}/>
  <input type="text" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Enter your email..."/>
  <button class="bg-cute  text-white font-bold py-2 px-4 rounded-md">Button</button>
</div>
         </div>
      {/* footer */}

     

        <div className='pt-8 bg-footerDark h-395'>
            <div className=' gap-2 flex items-center justify-center'>
        <img src={logofooter} alt="" />
        <h1 className='text-white text-xl'>Cute Tiny Toe</h1>
        </div>
        <div className='flex items-center justify-center gap-4 text-white text-xs  flex-wrap pt-4 p-2'>
            <p>Baby girl</p>
            <p>Baby boy</p>
            <p>Baby unisex</p>
            <p>New Born</p>
            <p>Footwear</p>
            <p>Accessories</p>
            <p>Nursery</p>
            <p>Feeding </p>
            <p>All clothing</p>
        </div>
        <div className='flex items-center justify-center gap-7 pt-6'>
            <img className='bg-white p-5 rounded-full' src={youtube} alt="" />
            <img className='bg-white p-5 rounded-full' src={whatsup} alt="" />
            <img  className='bg-white p-5 rounded-full' src={facebook} alt="" />
        </div>

        <p className='text-center pt-12 text-Allright'> © 2000-2022, All Rights Reserved</p>
        </div>
    
      </div>
       
    )
}
export default footer