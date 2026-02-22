import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import LiveTracking from './pages/products/LiveTracking';
import FuelIntelligence from './pages/products/FuelIntelligence';
import SweepingIntelligence from './pages/products/SweepingIntelligence';
import DriverIntelligence from './pages/products/DriverIntelligence';
import Maintenance from './pages/products/Maintenance';
import SecurityAlerts from './pages/products/SecurityAlerts';
import ReportsAnalytics from './pages/products/ReportsAnalytics';
import Pricing from './pages/Pricing';
import Apps from './pages/Apps';
import IOSApp from './pages/apps/IOSApp';
import AndroidApp from './pages/apps/AndroidApp';
import Solutions from './pages/Solutions';
import IndividualOwners from './pages/solutions/IndividualOwners';
import LogisticsTransporters from './pages/solutions/LogisticsTransporters';
import BusOperators from './pages/solutions/BusOperators';
import MunicipalSweeping from './pages/solutions/MunicipalSweeping';
import ConstructionIndustrial from './pages/solutions/ConstructionIndustrial';
import About from './pages/company/About';
import Customers from './pages/company/Customers';
import CaseStudies from './pages/company/CaseStudies';
import Careers from './pages/company/Careers';
import Contact from './pages/company/Contact';
import Docs from './pages/docs/Docs';
import GettingStarted from './pages/docs/GettingStarted';
import ApiReference from './pages/docs/ApiReference';
import DeviceIntegration from './pages/docs/DeviceIntegration';
import Support from './pages/support/Support';
import FAQ from './pages/support/FAQ';
import Terms from './pages/legal/Terms';
import Privacy from './pages/legal/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/live-tracking" element={<LiveTracking />} />
            <Route path="/product/fuel-intelligence" element={<FuelIntelligence />} />
            <Route path="/product/sweeping-intelligence" element={<SweepingIntelligence />} />
            <Route path="/product/driver-intelligence" element={<DriverIntelligence />} />
            <Route path="/product/maintenance" element={<Maintenance />} />
            <Route path="/product/security-alerts" element={<SecurityAlerts />} />
            <Route path="/product/reports-analytics" element={<ReportsAnalytics />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/apps/ios" element={<IOSApp />} />
            <Route path="/apps/android" element={<AndroidApp />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/individual-owners" element={<IndividualOwners />} />
            <Route path="/solutions/logistics-transporters" element={<LogisticsTransporters />} />
            <Route path="/solutions/bus-operators" element={<BusOperators />} />
            <Route path="/solutions/municipal-sweeping" element={<MunicipalSweeping />} />
            <Route path="/solutions/construction-industrial" element={<ConstructionIndustrial />} />
            <Route path="/company/about" element={<About />} />
            <Route path="/company/customers" element={<Customers />} />
            <Route path="/company/case-studies" element={<CaseStudies />} />
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/company/contact" element={<Contact />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/getting-started" element={<GettingStarted />} />
            <Route path="/docs/api-reference" element={<ApiReference />} />
            <Route path="/docs/device-integration" element={<DeviceIntegration />} />
            <Route path="/support" element={<Support />} />
            <Route path="/support/faq" element={<FAQ />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/legal/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;