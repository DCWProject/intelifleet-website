import React, { useState, useEffect, useRef } from "react";
import {
  Ambulance,
  Apple,
  ArrowRight,
  Bell,
  Bike,
  Blocks,
  BlocksIcon,
  BrushCleaning,
  Bus,
  Car,
  ChartPie,
  ChevronRight,
  Cloud,
  DollarSign,
  Fuel,
  Heart,
  HelpCircle,
  MoveLeftIcon,
  MoveUpLeftIcon,
  Package,
  RulerDimensionLineIcon,
  ShieldCheck,
  Smartphone,
  SmilePlus,
  Star,
  StopCircle,
  Terminal,
  Tractor,
  TrendingUp,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Container } from "@/components/ui/container";
import { Link } from "react-router-dom";
import PricingTable from "@/components/modern-pricing-table";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { useTheme } from "next-themes";
import FeatureSection from "./FeatureSection";

// Sample pricing data
const samplePlans = [
  {
    title: "Starter",
    price: {
      monthly: 9,
      yearly: 96,
    },
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 5 projects",
      "5GB storage",
      "Basic support",
      "Standard analytics",
      "API access",
    ],
    ctaText: "Get Started",
    ctaHref: "#",
    isFeatured: false,
  },
  {
    title: "Professional",
    price: {
      monthly: 29,
      yearly: 312,
    },
    description: "Ideal for growing teams and businesses",
    features: [
      "Up to 25 projects",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
      "API access",
      "Team collaboration",
      "Custom integrations",
    ],
    ctaText: "Start Free Trial",
    ctaHref: "#",
    isFeatured: true,
  },
  {
    title: "Enterprise",
    price: {
      monthly: 99,
      yearly: 1068,
    },
    description: "For large organizations with complex needs",
    features: [
      "Unlimited projects",
      "500GB storage",
      "24/7 dedicated support",
      "Advanced analytics",
      "API access",
      "Team collaboration",
      "Custom integrations",
      "Advanced security",
      "SSO authentication",
    ],
    ctaText: "Contact Sales",
    ctaHref: "#",
    isFeatured: false,
  },
];

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const users = [
  {
    name: "Arjun Mehta",
    username: "@arjun_mehta",
    review:
      "Absolutely love the platform! The UI is clean and very easy to use.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Priya Sharma",
    username: "@priya_sharma",
    review:
      "Customer support is very responsive and helpful. Great experience!",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Rahul Verma",
    username: "@rahul_verma",
    review:
      "Performance is smooth and features are very useful for our business.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sneha Patil",
    username: "@sneha_patil",
    review: "The dashboard analytics helped us track everything in real time.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Vikram Singh",
    username: "@vikram_singh",
    review: "Highly recommend this to anyone looking for a scalable solution.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Ananya Das",
    username: "@ananya_das",
    review: "Very intuitive design and fast loading speed. Impressive!",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Karan Malhotra",
    username: "@karan_m",
    review: "Integration was seamless and setup was very quick.",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Neha Kapoor",
    username: "@neha_kapoor",
    review: "Clean interface and powerful reporting features.",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Rohan Gupta",
    username: "@rohan_gupta",
    review: "The live tracking feature works flawlessly!",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Ishita Roy",
    username: "@ishita_roy",
    review: "Easy to manage and customize according to our needs.",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Amit Kulkarni",
    username: "@amit_k",
    review: "Reliable system with excellent uptime.",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Pooja Nair",
    username: "@pooja_nair",
    review: "The mobile responsiveness is fantastic.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Manish Yadav",
    username: "@manish_yadav",
    review: "Advanced features yet simple to operate. Well built!",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Kavya Iyer",
    username: "@kavya_iyer",
    review: "The UI animations and transitions look very modern.",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    name: "Siddharth Jain",
    username: "@sid_jain",
    review: "Great value for money with powerful tools included.",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Ritika Sen",
    username: "@ritika_sen",
    review: "Very satisfied with the overall performance.",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    name: "Deepak Reddy",
    username: "@deepak_reddy",
    review: "Makes our workflow much more efficient.",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    name: "Meera Joshi",
    username: "@meera_joshi",
    review: "Simple, elegant, and extremely functional platform.",
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
  },
];

