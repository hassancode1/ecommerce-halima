
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
import { Link } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import useProductget from '../../Hooks/useProductget';
import { useParams } from 'react-router-dom';
import { ColorRing} from 'react-loader-spinner'
import likeCart from '.././assets/likeCart.png';
import { Helmet } from 'react-helmet';
const Home = () => {
  
  const { id: ProductId } = useParams();
  const [Loading, setLoading]= useState(true)
  const [Featured, setFeatured]=useState([])
  const {product} = useProductget('id', ProductId)
  const imageFileUrl = `https://xwsfeqsmtvzdcxhmlvig.supabase.co/storage/v1/object/public/images/`;
  
  useEffect(() => {
    setLoading(product.length === 0);
}, [product]);
if(Loading){
  return(
 
<div className='flex items-center justify-center'>

<Helmet><title>Cute Tiny Toe Home</title>  </Helmet>

    <ColorRing
  height="80"
  width="80"
  color="#A77866"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
       />
     </div>
  )
}
 
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
  <div className='flex items-center justify-center h-370 sm:w-full mt-[3px] '>
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
    {categories.map((cat, index) =>(
   <div className="  ">
   <img src={cat} alt={titles[index]} className="w-[4rem] mb-2" />
   <p className='text-sm text-center'>{titles[index]}</p>
 </div>
    ))}
    </div>
  </div>


{/* Best seller */}
<div className='mt-12'>
  <h1 className='text-center mb-6  text-xl text-bold'> Featured Product</h1>
  <div className='flex gap-5 items-center justify-center flex-wrap'>
  {product.map((data) => (
   
  <div className='' >
          <div key={data.id}>
          <Link to={`/Description/${data.id}`} className='relative'>
  <div className='relative'>
    <img className='rounded-xl shadow-md mr-[140]' src={imageFileUrl + JSON.parse(data?.images)[0]} alt='' />
    <img src={likeCart} className='absolute top-[20rem] right-[2rem] w-[2.5rem] h-[2.5rem]' alt='' />
  </div>
  <p className='text-[15px] text-center mt-1'>{data.name}</p>
  <p className='text-[1rem] text-gray-500 text-center mt-1'>₦{data.price}</p>
</Link>

        </div>
   
  </div>
))}

  </div>
</div>

<Footer/>
  </>
  )
}

export default Home