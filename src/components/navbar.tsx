import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="p-4 bg-sky-900 bg-opacity-90 text-white sticky top-0 z-10 flex justify-center">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6 justify-center">
          <NavigationMenuItem>
            <a href="#how-we-got-here" className="hover:text-yellow-300">
              How We Got Here
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="#what-were-doing" className="hover:text-yellow-300">
              What We're Doing
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="#where-were-going" className="hover:text-yellow-300">
              Where We're Going
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
