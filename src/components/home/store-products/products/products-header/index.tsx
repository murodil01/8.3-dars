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
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        {title_category.map((value) => (
          <h3
            onClick={() => setParam({ category, sort, type: value.key,range_min,range_max })}
            className={`cursor-pointer  ${
              type === value.key && "text-[#46A358]"
            }`}
            key={value.key}
          >
            {value.title}
          </h3>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <h3>Sort by:</h3>
        <Select
          onChange={handleChange}
          defaultValue={sort}
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
