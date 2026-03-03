import React from "react";
import {
    Shield, Bell, Lock, Zap, Clock, AlertTriangle,
    Map, Eye, ShieldAlert, Siren, MessageSquare, Settings,
} from "lucide-react";
import {
    PageHero, PageSection, FeatureCard, StatCard, StepCard, PageCTA,
} from "@/components/feature-page-hero";

const ACCENT = "#ef4444";

const features = [
    { icon: Map, title: "Geofencing", description: "Create polygon or circular geofences. Trigger entry/exit alerts with full timestamp logging per vehicle." },
    { icon: AlertTriangle, title: "Unauthorized Movement Alert", description: "Trigger an alert if a vehicle moves during predefined OFF hours or outside its scheduled window." },
    { icon: Lock, title: "Geo-Lock Mode", description: "Restrict vehicle movement to a defined geofence; alert the owner on any violation attempt." },
    { icon: Zap, title: "Ignition Alerts", description: "Send instant notifications when ignition is turned ON outside permitted operating hours." },
    { icon: ShieldAlert, title: "Anti-Theft Detection", description: "Detect unauthorized ignition attempts and abnormal movement patterns when the vehicle should be parked." },
    { icon: Bell, title: "Overspeed Alerts", description: "Instantly notify fleet managers when a vehicle exceeds the configured speed limit." },
    { icon: Clock, title: "Off-Hours Monitoring", description: "Define permitted operating windows per vehicle; any activity outside triggers an escalated alert." },
    { icon: Eye, title: "Configurable Rule Engine", description: "Admin-defined rules (e.g., fuel drop > X L in Y min) that automatically trigger customizable alert events." },
    { icon: MessageSquare, title: "Multi-Channel Notifications", description: "Deliver alerts via in-app push notifications, SMS, WhatsApp, and email simultaneously." },
    { icon: Siren, title: "Alert Escalation", description: "If an alert is not acknowledged within a defined timeframe, it automatically escalates to a supervisor." },
    { icon: Settings, title: "Per-Vehicle Configuration", description: "Set unique security rules, speed limits, and geofences for every vehicle or vehicle group." },
    { icon: Shield, title: "Audit Log", description: "Every alert, acknowledgment, and rule change is logged with user, timestamp, and action for full audit trails." },
];

const steps = [
    { step: 1, title: "Define Your Rules", description: "Set speed limits, off-hours windows, geofences, and fuel drop thresholds in the admin rule engine." },
    { step: 2, title: "Assign to Vehicles", description: "Apply security profiles and geofences to individual vehicles or entire fleets." },
    { step: 3, title: "Real-Time Monitoring", description: "InteliFleet monitors all vehicles continuously against your defined security rules." },
    { step: 4, title: "Instant Alert & Escalation", description: "Violations trigger instant multi-channel notifications that escalate if not acknowledged." },
];

const stats = [
    { value: "< 10s", label: "Alert Delivery" },
    { value: "Multi", label: "Channel Notifications" },
    { value: "Auto", label: "Escalation" },
    { value: "24/7", label: "Monitoring" },
];

export default function SecurityAlertsPage() {
    return (
        <div>
            <PageHero
                badge="Security & Anti-Theft Module"
                badgeColor="red"
                title="Fleet Security & Smart Alert System"
                titleHighlight=""
                description="Protect your fleet around the clock with geofencing, off-hours monitoring, ignition alerts, and a powerful rule engine that delivers multi-channel notifications the moment something goes wrong."
                ctas={[
                    { label: "Get a Demo", primary: true },
                    { label: "View All Products", href: "/product", primary: false },
                ]}
                highlights={["Geofence entry/exit alerts", "Off-hours ignition detection", "Configurable rule engine", "Auto alert escalation"]}
                accentColor={ACCENT}
            />

            <PageSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((s, i) => <StatCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Security & Alert Features</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        A comprehensive security layer that keeps your fleet protected at all times.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => <FeatureCard key={i} {...f} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageSection
                title="How Security & Alerts Work"
                subtitle="Rules-driven protection that acts in seconds."
            >
                <div className="max-w-2xl mx-auto space-y-8">
                    {steps.map((s, i) => <StepCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageCTA
                title="Secure Every Vehicle in Your Fleet"
                description="Stop unauthorized usage, prevent theft, and respond to every violation in seconds — automatically."
                primaryLabel="Book a Free Demo"
                secondaryLabel="View All Products"
                accentColor={ACCENT}
            />
        </div>
    );
}
