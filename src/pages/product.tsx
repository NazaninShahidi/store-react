import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct, getProducById } from "../dummyData";
import ImageDetails from "../components/ui/ImageDetails";
import ProductDetail from "../components/ui/ProductDetail";
import Breadcrumbs from "../components/ui/Breadcrumbs";

const ProductPage = () => {
  const [productId, setProductId] = useState("");
  const [currentProduct, setCurrentProduct] = useState<IProduct>();
  const { id }: any = useParams();

  useEffect(() => {
    setProductId(id);
  }, []);

  useEffect(() => {
    const newProducts = getProducById(productId);
    setCurrentProduct(newProducts);
  }, [productId]);

  return (
    <div className="max-w-screen-xl mx-auto p-3 md:p-0">
      <Breadcrumbs />
      <div className="flex flex-col md:flex-row  w-full md:space-x-10">
        <ImageDetails item={currentProduct} />
        <ProductDetail currentProduct={currentProduct} />
      </div>
    </div>
  );
};

export default ProductPage;
