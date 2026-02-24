import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Droplets, Shield, Users, Wrench, BarChart3, ChevronRight, Cloud, Server, Lock, Fuel, Bell, Route, Clock, MapPinned } from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('fuel');

  const pillars = [
    {
      icon: MapPin,
      title: 'Universal by design',
      description: 'Works with any vehicle, any sensor, any protocol. One platform for your entire fleet.',
    },
    {
      icon: Droplets,
      title: 'Sensor-first intelligence',
      description: 'Go beyond GPS. Fuel sensors, PTO monitoring, driver behavior — all in real-time.',
    },
    {
      icon: Shield,
      title: 'Built for reliability',
      description: '99.9% uptime, offline buffering, enterprise-grade security. Trust that scales.',
    },
  ];

  const products = [
    {
      icon: MapPin,
      title: 'Live Tracking',
      description: 'Real-time GPS with route playback, geofencing, and speed monitoring.',
      path: '/product/live-tracking',
    },
    {
      icon: Fuel,
      title: 'Fuel Intelligence',
      description: 'Detect theft, track efficiency, and monitor refuels with precision sensors.',
      path: '/product/fuel-intelligence',
    },
    {
      icon: Droplets,
      title: 'Sweeping Intelligence',
      description: 'Verify cleaning activity with PTO sensors and coverage analytics.',
      path: '/product/sweeping-intelligence',
    },
    {
      icon: Users,
      title: 'Driver Intelligence',
      description: 'Score driver behavior, reduce risk, and improve efficiency.',
      path: '/product/driver-intelligence',
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Schedule services, track logs, and prevent breakdowns proactively.',
      path: '/product/maintenance',
    },
    {
      icon: Bell,
      title: 'Security & Alerts',
      description: 'Unauthorized ignition, off-hours alerts, and geo-locking.',
      path: '/product/security-alerts',
    },
    {
      icon: BarChart3,
      title: 'Reports & Analytics',
      description: 'MIS reports, utilization metrics, and custom dashboards.',
      path: '/product/reports-analytics',
    },
  ];

  const showcaseTabs = [
    { id: 'fuel', label: 'Fuel Theft Detection', icon: Fuel },
    { id: 'route', label: 'Route Playback', icon: Route },
    { id: 'sweeping', label: 'Sweeping Verification', icon: Droplets },
    { id: 'idle', label: 'Idle Misuse', icon: Clock },
    { id: 'geofence', label: 'Geofencing', icon: MapPinned },
    { id: 'score', label: 'Driver Score', icon: Users },
  ];

  const showcaseContent = {
    fuel: {
      title: 'Catch fuel theft in real-time',
      description: 'Our sensors detect sudden drops in fuel level and alert you instantly. Know exactly when, where, and how much fuel was stolen.',
    },
    route: {
      title: 'Replay any journey',
      description: 'Review historical routes with speed overlays, stoppages, and geofence crossings. Perfect for dispute resolution and optimization.',
    },
    sweeping: {
      title: 'Verify cleaning happened',
      description: 'Don\'t just track movement — confirm sweeping activity with PTO sensor data and coverage maps.',
    },
    idle: {
      title: 'Eliminate idle waste',
      description: 'Detect excessive idling, set thresholds, and get alerts. Save fuel and reduce engine wear.',
    },
    geofence: {
      title: 'Define virtual boundaries',
      description: 'Create geofences for depots, customer sites, or restricted zones. Get instant entry/exit alerts.',
    },
    score: {
      title: 'Score driver behavior',
      description: 'Track overspeeding, harsh braking, and acceleration. Build driver scorecards and incentivize safety.',
    },
  };

  const deploymentOptions = [
    {
      icon: Cloud,
      title: 'Cloud',
      description: 'Fully managed SaaS. Scale instantly with zero infrastructure overhead.',
    },
    {
      icon: Server,
      title: 'Private Cloud / VPC',
      description: 'Dedicated resources in your preferred region. Full isolation, managed by us.',
    },
    {
      icon: Lock,
      title: 'On-Premise',
      description: 'Air-gapped deployment for maximum security. You control everything.',
    },
  ];

  const testimonials = [
    {
      quote: 'InteliFleet helped us reduce fuel costs by 23% in the first quarter. The theft detection alone paid for the system.',
      author: 'Rajesh Kumar',
      role: 'Fleet Manager',
      company: 'NorthStar Logistics',
    },
    {
      quote: 'Finally, a solution that verifies our sweeping operations. Our municipal clients love the proof-of-work reports.',
      author: 'Priya Sharma',
      role: 'Operations Director',
      company: 'CleanCity Municipal Services',
    },
  ];

  const blogPosts = [
    {
      title: 'Introducing InteliFleet Fuel Intelligence',
      category: 'Product',
      date: 'Feb 15, 2025',
    },
    {
      title: 'How to detect fuel theft with sensors',
      category: 'Guide',
      date: 'Feb 10, 2025',
    },
    {
      title: 'Sweeping analytics: proving cleaning happened',
      category: 'Case Study',
      date: 'Feb 5, 2025',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-navy dark:text-white leading-tight mb-6">
                Real-time Fleet Intelligence for every vehicle.
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                GPS tracking, fuel intelligence, activity verification (including sweeping/cleaning), alerts, and analytics — powered by telemetry + sensors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/company/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-navy dark:bg-primary text-white dark:text-navy font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/product"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy dark:border-primary text-navy dark:text-primary font-medium rounded-lg hover:bg-navy dark:hover:bg-primary hover:text-white dark:hover:text-navy transition-colors"
                >
                  Explore the Product
                </Link>
              </div>
            </div>

            {/* Right Visual - Mock Dashboard */}
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-sm text-gray-400 dark:text-gray-500">Live Dashboard</span>
                </div>
                
                {/* Mock Map */}
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">24 vehicles tracked</p>
                  </div>
                </div>

                {/* Mock Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/30 rounded-lg p-3">
                    <p className="text-xs text-red-600 dark:text-red-400 font-medium">Fuel Alert</p>
                    <p className="text-sm font-semibold text-navy dark:text-white">-15L detected</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-3">
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium">Cleaning ON</p>
                    <p className="text-sm font-semibold text-navy dark:text-white">3 vehicles</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Uptime</p>
                    <p className="text-sm font-semibold text-navy dark:text-white">99.7%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-8">
            Trusted by fleet operators across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {['NorthStar Logistics', 'CleanCity Services', 'Metro Transports', 'AgriFleet India', 'Urban Movers', 'BuildRight Construction'].map((name) => (
              <span key={name} className="text-lg font-semibold text-gray-400 dark:text-gray-500">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 lg:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <pillar.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-navy dark:text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modules Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy dark:text-white mb-4">
              Everything you need to manage your fleet
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Modular intelligence that grows with your operations. Start with GPS tracking and add sensors as you need them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.title}
                to={product.path}
                className="group bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-100 dark:border-gray-600 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {product.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Showcase */}
      <section className="py-20 lg:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy dark:text-white mb-4">
              See it in action
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {showcaseTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-navy dark:bg-primary text-white dark:text-navy'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <tab.icon className="mr-2 h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-navy dark:text-white mb-4">
                  {showcaseContent[activeTab].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {showcaseContent[activeTab].description}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  {React.createElement(showcaseTabs.find(t => t.id === activeTab)?.icon || MapPin, {
                    className: "h-16 w-16 text-primary mx-auto mb-4"
                  })}
                  <p className="text-gray-400 dark:text-gray-500">Interactive demo visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-navy dark:bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Built to run anywhere
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the deployment that fits your security and compliance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deploymentOptions.map((option) => (
              <div key={option.title} className="bg-white/10 backdrop-blur rounded-xl p-6">
                <option.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-300">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Apps */}
      <section className="py-20 lg:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy dark:text-white mb-6">
                Fleet management in your pocket
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Track vehicles, receive alerts, and manage your fleet on the go with our mobile apps.
              </p>
              <ul className="space-y-4 mb-8">
                {['Live tracking on map', 'Instant push alerts', 'Trip history & details', 'Driver tools & checklists'].map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/apps/ios"
                  className="inline-flex items-center justify-center px-6 py-3 bg-navy dark:bg-primary text-white dark:text-navy font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Download for iOS
                </Link>
                <Link
                  to="/apps/android"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy dark:border-primary text-navy dark:text-primary font-medium rounded-lg hover:bg-navy dark:hover:bg-primary hover:text-white dark:hover:text-navy transition-colors"
                >
                  Download for Android
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-80 bg-navy dark:bg-primary rounded-3xl mx-auto flex items-center justify-center">
                  <span className="text-white dark:text-navy text-sm">Mobile App Mockup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy dark:text-white mb-4">
              Enterprise-grade security, built in
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Encryption', desc: 'In transit & at rest' },
              { title: 'RBAC', desc: 'Role-based access control' },
              { title: 'Audit Logs', desc: 'Complete activity trail' },
              { title: 'Data Retention', desc: 'Configurable policies' },
            ].map((item) => (
              <div key={item.title} className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center border border-gray-100 dark:border-gray-600">
                <Lock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-navy dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-100 dark:border-gray-700">
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  "{t.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-navy dark:text-white">{t.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/company/case-studies" className="inline-flex items-center text-primary font-medium hover:underline">
              Read case studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-navy dark:text-white">Latest from the blog</h2>
            <Link to="/company/about" className="text-primary font-medium hover:underline">
              View all posts →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.title} className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-600">
                <div className="h-48 bg-gray-200 dark:bg-gray-600" />
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-navy dark:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-6">
            Bring certainty to fleet operations.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join hundreds of fleet operators who trust InteliFleet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/company/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-navy dark:bg-primary text-white dark:text-navy font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Talk to Sales
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy dark:border-primary text-navy dark:text-primary font-medium rounded-lg hover:bg-navy dark:hover:bg-primary hover:text-white dark:hover:text-navy transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;