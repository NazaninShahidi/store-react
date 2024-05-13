import { useEffect, useState } from "react";
import { IProduct } from "../../dummyData";

const ImageDetails = ({ item }: { item: IProduct | undefined }) => {
  const [choosenImg, setChoosenImg] = useState<string>();

  useEffect(() => {
    if (item) {
      setChoosenImg(item?.image[0]);
    }
  }, [item]);

  return (
    <div className="flex flex-col-reverse  md:flex-row md:space-x-4">
      <div className="flex flex-row space-x-2 md:flex-col md:space-y-2 md:space-x-0  md:w-1/3">
        {item?.image.map((im) => (
          <img
            src={`assests/products/${im}`}
            alt=""
            className={`md:h-3/4 w-1/3 md:w-full rounded-[20px] ${
              choosenImg === im ? "border border-[#000]" : ""
            }`}
            onClick={() => setChoosenImg(im)}
          />
        ))}
      </div>
      <img
        src={`assests/products/${choosenImg}`}
        alt=""
        className="md:w-[444px] md:h-[530px]"
      />
    </div>
  );
};

export default ImageDetails;
