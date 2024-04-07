import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import account from '../assets/account.png';
import like from '../assets/like.png';
import cart from '../assets/cart.png';
import { NavLink, Link } from 'react-router-dom';
import supabase from '../../supabase';
import { ShoppingcartContext } from "../../Hooks/ShoppingCartContext";
import { useContext } from 'react';

export default function Navbar() {
  const [navData, setNavData] = useState([]);
  const { cartitems} = useContext(ShoppingcartContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from('Category').select('*');
        if (error) {
          console.error('Error fetching data:', error.message);
          return;
        }
        setNavData(data || []); // Ensure that data is an array
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
    fetchData();
  }, []); // Fetch data only once when component mounts

  const isActive = {
    color:"white",
    backgroundColor: "black",
  };

  return (
    <nav className="w-full overflow-x-auto">
      <div className="flex items-center justify-between bg-bgColor h-80 px-4 py-2">
        <div className="flex items-center gap-2">
          <img src={logo} className="w-14 h-14" alt="" />
          <p className="text-cute text-md font-bold">Cute Tiny Toe</p>
        </div>
        <div className="sm:hidden">
          <input className="w-460 h-8 rounded-3xl p-3 text-sm" type="text" placeholder="Search our store" />
        </div>
        <div className="flex gap-3 p-2">
          <p className="text-cute text-md sm:hidden">Account</p>
          <img src={account} className="w-6 h-6" alt="" />
          <img src={like} className="w-6 h-6" alt="" />
          <div>
          <Link to='/Cart'><img src={cart} className="w-6 h-6" alt="" /></Link>
          <span className="bg-red-500 text-white rounded-full px-2 py-1 text-[9px] absolute top-[14px] right-[16px]">
           {cartitems.reduce((total, item) => total + item.Qty, 0)}
           </span>



          </div>
        </div>
      </div>
      <div className="flex bg-black text-white text-sm justify-center h-15 font-bold gap-2 p-2 overflow-x-auto whitespace-nowrap">
        <div className="flex flex-row gap-1 overflow-y-auto">
          
        {Array.isArray(navData) && navData.map((nav) => (
          <NavLink
        to={`/product/${nav.name}`}
        key={nav.id}
        className={({ isActive, isPending, isTransitioning }) =>
       [
        "p-2",
      isPending ? "pending" : "",
      isActive ? " bg-white text-black" : "",
      isTransitioning ? "transitioning" : "",
       ].join(" ")
      } >
      {nav.name}
      </NavLink>
       ))}
<div className="flex items-stretch">
          <NavLink to='/product' className="text-red-400 hover:bg-white hover:text-red-400 p-2">All clothing</NavLink>
        </div> 
        </div>

        
      </div>
    </nav>
  );
}
