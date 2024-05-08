import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import NewArrival from "../components/new-arrival";
import TopSelling from "../components/top-selling";
import ProductItem from "../components/product";
import Comments from "../components/comments";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="max-w-screen-xl mx-auto">
        <NewArrival />
        <div className=" border border-[#0000001a] mx-auto"></div>
        <TopSelling />
        <ProductItem />
        <Comments />
      </div>
      <Footer />
    </div>
  );
}
