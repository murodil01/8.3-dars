/*import { Link } from "react-router-dom";
import { Form } from "antd";
import Prices from "./prices";
import { useRef } from "react";
import { useGetCoupon } from "../../../hooks/useQueryAction";
import { Loader } from "lucide-react";

const ShopTotal = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {mutate, isPending} = useGetCoupon();
  const getCoupon = () => {
    let value = inputRef.current?.value;
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

export default ShopTotal;*/

import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import Prices from "./prices";
import { useGetCoupon } from "../../../hooks/useQueryAction";
import { Loader } from "lucide-react";

const ShopTotal = () => {
  const [form] = Form.useForm();
  const { mutate, isPending } = useGetCoupon();

  const getCoupon = ({ coupon }: { coupon: string }) => {
    if (coupon?.trim() === "") return;
    mutate(coupon);
  };

  return (
    <div>
      <h3 className="pb-5 text-[#3D3D3D] border-b border-[#46A358] font-bold text-[18px] mb-[35px]">
        Card Total
      </h3>

      <Form
        form={form}
        onFinish={getCoupon}
        className="flex h-[40px]"
        layout="inline"
      >
        <Form.Item
          name="coupon"
          className="w-4/5"
          rules={[{ required: true, message: "Coupon codeni kiriting!" }]}
        >
          <Input
            placeholder="Enter coupon code here..."
            className="h-[40px] rounded-l-lg border-[#46A358]"
          />
        </Form.Item>

        <Form.Item className="w-1/5 m-0">
          <Button
            htmlType="submit"
            className="bg-[#46A358] text-white w-full h-[40px] rounded-r-lg flex items-center justify-center"
          >
            {isPending ? (
              <Loader className="animate-spin w-4 h-4" />
            ) : (
              <span>Apply</span>
            )}
          </Button>
        </Form.Item>
      </Form>

      <Prices />

      <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px] mt-4">
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
