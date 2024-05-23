import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct, getProducById } from "../dummyData";
import ImageDetails from "../components/ui/ImageDetails";
import ProductDetail from "../components/ui/ProductDetail";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { comments } from "../dummyComments";
import CommentDetail from "../components/ui/CommentDetail";

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
      <div className="border border-[#0000001a] px-8 mx-auto my-10 w-1/2 h-0"></div>
      <div>
        <p className="font-bold text-[24px] p-3 my-2 ">
          All Reviews{" "}
          <span className="font-normal text-[#00000099] text-[18px]">{`(${comments.length})`}</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {comments.map((comment, index) => (
            <CommentDetail key={index} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
