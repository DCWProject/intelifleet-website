import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const defaultSections = [
  {
    title: "Products",
    links: [
      { name: "Product Overview", path: "/product" },
      { name: "Live Tracking", path: "/product/live-tracking" },
      { name: "Fuel Intelligence", path: "/product/fuel-intelligence" },
      { name: "Sweeping Intelligence", path: "/product/sweeping-intelligence" },
      { name: "Driver Intelligence", path: "/product/driver-intelligence" },
      { name: "Maintenance", path: "/product/maintenance" },
      { name: "Security & Alerts", path: "/product/security-alerts" },
      { name: "Reports & Analytics", path: "/product/reports-analytics" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Individual Owners", path: "/solutions/individual-owners" },
      {
        name: "Logistics & Transport",
        path: "/solutions/logistics-transporters",
      },
      { name: "Bus Operators", path: "/solutions/bus-operators" },
      { name: "Municipal Sweeping", path: "/solutions/municipal-sweeping" },
      {
        name: "Construction & Industrial",
        path: "/solutions/construction-industrial",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", path: "/company/about" },
      { name: "Customers", path: "/company/customers" },
      { name: "Case Studies", path: "/company/case-studies" },
      { name: "Blog", path: "/company/blog" },
      { name: "Careers", path: "/company/careers" },
      { name: "Partners", path: "/company/partners" },
      { name: "Contact", path: "/company/contact" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <Instagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <Facebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", path: "/legal/terms" },
  { name: "Privacy Policy", path: "/legal/privacy" },
];

const Footer = ({
  logo = {
    url: "https://www.intelifleet.com",
    src: "/img/dark-logo.png",
    alt: "logo",
    title: "Intelifleet.com",
  },
  sections = defaultSections,
  description = "Manage your fleet efficiently with our intelligent platform.No matter the size of your fleet, we have the tools to help you succeed.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} Intelifleet.com. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}) => {
  const navigate = useNavigate();
  const { resolvedTheme } = useTheme();
  return (
    <section className=" py-10 md:py-20 bg-muted/30 border mt-10">
      <Container>
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
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
            <p className="max-w-[70%] text-sm text-muted-foreground">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-5 font-semibold uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="hover:text-primary">
                      <Link to={link.path || link.href || "#"}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li
                key={idx}
                className={cn(
                  "hover:text-primary",
                  idx == 0 && "border-r border-r-2 pr-2",
                )}
              >
                <Link to={link.path || link.href || "#"}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
