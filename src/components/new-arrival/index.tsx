import { useEffect, useState } from "react";
import { IProduct, getNewProduct } from "../../dummyData";
import Card from "../ui/Card";

function NewArrival() {
  const [productList, setProductList] = useState<IProduct[]>();

  useEffect(() => {
    const list: IProduct[] = getNewProduct();
    setProductList(list);
  }, []);

  return (
    <div
      id="newArrivals"
      className="flex flex-col space-y-9 p-10 mt-10 items-center"
    >
      {" "}
      <h2 className="font-bold text-center text-5xl ">NEW ARRIVALS</h2>
      <div className="flex items-center justify-center space-x-3">
        {productList?.map((product) => (
          <Card key={product.id} item={product} />
        ))}
      </div>
      <button className="w-[218px] h-[52px] text-[16px] font-medium border border-[#0000001a]  text-black rounded-[62px] hover:border-[#000000] ">
        View All
      </button>
    </div>
  );
}

export default NewArrival;
