import React, { useEffect, useState } from "react";
import { IProduct } from "../../dummyData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/productSlice";
import StarRating from "./StarRating";

function ProductDetail({
  currentProduct,
}: {
  currentProduct: IProduct | undefined;
}) {
  const [numberProduct, setNumberProduct] = useState<number>(1);
  const [productList, setProductList] = useState<IProduct[]>([]);
  const products = useSelector((state: any) => state.product.value);
  const dispatch = useDispatch();

  const handleIncreaseNumberProduct = () => {
    setNumberProduct(numberProduct + 1);
  };

  const handleDecreaseNumberProduct = () => {
    if (numberProduct === 1) {
      return;
    }

    setNumberProduct(numberProduct - 1);
  };

  useEffect(() => {
    let newArr;
    if (products?.length) {
      newArr = [...products, ...Array(numberProduct).fill(currentProduct)];
    } else {
      newArr = [...Array(numberProduct).fill(currentProduct)];
    }
    setProductList(newArr);
  }, [numberProduct, currentProduct, products]);
  return (
    <div className="flex flex-col justify-center space-y-8 w-1/2">
      <h5 className="font-bold text-3xl md:text-[40px] leading-[48px] uppercase">
        {currentProduct?.title}
      </h5>

      <div className="flex flex-row  p-0 gap-[13px]">
        {" "}
        <StarRating rating={currentProduct?.star ?? 0} />
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

      <div className="flex  flex-row  justify-between space-x-6 items-center ">
        <div className=" w-1/2 flex justify-between items-center bg-[#F0F0F0] rounded-[62px] px-[20px] py-[16px]">
          <button
            className="font-bold text-center"
            title="Azalt"
            onClick={handleDecreaseNumberProduct}
            disabled={numberProduct === 1}
          >
            -
          </button>
          <div className="text-[16px] font-medium">{numberProduct}</div>
          <button
            className="font-bold text-center"
            title="Arrtır"
            onClick={handleIncreaseNumberProduct}
          >
            +
          </button>
        </div>
        <button
          className="w-full py-[16px] px-[54px] rounded-[62px] bg-black text-white hover:bg-[#F0F0F0] hover:text-[#00000099] "
          onClick={() => dispatch(addToCart(productList))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
