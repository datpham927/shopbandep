import { categories } from "../../config/category";

const Sidebar = ({ categoryCode, setCategoryCode }) => {
  return (
    <div
      className={`flex flex-col gap-3 shrink-0 h-full 
        w-2/12 md:w-2/12 sm:w-auto 
        bg-[#EAD6E7] border-b border-slate-200 
        shadow-cart rounded-md sm:rounded-xl overflow-hidden`}
    >
      <h3 className="hidden sm:block font-semibold text-pink-500 text-xl px-4 py-3">
        Danh mục
      </h3>
      <ul className="flex flex-col text-sm">
        {categories?.map((c) => (
          <li
            key={c?._id}
            onClick={() => setCategoryCode(c.category_code)}
            className={`flex gap-2 px-4 py-2 items-center cursor-pointer hover:text-[#FF8CA1] ${
              categoryCode === c.category_code
                ? "text-pink-600 font-semibold bg-pink-100"
                : ""
            }`}
          >
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={c?.category_thumbnail}
                alt={c?.category_name}
              />
            </div>
            <span className="hidden sm:inline-block text-base">
              {c?.category_name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
