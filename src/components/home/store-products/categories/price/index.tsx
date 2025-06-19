import { Slider } from "antd";

const Price = () => {
  const onChange = (value: number | number[]) => {
    console.log("onChange: ", value);
  };
  return (
    <div className="mt-5">
      <Slider
        range
        step={1}
        max={1000}
        min={0}
        defaultValue={[0, 1000]}
        onChange={onChange}
      />
      <h2 className="mt-2 text-base font-semibold text-[#46A358]">
        Price: <span>0$ - 1000$</span>
      </h2>
      <button className="mt-4 w-full bg-[#46A358] text-white py-2 rounded-md">
        <a className="text-white" href="">
          Filter
        </a>
      </button>
    </div>
  );
};

export default Price;
