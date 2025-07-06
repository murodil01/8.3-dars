import { Select } from "antd";
import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams";
import { title_category } from "../../../../../utils";

const ProductsHeader = () => {
  const { getParam, setParam } = useSearchParamsHandler();
  const category = getParam("category") || "house-plants";
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;

  const handleChange = (e: string) => {
    setParam({ category, sort: e });
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mt-4">
      <div className="flex flex-wrap items-center gap-3 md:gap-5">
        {title_category.map((value) => (
          <h3
            onClick={() =>
              setParam({ category, sort, type: value.key, range_min, range_max })
            }
            className={`cursor-pointer text-sm md:text-base ${
              type === value.key && "text-[#46A358] font-semibold"
            }`}
            key={value.key}
          >
            {value.title}
          </h3>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm md:text-base">
        <h3 className="whitespace-nowrap">Sort by:</h3>
        <Select
          onChange={handleChange}
          defaultValue={sort}
          className="min-w-[150px]"
          options={[
            { value: "default-sorting", label: "Default Sorting" },
            { value: "the-cheapest", label: "The Cheapest" },
            { value: "most-expensive", label: "Most Expensive" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductsHeader;
