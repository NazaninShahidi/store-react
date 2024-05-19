import { useLocation } from "react-router-dom";
import Filter from "../components/ui/Filter";
import { useEffect, useState } from "react";
import { IProduct, getProductByCategory } from "../dummyData";
import Card from "../components/ui/Card";

function ProductsPage() {
  const [category, setCategory] = useState("");
  const [productList, setProcutList] = useState<IProduct[]>([]);
  const { state: routerState }: any = useLocation();

  useEffect(() => {
    setCategory(routerState?.category);
  }, []);

  useEffect(() => {
    const newProducts = getProductByCategory(category);
    setProcutList(newProducts);
  }, [category]);

  return (
    <div className="max-w-screen-xl mx-auto p-3">
      <div className="flex flex-row space-x-7">
        <Filter />
        <div className="flex flex-col">
          <div className="p-2 my-1">
            <p className="font-bold text-[32px] capitalize">{category}</p>
          </div>
          <div className="grid grid-cols-2  gap-5 md:grid-cols-3">
            {productList.map((product) => (
              <Card item={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
