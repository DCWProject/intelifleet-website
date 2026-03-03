import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    ArrowRight, Handshake, Globe, Code2, Shield,
    Zap, CheckCircle2, Mail, ExternalLink,
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const partnerTypes = [
    { icon: Code2, color: "#22c55e", title: "Technology Partners", desc: "Cloud platforms, IoT device manufacturers, and data infrastructure providers that power InteliFleet behind the scenes." },
    { icon: Globe, color: "#3b82f6", title: "Integration Partners", desc: "ERP, HR, and smart-city platforms that integrate with InteliFleet via our REST API for seamless data exchange." },
    { icon: Handshake, color: "#8b5cf6", title: "Reseller Partners", desc: "Regional fleet management consultants and VARs who sell and implement InteliFleet for their customers." },
    { icon: Shield, color: "#ef4444", title: "Hardware Partners", desc: "GPS device and telemetry hardware manufacturers who have been certified compatible with InteliFleet." },
];

const techPartners = [
    { name: "Amazon Web Services", category: "Cloud Infrastructure", logo: "AWS", color: "#f59e0b" },
    { name: "Google Maps Platform", category: "Mapping & Geospatial", logo: "GMP", color: "#3b82f6" },
    { name: "Twilio", category: "SMS & WhatsApp Alerts", logo: "TWL", color: "#ef4444" },
    { name: "HiveMQ", category: "MQTT Broker", logo: "HMQ", color: "#22c55e" },
    { name: "TimescaleDB", category: "Time-Series Database", logo: "TSB", color: "#8b5cf6" },
    { name: "Firebase", category: "Push Notifications", logo: "FBZ", color: "#f97316" },
    { name: "Stripe", category: "Payment Processing", logo: "STR", color: "#6366f1" },
    { name: "SendGrid", category: "Email Delivery", logo: "SGD", color: "#06b6d4" },
];

const benefits = [
    "Co-marketing opportunities and joint case studies",
    "Early access to new product features and beta programs",
    "Dedicated partner success manager",
    "Revenue share for reseller and referral partners",
    "Technical integration support and sandbox environment",
    "Listed in the InteliFleet partner directory",
];

export default function PartnersPage() {
    return (
        <div>
            {/* Hero */}
            <section className="pt-28 pb-20 md:pt-36 md:pb-24">
                <Container className="relative">
                    <div className="text-center">
                        <motion.span initial="hidden" animate="visible" custom={0} variants={fadeUp} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r from-primary/5 to-primary/10 text-primary border-primary/30 mb-6">
                            <Handshake className="size-3" /> Partner Ecosystem
                        </motion.span>
                        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
                            Grow Together with InteliFleet
                        </motion.h1>
                        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                            We partner with technology providers, hardware manufacturers, integration specialists, and regional resellers to build the most comprehensive fleet intelligence ecosystem in India.
                        </motion.p>
                        <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
                            <Button size="lg" className="rounded-xl px-6 gap-2" asChild>
                                <Link to="/company/contact">Become a Partner <ArrowRight className="size-4" /></Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-xl px-6 bg-transparent" asChild>
                                <Link to="/company/contact">Contact Partner Team</Link>
                            </Button>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Partner types */}
            <section className="py-16">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">Partnership Programs</h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Four distinct tracks designed for different types of technology and business partners.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {partnerTypes.map((pt, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -4 }} className="p-6 rounded-2xl border bg-card group transition-all hover:shadow-lg">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: `${pt.color}20` }}>
                                    <pt.icon className="size-6" style={{ color: pt.color }} />
                                </div>
                                <h3 className="font-semibold text-base mb-2">{pt.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{pt.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Tech partner logos */}
            <section className="py-20">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">Technology Partners</h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">The world-class platforms and services that power InteliFleet's infrastructure.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto">
                        {techPartners.map((p, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                className="p-5 rounded-2xl border bg-card text-center hover:shadow-md transition-all group">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 text-xs font-bold" style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}40` }}>
                                    {p.logo}
                                </div>
                                <div className="font-semibold text-sm">{p.name}</div>
                                <div className="text-xs text-muted-foreground mt-1">{p.category}</div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Benefits */}
            <section className="py-16">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner Benefits</h2>
                            <p className="text-muted-foreground text-lg mb-8">InteliFleet's partner program is designed to create mutual growth — we succeed when our partners succeed.</p>
                            <ul className="space-y-4">
                                {benefits.map((b, i) => (
                                    <motion.li key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                        className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-sm leading-relaxed">{b}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                            className="relative overflow-hidden rounded-3xl border bg-card p-8">
                            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl bg-primary/30" />
                            <Zap className="size-10 text-primary mb-5" />
                            <h3 className="text-xl font-bold mb-3">Ready to Partner?</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Fill out our partner inquiry form and our team will be in touch within 2 business days to discuss a partnership that works for both sides.
                            </p>
                            <Button className="w-full gap-2 rounded-xl" asChild>
                                <Link to="/company/contact">
                                    <Mail className="size-4" /> Contact Partner Team
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
