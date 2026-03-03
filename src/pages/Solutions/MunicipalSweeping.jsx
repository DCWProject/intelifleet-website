import React from "react";
import {
    Building2, Map, CheckCircle, Activity, BarChart3, FileText,
    Layers, Clock, AlertTriangle, Gauge, Truck, Globe,
} from "lucide-react";
import {
    PageHero, PageSection, FeatureCard, StatCard, PageCTA,
} from "@/components/feature-page-hero";

const ACCENT = "#10b981";

const features = [
    { icon: Map, title: "Live Sweeping Tracking", description: "Monitor every cleaning vehicle on a live map and see their real-time position and cleaning status." },
    { icon: CheckCircle, title: "Cleaning ON/OFF Detection", description: "Automatically detect when the cleaning mechanism is active using PTO or auxiliary sensors." },
    { icon: Activity, title: "Area Coverage Mapping", description: "Calculate cleaned area in real time using GPS polygon mapping and geospatial computation." },
    { icon: AlertTriangle, title: "Missed Zone Alerts", description: "Compare assigned route polygons vs actual paths and automatically highlight uncleaned areas." },
    { icon: BarChart3, title: "Efficiency Reports", description: "Generate shift-level and vehicle-level cleaning efficiency reports for municipal compliance." },
    { icon: Gauge, title: "Fuel Monitoring", description: "Track fuel usage per sweeper to prevent theft and calculate fuel consumption per cleaned hectare." },
    { icon: Clock, title: "Shift Management", description: "Monitor cleaning operations by shift, date range, and assigned zone for granular accountability." },
    { icon: FileText, title: "Compliance Documentation", description: "Auto-generate compliance-ready PDF reports with coverage data for municipal authorities." },
    { icon: Layers, title: "Zone Assignment", description: "Assign specific cleaning zones or road polygons to vehicles for planned and trackable coverage." },
    { icon: Truck, title: "Multi-Vehicle Dashboard", description: "View all sweeping vehicles simultaneously with live status, GPS position, and cleaning state." },
    { icon: Globe, title: "Dashboard Coverage View", description: "See total city coverage on the fleet dashboard with per-vehicle breakdown by date and shift." },
    { icon: Building2, title: "Municipal Reporting", description: "Produce official-grade cleaning coverage reports required by city and municipal authorities." },
];

const stats = [
    { value: "100%", label: "Zone Coverage Visibility" },
    { value: "GPS", label: "Area Calculation" },
    { value: "Auto", label: "Missed Zone Detection" },
    { value: "Compliance", label: "Ready Reports" },
];

export default function MunicipalSweepingPage() {
    return (
        <div>
            <PageHero
                badge="For Municipal & City Operations"
                badgeColor="green"
                title="Intelligent Tracking for Municipal Sweeping"
                titleHighlight=""
                description="InteliFleet is purpose-built for city cleaning and municipal sweeping operations. Monitor every vehicle's cleaning status, calculate coverage area, detect missed zones, and generate compliance-ready reports automatically."
                ctas={[
                    { label: "Get a Demo", primary: true },
                    { label: "View All Solutions", href: "/", primary: false },
                ]}
                highlights={["PTO/sensor integration", "GPS polygon area calculation", "Missed zone detection", "Municipal compliance reports"]}
                accentColor={ACCENT}
            />

            <PageSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((s, i) => <StatCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Built for Municipal Operations</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Complete digital oversight for city cleaning fleets of any size.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => <FeatureCard key={i} {...f} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageCTA
                title="Prove Every Street is Clean"
                description="Give your city or municipality real, verifiable data on every cleaning operation — in real time."
                primaryLabel="Book a Free Demo"
                secondaryLabel="View All Solutions"
                accentColor={ACCENT}
            />
        </div>
    );
}
