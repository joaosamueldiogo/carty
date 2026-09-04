import Gallery, { GalleryItem } from "@/components/Gallery";
import HomeProducts from "@/components/HomeProducts";
import { Navbar } from "@/components/Navbar";
import { ProductParams } from "@/shared.types";
import { fetchProducts } from "@/utils/actions/products.action";

const allProducts = await fetchProducts();
console.log("All Products:", allProducts);

export default function page() {
  const galleryData: GalleryItem[] = [
    {
      image: "/images/bolsos_totte_bag.png",
      title: "Prático e elegante: Bolsos Tote Bag para o seu dia a dia",
      buttonText: "Shop Now",
    },
    {
      image: "/images/capa_computador2.png",
      title: "Capa de computador: Proteção e estilo para o seu dispositivo",
      buttonText: "Explore",
    },
  ];

  return (
    <div>
      <div>
        <Gallery data={galleryData} />

        <HomeProducts products={allProducts} />
      </div>
    </div>
  );
}
