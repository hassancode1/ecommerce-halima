  import Navbar from "../components/Navbar";

  import best1 from  '../assets/best1.png';
  import best2 from  '../assets/best2.png';
  import best3 from  '../assets/best3.png';
  import best4 from  '../assets/best4.png';
  import StarIcon from '@mui/icons-material/Star';
  import Footer from "../components/footer";
  import { useParams } from "react-router-dom";
  import useProductget from "../../Hooks/useProductget";
  import { ColorRing} from 'react-loader-spinner'
import { useState, useEffect, useContext } from "react";
  import CircleIcon from '@mui/icons-material/Circle';
  import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
  import {ShoppingcartContext} from "../../Hooks/ShoppingCartContext";

  const ProDescription = () =>{

      const { id: ProductId } = useParams();
      const [loading, setLoading]= useState(true);
      const imageFileUrl = `https://xwsfeqsmtvzdcxhmlvig.supabase.co/storage/v1/object/public/images/`;
      const {product} = useProductget('id', ProductId)
      const {handleAddProduct} = useContext(ShoppingcartContext)
      const [ImageIndex, setImageIndex] = useState(0);
      const [selectedImageIndex, setSelectedImageIndex] = useState(0);

      const handleImageClick = (index) => {
        setSelectedImageIndex(index);
      };
      useEffect(() => {
        setLoading(product.length === 0);
    }, [product]);
    if(loading){
      return(
        <div className='flex items-center justify-center'>
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
      
  return(
      <>
  <Navbar/>
  {/* Cart */}

  <div className="pt-9 flex sm:flex-col items-center justify-center gap-8 px-10 py-6">
      {product.map((prod) => (
        <>
  {/* desktop design */}
  <div className="flex gap-[1rem] sm:hidden">
      <div className="flex sm:hidden flex-col gap-6 mt-7">
        {prod.images &&
          JSON.parse(prod?.images).map((url, index) => (
            <img
              key={index}
              src={imageFileUrl + url}
              className={`w-[80px] rounded-xl shadow-md ${
                index === selectedImageIndex ? 'border-2 border-cute' : ''
              }`}
              onClick={() => handleImageClick(index)}
              alt={`Image ${index}`}
            />
          ))}
      </div>
      <img
        className="rounded-xl shadow-md mr-[140]"
        src={imageFileUrl + JSON.parse(prod?.images)[selectedImageIndex]}
        alt={`Main Image ${selectedImageIndex}`}
      />
    </div>


        {/* mobile design */}
        <div className="flex gap-[1rem] md:hidden relative">
  <div className="flex sm:hidden flex-col gap-5 mt-7">
    {prod.images && JSON.parse(prod?.images).map((url, index) => (
      <img
        key={index}
        src={imageFileUrl + url}
        style={{ transform: `translateX(${index * -100}%)`, borderRadius: '20px' }}
        alt={`Image ${imageFileUrl + url}`}
        className="w-[80px]"
      />
    ))}
  </div>
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
    {prod.images && JSON.parse(prod?.images).map((_, index) => (
      <button
        className="block cursor-pointer w-4 h-4"
        key={index}
        onClick={() => setImageIndex(index)}
      >
        {index === ImageIndex ? (
          <CircleIcon style={{ color:"#A77866", stroke: '#fff', height: '100%', width: '100%' }} />
        ) : (
          <CircleOutlinedIcon style={{ color:"#A77866", fill: '#A77866', height: '100%', width: '100%' }} />
        )}
      </button>
    ))}
  </div>
  <img
    className="rounded-xl shadow-md mr-[140]"
    src={imageFileUrl + JSON.parse(prod?.images)[ImageIndex]}
    alt={`Image ${imageFileUrl + JSON.parse(prod?.images)[ImageIndex]}`}
  />
</div>
   

      <div className="sm:text-center mt-2" >
          <h2 className="text-bold text-2xl sm:text-xl">{prod.name}</h2>
          <p className="text-Desc text-sm mt-2">₦{prod?.price}</p>
          <div className="flex gap-4 mt-2 sm:items-center sm:justify-center">
              <div>
              <StarIcon style={{color:'#FFC700'}}/>
              <StarIcon style={{color:'#FFC700'}}/>
              <StarIcon style={{color:'#FFC700'}}/>
              <StarIcon style={{color:'#FFC700'}}/>
              <StarIcon style={{color:'#FFC700'}}/>
            </div>
            <p className="text-Desc "> | </p>
            <p className="text-Desc text-xs">5 customer review</p>
          </div>
          <p className="sm:p-3 text-footerDark mt-2 text-sm sm:text-xs ">{prod.description}</p>
        

          <div className="flex  gap-20 mt-2 sm:items-center sm:justify-center sm:gap-10">
              <div>
                  <p className="text-Desc text-sm">Size</p>
                  <div className="flex gap-2 mt-1">
                      <p className="bg-footerLight w-[30px] h-[30px] text-center">S</p>
                      <p className="bg-footerLight w-[30px] h-[30px] text-center">M</p>
                      <p className="bg-cute w-[30px] h-[30px] text-center">L</p>
                  </div>
              </div>
              <div>
                  <p className="text-Desc text-sm">Color</p>
              </div>
              <div>
             
             
              </div>
          </div>  
          <div className="flex sm:items-center flex-col mt-5"> 
          <button className="bg-cute text-white py-2 text-sm w-full mt-2 rounded-md " onClick={() => handleAddProduct(prod)}> Add to cart</button>
              </div>
          <div className="mt-10">
              <p className="text-Desc text-xs"> Category: baby girl</p>
              <p className="text-Desc text-xs mt-1"> Tags: baby girl baby unisex</p>
          </div>
          </div>  
        
          </>
      ))}   
  </div>



    {/* you may also like */}
  {/* <div className='mt-12'>
    <h1 className='text-center mb-6  text-xl text-bold'>  you may also like</h1>
    <div className='flex gap-5 items-center justify-center flex-wrap'>
      <div className=''>
        <img className='w-[230px] rounded-xl shadow-md' src={best1} alt="" />
        <p className='text-sm text-center mt-1'> 1 piece dress</p>
        <p className='text-sm text-center mt-1'> ₦8,500</p>
      <button className='bg-cute text-white py-2 text-sm w-200 mt-2  rounded-md '>Add to cart</button>
      </div>

      <div className=''>
        <img className='w-[230px] rounded-xl shadow-md' src={best2} alt="" />
        <p className='text-sm text-center mt-1'> 1 piece dress</p>
        <p className='text-sm text-center mt-1'> ₦8,500</p>
      <button className='bg-cute text-white py-2 text-sm w-200 mt-2 rounded-md'>Add to cart</button>
      </div>

      <div className=''>
        <img className='w-[230px] rounded-xl shadow-md' src={best3} alt="" />
        <p className='text-sm text-center mt-1'> 1 piece dress</p>
        <p className='text-sm text-center mt-1'> ₦8,500</p>
      <button className='bg-cute text-white py-2 text-sm w-200 mt-2 rounded-md'>Add to cart</button>
      </div>

      <div className=''>
        <img className='w-[230px] rounded-xl' src={best4} alt="" />
        <p className='text-sm text-center mt-1'> 1 piece dress</p>
        <p className='text-sm text-center mt-1'> ₦8,500</p>
      <button className='bg-cute text-white py-2 text-sm w-200 mt-2 rounded-md'>Add to cart</button>
      </div>
      
    </div>
  </div> */}

  <Footer/>
      </>
  )
  }
  export default ProDescription