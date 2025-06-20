import { Empty } from "antd";
import { useReduxSelector } from "../../../hooks/useRedux";
import Card from "./card";

const ShopProducts = () => {
  const { data } = useReduxSelector((state) => state.shopSlice);

  return (
    <div>
      <div className="flex items-center justify-between text-start border-b border-[#46A358] pb-3">
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[40%]">
          Products
        </h2>

        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Price
        </h2>

        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Quantitiy
        </h2>
        <h3>Delete</h3>
      </div>
      {!data.length ? (
        <Empty />
      ) : (
        data.map((value) => <Card key={value._id} {...value} />)
      )}
    </div>
  );
};

export default ShopProducts;
