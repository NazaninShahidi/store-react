import { Link } from "react-router-dom";
import { IProduct } from "../../dummyData";

const Card = ({ item }: { item: IProduct }) => {
  return (
    <div>
      <Link to="/product" state={{ id: item.id }}>
        <img
          src={`assests/products/${item.image[0]}`}
          alt={item.title}
          className="w-full h-2/3"
        />
      </Link>

      <div className="flex flex-col space-y-2 mt-2">
        <Link
          to="/product"
          state={{ id: item.id }}
          className="font-bold text-xl"
        >
          {item.title}
        </Link>
        <div className="flex flex-row items-center p-0 gap-[13px]">
          {" "}
          <div className="flex space-x-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                fill="#F9940A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                fill="#F9940A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                fill="#F9940A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                fill="#F9940A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                fill="#F9940A"
              />
            </svg>
          </div>
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
