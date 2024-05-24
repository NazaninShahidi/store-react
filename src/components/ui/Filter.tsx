import React, { useCallback, useEffect, useRef, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoChevronForwardOutline } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";

function Filter({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}) {
  return (
    <>
      {" "}
      <div
        className={`md:relative md:flex flex-col space-y-4  md:h-[1220px] items-start px-[30px]  md:px-[24px] py-[50px] md:py-[20px]  md:rounded-[20px] overflow-hidden md:border md:border-solid md:border-[#0000001a] ${
          showMenu ? "absolute" : "hidden"
        }  top-0  bg-white w-full md:w-[295px]    left-0 `}
      >
        <div className="flex items-center justify-between   w-full ">
          <div className=" w-fit mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal]">
            Filters
          </div>
          <CiFilter className="hidden md:block w-[24px] h-[24px]" />

          <button
            className="md:hidden  text-2xl "
            onClick={() => setShowMenu(!showMenu)}
          >
            <MdOutlineClear />
          </button>
        </div>

        <div className="border border-[#0000001a] px-2  w-full h-0"></div>
        <div className="flex flex-col items-start gap-[20px]   w-full ">
          <div className="flex items-center justify-between   w-full ">
            <div className=" w-fit [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              T-shirts
            </div>
            <IoChevronForwardOutline className=" w-[16px] h-[16px]" />
          </div>
          <div className="flex items-center justify-between   w-full ">
            <div className=" w-fit [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              Shorts
            </div>
            <IoChevronForwardOutline className=" w-[16px] h-[16px]" />
          </div>
          <div className="flex items-center justify-between   w-full ">
            <div className=" w-fit [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              Shirts
            </div>
            <IoChevronForwardOutline className=" w-[16px] h-[16px]" />
          </div>
          <div className="flex items-center justify-between   w-full ">
            <div className=" w-fit [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              Hoodie
            </div>
            <IoChevronForwardOutline className=" w-[16px] h-[16px]" />
          </div>
          <div className="flex items-center justify-between   w-full ">
            <div className=" w-fit [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              Jeans
            </div>
            <IoChevronForwardOutline className=" w-[16px] h-[16px]" />
          </div>
        </div>
        <div className="border border-[#0000001a] px-2  w-full h-0"></div>

        <PriceRangeSlider
          min={50}
          max={200}
          onChange={({ min, max }: any) =>
            console.log(`min = ${min}, max = ${max}`)
          }
        />
        <div className="border border-[#0000001a] px-2  w-full h-0"></div>
        <div className="flex flex-col items-start gap-[20px]   w-full ">
          <div className="flex items-center justify-between   w-full ">
            <div className=" w-fit mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal]">
              Colors
            </div>
            <IoChevronForwardOutline className=" w-[16px] h-[16px]" />
          </div>
          <div className="inline-flex flex-col items-start gap-[16px]  ">
            <div className="flex w-[247px] items-center justify-between  ">
              <div className=" w-[37px] h-[37px] bg-[#00c12a] rounded-[18.5px] border-2 border-solid border-[#00000033]" />
              <div className=" w-[37px] h-[37px] bg-[#f50505] rounded-[18.5px] border border-solid border-[#00000033]" />
              <div className=" w-[37px] h-[37px] bg-[#f5dd05] rounded-[18.5px] border border-solid border-[#00000033]" />
              <div className="bg-[#f57805]  w-[37px] h-[37px] rounded-[18.5px] border border-solid border-[#00000033]" />
              <div className="bg-[#05c9f5] border border-solid border-[#00000033]  w-[37px] h-[37px] rounded-[18.5px]" />
            </div>
            <div className="flex w-[247px] items-center justify-between  ">
              <div className="relative w-[37px] h-[37px] bg-[#053af5] rounded-[18.5px] border-2 border-solid border-[#00000033]">
                <img
                  className="absolute w-[16px] h-[16px] top-[8px] left-[8px]"
                  alt="Frame"
                  src="frame-14.svg"
                />
              </div>
              <div className=" w-[37px] h-[37px] bg-[#7d05f5] rounded-[18.5px] border border-solid border-[#00000033]" />
              <div className=" w-[37px] h-[37px] bg-[#f505a3] rounded-[18.5px] border border-solid border-[#00000033]" />
              <div className="bg-white  w-[37px] h-[37px] rounded-[18.5px] border border-solid border-[#00000033]" />
              <div className="bg-black  w-[37px] h-[37px] rounded-[18.5px]" />
            </div>
          </div>
        </div>
        <div className="border border-[#0000001a] px-2  w-full h-0"></div>
        <div className="flex flex-col items-start gap-[20px]   w-full ">
          <div className="flex items-center justify-between   w-full ">
            <div className=" w-fit mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal]">
              Size
            </div>
            <IoChevronForwardOutline className=" w-[16px] h-[16px]" />
          </div>
          <div className="flex flex-wrap w-[247px] items-start gap-[8px_8px]  ">
            <div className="inline-flex items-center justify-center gap-[12px] px-[20px] py-[10px]   bg-[#efefef] rounded-[62px] overflow-hidden">
              <div className=" w-fit mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[14px] tracking-[0] leading-[normal]">
                XX-Small
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[12px] px-[20px] py-[10px]   bg-[#efefef] rounded-[62px] overflow-hidden">
              <div className=" w-fit mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[14px] tracking-[0] leading-[normal]">
                X-Small
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[12px] px-[20px] py-[10px]   bg-[#efefef] rounded-[62px] overflow-hidden">
              <div className=" w-fit mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[14px] tracking-[0] leading-[normal]">
                Small
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[12px] px-[20px] py-[10px]   bg-[#efefef] rounded-[62px] overflow-hidden">
              <div className=" w-fit mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[14px] tracking-[0] leading-[normal]">
                Medium
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[12px] px-[20px] py-[10px]   bg-black rounded-[62px] overflow-hidden">
              <div className=" w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Large
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[12px] px-[20px] py-[10px]   bg-[#efefef] rounded-[62px] overflow-hidden">
              <div className=" w-fit mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[14px] tracking-[0] leading-[normal]">
                X-Large
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[12px] px-[20px] py-[10px]   bg-[#efefef] rounded-[62px] overflow-hidden">
              <div className=" w-fit mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[14px] tracking-[0] leading-[normal]">
                XX-Large
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[12px] px-[20px] py-[10px]   bg-[#efefef] rounded-[62px] overflow-hidden">
              <div className=" w-fit mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[14px] tracking-[0] leading-[normal]">
                3X-Large
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[12px] px-[20px] py-[10px]   bg-[#efefef] rounded-[62px] overflow-hidden">
              <div className=" w-fit mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[14px] tracking-[0] leading-[normal]">
                4X-Large
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#0000001a] px-2  w-full h-0"></div>
        <div className="flex flex-col items-start gap-[20px] relative  w-full ">
          <div className="flex items-center justify-between relative  w-full ">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal]">
              Dress Style
            </div>
            <IoChevronForwardOutline className="relative w-[16px] h-[16px]" />
          </div>
          <div className="flex flex-col items-start gap-[20px] relative  w-full ">
            <div className="flex items-center justify-between relative  w-full ">
              <div className="relative w-fit [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                Casual
              </div>
              <IoChevronForwardOutline className="relative w-[16px] h-[16px]" />
            </div>
            <div className="flex items-center justify-between relative  w-full ">
              <div className="relative w-fit [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                Formal
              </div>
              <IoChevronForwardOutline className="relative w-[16px] h-[16px]" />
            </div>
            <div className="flex items-center justify-between relative  w-full ">
              <div className="relative w-fit [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                Party
              </div>
              <IoChevronForwardOutline className=" w-[16px] h-[16px]" />
            </div>
            <div className="flex items-center justify-between   w-full ">
              <div className=" w-fit [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000099] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                Gym
              </div>
              <IoChevronForwardOutline className=" w-[16px] h-[16px]" />
            </div>
          </div>
        </div>
        <div className="flex h-[48px] items-center justify-center gap-[12px] px-[54px] py-[16px]   w-full bg-black rounded-[62px] overflow-hidden">
          <div className=" w-fit mt-[-2.50px] mb-[-0.50px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
            Apply Filter
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;

export const PriceRangeSlider = ({ min, max, onChange }: any) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: any) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      (range.current as HTMLDivElement).style.left = `${minPercent}%`;
      (range.current as HTMLDivElement).style.width = `${
        maxPercent - minPercent
      }%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      (range.current as HTMLDivElement).style.width = `${
        maxPercent - minPercent
      }%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="flex flex-col items-start space-y-8  w-full ">
      <div className="flex items-center justify-between   w-full ">
        <div className=" w-fit mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal]">
          Price
        </div>
        <IoChevronForwardOutline className=" w-[16px] h-[16px]" />
      </div>
      <div className="relative  h-[43px] mr-[-4.00px]">
        <div className=" flex items-center justify-center">
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            onChange={(event) => {
              const value = Math.min(Number(event.target.value), maxVal - 1);
              setMinVal(value);
              minValRef.current = value;
            }}
            className="thumb thumb--left"
            style={{ zIndex: minVal > max - 100 ? "5" : undefined }}
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            onChange={(event) => {
              const value = Math.max(Number(event.target.value), minVal + 1);
              setMaxVal(value);
              maxValRef.current = value;
            }}
            className="thumb thumb--right"
          />

          <div className="relative w-[200px]">
            <div className="slider__track absolute h-[5px] rounded-[3px] w-full z-[1] bg-[#ced4da]" />
            <div
              ref={range}
              className="slider__range absolute h-[5px] rounded-[3px] z-[2] bg-black"
            />
            <div className="slider__left-value absolute  font-medium text-black text-[14px] text-center tracking-[0] leading-[normal] mt-5 left-[6px]">
              ${minVal}
            </div>
            <div className="slider__right-value absolute  font-medium text-black text-[14px] text-center tracking-[0] leading-[normal]  mt-5 right-[-4px]">
              ${maxVal}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
