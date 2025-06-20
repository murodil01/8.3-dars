import type { DataType, ProductsType } from "../../../../@types";
import useLoader from "../../../../generic/loader";
import { useQueryHandler } from "../../../../hooks/useQuery";
import { useSearchParamsHandler } from "../../../../hooks/useSearchParams";
import Card from "./card";
import ProductsHeader from "./products-header";

const Products = () => {
  const {getParam} = useSearchParamsHandler();
  const category = getParam("category") || "house-plants";
  
  const { data, isLoading, isError }: DataType<ProductsType[]> =
    useQueryHandler({
      pathname: `products-${category}`,
      url: `flower/category/${category}`,
    });
  const { products_loader } = useLoader();
  return (
    <div>
      <ProductsHeader />
      <div className="grid grid-cols-3 gap-5 mt-5">
        {isLoading || isError
          ? products_loader()
          : data?.map((value) => <Card key={value._id} {...value} />)}
      </div>
    </div>
  );
};

export default Products;
