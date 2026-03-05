import React, { useLayoutEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "next-themes";

const AppLayout = ({ title, children }) => {
  useLayoutEffect(() => {
    document.title = `InteliFleet - ${title}`;
  });
  const { resolvedTheme } = useTheme();
  return (
    <div>
      <Header />
      <div className="min-h-screen w-full relative">
        {resolvedTheme == "light" ? (
          <div
            className="absolute inset-0 max-h-screen z-0 pointer-events-none"
            style={{
              backgroundImage: `
  radial-gradient(
    circle at center,
    rgba(34, 197, 94, 0.14) 0%,
    rgba(34, 197, 94, 0.08) 35%,
    rgba(34, 197, 94, 0.04) 55%,
    transparent 90%
  )
`,
              mixBlendMode: "multiply",
              maskImage:
                "linear-gradient(to bottom, black 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 80%, transparent 100%)",
            }}
          />
        ) : (
          <div
            className="absolute inset-0 z-0 max-h-screen pointer-events-none"
            style={{
              background: `
        radial-gradient(
          circle at center,
          rgba(34, 197, 94, 0.12) 0%,
          rgba(34, 197, 94, 0.06) 20%,
          rgba(0, 0, 0, 0.0) 60%
        )
      `,
            }}
          />
        )}
        <div
          className="absolute inset-0 -z-10 max-h-screen dark:opacity-15"
          style={{
            backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
      `,
            WebkitMaskImage: `
  repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
      `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        {children}
      </div>

      <Footer
        logo={{
          url: "https://www.intelifleet.com",
          src:
            resolvedTheme !== "dark"
              ? "/img/light-logo.png"
              : "/img/dark-logo.png",
          alt: "logo",
          title: "Intelifleet.com",
        }}
      />
    </div>
  );
};

export default AppLayout;
