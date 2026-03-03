import React from "react";
import {
  User,
  Star,
  AlertTriangle,
  Fuel,
  Activity,
  BarChart3,
  Clock,
  FileText,
  Shield,
  Zap,
  UserCheck,
  Gauge,
} from "lucide-react";
import {
  PageHero,
  PageSection,
  FeatureCard,
  StatCard,
  StepCard,
  PageCTA,
} from "@/components/feature-page-hero";

const ACCENT = "#8b5cf6";

const features = [
  {
    icon: UserCheck,
    title: "Driver Assignment",
    description:
      "Assign or remove drivers from specific vehicles per shift or trip and maintain a full driver log history.",
  },
  {
    icon: Activity,
    title: "Behaviour Monitoring",
    description:
      "Detect harsh acceleration, sudden braking, and cornering events from accelerometer data and log all incidents.",
  },
  {
    icon: Star,
    title: "Safety Score",
    description:
      "Generate a driver safety score (0–100) based on overspeed events, harsh behaviour logs, and idle misuse.",
  },
  {
    icon: Fuel,
    title: "Fuel Efficiency per Driver",
    description:
      "Compute mileage and fuel consumption per driver to benchmark performance across the team.",
  },
  {
    icon: AlertTriangle,
    title: "Overspeed Logging",
    description:
      "Every overspeed event is timestamped and attributed to the assigned driver for accountability.",
  },
  {
    icon: Clock,
    title: "Idle Misuse Detection",
    description:
      "Track and attribute idle time to the responsible driver for shift-level accountability.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Analyse driver behaviour trends over time with weekly and monthly performance summaries.",
  },
  {
    icon: FileText,
    title: "Driver Reports",
    description:
      "Export driver-level reports for safety audits, HR reviews, and compliance documentation.",
  },
  {
    icon: Shield,
    title: "Incident Logs",
    description:
      "All harsh events, violations, and anomalies are logged with vehicle, location, and timestamp.",
  },
  {
    icon: Gauge,
    title: "Trip-Level Metrics",
    description:
      "View trip distance, duration, average speed, and fuel usage broken down per driver per trip.",
  },
  {
    icon: User,
    title: "Driver Profile",
    description:
      "Centralized driver profile with contact info, assigned vehicle, and complete activity history.",
  },
  {
    icon: Zap,
    title: "Real-Time Attribution",
    description:
      "All events during a shift are automatically attributed to the currently assigned driver.",
  },
];

const steps = [
  {
    step: 1,
    title: "Assign Driver to Vehicle",
    description:
      "Select a driver from the directory and assign them to a vehicle before their shift begins.",
  },
  {
    step: 2,
    title: "Data Attributed Automatically",
    description:
      "All GPS, speed, fuel, and sensor events during the shift are attributed to the assigned driver.",
  },
  {
    step: 3,
    title: "Behaviour Events Detected",
    description:
      "Harsh braking, overspeed, and idle misuse events are flagged and logged in real time.",
  },
  {
    step: 4,
    title: "Safety Score Calculated",
    description:
      "InteliFleet computes a composite safety score and surfaces it on the driver's profile page.",
  },
];

const stats = [
  { value: "0–100", label: "Safety Score Range" },
  { value: "Real-Time", label: "Behaviour Detection" },
  { value: "Per Trip", label: "Fuel Attribution" },
  { value: "Full", label: "Incident History" },
];

export default function DriverIntelligencePage() {
  return (
    <div>
      <PageHero
        badge="Driver Intelligence Module"
        badgeColor="purple"
        title="Driver Behaviour & Safety Analytics"
        description="Know who is driving, how they're performing, and how much fuel they're using — for every shift, every trip, every vehicle. InteliFleet's Driver Intelligence module builds accountability into your entire fleet operation."
        ctas={[
          { label: "Get a Demo", primary: true },
          { label: "View All Products", href: "/product", primary: false },
        ]}
        highlights={[
          "Driver-to-vehicle assignment",
          "0–100 safety scoring",
          "Harsh event detection",
          "Fuel attribution per driver",
        ]}
        accentColor={ACCENT}
      />

      <PageSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} accentColor={ACCENT} />
          ))}
        </div>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Driver Intelligence Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Complete driver visibility — from assignment to performance and
            safety scoring.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} accentColor={ACCENT} />
          ))}
        </div>
      </PageSection>

      <PageSection
        title="How Driver Intelligence Works"
        subtitle="From driver assignment to performance insight in four steps."
      >
        <div className="max-w-2xl mx-auto space-y-8">
          {steps.map((s, i) => (
            <StepCard key={i} {...s} accentColor={ACCENT} />
          ))}
        </div>
      </PageSection>

      <PageCTA
        title="Build a Culture of Safe Driving"
        description="Data-driven driver accountability leads to fewer incidents, lower fuel bills, and longer vehicle life."
        primaryLabel="Book a Free Demo"
        secondaryLabel="View All Products"
        accentColor={ACCENT}
      />
    </div>
  );
}
