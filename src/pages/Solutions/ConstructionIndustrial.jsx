import React from "react";
import {
    HardHat, Map, Gauge, Fuel, Wrench, Shield,
    BarChart3, Bell, Clock, FileText, Activity, Layers,
} from "lucide-react";
import {
    PageHero, PageSection, FeatureCard, StatCard, PageCTA,
} from "@/components/feature-page-hero";

const ACCENT = "#f97316";

const features = [
    { icon: Map, title: "Asset Location Tracking", description: "Track heavy equipment, cranes, excavators, and vehicles on a live map regardless of site location." },
    { icon: Gauge, title: "Engine Hours Monitoring", description: "Track operating hours per asset to schedule preventive maintenance at the right intervals." },
    { icon: Fuel, title: "Fuel Monitoring", description: "Monitor fuel consumption per machine, detect theft on remote sites, and calculate efficiency." },
    { icon: Wrench, title: "Maintenance Management", description: "Schedule and log preventive maintenance to keep equipment operational and reduce breakdowns." },
    { icon: Shield, title: "Anti-Theft Security", description: "Geo-lock heavy equipment within defined site boundaries and alert on any unauthorized movement." },
    { icon: Bell, title: "Equipment Health Alerts", description: "Detect abnormal engine patterns, overheating, and prolonged idle to flag breakdown risks early." },
    { icon: Clock, title: "Utilization Tracking", description: "Measure what percentage of shift time each machine is actively operating versus idle or off." },
    { icon: BarChart3, title: "Fleet Utilization Reports", description: "Identify underutilized assets across multiple project sites and optimize fleet allocation." },
    { icon: Activity, title: "PTO & Auxiliary Tracking", description: "Monitor auxiliary equipment attachments — drills, compactors, lifts — using PTO sensor signals." },
    { icon: Layers, title: "Multi-Site Management", description: "Manage assets across multiple construction sites from one centralized InteliFleet dashboard." },
    { icon: FileText, title: "Compliance Documentation", description: "Generate equipment operation logs and maintenance records required for regulatory compliance." },
    { icon: HardHat, title: "Operator Attribution", description: "Assign operators to equipment per shift and attribute fuel, idle, and usage data to each operator." },
];

const stats = [
    { value: "Multi-Site", label: "Asset Visibility" },
    { value: "Real-Time", label: "Engine Hours" },
    { value: "Auto", label: "Theft Alerts" },
    { value: "Full", label: "Maintenance Log" },
];

export default function ConstructionIndustrialPage() {
    return (
        <div>
            <PageHero
                badge="For Construction & Industrial"
                badgeColor="orange"
                title="Fleet Intelligence for Heavy Equipment"
                description="InteliFleet gives construction and industrial operators complete visibility over heavy machinery, vehicles, and equipment across multiple sites — with fuel monitoring, maintenance scheduling, and anti-theft protection built in."
                ctas={[
                    { label: "Get a Demo", primary: true },
                    { label: "View All Solutions", href: "/", primary: false },
                ]}
                highlights={["Multi-site asset tracking", "Engine hours monitoring", "Fuel theft detection", "Geo-lock for site security"]}
                accentColor={ACCENT}
            />

            <PageSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((s, i) => <StatCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Built for Construction & Industry</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Enterprise-grade asset intelligence for every machine on your site.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => <FeatureCard key={i} {...f} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageCTA
                title="Keep Every Machine Accountable"
                description="Maximize equipment uptime, minimize theft risk, and optimize every asset across all your project sites."
                primaryLabel="Book a Free Demo"
                secondaryLabel="View All Solutions"
                accentColor={ACCENT}
            />
        </div>
    );
}
