import React from "react";
import { IProduct } from "../../dummyData";

function PaymentReceipt({
  productList,
  productCountMap,
}: {
  productList: IProduct[];
  productCountMap: any;
}) {
  const totalPrice =
    productList &&
    productList.reduce((acc: number, product: IProduct) => {
      const count = productCountMap.get(product.id) || 0;
      return acc + parseFloat(product.price) * count;
    }, 0);

  const totalDiscount =
    productList &&
    productList.reduce((acc: number, product: IProduct) => {
      const count = productCountMap.get(product.id) || 0;
      const discount =
        (parseFloat(product.price) - parseFloat(product.discountPrice)) * count;
      return acc + discount || 0;
    }, 0);

  const totalDiscountAmount = totalDiscount ?? 0;
  const finalTotal = (totalPrice ?? 0) - totalDiscountAmount + 15;

  return (
    <div className="md:w-[505px] md:h-[458px] flex flex-col items-start px-[24px] py-[20px] border border-[#0000001a] rounded-[20px] space-y-4 ">
      <h6 className="font-bold text-[24px]">Order Summary</h6>
      <div className="flex flex-col w-full space-y-4 mt-3">
        <div className="flex justify-between items-center space-x-2">
          <span className="text-[#00000099] font-normal text-[20px]">
            Subtotal
          </span>
          <span className=" font-bold text-[20px]">${totalPrice}</span>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <span className="text-[#00000099] font-normal text-[20px]">
            Discount
          </span>
          <span className=" font-bold text-[20px] text-red-600">
            -${totalDiscount}
          </span>
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
          <span className=" font-bold text-[20px]">${finalTotal}</span>
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
  );
}

export default PaymentReceipt;
