import  ThemeToggle  from "@/components/ThemeToggle";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"




const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <NavigationMenu >
                <NavigationMenuList className="gap-12">
                    <NavigationMenuItem>
                        <a href="/"  >
                            <NavigationMenuLink className="text-2xl" >
                                Головна сторінка
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <a href="/swapi">
                            <NavigationMenuLink className="text-2xl">
                                SWAPI
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <a href="/todo">
                            <NavigationMenuLink className="text-2xl">
                                TODO List
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
        </header>
    );
};

export default Header;

