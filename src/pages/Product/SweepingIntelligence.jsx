import React from "react";
import {
    Truck, MapPin, BarChart3, Map, Activity, Clock,
    CheckCircle, AlertTriangle, Layers, Navigation, FileText, Gauge,
} from "lucide-react";
import {
    PageHero, PageSection, FeatureCard, StatCard, StepCard, PageCTA,
} from "@/components/feature-page-hero";

const ACCENT = "#3b82f6";

const features = [
    { icon: Activity, title: "Cleaning ON/OFF Detection", description: "Integrate auxiliary sensor or PTO signal to detect cleaning mechanism status and log ON/OFF timestamps." },
    { icon: Map, title: "Area Coverage Calculation", description: "Use GPS polygon mapping and geospatial computation to calculate the total area cleaned per trip." },
    { icon: CheckCircle, title: "Cleaning vs Movement", description: "Cross-check GPS movement with cleaning status and mark segments as 'Moving Only' vs 'Cleaning Active'." },
    { icon: AlertTriangle, title: "Missed Zone Detection", description: "Compare the assigned route polygon with the actual cleaned path and automatically highlight missed areas." },
    { icon: BarChart3, title: "Cleaning Efficiency Report", description: "Calculate the percentage of trip time with cleaning ON versus total movement time per vehicle." },
    { icon: MapPin, title: "Live Cleaning Status", description: "See each vehicle's live cleaning or running status alongside GPS position on the main tracking map." },
    { icon: Layers, title: "Shift-Based Reports", description: "Filter cleaning data by shift, date range, or route for granular operational insights." },
    { icon: Clock, title: "Timeline Log", description: "Detailed per-vehicle timeline showing when the cleaning mechanism was active versus idle." },
    { icon: Navigation, title: "Route Assignment", description: "Assign specific cleaning routes or zones to vehicles for planned coverage tracking." },
    { icon: Gauge, title: "Performance Benchmarks", description: "Compare cleaning efficiency across vehicles and operators with standardized KPIs." },
    { icon: FileText, title: "Coverage Reports", description: "Export area coverage and efficiency reports as PDF or Excel for municipal compliance." },
    { icon: Truck, title: "Fleet Overview Dashboard", description: "See total cleaning area and per-vehicle breakdown on the main fleet dashboard." },
];

const steps = [
    { step: 1, title: "Sensor Integration", description: "Connect PTO or auxiliary sensor to the telemetry device to detect cleaning mechanism ON/OFF state." },
    { step: 2, title: "Route Assignment", description: "Define the expected cleaning route or zone polygon in InteliFleet for the vehicle's shift." },
    { step: 3, title: "Live Tracking", description: "GPS and cleaning sensor data stream live to the dashboard, showing areas covered in real time." },
    { step: 4, title: "Coverage Analysis", description: "InteliFleet computes covered area, missed zones, and cleaning efficiency automatically post-shift." },
];

const stats = [
    { value: "100%", label: "Coverage Visibility" },
    { value: "Real-Time", label: "Cleaning Status" },
    { value: "GPS", label: "Polygon Mapping" },
    { value: "Auto", label: "Missed Zone Detection" },
];

export default function SweepingIntelligencePage() {
    return (
        <div>
            <PageHero
                badge="Sweeping & Utility Intelligence"
                badgeColor="blue"
                title="Smart Cleaning & Area Coverage Tracking"
                description="Purpose-built for municipal and utility sweeping operations. InteliFleet monitors cleaning mechanism status, calculates area coverage, detects missed zones, and generates compliance-ready reports."
                ctas={[
                    { label: "Get a Demo", primary: true },
                    { label: "View All Products", href: "/product", primary: false },
                ]}
                highlights={["PTO/auxiliary sensor support", "GPS polygon area calculation", "Missed zone detection", "Compliance-ready reports"]}
                accentColor={ACCENT}
            />

            <PageSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((s, i) => <StatCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Sweeping Intelligence Features</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        From PTO integration to coverage reporting — everything municipal operators need.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => <FeatureCard key={i} {...f} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageSection
                title="How Sweeping Intelligence Works"
                subtitle="From sensor to coverage report in four simple steps."
            >
                <div className="max-w-2xl mx-auto space-y-8">
                    {steps.map((s, i) => <StepCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageCTA
                title="Prove Every Street is Clean"
                description="Give your municipality and supervisors real proof of cleaning coverage — automatically."
                primaryLabel="Book a Free Demo"
                secondaryLabel="View All Products"
                accentColor={ACCENT}
            />
        </div>
    );
}
