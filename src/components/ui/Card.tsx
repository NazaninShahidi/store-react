import { Link } from "react-router-dom";
import { IProduct } from "../../dummyData";
import StarRating from "./StarRating";

const Card = ({ item }: { item: IProduct }) => {
  return (
    <div>
      <Link to={`/products/${item.id}`}>
        <img
          src={`assests/products/${item.image[0]}`}
          alt={item.title}
          className="w-full h-2/3"
        />
      </Link>

      <div className="flex flex-col space-y-1 md:space-y-2 mt-2">
        <Link
          to={`/products/${item.id}`}
          className="font-bold text-[1em] md:text-xl"
        >
          {item.title}
        </Link>
        <div className="flex flex-row items-center p-0 gap-[13px]">
          {" "}
          <StarRating rating={item.star} />
          <span className="font-normal text-[14px]"></span>
          {`${item.star}/5`}
        </div>
        <div className="flex flex-row items-center p-0 space-x-3">
          {item.discount ? (
            <>
              {" "}
              <span className="font-bold text-2xl">${item.discountPrice}</span>
              <span className="font-bold text-2xl line-through text-[#00000066]">
                ${item.price}
              </span>
              <div className="flex flex-row items-center justify-center py-3 px-2 bg-[#ff33331a] rounded-[62px]">
                <span className="text-[#FF3333] font-medium text-xs">{`-${item.discountPercent}%`}</span>
              </div>
            </>
          ) : (
            <span className="font-bold text-2xl">${item.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
