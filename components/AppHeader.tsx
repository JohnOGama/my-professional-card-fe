"use client";

import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const AppHeader = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isDark = resolvedTheme === "dark";

  return (
    <div className="w-full px-3 md:px-0 py-2 border-b sticky top-0 bg-background flex justify-between items-center">
      <h1>Professional Card</h1>
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        {isDark ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};

export default AppHeader;