const logos = [
  { name: "Nvidia", src: "/img/nvidea.png" },
  { name: "Azure", src: "/img/azure.png" },
  { name: "GitHub", src: "/img/github.png" },
  { name: "Vercel", src: "/img/vercel.png" },
  { name: "Microsoft", src: "/img/mssoft.png" },
  { name: "Laravel", src: "/img/laravel.png" },
  { name: "Claude", src: "/img/claude.png" },
  { name: "OpenAI", src: "/img/openai.png" },
];
const Home = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div>
      <section>
        <Container className="relative pt-30 md:pt-36">
          <div className="">
            <AnimatedGroup variants={transitionVariants}>
              <Link
                to="/company/partners"
                className="hover:bg-background dark:hover:border-t-border bg-muted/80 group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
              >
                <span className="text-foreground text-sm">
                  Introducing our partner program
                </span>
                <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                  </div>
                </div>
              </Link>

              <h1 className="mt-8 mx-auto text-balance text-3xl md:text-5xl lg:text-7xl lg:mt-10 xl:text-[5.25rem] font-semibold text-center">
                Real-time Fleet Intelligence for every vehicle
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-balance md:text-lg text-center">
                GPS tracking, fuel intelligence, activity verification
                (including sweeping/cleaning), alerts, and analytics — powered
                by telemetry + sensors.
              </p>
            </AnimatedGroup>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-8 flex  items-center justify-center gap-2"
            >
              <Link to="/company/contact">
                <Button size="lg" className="rounded-xl px-5 text-base">
                  Start Building
                  <div className="absolute mx-auto translate-y-1/4 bottom-0 w-1/2 h-1/6 bg-cyan-200 blur-lg" />
                  <div className="absolute h-0.5 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                </Button>
              </Link>
              <Link to="/company/contact">
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-10.5 rounded-xl px-5 bg-transparent"
                >
                  <span className="text-nowrap">Request a demo</span>
                </Button>
              </Link>
            </AnimatedGroup>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.95,
                      delayChildren: 0.95,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-8 flex  items-center justify-center gap-2"
            >
              <div className="flex -space-x-3">
                {[
                  {
                    name: "Rohan Gupta",
                    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
                  },
                  {
                    name: "Ishita Roy",
                    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
                  },
                  {
                    name: "Amit Kulkarni",
                    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
                  },
                  {
                    name: "Pooja Nair",
                    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
                  },
                  {
                    name: "Manish Yadav",
                    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
                  },
                ].map((perseon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full overflow-hidden border"
                  >
                    <img
                      src={perseon.avatar}
                      alt={perseon.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <span className="text-muted-foreground">
                  Trusted by 500+ fleet operators
                </span>

                <div className="flex gap-1 items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star className="text-primary fill-primary size-3" />
                  ))}
                </div>
              </div>
            </AnimatedGroup>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 1.25,
                    delayChildren: 1.25,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative mt-12 overflow-hidden px-2 sm:mt-12 md:mt-24">
              <div
                aria-hidden
                className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
              />
              <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background dark:bg-black relative overflow-hidden rounded-2xl border p-2 shadow-lg shadow-zinc-950/15 ring-1 w-full">
                <img
                  className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                  src="/img/dark-dash.webp"
                  alt="app screen"
                  width="full"
                  height="auto"
                />
                <img
                  className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                  src="/img/light-dash.webp"
                  alt="app screen"
                  width="full"
                  height="auto"
                />
              </div>
            </div>
          </AnimatedGroup>
        </Container>
      </section>
      <section className="pb-16 pt-16 md:pb-20">
        <Container>
          <div className=" mx-auto mt-12 grid max-w-4xl grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex gap-2 items-center justify-center py-3"
              >
                <img
                  className="h-8 dark:invert"
                  src={logo.src}
                  alt={`${logo.name} logo`}
                />
                <span className="tracking-tight font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <FeatureSection />
      <section className="py-12 md:py-20">
        <Container className="space-y-16">
          <div className="space-y-4 text-center">
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-foreground"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Client who trust us
            </motion.h1>
            <motion.p
              className="md:text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Many people use our platform to manage their fleets and track
              their vehicles.Revew what they say about our platform.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 relative h-150 overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3   bg-gradient-to-b from-white z-10 to-transparent dark:from-background"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3   bg-gradient-to-t from-white z-10 to-transparent dark:from-background"></div>

            <Marquee pauseOnHover vertical className="[--duration:15s]">
              {users?.slice(0, 6).map((user, index) => (
                <div className="rounded-xl shadow border space-y-3 p-4">
                  <div className="flex gap-2 items-center">
                    <img
                      src={user.avatar}
                      alt={`${user.name}'s avatar`}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">{user.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {user.username}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm">{user.review}</div>
                </div>
              ))}
            </Marquee>
            <div className="hidden lg:block h-full">
              <Marquee pauseOnHover vertical className=" [--duration:30s]">
                {users?.slice(6, 12).map((user, index) => (
                  <div className="rounded-xl shadow border space-y-3 p-4">
                    <div className="flex gap-2 items-center">
                      <img
                        src={user.avatar}
                        alt={`${user.name}'s avatar`}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold">{user.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.username}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm">{user.review}</div>
                  </div>
                ))}
              </Marquee>
            </div>
            <div className="hidden lg:block h-full">
              <Marquee pauseOnHover vertical className=" [--duration:15s]">
                {users?.slice(12, 18).map((user, index) => (
                  <div className="rounded-xl shadow border space-y-3 p-4">
                    <div className="flex gap-2 items-center">
                      <img
                        src={user.avatar}
                        alt={`${user.name}'s avatar`}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold">{user.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.username}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm">{user.review}</div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]">
                Let's manage your fleet <br />
                <span className="">in your pocket</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-tight max-w-lg">
                Stay connected to your fleet wherever you are. Real-time
                insights and control, right at your fingertips.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  {
                    title: "Live Tracking",
                    desc: "Follow every vehicle in real-time on high-res maps.",
                  },
                  {
                    title: "Instant Alerts",
                    desc: "Get notified immediately for speed, geofence, or idling.",
                  },
                  {
                    title: "Smart Reports",
                    desc: "Access comprehensive trip logs and fuel analytics.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex justify-center items-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {item.title}
                      </h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-500">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/io-badge.svg"
                    alt="Download on the App Store"
                    className="h-12 hover:opacity-90 transition"
                  />
                </a>

                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/playstore-badge.png"
                    alt="Get it on Google Play"
                    className="h-12 hover:opacity-90 transition"
                  />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              className="hidden lg:flex relative  justify-center lg:justify-end"
            >
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--primary-color)_0%,transparent_70%)] opacity-[0.05] dark:opacity-[0.1] blur-3xl pointer-events-none" />

              {/* Phone Mockup */}
              <div className="relative z-10">
                <div className="w-72 h-[550px] bg-zinc-900 dark:bg-zinc-900 rounded-[3.5rem] p-3 shadow-2xl ring-1 ring-white/10 relative">
                  {/* Camera/Sensor Bar */}
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 w-28 h-7 bg-zinc-900 rounded-full z-30 flex items-center justify-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 ring-1 ring-zinc-700" />
                    <div className="w-10 h-1.5 rounded-full bg-zinc-800" />
                  </div>

                  {/* Inner Screen */}
                  <div className="w-full h-full bg-zinc-100 dark:bg-zinc-800 rounded-[2.8rem] overflow-hidden relative border border-white/5">
                    <img
                      src="/img/mobile.jpg"
                      alt="App Mockup"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="hidden w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-green-400 to-green-600">
                      <Smartphone className="size-12 text-white/50 mb-4" />
                      <p className="text-white font-medium">
                        InteliFleet <br />
                        Mobile App
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating UI Elements - Simplified & Professional */}
                {/* 1. Top Left - Fleet Status Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-30 top-12 z-20 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl p-4 rounded-3xl rounded-tl-md shadow-xl border border-zinc-200 dark:border-zinc-800 min-w-[200px] hidden sm:block"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                      <TrendingUp className="size-4 text-blue-600" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        Efficiency
                      </span>
                      <span className="text-sm font-bold text-zinc-900 dark:text-white">
                        94.2% Optimization
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "94.2%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                </motion.div>

                {/* 2. Bottom Left - Safety Alert Card */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -right-25 bottom-15 z-20 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl p-4 rounded-3xl rounded-tr-md shadow-xl border border-zinc-200 dark:border-zinc-800 min-w-[210px] hidden sm:block"
                >
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <Bell className="size-4 text-destructive" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        Active Alert
                      </span>
                      <span className="text-sm font-bold text-zinc-900 dark:text-white">
                        Speed limit exceeded
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-[10px] text-zinc-500 font-medium">
                    Vehicle{" "}
                    <span className="text-zinc-900 dark:text-zinc-100 font-bold">
                      BR01-9032
                    </span>{" "}
                    is at 85 km/h
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* <section className="py-12 md:py-20">
        <Container>
          <PricingTable plans={samplePlans} />
        </Container>
      </section> */}
    </div>
  );
};

export default Home;
