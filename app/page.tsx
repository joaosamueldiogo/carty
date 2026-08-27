
import Gallery, { GalleryItem } from '@/components/Gallery'
import { Navbar } from '@/components/Navbar'


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
  ]

  return (
    <div>
      <Navbar />
      <div>
        <Gallery data={galleryData} />
      </div>
    </div>
  )
}
