import type { CategoriesType, DataType } from "../../../../@types";
import { useQueryHandler } from "../../../../hooks/useQuery";
import Discount from "../products/discount";
import Price from "./price";
import useLoader from "../../../../generic/loader";
import { useSearchParamsHandler } from "../../../../hooks/useSearchParams";

const Categories = () => {
  const { data, isLoading, isError }: DataType<CategoriesType[]> =
    useQueryHandler({
      pathname: "categories",
      url: "flower/category",
    });
  const { setParam, getParam } = useSearchParamsHandler();
  const category = getParam("category") || "house-plants";
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";

  const { categories_loader } = useLoader();

  return (
    <div>
      <div className="w-[310px] bg-[#F5F5F580] p-[20px] max-lg:hidden">
        <h2 className="font-bold text-[#3D3D3D] text-[18px] mb-2">
          Categories
        </h2>

        {isLoading || isError
          ? categories_loader()
          : data?.map((value) => (
              <div
                onClick={() =>
                  setParam({ category: value.route_path, sort, type })
                }
                key={value._id}
                className={`flex w-full p-2 justify-between text-base font-medium cursor-pointer hover:text-[#46A358] transition-colors ${
                  category === value.route_path && "text-[#46A358]"
                }`}
              >
                <div>{value.title}</div>
                <div>({Math.abs(value.count)})</div>
              </div>
            ))}

        <Price />
      </div>
      <Discount />
    </div>
  );
};

export default Categories;
