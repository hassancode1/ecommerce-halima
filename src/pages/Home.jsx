import React from 'react'
import Navbar from '../components/Navbar'
import Bg from "../assets/backgroundimage.jpg"

const Home = () => {
  return (
  <>
  <Navbar />
  <div className='rounded-lg mx-auto  items-center flex flex-col p-3 md:flex-row '>
<div className='flex  flex-col text-center w-2/4'>
<h2 className='font-bold text-2xl mt-3 text-activeColor md:text-4xl'>Welcome to Cuty Tiny Toes</h2>
<p className='font-normal mt-3'> Made with love for your little ones</p>
<p>
</p>
</div>
<img src={Bg} alt='background' className='rounded-lg mt-3 md:w-2/4 h-auto object-cover'/>
  </div>
  </>
  )
}

export default Home