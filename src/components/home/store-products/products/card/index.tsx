import { type FC } from "react";
import type { ProductsType } from "../../../../../@types";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Card: FC<ProductsType> = (props) => {
  const style_icons: string =
    "bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px] shadow hover:scale-105 transition";

  return (
    <div className="cursor-pointer border-transparent border-t hover:border-[#46A358]">
      <div className="group h-[320px] bg-[#f5f5f5] flex justify-center items-center relative">
        <img
          src={props.main_image}
          className="w-4/5 h-[80%] max-sm:h-[100%]"
          alt={props.title}
        />

        <div className="absolute bottom-4 gap-5 hidden group-hover:flex items-center">
          <div className={style_icons}>
            <ShoppingCartOutlined className="text-[22px]" />
          </div>

          <div className={style_icons}>
            <HeartOutlined className="text-[22px]" />
          </div>

          <div className={style_icons}>
            <SearchOutlined className="text-[22px]" />
          </div>
        </div>
      </div>

      <h3 className="mt-1 font-medium text-sm">{props.title}</h3>
      <div className="flex items-center gap-2 mt-1">
        <h3 className="text-[#43A358] font-bold">{props.price} $</h3>
        <h3 className="font-[300] text-[#A5A5A5] line-through">
          {props.discount_price} $
        </h3>
      </div>
    </div>
  );
};

export default Card;
