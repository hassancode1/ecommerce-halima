import Nav from '../components/Navbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';
import supabase from '../../supabase';
import { useParams } from 'react-router';
import { ColorRing} from 'react-loader-spinner'
import { Link } from 'react-router-dom';
import { Description } from '@mui/icons-material';
const Product = () => {
  const [productData, setProductData] = useState([]);
  const { id: categoryName } = useParams();
  const [loading, setLoading] = useState(true); 

  const imageFileUrl = `https://xwsfeqsmtvzdcxhmlvig.supabase.co/storage/v1/object/public/images/`;

  useEffect(() => {
    async function fetchProductData() {
      try {
        setLoading(true);
        let { data } = await supabase.from('Product').select('*');
        if (categoryName) {
          const { data: filteredData, error } = await supabase
            .from('Product')
            .select('*')
            .eq('category', categoryName);

          if (error) {
            console.error('Error fetching data:', error.message);
            return;
          }
          data = filteredData || [];
        }

        // Set product data
        setProductData(data || []);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        // Stop loading
        setLoading(false);
      }
    }

    fetchProductData();
  }, [categoryName]);

  return (
    <>
      <Nav />
      <div className='pt-10 p-2'>
        <div className='flex justify-between px-12 py-4 sm:flex-col sm:gap-7'>
          {/* h1 */}
          <h1 className='text-xl'>Baby Girls(20)</h1>
          {/* selectButtons */}
          <div className='flex sm:flex-col gap-3'>
            <div className='relative flex items-center gap-4'>
              <p>Size</p>
              <div className='relative'>
                <select className='block appearance-none w-52 h-9 bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-3xl leading-tight focus:outline-none text-footerDark focus:bg-white focus:border-gray-500'>
                  <option>All size</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
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
          {loading ? ( // Show loader if loading is true
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
          ) : (
            <div className='flex gap-11 items-center justify-center flex-wrap'>
              {
              productData.length === 0 ? <div> No product available in this category </div> :
              productData.map((prod) => (
              <div  className='' key={prod.id} >
                <Link to={`Description/${prod.id}`}>
           
                  {prod.images &&
                    JSON.parse(prod.images)?.map((url, index) => (
                      <img
                        key={index}
                        className='w-[230px] rounded-xl shadow-md'
                        src={imageFileUrl + url}
                        alt=''
                      />
                    ))}
                  <p className='text-sm text-center mt-1'>{prod.name}</p>
                  <p className='text-sm text-center mt-1'>₦{prod.price}</p>
                  <button className='bg-cute text-white py-2 text-sm w-200 mt-2 rounded-md '>
                    Add to cart
                  </button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
