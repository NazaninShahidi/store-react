import React from "react";
import { CiFilter } from "react-icons/ci";

function Filter() {
  return (
    <div className=" md:w-[295px] hidden md:flex md:flex-col items-start px-5 py-6 rounded-[20px] border border-[#0000001a]">
      <div className="flex flex-row justify-between items-center w-full">
        <span className="font-bold text-[20px]">filter</span>
        <CiFilter />
      </div>

      <div className="border border-[#0000001a] px-2 my-5 w-full h-0"></div>
    </div>
  );
}

export default Filter;
