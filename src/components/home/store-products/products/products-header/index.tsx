import { Select } from "antd";

const ProductsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <h3>All plants</h3>
        <h3>New Arrivals</h3>
        <h3>Sale</h3>
      </div>

      <div className="flex items-center gap-2">
        <h3>Sort by:</h3>
        <Select
          defaultValue="lucy"
          options={[
            { value: "jack", label: "Default Sorting" },
            { value: "lucy", label: "The Cheapest" },
            { value: "Yiminghe", label: "Most Expensive" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductsHeader;
