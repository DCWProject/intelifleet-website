import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ThemeToggle } from "./Theme";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  LayoutDashboard,
  Map,
  Fuel,
  Truck,
  User,
  Wrench,
  Shield,
  BarChart3,
  UserCircle,
  Bus,
  Building2,
  HardHat,
  Info,
  Users,
  FileText,
  Briefcase,
  Handshake,
  Mail,
} from "lucide-react";

const menuItems = [
  {
    title: "Products",
    links: [
      {
        name: "Product Overview",
        path: "/product",
        description: "Complete fleet intelligence platform overview.",
        icon: LayoutDashboard,
      },
      {
        name: "Live Tracking",
        path: "/product/live-tracking",
        description: "Real-time GPS tracking with live telemetry.",
        icon: Map,
      },
      {
        name: "Fuel Intelligence",
        path: "/product/fuel-intelligence",
        description: "Monitor fuel usage and prevent theft.",
        icon: Fuel,
      },
      {
        name: "Sweeping Intelligence",
        path: "/product/sweeping-intelligence",
        description: "Track municipal sweeping performance.",
        icon: Truck,
      },
      {
        name: "Driver Intelligence",
        path: "/product/driver-intelligence",
        description: "Analyze driver behavior and safety metrics.",
        icon: User,
      },
      {
        name: "Maintenance",
        path: "/product/maintenance",
        description: "Schedule preventive vehicle maintenance.",
        icon: Wrench,
      },
      {
        name: "Security & Alerts",
        path: "/product/security-alerts",
        description: "Instant alerts for violations and risks.",
        icon: Shield,
      },
      {
        name: "Reports & Analytics",
        path: "/product/reports-analytics",
        description: "Advanced dashboards and performance insights.",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        name: "Individual Owners",
        path: "/solutions/individual-owners",
        description: "Smart tracking for personal vehicles.",
        icon: UserCircle,
      },
      {
        name: "Logistics & Transport",
        path: "/solutions/logistics-transporters",
        description: "Fleet optimization for transport companies.",
        icon: Truck,
      },
      {
        name: "Bus Operators",
        path: "/solutions/bus-operators",
        description: "School & public bus tracking system.",
        icon: Bus,
      },
      {
        name: "Municipal Sweeping",
        path: "/solutions/municipal-sweeping",
        description: "Monitor city cleaning operations live.",
        icon: Building2,
      },
      {
        name: "Construction & Industrial",
        path: "/solutions/construction-industrial",
        description: "Heavy equipment & asset monitoring.",
        icon: HardHat,
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About",
        path: "/company/about",
        description: "Learn more about our mission and vision.",
        icon: Info,
      },
      {
        name: "Customers",
        path: "/company/customers",
        description: "See who trusts our platform.",
        icon: Users,
      },
      {
        name: "Case Studies",
        path: "/company/case-studies",
        description: "Real-world success stories.",
        icon: FileText,
      },
      {
        name: "Blog",
        path: "/company/blog",
        description: "Latest updates and industry insights.",
        icon: FileText,
      },
      {
        name: "Careers",
        path: "/company/careers",
        description: "Join our growing team.",
        icon: Briefcase,
      },
      {
        name: "Partners",
        path: "/company/partners",
        description: "Explore our technology partners.",
        icon: Handshake,
      },
      {
        name: "Contact",
        path: "/company/contact",
        description: "Get in touch with our team.",
        icon: Mail,
      },
    ],
  },
];

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { resolvedTheme } = useTheme();
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuState ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuState]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="fixed z-20 w-full">
      <Container
        className={cn(
          "px-2! transition-all duration-300 h-15",
          (isScrolled || isMobile) && "border-b bg-background",
          isScrolled &&
          !isMobile &&
          "bg-white/5 lg:border shadow max-w-4xl rounded-xl backdrop-blur-lg mt-2 md:mt-4",
        )}
      >
        <div className="flex items-center justify-between gap-6 h-full w-full">
          <div className="flex gap-2 items-center cursor-pointer" onClick={()=>navigate('/')}>
            <img
              className="max-h-10 max-w-10 object-cover"
              src={
                resolvedTheme == "light"
                  ? "/img/light-logo.png"
                  : "/img/dark-logo.png"
              }
            />

           <img
              className="max-h-9 object-cover"
              src={
                resolvedTheme == "light"
                  ? "/img/light-text.png"
                  : "/img/dark-text.png"
              }
            />
          </div>
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 font-medium">
                    <Link to="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {menuItems?.map((item) => {
                  return (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {item?.links?.length > 4 ? (
                          <ul className="w-100 grid grid-cols-2 gap-1">
                            {item.links?.map((link) => {
                              return (
                                <ListItem
                                  href={link.path}
                                  title={link.name}
                                  icon={link.icon}
                                >
                                  {link.description}
                                </ListItem>
                              );
                            })}
                          </ul>
                        ) : (
                          <ul className="w-90">
                            {item.links?.map((link) => {
                              return (
                                <ListItem
                                  href={link.path}
                                  title={link.name}
                                  icon={link.icon}
                                >
                                  {link.description}
                                </ListItem>
                              );
                            })}
                          </ul>
                        )}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex gap-1 items-center lg:hidden">
            <ThemeToggle />

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState == true ? "Close Menu" : "Open Menu"}
              className="cursor-pointer p-2 flex justify-center items-center"
            >
              {menuState ? (
                <X className="size-6 -rotate-180 transition-all duration-200" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>

          <div className="gap-2 items-center hidden lg:flex">
            <ThemeToggle />

            <div className="flex gap-1 items-center">
              <Button
                size="sm"
              // className={cn(isScrolled ? "lg:inline-flex" : "hidden")}
              >
                Get a Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <AnimatePresence mode="wait">
        {menuState && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(2px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(2px)" }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-50 bg-background p-5 overflow-y-auto h-[calc(100vh-60px)] mt-14"
          >
            <nav className="space-y-6">
              {menuItems.map((section, idx) => (
                <div key={idx}>
                  <div className="text-sm font-semibold uppercase mb-2">
                    {section.title}
                  </div>
                  <div className="flex flex-col gap-2">
                    {section.links.map((link, linkIdx) => (
                      <Link
                        key={linkIdx}
                        to={link.path}
                        className="text-sm text-muted-foreground truncate"
                        onClick={() => setMenuState(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            <div className="mt-8">
              <Button
                size="lg"
                className="w-full"
                onClick={() => {
                  setMenuState(false);
                  navigate("/company/contact");
                }}
              >
                Get a Demo
              </Button>
            </div>
          </motion.div>
        )}{" "}
      </AnimatePresence>
    </header>
  );
};

export default Header;

function ListItem({ title, children, icon: Icon, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium flex gap-1.5 items-start">
              <Icon className="size-3.5" />
              {title}
            </div>
            <div className="line-clamp-1 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
