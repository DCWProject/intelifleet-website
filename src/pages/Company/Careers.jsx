import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    ArrowRight, Briefcase, Heart, Zap, Globe, Users,
    MapPin, Clock, CheckCircle2, Star, Coffee, Laptop,
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const departments = ["All", "Engineering", "Product", "Sales", "Customer Success", "Design"];

const openings = [
    { dept: "Engineering", title: "Senior Backend Engineer", type: "Full-time", location: "Bhubaneswar / Remote", color: "#22c55e", desc: "Build the core API infrastructure powering real-time GPS and telemetry data ingestion at scale." },
    { dept: "Engineering", title: "Frontend Engineer (React)", type: "Full-time", location: "Bhubaneswar / Remote", color: "#22c55e", desc: "Own the fleet dashboard UI — build fast, animated, real-time interfaces using React and Tailwind." },
    { dept: "Engineering", title: "IoT / Embedded Systems Engineer", type: "Full-time", location: "Bhubaneswar", color: "#22c55e", desc: "Work on firmware and device integration for GPS telemetry devices using MQTT and CAN protocols." },
    { dept: "Product", title: "Product Manager – Fleet Intelligence", type: "Full-time", location: "Bhubaneswar / Remote", color: "#8b5cf6", desc: "Lead product roadmap for core fleet modules. Deep understanding of logistics or municipal operations preferred." },
    { dept: "Design", title: "UI/UX Designer", type: "Full-time", location: "Remote", color: "#ec4899", desc: "Design intuitive, modern interfaces for fleet management dashboards and mobile apps." },
    { dept: "Sales", title: "Enterprise Sales Executive", type: "Full-time", location: "Mumbai / Delhi / Bangalore", color: "#f59e0b", desc: "Drive B2B sales for logistics, municipal, and construction fleet customers across India." },
    { dept: "Customer Success", title: "Customer Success Manager", type: "Full-time", location: "Bhubaneswar / Remote", color: "#3b82f6", desc: "Onboard and support enterprise customers to ensure they get maximum value from InteliFleet." },
    { dept: "Engineering", title: "DevOps / Cloud Engineer", type: "Full-time", location: "Remote", color: "#22c55e", desc: "Maintain and scale our AWS/GCP infrastructure powering real-time telemetry for 10,000+ vehicles." },
];

const perks = [
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance for you and your family, plus mental wellness support." },
    { icon: Laptop, title: "Remote Friendly", desc: "Flexible remote and hybrid work options for most roles — work where you do your best thinking." },
    { icon: Star, title: "Learning Budget", desc: "₹50,000 annual learning budget for courses, books, conferences, and certifications." },
    { icon: Coffee, title: "Great Culture", desc: "A small, transparent, high-ownership team where your work has real and immediate impact." },
    { icon: Globe, title: "Work Globally", desc: "Collaborate with a distributed team and serve customers across multiple industries and regions." },
    { icon: Zap, title: "Fast Growth", desc: "Join a high-growth startup and grow your career faster than in any large enterprise." },
];

export default function CareersPage() {
    const [activeDept, setActiveDept] = useState("All");

    const filtered = openings.filter(o => activeDept === "All" || o.dept === activeDept);

    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24">
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, #8b5cf622 0%, transparent 70%)" }} />
                <Container className="relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span initial="hidden" animate="visible" custom={0} variants={fadeUp} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-400 border-purple-500/30 mb-6">
                            <Briefcase className="size-3" /> We're Hiring
                        </motion.span>
                        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                            Build the Future of <span className="text-purple-400">Fleet Intelligence</span>
                        </motion.h1>
                        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                            Join a small, high-ownership team building real-time intelligence for fleets across India. If you love hard problems, fast shipping, and real customer impact — this is your place.
                        </motion.p>
                        <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-green-500" />Remote friendly</span>
                            <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-green-500" />High ownership</span>
                            <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-green-500" />Fast-growing startup</span>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Perks */}
            <section className="py-16 bg-muted/30">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Join InteliFleet?</h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">We take care of our team so they can take care of our customers.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                        {perks.map((p, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                                className="p-6 rounded-2xl border bg-card">
                                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-purple-500/10">
                                    <p.icon className="size-5 text-purple-400" />
                                </div>
                                <h3 className="font-semibold text-base mb-2">{p.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Open roles */}
            <section className="py-20">
                <Container>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">Open Positions</h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">We're always looking for exceptional people. Browse our current openings below.</p>
                    </div>

                    {/* Department filter */}
                    <div className="flex flex-wrap gap-2 justify-center mb-10">
                        {departments.map(d => (
                            <button key={d} onClick={() => setActiveDept(d)}
                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${activeDept === d ? "bg-purple-500 border-purple-500 text-white" : "bg-card border-border text-muted-foreground hover:border-purple-500/50"}`}>
                                {d}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {filtered.map((job, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                className="flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-2xl border bg-card hover:shadow-md transition-all group"
                                style={{ borderLeft: `4px solid ${job.color}` }}>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `${job.color}20`, color: job.color }}>{job.dept}</span>
                                        <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="size-3" />{job.type}</span>
                                        <span className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="size-3" />{job.location}</span>
                                    </div>
                                    <h3 className="font-semibold text-base">{job.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{job.desc}</p>
                                </div>
                                <Button size="sm" variant="outline" className="shrink-0 rounded-xl gap-2 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 transition-all" asChild>
                                    <Link to="/company/contact">Apply <ArrowRight className="size-3.5" /></Link>
                                </Button>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-muted-foreground mb-4">Don't see a role that fits? We're always open to exceptional talent.</p>
                        <Button variant="outline" className="rounded-xl gap-2 bg-transparent" asChild>
                            <Link to="/company/contact">Send a General Application <ArrowRight className="size-4" /></Link>
                        </Button>
                    </div>
                </Container>
            </section>
        </div>
    );
}
