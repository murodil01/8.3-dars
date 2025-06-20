import { DeleteFilled } from "@ant-design/icons";
import type { ProductsTypeLocal } from "../../../../@types";
import type { FC } from "react";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import {
  decreament,
  deleteData,
  increament,
} from "../../../../redux/shop-slice";

const Card: FC<ProductsTypeLocal> = (props) => {
  const dispatch = useReduxDispatch();
  return (
    <div>
      <div className="my-5 bg-[#eee] p-2 flex items-center justify-between rounded-lg">
        <div className="flex items-center gap-4 w-[40%]">
          <img
            src={props.main_image}
            alt="Image"
            className="w-[70px] h-[70px]"
          />
          <div>
            <h3 className="text-[16px] font-medium">{props.title}</h3>
            <p className="text-[14px] font-normal pt-[10px]">
              <span className="text-[#A5A5A5]">SKU: ${props._id}</span>
            </p>
          </div>
        </div>

        <div className="text-[#727272] text-[16px] font-medium w-[20%]">
          $ {props.price}
        </div>

        <div className="flex items-center gap-3 w-[20%]">
          <button
            onClick={() => dispatch(decreament(props._id))}
            className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white"
          >
            -
          </button>

          <span className="text-[17px]">{props.count}</span>

          <button
            onClick={() => dispatch(increament(props._id))}
            className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white"
          >
            +
          </button>
        </div>
        <div className="text-[#727272] text-[16px] font-medium w-[20%]">
          $ {props.userPrice?.toFixed(2)}
        </div>
        <DeleteFilled
          onClick={() => dispatch(deleteData(props._id))}
          classID="text-[#727272] text-[20px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Card;
