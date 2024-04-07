import Nav from '../components/Navbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import useProductget from '../../Hooks/useProductget';
import likeCart from '.././assets/likeCart.png';

const Product = () => {
  const { id: categoryName } = useParams();
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('All size'); 
  const imageFileUrl = `https://xwsfeqsmtvzdcxhmlvig.supabase.co/storage/v1/object/public/images/`;
  const { product, error } = useProductget('category', categoryName);

  useEffect(() => {
    setLoading(product.length === 0); 
  }, [product]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value); 
  };

  const filteredProducts = selectedSize === 'All size' ? product : product.filter((item) => item.size === selectedSize);

  if (loading) {
    return (
      <div className='flex items-center justify-center'>
        <ColorRing height='80' width='80' color='#A77866' ariaLabel='circles-loading' wrapperStyle={{}} wrapperClass='' visible={true} />
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className=' '>
        <div className='flex justify-between px-12 py-4 sm:flex-col sm:gap-7'>
          {/* h1 */}
          <h1 className='text-xl'>Product(20)</h1>
          {/* selectButtons */}
          <div className='flex sm:flex-col gap-3'>
            <div className='relative flex items-center gap-4'>
              <p>Size</p>
              <div className='relative'>
                <select
                  className='block appearance-none w-52 h-9 bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-3xl leading-tight focus:outline-none text-footerDark focus:bg-white focus:border-gray-500'
                  value={selectedSize} 
                  onChange={handleSizeChange}
                >
                  <option>All size</option>
                  {product.map((item) => (
                    <option key={item.id}>{item.size}</option> 
                  ))}
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <KeyboardArrowDownIcon className='h-4 w-4' />
                </div>
              </div>
            </div>
          </div>
          {/* selectButtons */}
        </div>
        <div className='mt-12'>
          <div className='flex gap-[1rem] items-center justify-center flex-wrap'>
            {filteredProducts.length === 0 ? (
              <div>No product available in this category</div>
            ) : (
              filteredProducts.map((prod) => (
                <div className='flex flex-col items-center' key={prod.id}>
                  <Link to={`/Description/${prod.id}`} className='relative'>
                  <img className='rounded-xl shadow-md' src={imageFileUrl + JSON.parse(prod?.images)[0]} alt='' />
                    <img src={likeCart} className='absolute top-[20rem] right-[2rem] w-[2.5rem] h-[2.5rem]' alt='' />
                    <p className='text-[15px] text-center mt-1'>{prod.name}</p>
                    <p className='text-[1rem] text-gray-500 text-center mt-1'>₦{prod.price}</p>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
