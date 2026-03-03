import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    ArrowRight, TrendingUp, Fuel, Map, Truck, Building2,
    Bus, ChevronRight, Clock, BarChart3, Quote, Star,
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const categories = ["All", "Logistics", "Municipal", "Bus Operations", "Construction"];

const caseStudies = [
    {
        category: "Logistics",
        company: "SafeRoute Transport",
        location: "Pune, Maharashtra",
        icon: Truck,
        color: "#f59e0b",
        title: "28% Fuel Cost Reduction in 90 Days",
        summary: "SafeRoute deployed InteliFleet across 120 delivery trucks to combat fuel theft and reduce idle time. The results exceeded expectations.",
        challenge: "SafeRoute was losing an estimated ₹8 lakh per month to fuel theft across their fleet. Manual driver log checks were ineffective and time-consuming.",
        solution: "Deployed InteliFleet's Fuel Intelligence module with real-time monitoring, theft alerts, and driver attribution. Integrated with their HR system for incentive-based reporting.",
        results: [
            { label: "Fuel Cost Reduction", value: "28%" },
            { label: "Idle Time Reduced", value: "42%" },
            { label: "Theft Incidents", value: "-96%" },
            { label: "Monthly Savings", value: "₹7.2L" },
        ],
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        quote: "InteliFleet paid for itself in the first 6 weeks.",
        quotePerson: "Ravi Kumar, Logistics Director",
    },
    {
        category: "Municipal",
        company: "CleenCity Solutions",
        location: "Bhubaneswar, Odisha",
        icon: Building2,
        color: "#22c55e",
        title: "Proving 100% Zone Coverage to Municipal Authorities",
        summary: "CleenCity used InteliFleet's Sweeping Intelligence to replace paper-based cleaning logs with GPS-verified area coverage reports.",
        challenge: "Municipal authorities were demanding verifiable proof of cleaning routes. Driver self-reported logs were unreliable and compliance was at risk.",
        solution: "Integrated PTO sensors on all 45 sweepers. InteliFleet automatically calculates area cleaned, missed zones, and shift efficiency via GPS polygon mapping.",
        results: [
            { label: "Coverage Accuracy", value: "100%" },
            { label: "Missed Zones", value: "-78%" },
            { label: "Report Generation", value: "Automated" },
            { label: "Compliance Score", value: "A+" },
        ],
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        quote: "We now submit GPS-verified compliance reports monthly.",
        quotePerson: "Anita Sharma, Operations Head",
    },
    {
        category: "Bus Operations",
        company: "Metro Transit Group",
        location: "Hyderabad, Telangana",
        icon: Bus,
        color: "#3b82f6",
        title: "On-Time Performance Improved by 35%",
        summary: "Metro Transit implemented InteliFleet for their 200-bus fleet to monitor route adherence, driver behaviour, and passenger safety.",
        challenge: "Frequent route deviations and driver speeding led to passenger complaints and regulatory scrutiny.",
        solution: "Deployed live tracking, geofencing, overspeed alerts, and driver safety scoring across all routes. Driver leaderboards were introduced based on safety scores.",
        results: [
            { label: "On-Time Arrival", value: "+35%" },
            { label: "Speeding Incidents", value: "-65%" },
            { label: "Passenger Complaints", value: "-58%" },
            { label: "Driver Safety Score", value: "84/100" },
        ],
        avatar: "https://randomuser.me/api/portraits/men/56.jpg",
        quote: "Our route compliance has never been this transparent.",
        quotePerson: "Vikram Desai, Director",
    },
    {
        category: "Construction",
        company: "BuildRight Heavy Equipment",
        location: "Mumbai, Maharashtra",
        icon: Building2,
        color: "#f97316",
        title: "Multi-Site Equipment Visibility Across 5 Projects",
        summary: "BuildRight manages 300+ pieces of heavy equipment across 5 active construction sites. InteliFleet gave them one unified view.",
        challenge: "Equipment sitting idle across sites was undetected. Theft of fuel from excavators and cranes was a recurring problem.",
        solution: "Deployed GPS trackers and fuel sensors on all equipment. Geo-lock mode prevents unauthorized site exits. Engine hour tracking triggers preventive maintenance.",
        results: [
            { label: "Equipment Utilization", value: "+31%" },
            { label: "Fuel Losses", value: "-87%" },
            { label: "Breakdown Incidents", value: "-44%" },
            { label: "Maintenance Cost", value: "-22%" },
        ],
        avatar: "https://randomuser.me/api/portraits/women/67.jpg",
        quote: "We finally know where every machine is at all times.",
        quotePerson: "Kavita Joshi, CEO",
    },
];

