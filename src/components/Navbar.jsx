import { useState } from "react";
import Hamburger from "../assets/hamburger.svg";
import Cart from "../assets/cart.svg"
import Logo from "../assets/logo.svg"
import "../App.css";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav>
      <section className="MOBILE-MENU flex justify-between items-center p-4 md:hidden  shadow-md mb-4">
        <div>
        <img  src={Logo} alt="logo" className="w-36 h-16"/>
        </div>
        <div className="flex gap-3">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <img src={Hamburger} alt="menu" className="cursor-pointer" />
        </div>
        <img src={Cart} alt="cart" className="cursor-pointer" />
        </div>
      
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div >
            <img  src={Logo} alt="logo" className="w-36 h-16 cursor-pointer  absolute top-0 left-1 px-8 py-8 "/>
          </div>
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-5 w-5  cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>

          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col  justify-between min-h-[250px] absolute top-20 left-4">
            <li className=" my-8 ">Home</li>

            <li
              className=" my-8"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <a href="#resources"> Shop </a>
            </li>
            <li
              className=" my-8  "
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <a href="#aboutus"> Categories </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="w-full shadow-md">
      <div className=" DESKTOP-MENU hidden space-x-8 md:flex   justify-between mx-auto items-center px-6  w-11/12  mb-4">
        <div>
        <img  src={Logo} alt="logo" className="w-36 h-16"/>
        </div>
        <ul className="flex justify-between w-2/4 ">
          <li className=" my-8  text-black">Home</li>

          <li className=" my-8  text-black">
            <a href="#resources"> Shop </a>
          </li>
          <li className=" my-8  text-black">
            <a href="#aboutus"> Categories </a>
          </li>
          <li className=" my-8  text-black">About us</li>     
        <li>  <img src={Cart} alt="cart" className=" my-8  text-black cursor-pointer" /></li> 

        </ul>
      </div>
      </div>
    </nav>
  );
}
