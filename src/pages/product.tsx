import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IProduct, getProducById } from "../dummyData";

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

  console.log(currentProduct);
  return <div>this is product</div>;
};

export default ProductPage;
