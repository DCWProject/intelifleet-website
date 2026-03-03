import AppLayout from '@/layout/main'
import Home from '@/pages/Home/main'
import Contact from '@/pages/Contact/main'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from '@/components/scroll-to-top'

// Product pages
import ProductOverview from '@/pages/Product/Overview'
import LiveTrackingPage from '@/pages/Product/LiveTracking'
import FuelIntelligencePage from '@/pages/Product/FuelIntelligence'
import SweepingIntelligencePage from '@/pages/Product/SweepingIntelligence'
import DriverIntelligencePage from '@/pages/Product/DriverIntelligence'
import MaintenancePage from '@/pages/Product/Maintenance'
import SecurityAlertsPage from '@/pages/Product/SecurityAlerts'
import ReportsAnalyticsPage from '@/pages/Product/ReportsAnalytics'

// Solutions pages
import IndividualOwnersPage from '@/pages/Solutions/IndividualOwners'
import LogisticsTransportersPage from '@/pages/Solutions/LogisticsTransporters'
import BusOperatorsPage from '@/pages/Solutions/BusOperators'
import MunicipalSweepingPage from '@/pages/Solutions/MunicipalSweeping'
import ConstructionIndustrialPage from '@/pages/Solutions/ConstructionIndustrial'

// Company pages
import AboutPage from '@/pages/Company/About'
import CustomersPage from '@/pages/Company/Customers'
import CaseStudiesPage from '@/pages/Company/CaseStudies'
import BlogPage from '@/pages/Company/Blog'
import CareersPage from '@/pages/Company/Careers'
import PartnersPage from '@/pages/Company/Partners'

// Legal pages
import TermsPage from '@/pages/Legal/Terms'
import PrivacyPolicyPage from '@/pages/Legal/PrivacyPolicy'

const Routing = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Core pages */}
        <Route path="/" element={<AppLayout title="Home"><Home /></AppLayout>} />

        {/* Product pages */}
        <Route path="/product" element={<AppLayout title="Product Overview"><ProductOverview /></AppLayout>} />
        <Route path="/product/live-tracking" element={<AppLayout title="Live Tracking"><LiveTrackingPage /></AppLayout>} />
        <Route path="/product/fuel-intelligence" element={<AppLayout title="Fuel Intelligence"><FuelIntelligencePage /></AppLayout>} />
        <Route path="/product/sweeping-intelligence" element={<AppLayout title="Sweeping Intelligence"><SweepingIntelligencePage /></AppLayout>} />
        <Route path="/product/driver-intelligence" element={<AppLayout title="Driver Intelligence"><DriverIntelligencePage /></AppLayout>} />
        <Route path="/product/maintenance" element={<AppLayout title="Maintenance"><MaintenancePage /></AppLayout>} />
        <Route path="/product/security-alerts" element={<AppLayout title="Security & Alerts"><SecurityAlertsPage /></AppLayout>} />
        <Route path="/product/reports-analytics" element={<AppLayout title="Reports & Analytics"><ReportsAnalyticsPage /></AppLayout>} />

        {/* Solutions pages */}
        <Route path="/solutions/individual-owners" element={<AppLayout title="Individual Owners"><IndividualOwnersPage /></AppLayout>} />
        <Route path="/solutions/logistics-transporters" element={<AppLayout title="Logistics & Transport"><LogisticsTransportersPage /></AppLayout>} />
        <Route path="/solutions/bus-operators" element={<AppLayout title="Bus Operators"><BusOperatorsPage /></AppLayout>} />
        <Route path="/solutions/municipal-sweeping" element={<AppLayout title="Municipal Sweeping"><MunicipalSweepingPage /></AppLayout>} />
        <Route path="/solutions/construction-industrial" element={<AppLayout title="Construction & Industrial"><ConstructionIndustrialPage /></AppLayout>} />

        {/* Company pages */}
        <Route path="/company/about" element={<AppLayout title="About"><AboutPage /></AppLayout>} />
        <Route path="/company/customers" element={<AppLayout title="Customers"><CustomersPage /></AppLayout>} />
        {/* <Route path="/company/case-studies" element={<AppLayout title="Case Studies"><CaseStudiesPage /></AppLayout>} />
        <Route path="/company/blog" element={<AppLayout title="Blog"><BlogPage /></AppLayout>} />
        <Route path="/company/careers" element={<AppLayout title="Careers"><CareersPage /></AppLayout>} /> */}
        <Route path="/company/partners" element={<AppLayout title="Partners"><PartnersPage /></AppLayout>} />
        <Route path="/company/contact" element={<AppLayout title="Contact"><Contact /></AppLayout>} />

        {/* Legal pages */}
        <Route path="/legal/terms" element={<AppLayout title="Terms and Conditions"><TermsPage /></AppLayout>} />
        <Route path="/legal/privacy" element={<AppLayout title="Privacy Policy"><PrivacyPolicyPage /></AppLayout>} />
      </Routes>
    </Router>
  )
}

export default Routing