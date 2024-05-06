import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import NewArrival from "../components/new-arrival";
import TopSelling from "../components/top-selling";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <NewArrival />
      <div className="w-[1240px] border border-[#0000001a] mx-auto"></div>
      <TopSelling />
    </div>
  );
}
