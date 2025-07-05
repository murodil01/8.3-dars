import { useState, type FC } from "react";
import type { DataType, ProductsType } from "../../../@types";
import { Image, Skeleton } from "antd";

const ShopSwiper: FC<DataType<ProductsType>> = ({
  isError,
  isLoading,
  data,
}) => {
  const [mainUrl, setMainUrl] = useState<string>("");
  return (
    <div className="grid grid-cols-[1fr_3fr] gap-5">
      <div className="flex flex-col gap-5">
        {isLoading || isError
          ? Array.from({ length: 4 }).map((_, idx) => (
              <Skeleton.Image key={idx} active className="!w-full !h-[150px]" />
            ))
          : data?.detailed_images.map((value) => (
              <img
                key={value}
                onClick={() => setMainUrl(value)}
                className="w-full h-[150px] cursor-pointer"
                src={value}
                alt={value}
              />
            ))}
      </div>
      {isLoading || isError ? (
        <Skeleton.Image className="!w-full !h-[500px]" active />
      ) : (
        <Image
          className="w-full"
          src={mainUrl === "" ? data?.main_image : mainUrl}
        />
      )}
    </div>
  );
};

export default ShopSwiper;
