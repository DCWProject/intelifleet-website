import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building2,
  Bus,
  Truck,
  HardHat,
  MapPin,
  Users,
  Star,
  ArrowRight,
  Quote,
  Globe,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const industries = [
  {
    icon: Truck,
    label: "Logistics & Transport",
    color: "#f59e0b",
    count: "200+",
  },
  {
    icon: Building2,
    label: "Municipal Sweeping",
    color: "#22c55e",
    count: "80+",
  },
  { icon: Bus, label: "Bus Operators", color: "#3b82f6", count: "60+" },
  {
    icon: HardHat,
    label: "Construction & Industrial",
    color: "#f97316",
    count: "100+",
  },
  { icon: Users, label: "Individual Owners", color: "#8b5cf6", count: "60+" },
];

const logos = [
  { name: "FleetCorp India", sector: "Logistics" },
  { name: "CleenCity Solutions", sector: "Municipal" },
  { name: "Metro Transit Group", sector: "Bus Operations" },
  { name: "BuildRight Heavy Equipment", sector: "Construction" },
  { name: "SafeRoute Transport", sector: "Logistics" },
  { name: "GreenMove Municipal", sector: "Municipal" },
  { name: "StarBus Services", sector: "Bus Operations" },
  { name: "InfraCore Assets", sector: "Industrial" },
  { name: "QuickDeliver Logistics", sector: "Logistics" },
  { name: "CleanStreet Corp", sector: "Municipal" },
  { name: "TravelSafe Buses", sector: "Bus Operations" },
  { name: "PowerBuild Machines", sector: "Construction" },
];

const testimonials = [
  {
    name: "Suresh Reddy",
    role: "Fleet Manager, FleetCorp India",
    text: "InteliFleet cut our fuel costs by 28% in the first 3 months. The real-time tracking and fuel theft alerts paid for the platform in weeks.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Anita Sharma",
    role: "Operations Head, CleenCity Solutions",
    text: "The sweeping intelligence module is a game changer. We can now prove coverage to municipal authorities with GPS data instead of driver reports.",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Vikram Desai",
    role: "Director, Metro Transit Group",
    text: "Route adherence and driver safety scores have significantly improved our on-time performance and reduced passenger complaints.",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Kavita Joshi",
    role: "CEO, BuildRight Heavy Equipment",
    text: "Managing equipment across 5 construction sites was a nightmare before InteliFleet. Now we have full visibility from one dashboard.",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    name: "Ravi Kumar",
    role: "Logistics Director, SafeRoute Transport",
    text: "The idle time and mileage reports helped us restructure our driver incentive program. Fuel efficiency improved by 22% fleet-wide.",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Preethi Menon",
    role: "Smart City Manager, GreenMove Municipal",
    text: "InteliFleet's area coverage reports are now part of our official monthly compliance documentation. Essential tool.",
    avatar: "https://randomuser.me/api/portraits/women/89.jpg",
  },
];

const stats = [
  { value: "500+", label: "Satisfied Customers" },
  { value: "10,000+", label: "Vehicles Managed" },
  { value: "5", label: "Industries Served" },
  { value: "₹2Cr+", label: "Fuel Savings Generated" },
];

export default function CustomersPage() {
  const [activeIndustry, setActiveIndustry] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-24">
   
        <Container className="relative">
          <div className="text-center">
            <motion.span
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r from-primary/5 to-primary/10 text-primary border-primary/30 mb-6"
            >
              Our Customers
            </motion.span>
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6 max-w-4xl mx-auto"
            >
              Trusted by Fleet Operators Across India
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8"
            >
              From individual vehicle owners to large municipal corporations —
              InteliFleet serves a diverse range of fleet operators who rely on
              real-time intelligence to run smarter operations.
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
                  Join Our Customers <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-6 bg-transparent"
                asChild
              >
                <Link to="/company/case-studies">Read Case Studies</Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              InteliFleet is purpose-built for fleet operators across multiple
              verticals.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((ind, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() =>
                  setActiveIndustry(activeIndustry === i ? null : i)
                }
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border bg-card hover:shadow-md transition-all duration-200 group"
                style={{
                  borderColor: activeIndustry === i ? ind.color : undefined,
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${ind.color}20` }}
                >
                  <ind.icon className="size-5" style={{ color: ind.color }} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold">{ind.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {ind.count} customers
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Customer logos grid */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-center text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-8">
              Trusted by leading organizations
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {logos.map((logo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="p-4 rounded-xl border bg-card text-center hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                    <Globe className="size-5 text-muted-foreground" />
                  </div>
                  <div className="text-sm font-semibold">{logo.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {logo.sector}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Real results from real fleet operators using InteliFleet every
              day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all"
              >
                <Quote className="size-8 text-blue-400/50 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/20"
                  />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5 mt-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="size-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" p-10 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
              Ready to Join 500+ Happy Customers?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto relative">
              Get started today and see why fleet operators across India trust
              InteliFleet.
            </p>
            <div className="flex flex-wrap gap-3 justify-center relative">
              <Button size="lg" className="rounded-xl px-8 gap-2" asChild>
                <Link to="/company/contact">
                  Book a Free Demo <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 bg-transparent"
                asChild
              >
                <Link to="/company/case-studies">Read Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
