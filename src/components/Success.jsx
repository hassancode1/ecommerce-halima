import React from 'react'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import success from '../assets/success.png'
import { Link } from 'react-router-dom';
const Success = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center mt-[6rem] ' >
      <TaskAltOutlinedIcon style={{color:"#A77866", width:"100px", height:"100px", }}/>
      <h2 className='text-footerDark text-xl'>Thanks for shopping with us</h2>
      <p className='text-gray-500 text-sm mt-1 sm:text-center'>Your order is on its way. We will deliver between 1-2  weeks </p>
      <div className='flex gap-3 mt-4 p-3'>
        <Link to='/Cart'>
        <button className='bg-white text-cute py-2 border border-cute text-sm w-[250px] sm:w-[150px] '>View order</button>
        </Link>
        <Link to='/product'>
        <button className='bg-cute text-white py-2 text-sm w-[250px] sm:w-[150px] '>Continue Shopping</button>
        </Link>
      </div>
     
      <img className='fixed bottom-0' src={success} alt="" />
       </div>
      
       </>
  )
}

export default Success