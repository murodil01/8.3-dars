import { type FC } from "react";
import type { ProductsType } from "../../../../../@types";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getData } from "../../../../../redux/shop-slice";
import { addToWishlist } from "../../../../../redux/wishlist-slice";
import { useNavigate } from "react-router-dom";

const Card: FC<ProductsType> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const style_icons: string =
    "bg-[#FFFFFF] w-8 h-8 md:w-[35px] md:h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[18px] md:text-[20px] shadow hover:scale-105 transition";

  return (
    <div className="cursor-pointer border-transparent border-t hover:border-[#46A358] p-2">
      <div className="group h-[280px] md:h-[320px] lg:h-[360px] bg-[#f5f5f5] flex justify-center items-center relative">
        <img
          src={props.main_image}
          className="w-4/5 h-[80%] max-sm:h-[100%] object-contain"
          alt={props.title}
        />

        <div className="absolute bottom-4 gap-3 md:gap-5 hidden group-hover:flex items-center">
          <div onClick={() => dispatch(getData(props))} className={style_icons}>
            <ShoppingCartOutlined />
          </div>

          <div
            onClick={() => dispatch(addToWishlist(props))}
            className={style_icons}
          >
            <HeartOutlined />
          </div>

          <div
            onClick={() =>
              navigate(`/shop-info/${props.category}/${props._id}`)
            }
            className={style_icons}
          >
            <SearchOutlined />
          </div>
        </div>
      </div>

      <h3 className="mt-2 font-medium text-sm md:text-base">{props.title}</h3>
      <div className="flex items-center gap-2 mt-1">
        <h3 className="text-[#43A358] font-bold text-sm md:text-base">
          {props.price} $
        </h3>
        <h3 className="font-light text-[#A5A5A5] line-through text-sm md:text-base">
          {props.discount_price} $
        </h3>
      </div>
    </div>
  );
};

export default Card;
