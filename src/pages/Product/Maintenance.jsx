import React from "react";
import {
    Wrench, Bell, ClipboardList, DollarSign, Activity,
    Clock, FileText, ShieldCheck, AlertTriangle, Gauge, Calendar, CheckCircle,
} from "lucide-react";
import {
    PageHero, PageSection, FeatureCard, StatCard, StepCard, PageCTA,
} from "@/components/feature-page-hero";

const ACCENT = "#06b6d4";

const features = [
    { icon: Bell, title: "Service Reminders", description: "Track kilometres run and engine hours; trigger configurable service alerts before thresholds are reached." },
    { icon: ClipboardList, title: "Maintenance Log", description: "Manually record service details — oil changes, tyre replacements, and inspections — with cost tracking." },
    { icon: DollarSign, title: "Cost History", description: "Maintain a complete maintenance cost history per vehicle to analyse total ownership expenses." },
    { icon: AlertTriangle, title: "Breakdown Alerts", description: "Detect abnormal patterns like overheating, prolonged idle, and repetitive faults to flag breakdown risk." },
    { icon: Activity, title: "Health Monitoring", description: "Continuously monitor vehicle health signals and receive early warnings before failures occur." },
    { icon: Gauge, title: "Engine Hours Tracking", description: "Track total engine hours alongside odometer readings for precise service interval calculation." },
    { icon: Calendar, title: "Scheduled Maintenance", description: "Plan and schedule preventive maintenance across the fleet with calendar-based reminders." },
    { icon: FileText, title: "Service Reports", description: "Generate vehicle-level maintenance summaries for compliance, insurance, and fleet audit purposes." },
    { icon: ShieldCheck, title: "Inspection Checklists", description: "Run structured pre- and post-trip inspection workflows with digital sign-off capability." },
    { icon: Clock, title: "Downtime Tracking", description: "Log maintenance downtime against each vehicle to measure availability and utilisation impact." },
    { icon: CheckCircle, title: "Part Replacement Logs", description: "Record every part replaced with date, cost, mileage, and technician details." },
    { icon: Wrench, title: "Vendor Management", description: "Track which service centre or vendor performed each maintenance job for audit purposes." },
];

const steps = [
    { step: 1, title: "Configure Thresholds", description: "Set your preferred km or engine-hour thresholds for each service type (oil, tyres, belts, etc.)." },
    { step: 2, title: "Monitor Automatically", description: "InteliFleet tracks distance and engine hours from live telemetry and compares them to your thresholds." },
    { step: 3, title: "Alert Triggered", description: "When a vehicle approaches a service threshold, an alert is sent via push, SMS, or email." },
    { step: 4, title: "Log the Service", description: "After completing the service, log the details in InteliFleet to reset the interval and maintain cost history." },
];

const stats = [
    { value: "Auto", label: "Threshold Tracking" },
    { value: "Full", label: "Cost History" },
    { value: "Early", label: "Breakdown Warnings" },
    { value: "0", label: "Missed Services" },
];

export default function MaintenancePage() {
    return (
        <div>
            <PageHero
                badge="Maintenance & Health Module"
                badgeColor="teal"
                title="Proactive Vehicle & Maintenance Management"
                description="Never miss a service interval again. InteliFleet tracks odometer readings, engine hours, and health signals to trigger timely service reminders and maintain a complete maintenance cost history."
                ctas={[
                    { label: "Get a Demo", primary: true },
                    { label: "View All Products", href: "/product", primary: false },
                ]}
                highlights={["KM & engine-hour tracking", "Configurable alert thresholds", "Full cost history", "Breakdown risk detection"]}
                accentColor={ACCENT}
            />

            <PageSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((s, i) => <StatCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Maintenance Features</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Everything needed to keep your fleet in peak condition and avoid costly breakdowns.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => <FeatureCard key={i} {...f} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageSection
                title="How Maintenance Management Works"
                subtitle="A simple loop that keeps every vehicle serviced on schedule."
            >
                <div className="max-w-2xl mx-auto space-y-8">
                    {steps.map((s, i) => <StepCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageCTA
                title="Extend Vehicle Life with Smart Maintenance"
                description="Proactive maintenance reduces breakdowns, insurance costs, and total fleet ownership expenses."
                primaryLabel="Book a Free Demo"
                secondaryLabel="View All Products"
                accentColor={ACCENT}
            />
        </div>
    );
}
