import { ProductParams } from "@/shared.types";
import React from "react";
import ProductCard from "@/components/ProductCard";

export default function HomeProducts({
  products,
}: {
  products: ProductParams[];
}) {
  return (
    <div className="flex flex-col items-center p-4 md:p-12 gap-4 w-full">
      <h3 className="text-2xl font-medium text-left w-full">
        Popular products
      </h3>

      <div
        className="
    grid 
    max-md:gap-2 
    gap-3
    w-full
    grid-cols-2
    lg:grid-cols-3 
  "
      >
        {products.map((product, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      {/* <button className="px-12 py-2.5 mb-4 border rounded bg-[#043033] text-white hover:bg-black transition">
        See more
      </button> */}
    </div>
  );
}
