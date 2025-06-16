import { useState } from "react";
import { Slider, Select } from "antd";
import type { SelectProps } from "antd";

const tabs = ["All Plants", "New Arrivvals", "Sale"];

const categories = [
  { name: "House Plants", count: 0 },
  { name: "Potter Plants", count: -19 },
  { name: "Seeds", count: 0, active: true },
  { name: "Small Plants", count: 11 },
  { name: "Big Plants", count: 3 },
  { name: "Succulents", count: 10 },
  { name: "Trerrariums", count: 10 },
  { name: "Gardening", count: 2 },
  { name: "Accessories", count: 13 },
];

const options: SelectProps["options"] = [
  { value: "default", label: "Default Sorting" },
  { value: "lowToHigh", label: "Price: Low to High" },
  { value: "highToLow", label: "Price: High to Low" },
  { value: "newest", label: "Newest Arrivals" },
];

const Inform = () => {
  const [activeTab, setActiveTab] = useState("All Plants");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const handleChange = (value: string) => {
    console.log("Selected sort option:", value);
  };

  const onPriceChange = (value: number[]) => {
    if (value.length === 2) {
      setPriceRange([value[0], value[1]]);
    }
  };

  return (
    <div className="max-w-[90%] m-auto px-4 mt-6 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-[310px] bg-[#F5F5F580] p-4 rounded-lg">
        <h3 className="font-bold text-lg">Categories</h3>
        <div className="flex flex-col gap-3 mt-3 pl-2">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`flex justify-between cursor-pointer hover:text-[#46A358] transition-colors ${
                cat.active ? "text-[#46A358]" : "text-black"
              }`}
            >
              <h3>{cat.name}</h3>
              <p>({cat.count})</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-lg">Price Range</h3>
          <Slider
            range
            min={0}
            max={1000}
            defaultValue={[0, 1000]}
            onChange={onPriceChange}
          />
          <p className="font-normal mt-2">
            Price:
            <span className="font-bold text-[#46A358]">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </p>
          <button className="mt-4 w-full bg-[#46A358] text-white py-2 rounded-md">
            <a className="text-white" href="">Filter</a>
          </button>
        </div>

        <div className="mt-8 bg-[#d9fae0] w-full h-[300px] flex flex-col items-center justify-center text-center rounded-lg">
          <h1 className="text-[#46A358] text-3xl font-bold">Super Sale</h1>
          <p className="mt-2 text-base font-semibold">UP TO 75% OFF</p>
          <img
            className="my-4 h-[160px] object-contain"
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2FIMPATIENS.png?alt=media&token=0aa1f591-8250-4c8f-8b9b-7f88664d85a4"
            alt="discount"
          />
        </div>
      </div>

      <div className="flex-1 w-full">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
          <div className="flex gap-6 flex-wrap">
            {tabs.map((tab) => (
              <h3
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer font-medium text-sm sm:text-base transition-colors border-b-2 ${
                  activeTab === tab
                    ? "text-[#46A358] border-[#46A358]"
                    : "text-gray-700 border-transparent"
                }`}
              >
                {tab}
              </h3>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm">Sort by:</p>
            <Select
              defaultValue="default"
              size="middle"
              style={{ width: 180 }}
              options={options}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="border border-dashed border-gray-300 p-6 text-center text-gray-400 rounded-lg min-h-[200px]">
          Product cards will be rendered here...
        </div>
      </div>
    </div>
  );
};

export default Inform;
