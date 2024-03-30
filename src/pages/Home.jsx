
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';
import babygirl from '../assets/babygirl.png';
import babyboy from '../assets/babyboy.png';
import uniSex from '../assets/unisex.png';
import access from '../assets/Access.png';
import footwear from '../assets/footwear.png';
import nursery from '../assets/nursery.png';
import newborn from '../assets/Newborn.png';
import feeding from '../assets/feeding.png';
import best1 from  '../assets/best1.png';
import supabase from '../../supabase';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  const [Loading, setLoading]= useState(true)
  const [Featured, setFeatured]=useState([])

  const imageFileUrl = `https://xwsfeqsmtvzdcxhmlvig.supabase.co/storage/v1/object/public/images/`;
  useEffect(() => {
    async function fetchProductData() {
      try {
        const { data, error } = await supabase.from('Product').select('*');
        if (error) {
          console.error('Error fetching data:', error.message);
          return;
        }
        setFeatured(data || []); // Ensure that data is an array
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
    fetchProductData();
  }, []);
  // const handleDesc= () =>{
  //  navigate('/Description')
  // }
  
const categories = [babygirl, babyboy, uniSex, access, footwear, nursery, newborn, feeding]
const titles = ['baby girl', 'baby boy', 'unisex', 'Accessories', 'footwear', 'Nursery', 'New born', 'Feeding']
  return (    
  <>
  <Navbar />
  {/* background image */}
  <div className='flex justify-center items-center flex-col'>
  <div className=' flex justify-center items-center gap-4 pt-5'>
  <div style={{ position: 'relative' }}>
  <img className='xl:w-510 xl:h-370 opacity-4' src={home1} alt="" />
  <p style={{  position: 'absolute', top: '47%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px' }} className='md:hidden'>New Season</p>
  <button style={{  position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white',  fontSize:'12px', padding:"8px" }} className='md:hidden'>shop now</button>

</div>

    <img className='sm:hidden w-280 h-370' src={home2} alt="" />
  </div>
  <div className='flex items-center justify-center h-370 sm:w-full mt-8 '>
  <div className='bg-cute  xl:w-530 h-370 sm:w-full p-10 '>
              <h1 className='text-white text-3xl mt-2'>Tiny Toes, Big Smiles</h1>
              <p className='text-bgColor text-sm mt-2'> Shop Adorable Essentials for Your Precious Ones <br />that are gentle on delicate skin and big on <br />cuteness.</p>
              <button className='bg-white text-cute p-1 text-sm w-24 mt-2'>Let's go</button>
            </div>
       <img className='sm:hidden w-280 h-370' src={home3}  alt="" />
  </div>
   </div>
  
  {/* shop category */}
   
  <div className=' flex flex-col mt-12'>
    <h1 className='text-center mb-6  text-xl text-bold'>Shop Category</h1>
    <div className='flex justify-center items-center flex-wrap  gap-5'>
    {categories.map((category, index) =>(
   <div className="  ">
   <img src={category} alt={titles[index]} className=" mb-2" />
   <p className='text-sm text-center'>{titles[index]}</p>
 </div>
    ))}
    </div>
  </div>


{/* Best seller */}
<div className='mt-12' onClick={handleDesc}>
  <h1 className='text-center mb-6  text-xl text-bold'> Featured Product</h1>
  <div className='flex gap-5 items-center justify-center flex-wrap'>
  {Featured.map((data) => (
     <div className=''>
          {data.images &&
                    JSON.parse(data.images)?.map((url, index) => (
                      <img
                        key={index}
                        className='w-[230px] rounded-xl shadow-md'
                        src={imageFileUrl + url}
                        alt=''
                      />
                    ))}
    <p className='text-sm text-center mt-1'>{data.name}</p>
    <p className='text-sm text-center mt-1'>₦{data.price}</p>
    <button className='bg-cute text-white py-2 text-sm w-200 mt-2 rounded-md'>Add to cart</button>
  </div>
))}

    
  </div>
</div>

<Footer/>
  </>
  )
}

export default Home