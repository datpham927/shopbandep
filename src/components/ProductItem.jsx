import { Rating } from "@mui/material";
import * as React from "react";

const ProductItem = ({ product }) => {
  // Fallback values for missing data
  return (
    <a
      href={product.product_link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col w-full h-fit p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-300"
      aria-label={`View details for ${product.product_title}`}
    >
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          src={product.product_image}
          alt={product.product_title}
          loading="lazy"
        />
      </div>
      <h3 className="text-sm font-medium text-pink-700 line-clamp-2 min-h-[2.5rem]">
        {product.product_title}
      </h3>
      <div className="flex items-center justify-between mt-2">
        <Rating value={5} readOnly precision={0.5} size="small" />
        <span className="text-xs text-gray-600">{product.product_sold}</span>
      </div>
    </a>
  );
};

export default ProductItem;
