import React from "react";

function Header() {
  return (
    <nav className="w-full h-auto  bg-white">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between">
        <a href="/">
          <img src={require("../../assests/logo.png")} alt="logo" />
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
            src={require("../../assests/search.png")}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <img
            className=" w-[24px] h-[24px]  m-2"
            alt="Frame"
            src={require("../../assests/shop.png")}
          />
          <img
            className=" w-[24px] h-[24px]  m-2"
            alt="Frame"
            src={require("../../assests/user.png")}
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
