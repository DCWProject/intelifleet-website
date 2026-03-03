import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    Map,
    Fuel,
    Truck,
    User,
    Wrench,
    Shield,
    BarChart3,
    ArrowRight,
    CheckCircle2,
    MapPin,
    Activity,
    Clock,
    Zap,
} from "lucide-react";
import {
    PageHero,
    PageSection,
    FeatureCard,
    StatCard,
    PageCTA,
    Badge,
} from "@/components/feature-page-hero";

const modules = [
    {
        icon: Map,
        title: "Live Tracking",
        description: "Real-time GPS tracking with live telemetry for all vehicles.",
        path: "/product/live-tracking",
        color: "#22c55e",
    },
    {
        icon: Fuel,
        title: "Fuel Intelligence",
        description: "Monitor fuel consumption, detect theft, and track refuels.",
        path: "/product/fuel-intelligence",
        color: "#f59e0b",
    },
    {
        icon: Truck,
        title: "Sweeping Intelligence",
        description: "Track municipal sweeping operations with area coverage analytics.",
        path: "/product/sweeping-intelligence",
        color: "#3b82f6",
    },
    {
        icon: User,
        title: "Driver Intelligence",
        description: "Monitor driver behaviour, safety scores, and performance.",
        path: "/product/driver-intelligence",
        color: "#8b5cf6",
    },
    {
        icon: Wrench,
        title: "Maintenance",
        description: "Proactive maintenance alerts with full service history logs.",
        path: "/product/maintenance",
        color: "#06b6d4",
    },
    {
        icon: Shield,
        title: "Security & Alerts",
        description: "Multi-channel alerts for geofence violations, theft, and more.",
        path: "/product/security-alerts",
        color: "#ef4444",
    },
    {
        icon: BarChart3,
        title: "Reports & Analytics",
        description: "Advanced dashboards with PDF/Excel export capabilities.",
        path: "/product/reports-analytics",
        color: "#ec4899",
    },
];

const stats = [
    { value: "45+", label: "Platform Features" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "< 5s", label: "Data Latency" },
    { value: "3", label: "User Roles" },
];

const highlights = [
    "Real-time GPS & Telemetry",
    "Multi-tenant Architecture",
    "Role-based Access Control",
    "Cloud-native & Scalable",
];

export default function ProductOverview() {
    return (
        <div>
            <PageHero
                badge="InteliFleet Platform"
                badgeColor="green"
                title="Complete Fleet Intelligence Platform"
                description="InteliFleet brings every aspect of fleet management into a single, unified system — from live GPS tracking and fuel monitoring to driver analytics and compliance management."
                ctas={[
                    { label: "Get a Demo", primary: true, href: "/company/contact" },
                    { label: "View Pricing", primary: false, href: "/#pricing" },
                ]}
                highlights={highlights}
                accentColor="#22c55e"
            />

            {/* Stats */}
            <PageSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((s, i) => (
                        <StatCard key={i} value={s.value} label={s.label} accentColor="#22c55e" />
                    ))}
                </div>

                {/* Modules Grid */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                        Everything Your Fleet Needs
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Explore all the powerful modules that make InteliFleet the most comprehensive fleet management platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {modules.map((mod, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                            whileHover={{ y: -6 }}
                            className="group"
                        >
                            <Link
                                to={mod.path}
                                className="flex flex-col p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 h-full shadow"
                                // style={{
                                //     borderLeft: `3px solid ${mod.color}60`,
                                // }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                                    style={{ background: `${mod.color}20` }}
                                >
                                    <mod.icon className="size-6" style={{ color: mod.color }} />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{mod.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                    {mod.description}
                                </p>
                                <div
                                    className="flex items-center gap-1 mt-4 text-sm font-medium"
                                    style={{ color: mod.color }}
                                >
                                    Learn more <ArrowRight className="size-3.5" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </PageSection>

            {/* Key capabilities */}
            <PageSection
                title="Built for Modern Fleet Operations"
                subtitle="InteliFleet is engineered for scalability, reliability, and real-time operation at any fleet size."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                        { icon: MapPin, title: "Real-Time GPS", desc: "Live lat/lon, speed, heading every few seconds via MQTT/HTTP." },
                        { icon: Activity, title: "Live Telemetry", desc: "Fuel level, ignition status, cleaning sensors all streamed live." },
                        { icon: Clock, title: "Historical Playback", desc: "Full route replay with date/time range and speed-coded coloring." },
                        { icon: Zap, title: "Instant Alerts", desc: "Push, SMS, WhatsApp, and email alerts for every critical event." },
                    ].map((c, i) => (
                        <FeatureCard key={i} icon={c.icon} title={c.title} description={c.desc} accentColor="#22c55e" />
                    ))}
                </div>
            </PageSection>

            <PageCTA
                title="Ready to Modernize Your Fleet?"
                description="Join fleet managers who trust InteliFleet to keep their operations running smoothly."
                primaryLabel="Book a Free Demo"
                secondaryLabel="Explore Solutions"
                accentColor="#22c55e"
            />
        </div>
    );
}
