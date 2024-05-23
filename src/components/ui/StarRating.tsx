import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar className="text-[#F9940A]" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalf className="text-[#F9940A]" />);
  }

  return <div className="flex space-x-2">{stars}</div>;
}

export default StarRating;
