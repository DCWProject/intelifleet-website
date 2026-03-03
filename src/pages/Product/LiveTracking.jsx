import React from "react";
import {
    Map, MapPin, Navigation, Clock, Gauge, Radio,
    Eye, PlayCircle, Layers, SatelliteDish, Bell, Route,
} from "lucide-react";
import {
    PageHero, PageSection, FeatureCard, StatCard, StepCard, PageCTA,
} from "@/components/feature-page-hero";

const ACCENT = "#22c55e";

const features = [
    { icon: MapPin, title: "Live GPS Position", description: "Receive latitude, longitude, heading, and altitude every few seconds via MQTT or HTTP telemetry endpoints." },
    { icon: Gauge, title: "Real-Time Speed", description: "Monitor live vehicle speed and compare against configured speed limits with instant overspeed alerts." },
    { icon: Radio, title: "Live Telemetry", description: "Stream fuel level, ignition status, cleaning sensor state, and engine data all in real time." },
    { icon: Eye, title: "Fleet Map View", description: "See all vehicles on an interactive Google Maps or OpenStreetMap view with live position updates." },
    { icon: PlayCircle, title: "Route Playback", description: "Replay historical routes with adjustable speed and date/time selection for compliance reviews." },
    { icon: Clock, title: "Timeline Log", description: "Detailed per-vehicle timeline of all recorded events — stops, ignition events, cleaning status, and more." },
    { icon: Layers, title: "Multi-Vehicle View", description: "Track your entire fleet simultaneously with real-time arrangement by speed or status." },
    { icon: SatelliteDish, title: "Geofence Overlay", description: "Visualize assigned geofence zones directly on the tracking map." },
    { icon: Navigation, title: "Vehicle Details", description: "Drill into any vehicle for full live data, timeline, and activity metrics in a single details view." },
    { icon: Bell, title: "Breach Alerts", description: "Instant notifications when a vehicle exits or enters a defined geofence boundary." },
    { icon: Route, title: "Route History", description: "Store complete GPS logs and replay journeys with speed-based color coding for analysis." },
    { icon: Map, title: "Last Location", description: "Always know where each vehicle was last seen, even when offline." },
];

const steps = [
    { step: 1, title: "Telemetry Device Installed", description: "A GPS+IoT device is fitted to your vehicle, capturing position, speed, and sensor data." },
    { step: 2, title: "Data Streamed to Cloud", description: "Data is pushed via MQTT or HTTP every configurable interval to our time-series database." },
    { step: 3, title: "Map Updates Live", description: "The InteliFleet dashboard reflects vehicle positions, status, and telemetry in real time." },
    { step: 4, title: "Alerts & Reports Generated", description: "Rule-based alerts fire instantly; historical data powers analytics and playback." },
];

const stats = [
    { value: "< 5s", label: "Data Latency" },
    { value: "24/7", label: "Live Monitoring" },
    { value: "100%", label: "Coverage" },
    { value: "360°", label: "Fleet View" },
];

export default function LiveTrackingPage() {
    return (
        <div>
            <PageHero
                badge="Core Vehicle Tracking"
                badgeColor="green"
                title="Real-Time GPS Tracking & Live Telemetry"
                description="Know exactly where every vehicle is, what it's doing, and how it's performing — all in real time. InteliFleet streams GPS, speed, fuel, and sensor data every few seconds directly to your dashboard."
                ctas={[
                    { label: "Get a Demo", primary: true },
                    { label: "View All Features", href: "/product", primary: false },
                ]}
                highlights={["Google Maps / OSM integration", "MQTT & HTTP support", "Sub-5s data refresh", "Time-series storage"]}
                accentColor={ACCENT}
            />

            {/* Stats */}
            <PageSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((s, i) => <StatCard key={i} {...s} accentColor={ACCENT} />)}
                </div>

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Tracking Features</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Everything you need to keep every vehicle in your fleet visible and accountable.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => (
                        <FeatureCard key={i} {...f} accentColor={ACCENT} />
                    ))}
                </div>
            </PageSection>

            {/* How it works */}
            <PageSection
                title="How Live Tracking Works"
                subtitle="From device installation to your dashboard — the full data pipeline."
            >
                <div className="max-w-2xl mx-auto space-y-8">
                    {steps.map((s, i) => <StepCard key={i} {...s} accentColor={ACCENT} />)}
                </div>
            </PageSection>

            <PageCTA
                title="See Your Entire Fleet Live"
                description="Experience real-time GPS tracking with full telemetry for every vehicle in your fleet."
                primaryLabel="Book a Free Demo"
                secondaryLabel="View All Products"
                accentColor={ACCENT}
            />
        </div>
    );
}
