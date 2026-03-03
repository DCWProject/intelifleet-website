import React from "react";
import {
    Truck, Map, Route, Fuel, Clock, BarChart3,
    Bell, FileText, Users, TrendingUp, Package, Shield,
} from "lucide-react";
import {
    PageHero, PageSection, FeatureCard, StatCard, PageCTA,
} from "@/components/feature-page-hero";

const ACCENT = "#f59e0b";

const features = [
    { icon: Map, title: "Real-Time Fleet Tracking", description: "Monitor every truck and delivery vehicle on a live map with GPS positions updated every few seconds." },
    { icon: Route, title: "Route Optimization", description: "Track planned vs actual routes, detect deviations, and improve delivery time adherence." },
    { icon: Fuel, title: "Fuel Intelligence", description: "Monitor fuel across your entire fleet, detect theft, and calculate per-trip fuel efficiency in real time." },
    { icon: Clock, title: "Trip Management", description: "Create planned trips with origin, destination, and ETA; automatically detect completion." },
    { icon: BarChart3, title: "Fleet Analytics", description: "Daily, weekly, and monthly MIS reports on distance, fuel, idle time, and utilization for every vehicle." },
    { icon: Bell, title: "Overspeed & Safety Alerts", description: "Instant notifications when any driver exceeds the configured speed limit or enters a restricted zone." },
    { icon: Users, title: "Driver Management", description: "Track which driver is in which vehicle, monitor behaviour scores, and manage shift records." },
    { icon: FileText, title: "Compliance Reports", description: "Generate PDF/Excel reports for regulatory compliance, insurance, and business audits." },
    { icon: TrendingUp, title: "Utilization Analytics", description: "See vehicle utilization rates and identify underperforming assets dragging down your fleet ROI." },
    { icon: Package, title: "Load Tracking", description: "Correlate vehicle movement and cleaning/PTO data with delivery or service completion." },
    { icon: Shield, title: "Anti-Theft Security", description: "Unauthorized movement, geo-lock violations, and off-hours ignition trigger immediate alerts." },
    { icon: Truck, title: "Multi-Vehicle Dashboard", description: "Manage hundreds of vehicles from a single, fast, real-time operations dashboard." },
];

const stats = [
    { value: "30%", label: "Fuel Savings" },
    { value: "25%", label: "Idle Time Reduction" },
    { value: "99%", label: "Uptime" },
    { value: "1000+", label: "Vehicles Supported" },
];

export default function LogisticsTransportersPage() {
    return (
        <div>
            <PageHero
                badge="For Logistics & Transport Companies"
                badgeColor="orange"
                title="Fleet Intelligence for Logistics Operations"
                description="InteliFleet gives logistics and transport operators the real-time visibility, fuel control, and driver accountability they need to run more efficiently, reduce costs, and improve delivery performance."
                ctas={[
                    { label: "Get a Demo", primary: true },
                    { label: "View All Solutions", href: "/", primary: false },
                ]}
                highlights={["Real-time multi-vehicle tracking", "Fuel theft detection", "Trip & route management", "Driver behaviour monitoring"]}
                accentColor={ACCENT}
            />

            <PageSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((s, i) => <StatCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Built for Logistics & Transport</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        All the tools you need to run a leaner, more accountable logistics fleet.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => <FeatureCard key={i} {...f} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageCTA
                title="Optimize Your Logistics Fleet Today"
                description="From small transport operators to large distribution fleets — InteliFleet scales with your business."
                primaryLabel="Book a Free Demo"
                secondaryLabel="View All Solutions"
                accentColor={ACCENT}
            />
        </div>
    );
}
