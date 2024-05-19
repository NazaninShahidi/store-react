import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IProduct, getProducById } from "../dummyData";
import ImageDetails from "../components/ui/ImageDetails";
import ProductDetail from "../components/ui/ProductDetail";

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
    <div className="max-w-screen-xl mx-auto p-3 md:p-0">
      <div className="flex flex-col md:flex-row  w-full md:space-x-10">
        <ImageDetails item={currentProduct} />
        <ProductDetail currentProduct={currentProduct} />
      </div>
    </div>
  );
};

export default ProductPage;
