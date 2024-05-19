import React, { Fragment } from "react";
import { IProduct } from "../../dummyData";
import { useDispatch } from "react-redux";
import {
  decreaseProductCount,
  deleteFromCart,
  increaseProductCount,
} from "../../redux/productSlice";
import { FaTrashAlt } from "react-icons/fa";

function DetailCart({
  productList,
  productCountMap,
}: {
  productList: IProduct[];
  productCountMap: any;
}) {
  const dispatch = useDispatch();
  const handleIncreaseNumberProduct = (id: string) => {
    dispatch(increaseProductCount(id));
  };

  const handleDecreaseNumberProduct = (id: string) => {
    dispatch(decreaseProductCount(id));
  };
  return (
    <div className=" md:w-[715px] flex flex-row  md:flex-col items-start px-[24px] py-[20px] border border-[#0000001a] rounded-[20px] md:space-y-4">
      {productList?.map((product: IProduct, index: number) => (
        <Fragment key={product.id}>
          <div className="flex flex-row space-x-6  p-0  w-full">
            <img
              src={`assests/products/${product.image[0]}`}
              alt={product.title}
              className="w-[124px] h-[124px]"
            />
            <div className="flex justify-between space-x-5 w-full">
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-1">
                  <p className="font-bold text-[20px]">{product.title}</p>
                  <p className="font-normal text-[14px]">
                    Size :<span className="text-[00000099]"></span>
                  </p>
                  <p className="font-normal text-[14px]">
                    Color :<span className="text-[00000099]"> </span>
                  </p>
                </div>
                <p className="font-bold text-[24px]">
                  ${product.discountPrice ?? product.price}
                </p>
              </div>
              <div className="flex flex-col justify-between items-end">
                <button onClick={() => dispatch(deleteFromCart(product.id))}>
                  <FaTrashAlt className=" text-red-700" />
                </button>
                <div className="w-[126px] h-[44px] flex justify-between items-center bg-[#F0F0F0] rounded-[62px] px-[20px] py-[16px]">
                  <button
                    className="font-bold text-center"
                    title="Azalt"
                    onClick={() => handleDecreaseNumberProduct(product.id)}
                  >
                    -
                  </button>

                  <div className="text-[16px] font-medium ">
                    {productCountMap.get(product.id)}
                  </div>
                  <button
                    className="font-bold text-center"
                    title="Arrtır"
                    onClick={() => handleIncreaseNumberProduct(product.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          {index !== productList.length - 1 && (
            <div className="border border-[#0000001a] px-2  w-full h-0"></div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default DetailCart;
