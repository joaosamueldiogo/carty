
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react"

const navigationMenuItems = {
  home: { href: "/", title: "Home" },
  shop: { href: "/shop", title: "Shop" },
  about: { href: "/about", title: "About Us" },
  contact: { href: "/contact", title: "Contact" }
}

export function Navbar() {
  return (
    <NavigationMenu className="relative flex w-full items-center justify-between px-4 py-2">
      <Link href="/" className="text-xl font-bold">Carty</Link>

      <NavigationMenuList className="max-md:hidden">
        {Object.entries(navigationMenuItems).map(([key, item]) => (
            <NavigationMenuItem key={key}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href={item.href}>{item.title}</Link>} />
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>

      <NavigationMenuList >

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Search/>} />
        </NavigationMenuItem>
        

        <NavigationMenuItem className="max-md:hidden">
          <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Heart/>} />
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<ShoppingBag/>} />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<User/>} />
        </NavigationMenuItem>

        <NavigationMenuItem className="md:hidden">
          <NavigationMenuTrigger ><Menu/></NavigationMenuTrigger>
          <NavigationMenuContent>
            {Object.entries(navigationMenuItems).map(([key, item]) => (
              <ListItem key={key} href={item.href} title={item.title}/>
          ))}
          </NavigationMenuContent>
        </NavigationMenuItem>


      </NavigationMenuList>
    </NavigationMenu>
  )
}


function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
        </div></Link>} />
    </li>
  )
}
