// src/components/theme-provider.jsx
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeWrapper({ children }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
