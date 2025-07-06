import Categories from "./categories";
import Products from "./products";

const StoreProducts = () => {
  return (
    <div
      className="
        w-[90%] mx-auto mt-10 
        grid gap-5 
        grid-cols-1 
        md:grid-cols-[1fr_3fr]
      "
    >
      <Categories />
      <Products />
    </div>
  );
};

export default StoreProducts;
