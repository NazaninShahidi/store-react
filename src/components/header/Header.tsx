import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const products = useSelector((state: any) => state.product.value);

  return (
    <nav className="w-full h-auto  bg-white">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between">
        <a href="/">
          <img src="assests/logo.png" alt="logo" />
        </a>
        <ul className="flex flex-row space-x-7 font-normal text-[16px]">
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
            className="w-[577px] flex items-start gap-[12px] px-[16px] py-[12px] relative bg-[#efefef] rounded-[62px] overflow-hidden focus:outline-none placeholder:p-4"
            placeholder="Search for products..."
          />

          <img
            className=" w-[24px] h-[24px] absolute top-5 m-2"
            alt="Frame"
            src="assests/search.png"
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
    </nav>
  );
}

export default Header;
