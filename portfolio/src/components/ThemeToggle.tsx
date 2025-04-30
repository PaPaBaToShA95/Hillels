import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button
            onClick={toggleTheme}
            className=" cursor-pointer text-xl"
        >
            {theme === "dark" ? "☀" : "⏾"}
        </Button>
    );
}