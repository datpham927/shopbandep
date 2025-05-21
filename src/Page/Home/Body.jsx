import ProductItem from "../../components/ProductItem";
import { PRODUCTS } from "../../config/product";

const Body = () => {
  return (
    <div className="w-full bg-white rounded-sm ">
      <div className="grid p-3  grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  h-full flex-1 overflow-y-auto">
        {PRODUCTS?.map((p) => (
          <ProductItem product={p} />
        ))}
      </div>
    </div>
  );
};

export default Body;
