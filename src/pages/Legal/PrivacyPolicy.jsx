import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Shield, ChevronRight } from "lucide-react";

const LAST_UPDATED = "March 1, 2026";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `InteliFleet Technologies ("InteliFleet," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, share, and protect your personal information when you use the InteliFleet platform, website, mobile applications, and related services (collectively, the "Service").

This Policy applies to all users of the Service — including fleet managers, administrators, drivers, and any other individuals whose data is processed through our platform. By using the Service, you consent to the practices described in this Policy.

We encourage you to read this Policy carefully and contact us if you have any questions.`,
  },
  {
    id: "data-collected",
    title: "2. Information We Collect",
    content: `We collect several types of information in connection with your use of the Service:

Account & Registration Data
• Full name, email address, phone number, and job title.
• Company name, address, and GST/business registration details.
• Username, password (stored hashed), and role/permissions.

Vehicle & Telemetry Data
• GPS coordinates (latitude, longitude, altitude, heading) updated in real time.
• Vehicle speed, ignition status, engine hours, and odometer readings.
• Fuel level readings from connected sensors.
• Cleaning/PTO sensor data for applicable vehicle types.
• Geofence events, route logs, and stop records.

Driver & User Data
• Driver name, contact details, assigned vehicle, and shift information.
• Driver behaviour events (overspeed, harsh braking, idle misuse).
• Safety scores and performance metrics.

Device & Technical Data
• IP address, browser type, operating system, and screen resolution.
• Session activity logs, page views, and feature usage analytics.
• Cookies and similar tracking technologies (see Section 8).

Payment Data
• Billing name, address, and subscription tier.
• Payment processing is handled by authorized third-party payment gateways. We do not store full card details on our servers.`,
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: `We use the information we collect for the following purposes:

Service Delivery
• To provide, maintain, and improve the InteliFleet platform.
• To process vehicle telemetry and generate reports, alerts, and analytics.
• To authenticate users and manage account access.

Communications
• To send transactional emails such as alerts, invoices, and account notices.
• To notify you of product updates, new features, and policy changes.
• To respond to support inquiries within our SLA commitments.

Legal & Compliance
• To comply with applicable laws, regulations, and legal processes.
• To enforce our Terms and Conditions and resolve disputes.
• To detect, prevent, and respond to fraud or security incidents.

Aggregated Analytics
• To analyze anonymized and aggregated usage patterns for product improvement.
• We will never use aggregated analytics to identify individual users.`,
  },
  {
    id: "legal-basis",
    title: "4. Legal Basis for Processing",
    content: `Where applicable data protection laws require a lawful basis for processing personal data, we rely on the following:

• Contract Performance: Processing necessary to deliver the Service you have subscribed to.
• Legitimate Interests: For security monitoring, abuse detection, and platform improvement (balanced against your privacy rights).
• Legal Obligation: Where processing is required to comply with applicable laws or regulations.
• Consent: For non-essential cookies, marketing communications, and optional analytics features.

You may withdraw consent at any time where we rely on consent as the legal basis, without affecting the lawfulness of prior processing.`,
  },
  {
    id: "data-sharing",
    title: "5. Data Sharing & Disclosure",
    content: `We do not sell your personal data. We may share your information only in the following circumstances:

Service Providers
We engage trusted third-party vendors to operate the Service, including cloud hosting (AWS/GCP), mapping services (Google Maps), SMS/WhatsApp providers (Twilio), and payment processors (Stripe). These parties access data solely to perform services on our behalf and are contractually bound to protect your data.

Legal Requirements
We may disclose information if required by law, court order, or governmental authority, or to protect the rights, property, or safety of InteliFleet, our users, or the public.

Business Transfers
In the event of a merger, acquisition, or asset sale, your data may be transferred to the acquiring entity. We will notify you before such transfer and inform you of any changes to this Privacy Policy.

With Your Consent
We may share your information with third parties when you have given explicit consent for us to do so.`,
  },
  {
    id: "retention",
    title: "6. Data Retention",
    content: `We retain your data only as long as necessary to fulfill the purposes described in this Policy, or as required by applicable law.

Retention Periods
• Account data: Retained for the duration of the subscription and 30 days post-termination.
• Telemetry & GPS logs: Configurable per account (default: 12 months detailed, 5 years summary).
• Driver event logs: 2 years from the date of the event.
• Payment records: 7 years for accounting and tax compliance.
• System logs: 90 days.

Upon account deletion or subscription termination, you may request export of your Customer Data within the 30-day retention window. After this period, data is permanently and securely deleted.`,
  },
  {
    id: "security",
    title: "7. Data Security",
    content: `We implement industry-standard technical and organizational security measures to protect your data:

• Data encryption at rest (AES-256) and in transit (TLS 1.3).
• Strict role-based access control (RBAC) for all internal systems.
• Regular penetration testing and security audits by third-party firms.
• Multi-factor authentication (MFA) available for all user accounts.
• Comprehensive audit logs of all data access and administrative actions.
• Incident response protocols with notification within 72 hours of discovering a breach.

While we take security seriously, no method of transmission or storage is 100% secure. We encourage users to use strong passwords and enable MFA.`,
  },
  {
    id: "cookies",
    title: "8. Cookies & Tracking",
    content: `We use cookies and similar tracking technologies to enhance your experience on the InteliFleet platform.

Types of Cookies
• Essential Cookies: Required for login sessions and core functionality. Cannot be disabled.
• Analytics Cookies: Help us understand how users interact with the platform (e.g., page views, feature usage). You may opt out.
• Preference Cookies: Remember your display and language preferences.

We do not use advertising or third-party tracking cookies for marketing purposes without your explicit consent.

You can manage cookie preferences through your browser settings. Disabling essential cookies may affect the functionality of the Service.`,
  },
  {
    id: "rights",
    title: "9. Your Privacy Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:

• Right to Access: Request a copy of the personal data we hold about you.
• Right to Rectification: Request correction of inaccurate or incomplete data.
• Right to Erasure: Request deletion of your personal data ("right to be forgotten") subject to legal retention obligations.
• Right to Restriction: Request that we limit processing of your data in certain circumstances.
• Right to Portability: Receive your data in a machine-readable format for transfer to another provider.
• Right to Object: Object to processing based on legitimate interests or for direct marketing.
• Right to Withdraw Consent: Withdraw consent at any time where processing is consent-based.

To exercise any of these rights, please contact us at privacy@intelifleet.com. We will respond within 30 days and may require identity verification before fulfilling requests.`,
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    content: `The InteliFleet Service is intended for business use by adults aged 18 and above. We do not knowingly collect personal data from individuals under 18 years of age.

If we discover that we have inadvertently collected data from a minor, we will promptly delete it. If you believe we have collected data from a child under 18, please contact us immediately at privacy@intelifleet.com.`,
  },
  {
    id: "international",
    title: "11. International Data Transfers",
    content: `InteliFleet is based in India and primarily processes data on servers located in India. Where data is transferred to service providers outside India (e.g., global cloud infrastructure), we ensure appropriate safeguards are in place, including:

• Standard Contractual Clauses (SCCs) or equivalent mechanisms.
• Transfers only to countries with adequate data protection standards.
• Contractual obligations on third-party processors to protect your data.

By using the Service, you acknowledge and consent to the transfer of your data as described in this section.`,
  },
  {
    id: "changes",
    title: "12. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.

When we make material changes, we will:
• Update the "Last Updated" date at the top of this page.
• Send an email notification to registered account holders.
• Display a prominent notice within the InteliFleet dashboard.

Your continued use of the Service after the effective date of the updated Policy constitutes your acceptance of the changes. We encourage you to review this Policy periodically.`,
  },
  {
    id: "contact-us",
    title: "13. Contact Us",
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Privacy Team:

Email: privacy@intelifleet.com
Phone: +91 9777303064
Address: InteliFleet Technologies, Bhubaneswar, Odisha, India — 751001

Data Protection Officer (DPO): dpo@intelifleet.com

We are committed to resolving privacy concerns promptly and transparently. All requests will receive a response within 30 calendar days.`,
  },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="pt-10 pb-12 border-b">
        <Container>
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground md:text-lg leading-relaxed"
            >
              We take your privacy seriously. This policy explains exactly what
              data we collect, how we use it, and the rights you have over your
              information.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center gap-6 mt-6 text-sm text-muted-foreground"
            >
              <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium">
                Last updated: {LAST_UPDATED}
              </span>
              <span>{sections.length} sections</span>
              <span className="flex items-center gap-1.5">
                <Shield className="size-3.5 text-green-500" />
                <span className="text-green-500 font-medium text-xs">
                  GDPR & IT Act compliant
                </span>
              </span>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="py-12 pb-24">
        <Container className="flex gap-12">
          {/* Sticky sidebar TOC */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-30">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Contents
              </p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setActiveSection(s.id)}
                    className={`block text-sm py-1.5 px-3 rounded-lg transition-all duration-200 leading-snug ${
                      activeSection === s.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-12">
              {sections.map((s, i) => (
                <motion.section
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="scroll-mt-28"
                >
                  <h2 className="text-xl font-bold mb-4 pb-3 border-b">
                    {s.title}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed text-[15px] space-y-3 whitespace-pre-line">
                    {s.content}
                  </div>
                </motion.section>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t text-sm text-muted-foreground">
              <p>
                This Privacy Policy was last updated on{" "}
                <span className="font-medium text-foreground">
                  {LAST_UPDATED}
                </span>
                . For privacy-related inquiries, contact us at{" "}
                <a
                  href="mailto:privacy@intelifleet.com"
                  className="text-primary hover:underline"
                >
                  privacy@intelifleet.com
                </a>
                .
              </p>
            </div>
          </main>
        </Container>
      </section>
    </div>
  );
}
