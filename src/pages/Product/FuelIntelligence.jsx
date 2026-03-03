import React from "react";
import {
    Fuel, TrendingDown, TrendingUp, AlertTriangle, ShieldAlert,
    BarChart3, Droplets, Activity, Clock, Gauge, FileText, Zap,
} from "lucide-react";
import {
    PageHero, PageSection, FeatureCard, StatCard, StepCard, PageCTA,
} from "@/components/feature-page-hero";

const ACCENT = "#f59e0b";

const features = [
    { icon: Fuel, title: "Real-Time Fuel Level", description: "Integrates with analog or CAN-based sensors to display live fuel level in litres with timestamp logging." },
    { icon: TrendingUp, title: "Refuel Detection", description: "Automatically detects fuel increases beyond threshold (e.g., +5L in a short duration) and logs the refuel event." },
    { icon: TrendingDown, title: "Fuel Theft Detection", description: "Detects sudden fuel drops when ignition is OFF or abnormal drain rates and triggers an immediate alert." },
    { icon: Gauge, title: "Mileage Calculation", description: "Calculates km/L per trip by dividing distance travelled by fuel consumed (start fuel minus end fuel)." },
    { icon: BarChart3, title: "Efficiency Analytics", description: "Compare individual vehicle efficiency against fleet average and generate periodic efficiency reports." },
    { icon: AlertTriangle, title: "Abnormal Drop Alerts", description: "Configurable thresholds for what constitutes a suspicious fuel drop, triggering real-time alerts." },
    { icon: Droplets, title: "Fuel Log Timeline", description: "Full historical fuel log per vehicle with graphical view showing refuels, thefts, and consumption trends." },
    { icon: FileText, title: "Fuel Reports", description: "Generate fuel refill and fuel theft reports filtered by vehicle, date range, and driver." },
    { icon: Activity, title: "Consumption Trends", description: "Weekly and monthly fuel consumption trend graphs for every vehicle in the fleet." },
    { icon: Clock, title: "Date Range Filters", description: "Filter all fuel analytics by custom date ranges, shifts, and route segments." },
    { icon: ShieldAlert, title: "Theft Event Log", description: "Every detected theft is recorded with location, timestamp, fuel quantity, and ignition status." },
    { icon: Zap, title: "Instant Notifications", description: "Multi-channel alerts via push, SMS, WhatsApp, and email when a theft or abnormal drop is detected." },
];

const steps = [
    { step: 1, title: "Sensor Integration", description: "Connect analog or CAN-bus fuel sensor to the telemetry device for live fuel level readings." },
    { step: 2, title: "Baseline Calibration", description: "Set your tank capacity and calibration curve for accurate litre-level readings." },
    { step: 3, title: "Live Monitoring", description: "InteliFleet continuously tracks fuel level changes and compares against expected consumption rates." },
    { step: 4, title: "Alerts & Reports", description: "Any anomaly triggers an instant alert, and all events are logged for reporting and audit." },
];

const stats = [
    { value: "95%", label: "Theft Detection Accuracy" },
    { value: "±0.5L", label: "Sensor Precision" },
    { value: "24/7", label: "Live Monitoring" },
    { value: "100%", label: "Trip Coverage" },
];

export default function FuelIntelligencePage() {
    return (
        <div>
            <PageHero
                badge="Fuel Intelligence Module"
                badgeColor="orange"
                title="Smart Fuel Monitoring & Theft Prevention"
                description="Gain complete visibility into every drop of fuel in your fleet. InteliFleet's Fuel Intelligence module detects refuels, flags theft, calculates mileage, and surfaces efficiency insights automatically."
                ctas={[
                    { label: "Get a Demo", primary: true },
                    { label: "View All Products", href: "/product", primary: false },
                ]}
                highlights={["Analog & CAN sensor support", "Real-time theft alerts", "Trip-level mileage calculation", "Fuel efficiency benchmarking"]}
                accentColor={ACCENT}
            />

            <PageSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((s, i) => <StatCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Fuel Intelligence Features</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        From real-time fuel level readings to theft detection and efficiency benchmarking.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => <FeatureCard key={i} {...f} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageSection
                title="How Fuel Intelligence Works"
                subtitle="A seamless pipeline from sensor to insight."
            >
                <div className="max-w-2xl mx-auto space-y-8">
                    {steps.map((s, i) => <StepCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageCTA
                title="Stop Fuel Losses Today"
                description="InteliFleet's fuel monitoring pays for itself by catching theft and eliminating waste."
                primaryLabel="Book a Free Demo"
                secondaryLabel="View All Products"
                accentColor={ACCENT}
            />
        </div>
    );
}
