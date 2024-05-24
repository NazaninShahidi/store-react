import { useLocation } from "react-router-dom";
import Filter from "../components/ui/Filter";
import { useEffect, useState } from "react";
import { IProduct, getProductByCategory } from "../dummyData";
import Card from "../components/ui/Card";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { CiFilter } from "react-icons/ci";

function ProductsPage() {
  const [category, setCategory] = useState("");
  const [productList, setProcutList] = useState<IProduct[]>([]);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { state: routerState }: any = useLocation();

  useEffect(() => {
    if (routerState) {
      return setCategory(routerState?.category);
    }
    setCategory("All");
  }, [routerState]);

  useEffect(() => {
    const newProducts = getProductByCategory(category);
    setProcutList(newProducts);
  }, [category]);

  return (
    <div className="max-w-screen-xl mx-auto p-3 relative">
      <Breadcrumbs />
      <div className="flex flex-row space-y-7 md:space-x-7 md:space-y-0">
        <Filter showMenu={showMenu} setShowMenu={setShowMenu} />
        <div className="flex flex-col">
          <div className="flex justify-between items-center p-2 my-1">
            <p className="font-bold text-[32px] capitalize">{category}</p>
            <button
              className=" md:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              <CiFilter className="w-[24px] h-[24px]" />
            </button>
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
