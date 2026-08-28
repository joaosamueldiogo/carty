import { ProductParams } from "@/shared.types";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCard({ product }: { product: ProductParams }) {
  return (
    <Link href={`/product/${product.id}`} className=" cursor-pointer">
      <Card>
        <CardContent className="group">
          <Image
            src={product.image_url_array[0]}
            alt={product.name}
            className="group-hover:scale-105 transition object-contain "
            width={400}
            height={400}
          />
          <CardTitle>{product.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {product.description}
          </CardDescription>
        </CardContent>

        {/* <CardFooter className="flex  items-center">
          <p className="text-md font-semibold">
            {product.price}
            {"€"}
          </p>
        </CardFooter> */}
      </Card>
    </Link>
  );
}
