import { useState } from "react";
import logo from '../assets/logo.png';
import account from '../assets/account.png';
import like from '../assets/like.png';
import cart from '../assets/cart.png';
import  Searchimg from "../assets/search.png";




export default function Navbar() {


  return (
    <nav className=" ">
      <div className="flex items-center p-1 justify-between bg-bgColor h-100 px-4 py-2 " > 
      <div className=" flex items-center gap-2 ">
      <img src={logo} className="w-14 h-14 " alt="" />
      <p className="text-cute text-lg  font-bold ">Cute Tiny Toe</p>
      </div>
      <div className="sm:hidden">
      {/* <img src={Searchimg} className=" bg-cute rounded-2xl p-2 absolute top-6 left-72" alt="" /> */}
        <input  className="w-465 h-8 rounded-3xl p-3 text-sm " type="text" placeholder="Search our store" />
     
      </div>
      <div className="flex gap-3 p-2 " >
        <p className="text-cute text-sm sm:hidden">Account</p>
        <img src={account} className="w-5 h-5" alt="" />
        <img src={like} className="w-5 h-5" alt="" />
        <img src={cart} className="w-5 h-5" alt="" />
      </div>
      </div>

      <div className="flex bg-black text-white text-sm md:justify-center font-bold gap-3 p-2 h-10  md-justify-center overflow-x-auto overflow-y-auto whitespace-nowrap">
  <div><p>Baby Girls</p></div>
  <div><p>Baby Boys</p></div>
  <div><p>Baby UniSex</p></div>
  <div><p>New Born</p></div>
  <div><p>Foot Wear</p></div>
  <div><p>Accessories</p></div>
  <div><p>Nursery</p></div>
  <div><p>Feeding</p></div>
  <div><p className="text-red-400">All clothing</p></div>
</div>


    </nav>
 
  );
}
