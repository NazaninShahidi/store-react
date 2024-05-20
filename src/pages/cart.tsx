import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IProduct } from "../dummyData";
import PaymentReceipt from "../components/ui/PaymentReceipt";
import DetailCart from "../components/ui/DetailCart";

const CartPage = () => {
  const [productList, setProductList] = useState<IProduct[] | undefined>();
  const products = useSelector((state: any) => state.product.value);

  const productCountMap = new Map();

  products.forEach((product: IProduct) => {
    const count = productCountMap.get(product.id) || 0;
    productCountMap.set(product.id, count + 1);
  });

  useEffect(() => {
    // if (!products || !products.length) return;
    const uniqueProductIds = new Set();
    const uniqueProducts = products.filter((product: IProduct) => {
      if (!uniqueProductIds.has(product.id)) {
        uniqueProductIds.add(product.id);
        return true;
      }
      return false;
    });

    setProductList(uniqueProducts);
  }, [products]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <h5 className="font-bold text-[40px] my-5 p-3 md:p-0">Your cart</h5>
      <div className="flex flex-col md:flex-row space-y-3  mx-3 md:space-x-5 md:space-y-0  md:mx-0">
        {productList?.length ? (
          <>
            <DetailCart
              productList={productList}
              productCountMap={productCountMap}
            />

            <PaymentReceipt
              productList={productList}
              productCountMap={productCountMap}
            />
          </>
        ) : (
          <div className="flex items-center justify-center w-full border border-[#0000001a] p-20 rounded-lg my-3">
            <p className="text-center text-3xl font-bold">Cart is Empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
