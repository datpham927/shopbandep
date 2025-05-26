import ProductItem from "../../components/ProductItem";

const Body = ({ products }) => {
  return (
    <div className="w-full bg-white rounded-sm ">
      <div className="grid p-3  grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  h-full flex-1 overflow-y-auto">
        {products?.map((p) => (
          <ProductItem product={p} />
        ))}
      </div>
    </div>
  );
};

export default Body;
