import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClear } from "react-icons/md";

function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const products = useSelector((state: any) => state.product.value);

  return (
    <nav className="w-full h-auto  bg-white">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between border-b border-b-[#0000001a]">
        <div className="flex space-x-2">
          {" "}
          <button
            className="md:hidden mx-2 text-2xl"
            onClick={() => setShowMenu(!showMenu)}
          >
            <GiHamburgerMenu />
          </button>
          <Link to="/">
            <img src="/assests/logo.png" alt="logo" />
          </Link>
        </div>

        <ul className="hidden md:flex md:flex-row md:space-x-7 font-normal text-[16px] ">
          <li>
            <a href="#newArrivals">New Arrivals</a>
          </li>
          <li>
            <a href="#topSelling">Top Selling</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
        </ul>
        <div>
          <input
            className="hidden md:w-[577px] md:flex items-start gap-[12px] px-[16px] py-[12px] relative bg-[#efefef] rounded-[62px] overflow-hidden focus:outline-none placeholder:p-4"
            placeholder="Search for products..."
          />

          <img
            className="hidden block md:w-[24px] md:h-[24px] absolute top-5 m-2"
            alt="Frame"
            src="/assests/search.png"
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <Link to="/cart" className=" m-2">
            <FiShoppingCart className="w-[30px] h-[30px] relative" />
            {products.length ? (
              <span className="absolute rounded-full bg-red-600 text-white w-5 h-5 text-center top-9">
                {products.length}
              </span>
            ) : null}
          </Link>

          <Link to="/" className=" m-2">
            <FaRegUserCircle className="w-[30px] h-[30px] " />
          </Link>
        </div>
      </div>
      {showMenu && (
        <div className="flex flex-col w-full h-[400px] bg-black absolute top-0  p-5">
          <div className="flex justify-end w-full">
            {" "}
            <button
              className="md:hidden mx-2 text-2xl text-white"
              onClick={() => setShowMenu(!showMenu)}
            >
              <MdOutlineClear />
            </button>
          </div>

          <div className="flex justify-center flex-col items-center w-full p-2">
            {" "}
            <ul className="flex flex-col space-y-5 font-normal text-[16px] text-white">
              <li className="hover:border-b hover:border-b-white p-3 ">
                <a href="#newArrivals">New Arrivals</a>
              </li>
              <li className="hover:border-b hover:border-b-white p-3 ">
                <a href="#topSelling">Top Selling</a>
              </li>
              <li className="hover:border-b hover:border-b-white p-3 ">
                <a href="#products">Products</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
