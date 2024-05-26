import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { MdOutlineClear } from "react-icons/md";
import {
  IProduct,
  getProductByCategory,
  getProductByFilters,
} from "../../../dummyData";
import RadioButton from "./RadioButton";
import PriceRangeSlider from "./PriceRangeSlider";

type filter = {
  category?: string;
  rangePrice?: { min: number; max: number };
};

type props = {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
  category: string;
  setProcutList: (list: IProduct[]) => void;
  setCategory: (text: string) => void;
};

function Filter({
  showMenu,
  setShowMenu,
  category,
  setProcutList,
  setCategory,
}: props) {
  const [filterData, setFilterData] = useState<filter>({});

  const handleChangeFilter = (newFilterData: filter) => {
    setFilterData((prevFilterData) => ({
      ...prevFilterData,
      ...newFilterData,
    }));
  };

  const handleRemoveFilter = () => {
    setFilterData({});
    const newProducts = getProductByCategory("All");
    setCategory("All");
    setProcutList(newProducts);
  };

  const handleApplyFilter = () => {
    const newProducts = getProductByFilters(filterData);
    if (filterData.category) {
      setCategory(filterData.category);
    }
    setProcutList(newProducts);
  };

  const onChangeCategory = (e: any) => {
    const { name } = e.target;
    handleChangeFilter({ category: name });
  };

  const handlePriceRangeChange = (range: { min: number; max: number }) => {
    handleChangeFilter({ rangePrice: range });
  };

  return (
    <div
      className={`md:relative w-full md:w-1/3 md:flex flex-col space-y-4 md:h-[500px] items-start px-[30px] md:px-[24px] py-[50px] md:py-[20px] md:rounded-[20px] overflow-hidden md:border md:border-solid md:border-[#0000001a] ${
        showMenu ? "absolute" : "hidden"
      } top-0 bg-white w-full md:w-[295px] left-0`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="w-fit mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal]">
          Filters
        </div>
        {filterData.category || filterData.rangePrice ? (
          <button
            className="hidden md:block text-red-500 text-[14px] font-medium"
            onClick={handleRemoveFilter}
          >
            Remove Filter
          </button>
        ) : (
          <CiFilter className="hidden md:block w-[24px] h-[24px]" />
        )}
        <div className="md:hidden flex items-center space-x-2">
          {(filterData.category || filterData.rangePrice) && (
            <button
              className="md:hidden  text-red-500 text-[14px] font-medium"
              onClick={handleRemoveFilter}
            >
              Remove Filter
            </button>
          )}

          <button
            className="md:hidden text-2xl"
            onClick={() => setShowMenu(!showMenu)}
          >
            <MdOutlineClear />
          </button>
        </div>
      </div>
      <div className="border border-[#0000001a] px-2 w-full h-0"></div>
      <PriceRangeSlider min={0} max={800} onChange={handlePriceRangeChange} />
      {category === "All" && (
        <>
          <div className="border border-[#0000001a] px-2 w-full h-0"></div>
          <div className="flex flex-col items-start gap-[20px] relative w-full">
            <div className="flex items-center justify-between relative w-full">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal]">
                Dress Style
              </div>
            </div>
            <div className="flex flex-col items-start gap-[20px] relative w-full">
              <div className="flex items-center space-x-2 w-full [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                <RadioButton
                  name="casual"
                  id="casual"
                  value="casual"
                  text="Casual"
                  onChange={onChangeCategory}
                  checked={filterData?.category === "casual"}
                />
              </div>
              <div className="flex items-center space-x-2 w-full [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                <RadioButton
                  name="formal"
                  id="formal"
                  value="formal"
                  text="Formal"
                  onChange={onChangeCategory}
                  checked={filterData?.category === "formal"}
                />
              </div>
              <div className="flex items-center space-x-2 w-full [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                <RadioButton
                  name="party"
                  id="party"
                  value="party"
                  text="Party"
                  onChange={onChangeCategory}
                  checked={filterData?.category === "party"}
                />
              </div>
              <div className="flex items-center space-x-2 w-full [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                <RadioButton
                  name="gym"
                  id="gym"
                  value="gym"
                  text="Gym"
                  onChange={onChangeCategory}
                  checked={filterData?.category === "gym"}
                />
              </div>
            </div>
          </div>
        </>
      )}
      <button
        className="flex h-[48px] items-center justify-center gap-[12px] px-[54px] py-[16px] w-full bg-black rounded-[62px] overflow-hidden"
        onClick={handleApplyFilter}
      >
        <span className="w-fit mt-[-2.50px] mb-[-0.50px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
          Apply Filter
        </span>
      </button>
    </div>
  );
}

export default Filter;
