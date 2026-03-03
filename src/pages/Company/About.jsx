import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  Award,
  Zap,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Lightbulb,
  Rocket,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We constantly push the boundaries of what fleet management technology can do, adopting the latest in GPS, IoT, and AI to serve our customers better.",
    color: "#22c55e",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Reliability",
    description:
      "With 99.9% uptime and enterprise-grade security, fleet operators rely on InteliFleet 24/7 to keep their operations running without interruption.",
    color: "#3b82f6",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description:
      "Every feature we build starts with a customer problem. We listen, we learn, and we iterate — faster than anyone else in the industry.",
    color: "#ef4444",
  },
  {
    icon: Globe,
    title: "Built to Scale",
    description:
      "From a single vehicle to thousands across multiple businesses and geographies, InteliFleet's multi-tenant architecture grows with you.",
    color: "#f59e0b",
  },
];

const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "10,000+", label: "Vehicles Tracked" },
  { value: "99.9%", label: "Platform Uptime" },
  { value: "45+", label: "Platform Features" },
];

const team = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Co-Founder",
    desc: "15+ years in fleet management and intelligent transport systems.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Mehta",
    role: "CTO & Co-Founder",
    desc: "IoT and cloud architecture expert, previously at Tata Technologies.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Arjun Nair",
    role: "Head of Product",
    desc: "6 years building SaaS platforms for logistics and smart cities.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sneha Patel",
    role: "Head of Customer Success",
    desc: "Ensuring every customer gets maximum value from InteliFleet.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Founded",
    desc: "InteliFleet was founded with a mission to modernize fleet management for the Indian market.",
  },
  {
    year: "2020",
    title: "First 50 Customers",
    desc: "Onboarded our first 50 fleet operators across logistics, transport, and municipal operations.",
  },
  {
    year: "2021",
    title: "Sweeping Intelligence Launch",
    desc: "Launched the industry-first municipal sweeping intelligence module with GPS-based area coverage.",
  },
  {
    year: "2022",
    title: "Multi-Tenant Platform",
    desc: "Rebuilt the platform with full multi-tenant architecture to support large enterprise clients.",
  },
  {
    year: "2023",
    title: "500+ Businesses",
    desc: "Crossed 500 business customers and 10,000 vehicles tracked across India.",
  },
  {
    year: "2024",
    title: "AI-Powered Analytics",
    desc: "Launched driver safety scoring, predictive maintenance, and AI-powered fleet insights.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-24">
        <Container>
          <div className=" text-center">
            <motion.span
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r from-primary/5 to-primary/10 text-primary border-primary/30 mb-6"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="max-w-4xl mx-auto text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6"
            >
              Building the Future of Fleet Intelligence
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
            >
              InteliFleet was born from a simple belief: fleet managers deserve
              real-time intelligence, not spreadsheets. Our platform brings GPS
              tracking, fuel monitoring, driver analytics, and compliance into
              one unified system.
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
                  Talk to Us <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-6 bg-transparent"
                asChild
              >
                <Link to="/product">Explore Platform</Link>
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
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-1">
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

      {/* Mission & Vision */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                color: "#22c55e",
                label: "Our Mission",
                title: "Empower Every Fleet Operator",
                desc: "To give fleet managers of all sizes — from individual vehicle owners to large municipal corporations — the real-time intelligence they need to reduce costs, improve safety, and operate with confidence.",
              },
              {
                icon: Eye,
                color: "#3b82f6",
                label: "Our Vision",
                title: "The Intelligent Fleet Standard",
                desc: "To become the global standard for intelligent fleet management — a platform so comprehensive and reliable that every vehicle in any fleet, anywhere in the world, is fully visible and accountable.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="p-8 rounded-3xl border bg-card relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10 pointer-events-none"
                  style={{ background: item.color }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${item.color}20`,
                    border: `1px solid ${item.color}40`,
                  }}
                >
                  <item.icon className="size-6" style={{ color: item.color }} />
                </div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: item.color }}
                >
                  {item.label}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              The principles that guide every decision we make at InteliFleet.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl border bg-card group transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: `${v.color}20` }}
                >
                  <v.icon className="size-5" style={{ color: v.color }} />
                </div>
                <h3 className="font-semibold text-base mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Journey</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              From a startup idea to a platform trusted by hundreds of
              businesses across India.
            </p>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex gap-8 pl-20 relative"
                >
                  <div className="absolute left-4 top-1.5 w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center text-xs font-bold text-green-400">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1">
                      {m.year}
                    </div>
                    <h3 className="font-semibold text-base mb-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Meet the Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A small but mighty team of engineers, product thinkers, and fleet
              management experts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl border bg-card text-center group transition-all hover:shadow-lg"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-green-500/30 group-hover:ring-green-500/60 transition-all">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-base">{member.name}</h3>
                <div className="text-xs text-green-400 font-medium mb-2">
                  {member.role}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {member.desc}
                </p>
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
            className="p-10 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
              Join the InteliFleet Family
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto relative">
              Whether you're a fleet manager, a driver, or a smart-city
              administrator — we'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center relative">
              <Button size="lg" className="rounded-xl px-8 gap-2" asChild>
                <Link to="/company/contact">
                  Get in Touch <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 bg-transparent"
                asChild
              >
                <Link to="/company/careers">View Careers</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
