import { useEffect, useState } from "react";
import { IProduct, getTopSellingProduct } from "../../dummyData";
import Card from "../ui/Card";

function TopSelling() {
  const [productList, setProductList] = useState<IProduct[]>();

  useEffect(() => {
    const list: IProduct[] = getTopSellingProduct();
    setProductList(list);
  }, []);
  return (
    <div
      id="topSelling"
      className="flex flex-col space-y-9 p-10 mt-10 items-center"
    >
      {" "}
      <h2 className="font-bold text-center text-5xl  uppercase">top selling</h2>
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

export default TopSelling;
