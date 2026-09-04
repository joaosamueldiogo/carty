import { ProductParams } from "@/shared.types";
import { Star, StarHalf, StarOff, Stars } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import { Button } from "@/components/ui/button";

export default function ProductDetails({
  product,
}: {
  product: ProductParams;
}) {
  return (
    <>
      <div className="max-md:p-0 max-md:pb-6 p-4 grid grid-cols-1 md:grid-cols-2 gap-6 bg-sidebar/75 text-sidebar-foreground">
        <Gallery
          className="md:rounded-lg"
          data={product.image_url_array.map((image) => ({
            title: null,
            image: image,
            buttonText: null,
          }))}
        ></Gallery>

        <div className="flex flex-col gap-4 max-md:px-4">
          <div>
            <h1 className="text-3xl font-semibold text-sidebar-primary">
              {product.name}
            </h1>{" "}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                <Star className="h-4 w-4 fill-chart-1" strokeWidth={0} />
                <Star className="h-4 w-4 fill-chart-1" strokeWidth={0} />
                <Star className="h-4 w-4 fill-chart-1" strokeWidth={0} />
                <Star className="h-4 w-4 fill-chart-1" strokeWidth={0} />
                <StarHalf className="h-4 w-4 fill-chart-1" strokeWidth={0} />
              </div>
              <p>(4.5)</p>
            </div>
          </div>

          <p>{product.description}</p>
          <p className="text-3xl font-medium mt-6">
            {process.env.NEXT_PUBLIC_CURRENCY}
            {product?.price}
            <span className="text-base font-normal text-muted line-through ml-2">
              {process.env.NEXT_PUBLIC_CURRENCY}
              {product?.offer_price}
            </span>
          </p>
          <hr className="bg-gray-600 my-6" />
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full max-w-72">
              <tbody>
                <tr>
                  <td className="text-gray-600 font-medium">Brand</td>
                  <td className="text-gray-800/50 ">{product.brand}</td>
                </tr>
                {product?.colors && (
                  <tr>
                    <td className="text-gray-600 font-medium">Colors</td>
                    <td className="text-gray-800/50 ">
                      {product.colors.map((each) => `${each} `)}
                    </td>
                  </tr>
                )}
                <tr>
                  <td className="text-gray-600 font-medium">Category</td>
                  <td className="text-gray-800/50">{product.category.name}</td>
                </tr>
              </tbody>
            </table>
            {product.product_comment && (
              <div className="mt-4">
                <p className="text-black">{product.product_comment}</p>
              </div>
            )}

            <div className="mt-2">
              {product.sizes?.map((each, index) => (
                <button
                  className={` text-sm rounded-lg px-2 py-1 mr-1 `}
                  key={index}
                >
                  {each}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              className="flex-1"
              size="lg"
              variant="outline"
              // onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button size="lg" variant="default" className="flex-1">
              <Link href={`/buy-now/${product.id}`}>Buy Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
