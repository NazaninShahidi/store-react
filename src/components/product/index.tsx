import { Link } from "react-router-dom";

function ProductItem() {
  return (
    <div
      id="products"
      className="bg-[#F0F0F0] rounded-[40px] p-10 mx-3  md:mx-auto mt-3"
    >
      <h2 className="font-bold text-center text-3xl md:text-5xl p-2 md:p-8 mb-5 uppercase ">
        BROWSE BY dress STYLE
      </h2>
      <div className=" p-5">
        <div className="flex flex-wrap space-y-3  md:space-x-4 md:space-y-0 mb-2 justify-center">
          <Link
            to="/products"
            className="relative"
            state={{ category: "casual" }}
          >
            <img
              src="assests/products/casual.png"
              alt=""
              className="rounded-[20px] relative"
            />
            <span className="absolute top-6 left-9 font-bold text-2xl md:text-[36px]">
              Casual
            </span>
          </Link>
          <Link
            to="/products"
            className="relative"
            state={{ category: "formal" }}
          >
            <img
              src="assests/products/formal.png"
              alt=""
              className="rounded-[20px] "
            />
            <span className="absolute top-6 left-9 font-bold text-2xl md:text-[36px]">
              Formal
            </span>
          </Link>
        </div>
        <div className="flex flex-wrap space-y-3 md:space-x-4 md:space-y-0 mt-5 justify-center">
          <Link
            to="/products"
            className="relative"
            state={{ category: "party" }}
          >
            <img
              src="assests/products/party.png"
              alt=""
              className="rounded-[20px]"
            />
            <span className="absolute top-6 left-9 font-bold text-2xl md:text-[36px]">
              Party
            </span>
          </Link>
          <Link to="/products" className="relative" state={{ category: "gym" }}>
            <img
              src="assests/products/gym.png"
              alt=""
              className="rounded-[20px] "
            />
            <span className="absolute top-6 left-9 font-bold text-2xl md:text-[36px]">
              Gym
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
