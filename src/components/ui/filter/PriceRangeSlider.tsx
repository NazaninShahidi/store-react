import { useCallback, useEffect, useRef, useState } from "react";

type props = {
  min: number;
  max: number;
  onChange: ({ min, max }: { min: number; max: number }) => void;
};

const PriceRangeSlider = ({ min, max, onChange }: props) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const getPercent = useCallback(
    (value: any) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

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

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      (range.current as HTMLDivElement).style.width = `${
        maxPercent - minPercent
      }%`;
    }
  }, [maxVal, getPercent]);

  //   useEffect(() => {
  //     onChange({ min: minVal, max: maxVal });
  //   }, [minVal, maxVal]);

  return (
    <div className="flex flex-col items-start space-y-8 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="w-fit mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal]">
          Price
        </div>
      </div>
      <div className="relative h-[43px] mr-[-4.00px]">
        <div className="flex items-center justify-center">
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
            onBlur={() => onChange({ min: minVal, max: maxVal })}
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
            onBlur={() => onChange({ min: minVal, max: maxVal })}
            className="thumb thumb--right"
          />
          <div className="relative w-[200px]">
            <div className="slider__track absolute h-[5px] rounded-[3px] w-full z-[1] bg-[#ced4da]" />
            <div
              ref={range}
              className="slider__range absolute h-[5px] rounded-[3px] z-[2] bg-black"
            />
            <div className="slider__left-value absolute font-medium text-black text-[14px] text-center tracking-[0] leading-[normal] mt-5 left-[6px]">
              ${minVal}
            </div>
            <div className="slider__right-value absolute font-medium text-black text-[14px] text-center tracking-[0] leading-[normal] mt-5 right-[-4px]">
              ${maxVal}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
