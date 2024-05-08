import { FaTwitter } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto my-6  bg-black rounded-[20px] px-[36px] py-[64px]  flex flex-col md:flex-row  justify-between items-center ">
        <p className="font-bold px-2 text-[40px] text-white">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
        <div className="flex flex-col items-start p-0 gap-[14px] w-[349px] ">
          <input
            type="text"
            className="w-full p-3 rounded-[62px] placeholder:text-[#00000066] placeholder:font-normal focus:outline-none"
            placeholder="Enter your email address"
          />
          <button className="w-full p-3 rounded-[62px] bg-white font-medium">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <footer className=" bg-[#F0F0F0] p-10">
        <div className="flex flex-row space-x-5 items-start p-0 max-w-screen-xl mx-auto">
          <div className="flex flex-col items-start p-0  w-[248px] space-y-3">
            <div className="flex flex-col items-start space-y-3">
              <a href="#">
                <img src={require("../../assests/logo.png")} alt="logo" />
              </a>
              <p className="text-[#00000099]">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
            </div>
            <div className="flex space-x-2">
              <a href="#">
                <FaTwitter className="w-[28px] h-[28px] rounded-full bg-white p-2" />
              </a>
              <a href="#">
                <SlSocialFacebook className="w-[28px] h-[28px] rounded-full bg-black text-white p-2" />
              </a>
              <a href="#">
                <IoLogoInstagram className="w-[28px] h-[28px] rounded-full bg-white p-2" />
              </a>
            </div>
          </div>
          <div className="flex flex-row space-x-40">
            <div className="flex flex-col space-y-3">
              <span className="uppercase font-medium text-[16px] tracking-wider">
                Company
              </span>
              <ul className="flex flex-col space-y-3 text-[#00000099] font-normal text-[16px]">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="uppercase font-medium text-[16px] tracking-wider">
                Help
              </span>
              <ul className="flex flex-col space-y-3 text-[#00000099] font-normal text-[16px]">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="uppercase font-medium text-[16px] tracking-wider">
                FAQ
              </span>
              <ul className="flex flex-col space-y-3 text-[#00000099] font-normal text-[16px]">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" border border-[#0000001a] max-w-screen-xl mx-auto my-10"></div>
        <div className="flex justify-center items-center">
          {" "}
          <p className="text-[#00000099] font-normal text-[14px]">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
