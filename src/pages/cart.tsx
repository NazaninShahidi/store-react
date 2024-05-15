import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/productSlice";
import { FaTrashAlt } from "react-icons/fa";
import { Fragment } from "react/jsx-runtime";
import { IProduct } from "../dummyData";

const CartPage = () => {
  const [productList, setProductList] = useState<IProduct[] | undefined>();
  const products = useSelector((state: any) => state.product.value);
  const dispatch = useDispatch();

  const productCountMap = new Map();

  products.forEach((product: IProduct) => {
    const count = productCountMap.get(product.id) || 0;
    productCountMap.set(product.id, count + 1);
  });

  useEffect(() => {
    if (!products || !products.length) return;
    const uniqueProductIds = new Set();
    const uniqueProducts = products.filter((product: IProduct) => {
      if (!uniqueProductIds.has(product.id)) {
        uniqueProductIds.add(product.id);
        return true; // Add product to uniqueProducts array
      }
      return false; // Product is a duplicate, do not add to uniqueProducts array
    });

    setProductList(uniqueProducts);
  }, [products]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <h5 className="font-bold text-[40px] my-5">Your cart</h5>
      <div className="flex flex-row  space-x-5 ">
        <div className="w-[715px] flex flex-col items-start px-[24px] py-[20px] border border-[#0000001a] rounded-[20px] space-y-4">
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
                    <p className="font-bold text-[24px]">${product.price}</p>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <button
                      onClick={() => dispatch(deleteFromCart(product.id))}
                    >
                      <FaTrashAlt className=" text-red-700" />
                    </button>
                    <div className="w-[126px] h-[44px] flex justify-between items-center bg-[#F0F0F0] rounded-[62px] px-[20px] py-[16px]">
                      <button className="font-bold text-center" title="Azalt">
                        -
                      </button>

                      <div className="text-[16px] font-medium ">
                        {productCountMap.get(product.id)}
                      </div>
                      <button className="font-bold text-center" title="Arrtır">
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

        <div className="w-[505px] h-[458px] flex flex-col items-start px-[24px] py-[20px] border border-[#0000001a] rounded-[20px] space-y-4 ">
          <h6 className="font-bold text-[24px]">Order Summary</h6>
          <div className="flex flex-col w-full space-y-4 mt-3">
            <div className="flex justify-between items-center space-x-2">
              <span className="text-[#00000099] font-normal text-[20px]">
                Subtotal
              </span>
              <span className=" font-bold text-[20px]">$565</span>
            </div>
            <div className="flex justify-between items-center space-x-2">
              <span className="text-[#00000099] font-normal text-[20px]">
                Discount (-20%)
              </span>
              <span className=" font-bold text-[20px] text-red-600">-$113</span>
            </div>
            <div className="flex justify-between items-center space-x-2">
              <span className="text-[#00000099] font-normal text-[20px]">
                Delivery Fee
              </span>
              <span className=" font-bold text-[20px]">$15</span>
            </div>

            <div className="border border-[#0000001a] px-2  w-full h-0"></div>
            <div className="flex justify-between items-center space-x-2">
              <span className="font-normal text-[20px]">Total</span>
              <span className=" font-bold text-[20px]">$467</span>
            </div>
          </div>
          <div className="flex flex-row items-start p-0 w-full space-x-2">
            <input
              type="text"
              className="w-[326px] h-[48px] p-6 rounded-[62px] bg-[#F0F0F0] placeholder:text-[#00000066] placeholder:font-normal focus:outline-none"
              placeholder="Add promo code"
            />
            <button className="w-[119px] p-3 rounded-[62px] bg-black text-white font-medium">
              Apply
            </button>
          </div>
          <button className="w-full py-[16px] px-[54px] rounded-[62px] bg-black text-white hover:bg-[#F0F0F0] hover:text-[#00000099] ">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
