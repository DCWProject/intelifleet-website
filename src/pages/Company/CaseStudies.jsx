import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Fuel,
  Map,
  Truck,
  Building2,
  Bus,
  ChevronRight,
  Clock,
  BarChart3,
  Quote,
  Star,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const categories = [
  "All",
  "Logistics",
  "Municipal",
  "Bus Operations",
  "Construction",
];

const caseStudies = [
  {
    category: "Logistics",
    company: "SafeRoute Transport",
    location: "Pune, Maharashtra",
    icon: Truck,
    color: "#f59e0b",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop",
    title: "28% Fuel Cost Reduction in 90 Days",
    summary:
      "SafeRoute deployed InteliFleet across 120 delivery trucks to combat fuel theft and reduce idle time. The results exceeded expectations.",
    challenge:
      "SafeRoute was losing an estimated ₹8 lakh per month to fuel theft across their fleet. Manual driver log checks were ineffective and time-consuming.",
    solution:
      "Deployed InteliFleet's Fuel Intelligence module with real-time monitoring, theft alerts, and driver attribution. Integrated with their HR system for incentive-based reporting.",
    results: [
      { label: "Fuel Cost", value: "-28%" },
      { label: "Idle Time", value: "-42%" },
      { label: "Theft Incidents", value: "-96%" },
      { label: "Monthly Savings", value: "₹7.2L" },
    ],
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    quote:
      "InteliFleet paid for itself in the first 6 weeks. The transparency we gained is invaluable.",
    quotePerson: "Ravi Kumar, Logistics Director",
  },
  {
    category: "Municipal",
    company: "CleenCity Solutions",
    location: "Bhubaneswar, Odisha",
    icon: Building2,
    color: "#22c55e",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop",
    title: "Proving 100% Zone Coverage to Authorities",
    summary:
      "CleenCity used InteliFleet's Sweeping Intelligence to replace paper-based cleaning logs with GPS-verified area coverage reports.",
    challenge:
      "Municipal authorities were demanding verifiable proof of cleaning routes. Driver self-reported logs were unreliable and compliance was at risk.",
    solution:
      "Integrated PTO sensors on all 45 sweepers. InteliFleet automatically calculates area cleaned, missed zones, and shift efficiency via GPS polygon mapping.",
    results: [
      { label: "Coverage Accuracy", value: "100%" },
      { label: "Missed Zones", value: "-78%" },
      { label: "Report Gen.", value: "Auto" },
      { label: "Compliance", value: "A+" },
    ],
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    quote:
      "We now submit GPS-verified compliance reports monthly. It has completely changed our relationship with the city council.",
    quotePerson: "Anita Sharma, Operations Head",
  },
  {
    category: "Bus Operations",
    company: "Metro Transit Group",
    location: "Hyderabad, Telangana",
    icon: Bus,
    color: "#3b82f6",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
    title: "On-Time Performance Improved by 35%",
    summary:
      "Metro Transit implemented InteliFleet for their 200-bus fleet to monitor route adherence, driver behaviour, and passenger safety.",
    challenge:
      "Frequent route deviations and driver speeding led to passenger complaints and regulatory scrutiny.",
    solution:
      "Deployed live tracking, geofencing, overspeed alerts, and driver safety scoring across all routes. Driver leaderboards were introduced based on safety scores.",
    results: [
      { label: "On-Time Arrival", value: "+35%" },
      { label: "Speeding", value: "-65%" },
      { label: "Complaints", value: "-58%" },
      { label: "Safety Score", value: "84/100" },
    ],
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    quote:
      "Our route compliance has never been this transparent. Passengers are happier, and our drivers are safer.",
    quotePerson: "Vikram Desai, Director",
  },
  {
    category: "Construction",
    company: "BuildRight Heavy Equipment",
    location: "Mumbai, Maharashtra",
    icon: Building2,
    color: "#f97316",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2070&q=80",
    title: "Multi-Site Equipment Visibility & Control",
    summary:
      "BuildRight manages 300+ pieces of heavy equipment across 5 active construction sites. InteliFleet gave them one unified view.",
    challenge:
      "Equipment sitting idle across sites was undetected. Theft of fuel from excavators and cranes was a recurring problem.",
    solution:
      "Deployed GPS trackers and fuel sensors on all equipment. Geo-lock mode prevents unauthorized site exits. Engine hour tracking triggers preventive maintenance.",
    results: [
      { label: "Utilization", value: "+31%" },
      { label: "Fuel Losses", value: "-87%" },
      { label: "Breakdowns", value: "-44%" },
      { label: "Maint. Cost", value: "-22%" },
    ],
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    quote:
      "We finally know where every machine is at all times. The fuel savings alone covered the cost of the system.",
    quotePerson: "Kavita Joshi, CEO",
  },
  {
    category: "Cold Chain Logistics",
    company: "FreshLink Supply Chain",
    location: "Ahmedabad, Gujarat",
    icon: Truck,
    color: "#06b6d4",
    image:
      "https://images.unsplash.com/photo-1601582589907-f92af5ed9db8?auto=format&fit=crop&w=2070&q=80",
    title: "Reduced Cold-Chain Spoilage by 63%",
    summary:
      "FreshLink deployed InteliFleet's temperature monitoring and route optimization system across 85 refrigerated trucks.",
    challenge:
      "Frequent temperature fluctuations during long-haul transport were causing product spoilage and client disputes. There was no real-time visibility into reefer performance.",
    solution:
      "Integrated temperature sensors with live alerts for threshold breaches. Route optimization reduced transit time, and automated reports were shared with retail partners.",
    results: [
      { label: "Spoilage", value: "-63%" },
      { label: "Delivery Time", value: "-18%" },
      { label: "Fuel Efficiency", value: "+14%" },
      { label: "Client Retention", value: "+22%" },
    ],
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    quote:
      "We now guarantee temperature compliance with proof. Our retail partners trust us more than ever.",
    quotePerson: "Harsh Mehta, Supply Chain Head",
  },
  {
    category: "Mining Operations",
    company: "Eastern Ridge Mining Co.",
    location: "Ranchi, Jharkhand",
    icon: Truck,
    color: "#ef4444",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2070&q=80",
    title: "Eliminated Unauthorized Vehicle Usage",
    summary:
      "Eastern Ridge implemented geo-fencing and engine-hour tracking across 140 dump trucks and loaders in remote mining zones.",
    challenge:
      "Unauthorized after-hours equipment usage was leading to fuel loss, safety risks, and accelerated wear and tear.",
    solution:
      "Configured geo-fence boundaries and shift-based ignition controls. Automated alerts notify supervisors of any off-hour movement or route deviation.",
    results: [
      { label: "Unauthorized Use", value: "-100%" },
      { label: "Fuel Theft", value: "-74%" },
      { label: "Maint. Downtime", value: "-29%" },
      { label: "Operational Efficiency", value: "+26%" },
    ],
    avatar: "https://randomuser.me/api/portraits/men/73.jpg",
    quote:
      "InteliFleet gave us control over assets spread across 3 remote mining belts. Visibility equals accountability.",
    quotePerson: "Sanjay Pradhan, Operations Manager",
  },
  {
    category: "E-Commerce Delivery",
    company: "SwiftKart Express",
    location: "Delhi NCR",
    icon: Truck,
    color: "#8b5cf6",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=2070&q=80",
    title: "Improved Last-Mile Delivery SLA by 41%",
    summary:
      "SwiftKart adopted InteliFleet to improve last-mile performance across 250 delivery vehicles operating in high-density urban zones.",
    challenge:
      "Delivery delays, inefficient routing, and lack of driver accountability were affecting customer ratings and SLA compliance.",
    solution:
      "Implemented live tracking, AI route optimization, and driver performance scoring. Delivery managers used real-time dashboards to reassign routes dynamically.",
    results: [
      { label: "On-Time SLA", value: "+41%" },
      { label: "Fuel Usage", value: "-19%" },
      { label: "Customer Rating", value: "4.8★" },
      { label: "Avg Delivery Time", value: "-24%" },
    ],
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    quote:
      "Our last-mile operations are now data-driven. We reduced delays without increasing fleet size.",
    quotePerson: "Neha Verma, VP Operations",
  },
];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = caseStudies.filter(
    (cs) => activeCategory === "All" || cs.category === activeCategory,
  );

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 md:pt-36">
        <Container>
          <div className="text-center">
            <motion.span
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r from-primary/10 to-primary/20 text-primary border-primary/30 mb-6"
            >
              Case Studies
            </motion.span>
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6"
            >
              Real Results from Real Fleets
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8"
            >
              See how logistics operators, municipal corporations, bus
              companies, and construction firms have transformed their
              operations with InteliFleet.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap gap-3 justify-center"
            >
              <Button size="lg" className="rounded-xl px-6 gap-2" asChild>
                <Link to="/company/contact">
                  Book a Demo <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Filter + Cases */}
      <section className="py-10 md:py-20">
        <Container>
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-card border-border text-muted-foreground hover:border-primary"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 gap-8 lg:gap-10">
            {filtered.map((cs, i) => (
              <motion.div
                key={cs.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-3xl border bg-card overflow-hidden hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative overflow-hidden aspect-[16/10] lg:aspect-auto">
                    <img
                      src={cs.image}
                      alt={cs.company}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold px-2 py-1 rounded-md backdrop-blur-md bg-white/10 text-white border border-white/20 capitalize">
                          {cs.category}
                        </span>
                        <span className="text-xs text-white/80">
                          {cs.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {cs.company}
                      </h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 lg:p-10">
                    <div className="hidden lg:flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: `${cs.color}20` }}
                        >
                          <cs.icon
                            className="size-5"
                            style={{ color: cs.color }}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{cs.company}</h3>
                          <span className="text-xs text-muted-foreground">
                            {cs.location}
                          </span>
                        </div>
                      </div>
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full border"
                        style={{
                          color: cs.color,
                          borderColor: `${cs.color}40`,
                          background: `${cs.color}10`,
                        }}
                      >
                        {cs.category}
                      </span>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-bold mb-4">
                      {cs.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {cs.summary}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                      {cs.results.map((r, j) => (
                        <div
                          key={j}
                          className="p-4 rounded-2xl bg-muted/30 border border-border/50 group-hover:border-purple-500/20 transition-colors"
                        >
                          <div
                            className="text-xl font-bold mb-1"
                            style={{ color: cs.color }}
                          >
                            {r.value}
                          </div>
                          <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-border/50">
                      <div className="flex items-center gap-4">
                        <img
                          src={cs.avatar}
                          alt={cs.quotePerson}
                          className="w-12 h-12 rounded-full border-2 border-background object-cover ring-2 ring-purple-500/20"
                        />
                        <div>
                          <p className="text-sm font-semibold">
                            {cs.quotePerson}
                          </p>
                          <p className="text-xs text-muted-foreground italic truncate max-w-[200px]">
                            "{cs.quote}"
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="rounded-xl gap-2 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all"
                        onClick={() => setExpanded(expanded === i ? null : i)}
                      >
                        {expanded === i ? "Close View" : "View Full Story"}
                        <ChevronRight
                          className={`size-4 transition-transform ${expanded === i ? "rotate-90" : ""}`}
                        />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="p-8 lg:p-12 bg-muted/20 border-t border-border/50">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                          <div className="space-y-8">
                            <div>
                              <div className="flex items-center gap-2 mb-4">
                                <div className="w-1 h-6 bg-red-500 rounded-full" />
                                <h5 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                  The Challenge
                                </h5>
                              </div>
                              <p className="text-lg leading-relaxed text-foreground/90">
                                {cs.challenge}
                              </p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-4">
                                <div className="w-1 h-6 bg-green-500 rounded-full" />
                                <h5 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                  The Solution
                                </h5>
                              </div>
                              <p className="text-lg leading-relaxed text-foreground/90">
                                {cs.solution}
                              </p>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="absolute inset-0 bg-purple-500/5 blur-3xl -z-10" />
                            <div className="p-8 lg:p-10 rounded-3xl bg-card border shadow-xl relative overflow-hidden">
                              <Quote className="absolute top-6 right-6 size-12 text-purple-500/10" />
                              <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map((s) => (
                                  <Star
                                    key={s}
                                    className="size-4 fill-amber-400 text-amber-400"
                                  />
                                ))}
                              </div>
                              <p className="text-xl lg:text-2xl font-medium italic mb-8 leading-relaxed">
                                "{cs.quote}"
                              </p>
                              <div className="flex items-center gap-4">
                                <img
                                  src={cs.avatar}
                                  alt={cs.quotePerson}
                                  className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                  <p className="font-bold text-lg">
                                    {cs.quotePerson}
                                  </p>
                                  <p className="text-muted-foreground font-medium text-sm">
                                    Verified Partner
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tigh">
                Your Fleet Could Be the Next Success Story
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                Join 500+ companies that have transformed their operations with
                our intelligence platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  asChild
                  className="rounded-xl px-8 gap-2"
                >
                  <Link to="/company/contact">
                    Book a Free Demo <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-xl px-8 gap-2"
                >
                  <Link to="/product/overview">View Pricing</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
