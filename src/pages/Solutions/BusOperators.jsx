import React from "react";
import {
    Bus, Map, Users, Route, Clock, Bell,
    Shield, FileText, BarChart3, Navigation, AlertTriangle, User,
} from "lucide-react";
import {
    PageHero, PageSection, FeatureCard, StatCard, PageCTA,
} from "@/components/feature-page-hero";

const ACCENT = "#3b82f6";

const features = [
    { icon: Map, title: "Live Bus Tracking", description: "Track every bus on a live map in real time so operators, schools, and parents always know where the bus is." },
    { icon: Route, title: "Route Adherence", description: "Compare planned routes vs actual paths and detect any deviations or unauthorized detours instantly." },
    { icon: Users, title: "Passenger Safety", description: "Monitor driver behaviour, speed violations, and harsh events to ensure passenger safety at all times." },
    { icon: Bell, title: "Stop Arrival Alerts", description: "Automated notifications when the bus reaches each stop — keeping passengers and coordinators informed." },
    { icon: Shield, title: "Anti-Theft & Security", description: "Off-hours movement alerts and geofence violations ensure buses are secure when not in operation." },
    { icon: Clock, title: "Schedule Tracking", description: "Monitor on-time performance against scheduled routes and flag chronic delays for management review." },
    { icon: Navigation, title: "Geofencing", description: "Define permitted zones for school pickup/drop-off areas; trigger alerts for any geofence breach." },
    { icon: AlertTriangle, title: "Overspeed Monitoring", description: "Enforce speed limits for school and public buses with instant alerts and violation logs per driver." },
    { icon: User, title: "Driver Management", description: "Assign drivers per shift, monitor safety scores, and review behaviour incident logs per driver." },
    { icon: FileText, title: "Compliance Reports", description: "Generate route adherence, driver safety, and fuel usage reports for regulatory compliance." },
    { icon: BarChart3, title: "Fleet Utilization", description: "Measure how effectively each bus is deployed across your scheduled routes and shifts." },
    { icon: Bus, title: "Multi-Bus Dashboard", description: "See all buses in your fleet simultaneously from one real-time operations dashboard." },
];

const stats = [
    { value: "Real-Time", label: "Bus Position" },
    { value: "Zero", label: "Missed Alerts" },
    { value: "100%", label: "Route Visibility" },
    { value: "Full", label: "Driver Accountability" },
];

export default function BusOperatorsPage() {
    return (
        <div>
            <PageHero
                badge="For School & Public Bus Operators"
                badgeColor="blue"
                title="Smarter Tracking for Bus Fleets"
                description="Whether you operate school buses, public transit, or private coach services, InteliFleet gives you the real-time visibility and safety tools to protect passengers, improve punctuality, and ensure driver accountability."
                ctas={[
                    { label: "Get a Demo", primary: true },
                    { label: "View All Solutions", href: "/", primary: false },
                ]}
                highlights={["Live bus position tracking", "Route deviation alerts", "Driver safety scoring", "School zone geofencing"]}
                accentColor={ACCENT}
            />

            <PageSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((s, i) => <StatCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Built for Bus Operators</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Everything you need to run safer, more reliable bus services.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => <FeatureCard key={i} {...f} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageCTA
                title="Safer Buses, Happier Passengers"
                description="Put passenger safety and route compliance at the heart of your bus operations with InteliFleet."
                primaryLabel="Book a Free Demo"
                secondaryLabel="View All Solutions"
                accentColor={ACCENT}
            />
        </div>
    );
}
