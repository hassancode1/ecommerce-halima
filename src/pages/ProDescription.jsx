import Navbar from "../components/Navbar";
import rectangle from '../assets/Rectangle.png';
import best1 from  '../assets/best1.png';
import best2 from  '../assets/best2.png';
import best3 from  '../assets/best3.png';
import best4 from  '../assets/best4.png';
import StarIcon from '@mui/icons-material/Star';
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ProDescription = () =>{
  
    const [DescData, setDescData]= useState('');
    const { id: ProductId } = useParams();
  
    useEffect(() => {
        async function fetchProductData() {
          try {
         
            let { data } = await supabase.from('Product').select('*');
            if (ProductId) {
              const { data: filteredData, error } = await supabase
                .from('Product')
                .select('*')
                .eq('id', ProductId);
    
              if (error) {
                console.error('Error fetching data:', error.message);
                return;
              }
              data = filteredData || [];
            }
    
            // Set product data
            setDescData(data || []);
          } catch (error) {
            console.error('Error fetching data:', error.message);
          } finally {
            // Stop loading
         
          }
        }
    
        fetchProductData();
      }, [ProductId]);
      
console.log(DescData)
return(
    <>
<Navbar/>
{/* Cart */}
 <div className="pt-9 flex sm:flex-col items-center gap-8 px-10 py-6">
    
    <div className="flex sm:hidden flex-col gap-5 mt-7">
        <img src={rectangle} alt="" />
        <img src={rectangle} alt="" />
        <img src={rectangle} alt="" />
    </div>
 
    <div>
    <img className="rounded-xl shadow-md mr-[140] " src={best1} alt="" />
    </div>

    <div className="sm:text-center" >
        <h2 className="text-bold text-2xl sm:text-xl"> 2 Piece Dress with a Head Band</h2>
        <p className="text-Desc text-sm mt-2">₦8,500</p>
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
        <p className="sm:p-3 text-footerDark mt-2 text-sm sm:text-xs ">Introducing our adorable 2 Piece Dress with Headband set, designed to sprinkle <br className="sm:hidden"/> dash of charm and a whole lot of cuteness to your little one's wardrobe!</p>
       

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
            <p className="text-Desc text-sm">Quatity</p>
            <div className="flex gap-4 mt-1">
            <h3 className="bg-increment w-[30px] h-[30px]  rounded-full text-center">-</h3>
            <p>1</p>
            <h3 className="bg-increment w-[30px] h-[30px]  rounded-full text-center">+</h3>
            </div>
            </div>
        </div>
 
           
        <div className="flex sm:items-center flex-col mt-5"> 
            <button className="bg-cute w-[71%] py-1 px-1 text-white rounded-md">Add to cart</button>
            <button className="border-cute rounded-md border border-solid  w-[71%] mt-3 py-1 px-1 text-cute">Add to whitelist</button>

        </div>
        <div className="mt-10">
            <p className="text-Desc text-xs"> Category: baby girl</p>
            <p className="text-Desc text-xs mt-1"> Tags: baby girl baby unisex</p>
        </div>
        </div>     
 </div>




   {/* you may also like */}
 <div className='mt-12'>
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
</div>
 <Footer/>
    </>
)
}
export default ProDescription