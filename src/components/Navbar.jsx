import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import account from '../assets/account.png';
import like from '../assets/like.png';
import cart from '../assets/cart.png';
import { NavLink, Link } from 'react-router-dom';
import supabase from '../../supabase';


export default function Navbar() {
  const [navData, setNavData] = useState([]);

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
          <p className="text-cute text-lg font-bold">Cute Tiny Toe</p>
        </div>
        <div className="sm:hidden">
          <input className="w-460 h-8 rounded-3xl p-3 text-sm" type="text" placeholder="Search our store" />
        </div>
        <div className="flex gap-3 p-2">
          <p className="text-cute text-sm sm:hidden">Account</p>
          <img src={account} className="w-5 h-5" alt="" />
          <img src={like} className="w-5 h-5" alt="" />
          <Link to='/Cart'><img src={cart} className="w-5 h-5" alt="" /></Link>
        </div>
      </div>
      <div className="flex bg-black text-white text-sm justify-center h-15 font-bold gap-3 p-2 overflow-x-auto whitespace-nowrap">
        <div className="flex flex-nowrap">
          
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

        </div>

        <div className="flex items-stretch">
          <NavLink to='/product' className="text-red-400 hover:bg-white hover:text-red-400 p-2">All clothing</NavLink>
        </div> 
      </div>
    </nav>
  );
}
