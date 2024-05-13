import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IProduct, getProducById } from "../dummyData";
import ImageDetails from "../components/ui/ImageDetails";

const ProductPage = () => {
  const [productId, setProductId] = useState("");
  const [currentProduct, setCurrentProduct] = useState<IProduct>();

  const { state: routerState }: any = useLocation();

  useEffect(() => {
    setProductId(routerState?.id);
  }, []);

  useEffect(() => {
    const newProducts = getProducById(productId);
    setCurrentProduct(newProducts);
  }, [productId]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row  w-full md:space-x-10">
        <ImageDetails item={currentProduct} />

        <div className="flex flex-col space-y-5">
          <h5 className="font-bold text-[40px] leading-[48px] uppercase">
            {currentProduct?.title}
          </h5>

          <div className="flex flex-row  p-0 gap-[13px]">
            {" "}
            <div className="flex space-x-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                  fill="#F9940A"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                  fill="#F9940A"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                  fill="#F9940A"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                  fill="#F9940A"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                  fill="#F9940A"
                />
              </svg>
            </div>
            <span className="font-normal text-[14px]"></span>
            {`${currentProduct?.star}/5`}
          </div>
          <div className="flex flex-row  p-0 space-x-3">
            {currentProduct?.discount ? (
              <>
                {" "}
                <span className="font-bold text-[32px]">
                  ${currentProduct?.discountPrice}
                </span>
                <span className="font-bold text-[32px] line-through text-[#00000066]">
                  ${currentProduct?.price}
                </span>
                <div className="flex flex-row  items-center justify-center py-3 px-2 bg-[#ff33331a] rounded-[60px]">
                  <span className="text-[#FF3333] font-medium text-xs">{`-${currentProduct?.discountPercent}%`}</span>
                </div>
              </>
            ) : (
              <span className="font-bold text-[32px]">
                ${currentProduct?.price}
              </span>
            )}
          </div>
          <p className="text-[#00000099] font-normal text-[16px]">
            {currentProduct?.description}
          </p>
          <div className="border border-[#0000001a] px-2  w-full h-0"></div>

          <div className="flex flex-col space-y-2">
            <p className="text-[#00000099] font-normal text-[16px]">
              Select Colors
            </p>
            <div className="flex items-center space-x-2">
              <button className="rounded-full w-[37px] h-[37px] bg-[#4F4631]"></button>
              <button className="rounded-full w-[37px] h-[37px] bg-[#31344F]"></button>
              <button className="rounded-full w-[37px] h-[37px] bg-[#314F4A]"></button>
            </div>
          </div>
          <div className="border border-[#0000001a] px-2  w-full h-0"></div>
          <div className="flex flex-col space-y-2">
            <p className="text-[#00000099] font-normal text-[16px]">
              Choose Size
            </p>
            <div className="flex items-center space-x-2">
              <button className="rounded-[46px] py-[12px] px-[24px] bg-[#F0F0F0] text-[#00000099] font-normal text-[16px]  hover:bg-black hover:text-white">
                Small
              </button>
              <button className="rounded-[46px] py-[12px] px-[24px] bg-[#F0F0F0] text-[#00000099] font-normal text-[16px]  hover:bg-black hover:text-white">
                Medium
              </button>
              <button className="rounded-[46px] py-[12px] px-[24px] bg-[#F0F0F0] text-[#00000099] font-normal text-[16px]  hover:bg-black hover:text-white">
                Large
              </button>
              <button className="rounded-[46px] py-[12px] px-[24px] bg-[#F0F0F0] text-[#00000099] font-normal text-[16px] hover:bg-black hover:text-white">
                X-Large
              </button>
            </div>
          </div>
          <div className="border border-[#0000001a] px-2  w-full h-0"></div>
          <div className="flex flex-row  justify-between space-x-6 items-center">
            <div className=" w-1/3 flex justify-between items-center bg-[#F0F0F0] rounded-[62px] px-[20px] py-[16px]">
              <button className="font-bold text-center" title="Azalt">
                -
              </button>
              <div className="text-[16px] font-medium">0</div>
              <button className="font-bold text-center" title="Arrtır">
                +
              </button>
            </div>
            <button className="w-full py-[16px] px-[54px] rounded-[62px] bg-black text-white hover:bg-[#F0F0F0] hover:text-[#00000099]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
