import Hero from "../components/hero/Hero";
import NewArrival from "../components/new-arrival";
import TopSelling from "../components/top-selling";
import ProductItem from "../components/product";
import Comments from "../components/comments";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-screen-xl mx-auto">
        <NewArrival />
        <div className=" border border-[#0000001a] mx-auto"></div>
        <TopSelling />
        <ProductItem />
        <Comments />
      </div>
    </div>
  );
}
