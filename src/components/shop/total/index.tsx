import { Link } from "react-router-dom";
import { Form } from "antd";
import Prices from "./prices";
import { useRef } from "react";
import { useGetCoupon } from "../../../hooks/useQueryAction";
import { Loader } from "lucide-react";

const ShopTotal = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {mutate, isPending} = useGetCoupon();
  const getCoupon = () => {
    const value = inputRef.current?.value;
    if (value?.trim() === "") {
      return;
    }
    mutate(value as string);
  };
  return (
    <div>
      <h3 className="pb-5 text-[#3D3D3D] border-b border-[#46A358] font-bold text-[18px] mb-[35px]">
        Card Total
      </h3>

      <Form onFinish={getCoupon} className="flex h-[40px]">
        <input
          ref={inputRef}
          name="coupon"
          placeholder="Enter coupon code here..."
          className="border w-4/5 border-[#46A358] pl-[15px] placeholder:font-light rounded-lg rounded-r-none outline-l-none"
        />

        <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-1/5 rounded-l-none">
          {isPending ? <Loader className="animate-spin"/> : <span>Apply</span> }
        </button>
      </Form>
      <Prices />
      <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px]">
        Continue to Checkout
      </button>

      <Link to={"/"} className="flex justify-center">
        <button className="mt-[14px] text-[#46A358] cursor-pointer">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default ShopTotal;


