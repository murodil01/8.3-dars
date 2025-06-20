import { Slider } from "antd";
import { useState } from "react";
import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams";

const Price = () => {
  const { getParam, setParam } = useSearchParamsHandler();
  
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const category = getParam("category") || "house-plants";
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const [price, setPrice] = useState<[number, number]>([
    Number(range_min),
    Number(range_max),
  ]);

  const setPriceFilter = () => {
    setParam({
      category,
      sort,
      type,
      range_min: price[0],
      range_max: price[1],
    });
  };
  return (
    <div className="mt-5">
      <Slider
        range
        step={1}
        max={1000}
        min={0}
        defaultValue={price}
        onChange={(e) => setPrice(e as [number, number])}
      />
      <h2 className="mt-2 text-base font-semibold text-[#46A358]">
        Price:{" "}
        <span>
          ${price[0]}$ - ${price[1]}$
        </span>
      </h2>
      <button
        onClick={setPriceFilter}
        className="mt-4 w-[115px] bg-[#46A358] text-white py-2 rounded-md"
      >
        <a className="text-white" href="">
          Filter
        </a>
      </button>
    </div>
  );
};

export default Price;
