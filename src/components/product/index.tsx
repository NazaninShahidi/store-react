import { Link } from "react-router-dom";

function ProductItem() {
  return (
    <div
      id="products"
      className="bg-[#F0F0F0] rounded-[40px] p-10  mx-auto mt-3"
    >
      <h2 className="font-bold text-center text-5xl p-8 mb-5 uppercase">
        BROWSE BY dress STYLE
      </h2>
      <div className="p-5">
        <div className="flex flex-wrap space-x-4 mb-2 justify-center">
          <Link
            to="/products"
            className="relative"
            state={{ category: "casual" }}
          >
            <img
              src={require("../../assests/products/casual.png")}
              alt=""
              className="rounded-[20px] relative"
            />
            <span className="absolute top-6 left-9 font-bold text-[36px]">
              Casual
            </span>
          </Link>
          <a href="#" className="relative ">
            <img
              src={require("../../assests/products/formal.png")}
              alt=""
              className="rounded-[20px] "
            />
            <span className="absolute top-6 left-9 font-bold text-[36px]">
              Formal
            </span>
          </a>
        </div>
        <div className="flex flex-wrap space-x-4 mt-5 justify-center">
          <a href="#" className="relative  ">
            <img
              src={require("../../assests/products/party.png")}
              alt=""
              className="rounded-[20px]"
            />
            <span className="absolute top-6 left-9 font-bold text-[36px]">
              Party
            </span>
          </a>
          <a href="#" className="relative ">
            <img
              src={require("../../assests/products/gym.png")}
              alt=""
              className="rounded-[20px] "
            />
            <span className="absolute top-6 left-9 font-bold text-[36px]">
              Gym
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
