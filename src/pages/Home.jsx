import React from 'react'
import Navbar from '../components/Navbar';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png'
import home3 from '../assets/home3.png'

const Home = () => {
  return (
  <>
  <Navbar />
  <div className='rounded-lg mx-auto  items-center flex flex-col p-3 md:flex-row '>
    <div className='grid grid-cols-2 gap-4'>
     <div className=''>
      <img src={home1} className='' alt="" />
      </div>  
      <div>
      <img src={home2} className='h-499 w-412'  alt="" />
      </div> 
      <div className='bg-cute w-868 h-507'>

      </div>
      <div>
      <img src={home3} alt="" />
      </div> 
    </div>
  </div>
  </>
  )
}

export default Home