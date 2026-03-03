import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = async () => {
    const isDark = resolvedTheme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    // If View Transitions API is not supported or user prefers reduced motion, just toggle
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    // Use View Transitions API with CSS animation
    document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });
  };

  if (!mounted) return null;

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      {resolvedTheme === "light" ? (
        <Moon className="h-4 w-4 text-black hover:text-blue-500 transition-colors duration-300" />
      ) : (
        <Sun className="h-4 w-4 text-yellow-300 hover:text-yellow-400 transition-colors duration-300" />
      )}
    </Button>
  );
}