export default function CaseStudiesPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [expanded, setExpanded] = useState(null);

    const filtered = caseStudies.filter(cs => activeCategory === "All" || cs.category === activeCategory);

    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24">
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, #8b5cf622 0%, transparent 70%)" }} />
                <Container className="relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span initial="hidden" animate="visible" custom={0} variants={fadeUp} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-400 border-purple-500/30 mb-6">
                            Case Studies
                        </motion.span>
                        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                            Real Results from <span className="text-purple-400">Real Fleets</span>
                        </motion.h1>
                        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                            See how logistics operators, municipal corporations, bus companies, and construction firms have transformed their operations with InteliFleet.
                        </motion.p>
                        <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
                            <Button size="lg" className="rounded-xl px-6 gap-2" asChild>
                                <Link to="/company/contact">Book a Demo <ArrowRight className="size-4" /></Link>
                            </Button>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Filter + Cases */}
            <section className="py-16 md:py-20">
                <Container>
                    {/* Category filter */}
                    <div className="flex flex-wrap gap-2 justify-center mb-12">
                        {categories.map((cat) => (
                            <button key={cat} onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${activeCategory === cat ? "bg-purple-500 border-purple-500 text-white" : "bg-card border-border text-muted-foreground hover:border-purple-500/50"}`}>
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Cases */}
                    <div className="space-y-6">
                        {filtered.map((cs, i) => (
                            <motion.div key={cs.company} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="rounded-2xl border bg-card overflow-hidden">
                                {/* Header */}
                                <button className="w-full p-6 md:p-8 text-left" onClick={() => setExpanded(expanded === i ? null : i)}>
                                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${cs.color}20` }}>
                                            <cs.icon className="size-7" style={{ color: cs.color }} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `${cs.color}20`, color: cs.color }}>{cs.category}</span>
                                                <span className="text-xs text-muted-foreground">{cs.location}</span>
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold">{cs.title}</h3>
                                            <p className="text-sm text-muted-foreground mt-1">{cs.summary}</p>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:w-80 shrink-0">
                                            {cs.results.slice(0, 4).map((r, j) => (
                                                <div key={j} className="text-center p-3 rounded-xl bg-muted/50">
                                                    <div className="text-sm font-bold" style={{ color: cs.color }}>{r.value}</div>
                                                    <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">{r.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <ChevronRight className={`size-5 text-muted-foreground shrink-0 transition-transform ${expanded === i ? "rotate-90" : ""}`} />
                                    </div>
                                </button>

                                {/* Expanded */}
                                <AnimatePresence>
                                    {expanded === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                                            className="overflow-hidden border-t">
                                            <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
                                                <div>
                                                    <h4 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-3">The Challenge</h4>
                                                    <p className="text-sm leading-relaxed">{cs.challenge}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-3">The Solution</h4>
                                                    <p className="text-sm leading-relaxed">{cs.solution}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-3">Customer Verdict</h4>
                                                    <div className="p-4 rounded-xl" style={{ background: `${cs.color}10`, border: `1px solid ${cs.color}30` }}>
                                                        <Quote className="size-5 mb-2" style={{ color: cs.color }} />
                                                        <p className="text-sm italic mb-3">"{cs.quote}"</p>
                                                        <div className="flex items-center gap-2">
                                                            <img src={cs.avatar} alt={cs.quotePerson} className="w-8 h-8 rounded-full object-cover" />
                                                            <span className="text-xs font-medium text-muted-foreground">{cs.quotePerson}</span>
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
            <section className="py-16 pb-24">
                <Container>
                    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl border p-10 md:p-14 text-center" style={{ background: "linear-gradient(135deg, #8b5cf610 0%, transparent 60%)" }}>
                        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl" style={{ background: "#8b5cf620" }} />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">Your Fleet Could Be the Next Success Story</h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto relative">Book a free demo and see how InteliFleet can deliver results like these for your operation.</p>
                        <Button size="lg" className="rounded-xl px-8 gap-2" asChild>
                            <Link to="/company/contact">Book a Free Demo <ArrowRight className="size-4" /></Link>
                        </Button>
                    </motion.div>
                </Container>
            </section>
        </div>
    );
}
