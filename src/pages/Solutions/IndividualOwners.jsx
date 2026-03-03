import React from "react";
import {
    UserCircle, Map, Fuel, Shield, Bell, BarChart3,
    Wrench, FileText, Car, Lock, Clock, CheckCircle,
} from "lucide-react";
import {
    PageHero, PageSection, FeatureCard, StatCard, PageCTA,
} from "@/components/feature-page-hero";

const ACCENT = "#22c55e";

const features = [
    { icon: Map, title: "Real-Time GPS Tracking", description: "Know exactly where your vehicle is at all times on an interactive live map." },
    { icon: Fuel, title: "Fuel Monitoring", description: "Track fuel levels and detect any unauthorized draining or suspicious drops." },
    { icon: Shield, title: "Anti-Theft Alerts", description: "Get instantly notified if your vehicle moves outside permitted hours or geofence zones." },
    { icon: Bell, title: "Ignition Notifications", description: "Receive a push or WhatsApp notification the moment your ignition is turned ON or OFF." },
    { icon: Lock, title: "Geo-Lock Mode", description: "Restrict your vehicle to a defined area; alert yourself the moment it moves outside." },
    { icon: Clock, title: "Route History", description: "Replay exactly where your vehicle has been with full historical route playback." },
    { icon: FileText, title: "Document Vault", description: "Upload and store RC, insurance, PUC, and fitness documents with expiry reminders." },
    { icon: Wrench, title: "Service Reminders", description: "Never miss an oil change, tyre rotation, or PUC renewal with automated km-based reminders." },
    { icon: BarChart3, title: "Usage Reports", description: "See daily mileage, fuel usage, and route summaries for your personal vehicle." },
    { icon: Car, title: "Vehicle Health", description: "Monitor engine health signals and get early breakdown warnings before they become costly." },
    { icon: CheckCircle, title: "Easy Setup", description: "Install the compact GPS device in minutes with no technical expertise required." },
    { icon: UserCircle, title: "Single Dashboard", description: "Manage your personal vehicle from a simple, intuitive mobile-friendly dashboard." },
];

const benefits = [
    { value: "₹500", label: "Avg. Monthly Savings" },
    { value: "24/7", label: "Vehicle Monitoring" },
    { value: "< 5min", label: "Setup Time" },
    { value: "100%", label: "Mobile Friendly" },
];

export default function IndividualOwnersPage() {
    return (
        <div>
            <PageHero
                badge="For Individual Vehicle Owners"
                badgeColor="green"
                title="Smart Protection for Your Personal Vehicle"
                description="Whether you own a car, bike, or SUV — InteliFleet gives you real-time visibility, theft protection, fuel monitoring, and document management in one affordable platform designed for individual owners."
                ctas={[
                    { label: "Get Started", primary: true },
                    { label: "View Pricing", href: "/#pricing", primary: false },
                ]}
                highlights={["No fleet needed — just one vehicle", "Plug & play GPS device", "Mobile-first dashboard", "Affordable personal plan"]}
                accentColor={ACCENT}
            />

            <PageSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {benefits.map((s, i) => <StatCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Everything You Need for One Vehicle</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Full enterprise-grade fleet features, scaled down for individual vehicle owners.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => <FeatureCard key={i} {...f} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageCTA
                title="Protect Your Vehicle Today"
                description="Join thousands of individual vehicle owners who trust InteliFleet to keep their cars and bikes safe."
                primaryLabel="Get Started Now"
                secondaryLabel="View All Solutions"
                accentColor={ACCENT}
            />
        </div>
    );
}
