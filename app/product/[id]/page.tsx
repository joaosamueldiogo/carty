import ProductDetails from "@/components/ProductDetails";
import { fetchProductById } from "@/utils/actions/products.action";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProductById(id);
  if (!product) {
    return <div>Product not found</div>;
  }
  return <>{<ProductDetails product={product} />}</>;
}
