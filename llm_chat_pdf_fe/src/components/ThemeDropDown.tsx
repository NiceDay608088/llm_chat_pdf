"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";

const ThemeDropdownMenu = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = (selectedTheme: "dark" | "light") => {
    setTheme(selectedTheme);
  };

  const renderIcon = () => {
    return theme === "dark" ? (
      <Moon color="white" size={20} />
    ) : (
      <Sun color="black" size={20} />
    );
  };

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-center items-center">{renderIcon()}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => toggleTheme("light")}>
          Light Mode
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => toggleTheme("dark")}>
          Dark Mode
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeDropdownMenu;
