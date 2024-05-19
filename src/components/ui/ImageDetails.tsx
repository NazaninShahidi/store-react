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
    <div className="flex flex-col-reverse  md:flex-row md:space-x-4 ">
      <div className="flex flex-row justify-evenly space-x-2 mt-2 md:flex-col md:space-y-2 md:space-x-0 md:mt-0 ">
        {item?.image.map((im, index) => (
          <img
            src={`assests/products/${im}`}
            alt=""
            className={`rounded-[20px] ${
              choosenImg === im ? "border border-[#000]" : ""
            } ${
              item.image.length === 1
                ? "w-[152px] h-[168px]"
                : "w-[106px] h-[111px] md:w-full md:h-full"
            }`}
            onClick={() => setChoosenImg(im)}
            key={index}
          />
        ))}
      </div>
      <img
        src={`assests/products/${choosenImg}`}
        alt=""
        className="w-full h-[290px] md:w-[444px] md:h-[530px]"
      />
    </div>
  );
};

export default ImageDetails;
