import React from "react";
import {
    BarChart3, FileText, TrendingUp, Gauge, Clock,
    Download, Calendar, Filter, PieChart, Activity, Layers, LayoutDashboard,
} from "lucide-react";
import {
    PageHero, PageSection, FeatureCard, StatCard, StepCard, PageCTA,
} from "@/components/feature-page-hero";

const ACCENT = "#ec4899";

const features = [
    { icon: LayoutDashboard, title: "Live Fleet Dashboard", description: "Centralized dashboard showing real-time status of every vehicle — Running, Idle, Cleaning, or Offline." },
    { icon: Activity, title: "Vehicle Activity Report", description: "Full MIS report per vehicle with distance, fuel usage, idle time, cleaning data, and more." },
    { icon: TrendingUp, title: "Fuel Efficiency Report", description: "Compare km/L of each vehicle against fleet average and identify outliers for cost reduction." },
    { icon: FileText, title: "Ignition Report", description: "Log every engine ON/OFF event per vehicle for compliance, security, and driver attribution." },
    { icon: Clock, title: "Idle Time Report", description: "View total idle duration per vehicle and driver, filterable by date range and shift." },
    { icon: Gauge, title: "Cleaning ON/OFF Report", description: "Review cleaning mechanism logs per vehicle with timestamps and duration breakdown." },
    { icon: PieChart, title: "Utilization Report", description: "Calculate fleet vehicle utilisation as a percentage of running time vs total shift time." },
    { icon: Filter, title: "Custom Report Builder", description: "Configure report filters by date range, vehicle, driver, and event type for tailored insights." },
    { icon: Download, title: "PDF & Excel Export", description: "Export all reports as PDF or Excel for sharing, compliance, and archiving purposes." },
    { icon: Calendar, title: "Scheduled Reports", description: "Auto-generate and deliver daily, weekly, or monthly MIS reports to your inbox automatically." },
    { icon: Layers, title: "Fuel Theft & Refill Reports", description: "Dedicated reports for fuel refill and theft events with vehicle, amount, and timestamp details." },
    { icon: BarChart3, title: "Analytics Dashboard", description: "Graphical fuel trends, speed analytics, and cleaning coverage charts per vehicle or fleet-wide." },
];

const steps = [
    { step: 1, title: "Select Report Type", description: "Choose from activity, fuel, idle, ignition, cleaning, or utilisation reports in the Reports section." },
    { step: 2, title: "Apply Filters", description: "Filter by vehicle, driver, date range, shift, or custom parameters to scope your data precisely." },
    { step: 3, title: "Generate & Review", description: "Reports render instantly with charts, tables, and key performance indicators." },
    { step: 4, title: "Export & Schedule", description: "Export as PDF/Excel or schedule automatic delivery to stakeholders on any recurring cadence." },
];

const stats = [
    { value: "10+", label: "Report Types" },
    { value: "PDF/XLS", label: "Export Formats" },
    { value: "Auto", label: "Scheduled Delivery" },
    { value: "Custom", label: "Filter Builder" },
];

export default function ReportsAnalyticsPage() {
    return (
        <div>
            <PageHero
                badge="Reports & Analytics"
                badgeColor="purple"
                title="Fleet Insights & Performance Reports"
                description="Turn raw fleet data into actionable intelligence. InteliFleet's reporting module covers everything from daily MIS reports and fuel analytics to custom report builders with PDF and Excel export."
                ctas={[
                    { label: "Get a Demo", primary: true },
                    { label: "View All Products", href: "/product", primary: false },
                ]}
                highlights={["10+ report types", "PDF & Excel export", "Scheduled auto-delivery", "Custom filter builder"]}
                accentColor={ACCENT}
            />

            <PageSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((s, i) => <StatCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Reports & Analytics Features</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Every report your fleet operations, compliance team, and management could need.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => <FeatureCard key={i} {...f} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageSection
                title="How Reporting Works"
                subtitle="From raw telemetry to boardroom-ready insights in seconds."
            >
                <div className="max-w-2xl mx-auto space-y-8">
                    {steps.map((s, i) => <StepCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageCTA
                title="Fleet Intelligence at Your Fingertips"
                description="Stop guessing and start deciding — with data-backed reports generated automatically."
                primaryLabel="Book a Free Demo"
                secondaryLabel="View All Products"
                accentColor={ACCENT}
            />
        </div>
    );
}
