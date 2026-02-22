import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Fuel, Droplets, Users, Wrench, Bell, BarChart3, ChevronRight } from 'lucide-react';

const Product = () => {
  const modules = [
    {
      icon: MapPin,
      title: 'Live Tracking',
      description: 'Real-time GPS tracking with 10-second updates. Monitor location, speed, heading, and ignition status across your entire fleet.',
      features: ['Route playback', 'Geofencing', 'Speed alerts', 'Ignition monitoring'],
      path: '/product/live-tracking',
      color: 'bg-blue-50',
    },
    {
      icon: Fuel,
      title: 'Fuel Intelligence',
      description: 'Advanced fuel monitoring with ultrasonic sensors. Detect theft, track efficiency, and optimize costs.',
      features: ['Theft detection', 'Refuel alerts', 'Efficiency reports', 'Tank calibration'],
      path: '/product/fuel-intelligence',
      color: 'bg-green-50',
    },
    {
      icon: Droplets,
      title: 'Sweeping Intelligence',
      description: 'Specialized monitoring for sweeping and cleaning vehicles. Verify PTO activity and coverage areas.',
      features: ['PTO monitoring', 'Coverage maps', 'Cleaning verification', 'Missed zone alerts'],
      path: '/product/sweeping-intelligence',
      color: 'bg-cyan-50',
    },
    {
      icon: Users,
      title: 'Driver Intelligence',
      description: 'Comprehensive driver behavior analysis. Score performance, reduce risk, and improve safety.',
      features: ['Behavior scoring', 'Overspeed alerts', 'Harsh event detection', 'Driver leaderboard'],
      path: '/product/driver-intelligence',
      color: 'bg-purple-50',
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Proactive maintenance scheduling based on mileage, engine hours, or time intervals.',
      features: ['Service reminders', 'Maintenance logs', 'Parts tracking', 'Cost analysis'],
      path: '/product/maintenance',
      color: 'bg-orange-50',
    },
    {
      icon: Bell,
      title: 'Security & Alerts',
      description: '24/7 security monitoring with intelligent alerts for unauthorized access and unusual activity.',
      features: ['Unauthorized ignition', 'Off-hours alerts', 'Geo-locking', 'Panic button'],
      path: '/product/security-alerts',
      color: 'bg-red-50',
    },
    {
      icon: BarChart3,
      title: 'Reports & Analytics',
      description: 'Comprehensive reporting suite with customizable dashboards and exportable MIS reports.',
      features: ['MIS reports', 'Custom dashboards', 'Data exports', 'Scheduled reports'],
      path: '/product/reports-analytics',
      color: 'bg-indigo-50',
    },
  ];

  const integrations = [
    { name: 'GPS Devices', count: '50+ models' },
    { name: 'Fuel Sensors', count: 'Ultrasonic, Capacitive' },
    { name: 'PTO Sensors', count: 'Universal fit' },
    { name: 'Cameras', count: 'ADAS compatible' },
    { name: 'Temperature', count: 'Cold chain' },
    { name: 'Weight', count: 'Load monitoring' },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Fleet intelligence that just works
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to track, monitor, and optimize your fleet — in one unified platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/company/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy text-navy font-medium rounded-lg hover:bg-navy hover:text-white transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modules */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Seven powerful modules</h2>
            <p className="text-lg text-gray-600">
              Start with what you need. Add more as you grow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module) => (
              <Link
                key={module.title}
                to={module.path}
                className="group flex gap-6 p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className={`flex-shrink-0 w-16 h-16 ${module.color} rounded-xl flex items-center justify-center`}>
                  <module.icon className="h-8 w-8 text-navy" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {module.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {module.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </ul>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Device Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">
                Works with your hardware
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                InteliFleet integrates with 50+ GPS devices and sensors. Use your existing hardware or let us recommend the best fit.
              </p>
              <Link
                to="/docs/device-integration"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                View integration docs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {integrations.map((item) => (
                <div key={item.name} className="bg-white rounded-xl p-4 border border-gray-100">
                  <p className="font-semibold text-navy">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Built for scale</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-time Streaming',
                description: 'MQTT and HTTP ingestion with sub-second latency. WebSocket updates to your dashboard.',
              },
              {
                title: 'Offline Resilience',
                description: 'Devices buffer data when connectivity drops. Automatic sync when back online.',
              },
              {
                title: 'Multi-tenant',
                description: 'Manage multiple clients or branches with complete data isolation.',
              },
              {
                title: 'API First',
                description: 'RESTful API with comprehensive documentation. Build custom integrations.',
              },
              {
                title: 'Webhooks',
                description: 'Push events to your systems in real-time. Alert, trip, and fuel events supported.',
              },
              {
                title: 'White-label Ready',
                description: 'Customize branding, domains, and email templates for your clients.',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <h3 className="text-lg font-semibold text-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to see it in action?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Schedule a personalized demo with our team.
          </p>
          <Link
            to="/company/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-navy font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Book a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Product;