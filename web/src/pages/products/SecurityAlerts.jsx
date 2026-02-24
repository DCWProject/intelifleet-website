import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Bell, Lock, AlertTriangle, Eye, MapPin, Clock } from 'lucide-react';

const SecurityAlerts = () => {
  const features = [
    {
      icon: Lock,
      title: 'Unauthorized Ignition',
      description: 'Get instant alerts if vehicle is started without authorization.',
    },
    {
      icon: Clock,
      title: 'Off-hours Alerts',
      description: 'Monitor and alert on vehicle use outside permitted hours.',
    },
    {
      icon: MapPin,
      title: 'Geo-locking',
      description: 'Prevent engine start outside designated areas.',
    },
    {
      icon: AlertTriangle,
      title: 'Panic Button',
      description: 'Emergency alert system for drivers in distress.',
    },
  ];

  const alertTypes = [
    { name: 'Unauthorized Ignition', desc: 'Engine started without permission', severity: 'High' },
    { name: 'Off-hours Movement', desc: 'Vehicle moved outside scheduled hours', severity: 'Medium' },
    { name: 'Geofence Breach', desc: 'Vehicle entered restricted zone', severity: 'High' },
    { name: 'Speed Violation', desc: 'Speed exceeded configured limit', severity: 'Medium' },
    { name: 'Panic Alert', desc: 'Driver triggered emergency button', severity: 'Critical' },
    { name: 'Device Tampering', desc: 'GPS device disconnected or tampered', severity: 'High' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Security & Alerts
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-6">
                Security & Alerts
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                24/7 security monitoring with intelligent alerts. Protect your fleet from theft, unauthorized use, and safety violations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/company/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-navy dark:bg-primary text-white dark:text-navy font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-navy dark:text-white">Recent Alerts</h3>
                <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs rounded-full">3 New</span>
              </div>
              <div className="space-y-4">
                {[
                  { type: 'Unauthorized Ignition', vehicle: 'MH-12-AB-1234', time: '2 min ago', severity: 'high' },
                  { type: 'Speed Violation', vehicle: 'MH-12-CD-5678', time: '15 min ago', severity: 'medium' },
                  { type: 'Off-hours Movement', vehicle: 'MH-12-EF-9012', time: '1 hr ago', severity: 'medium' },
                ].map((alert, i) => (
                  <div key={i} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className={`w-3 h-3 rounded-full mr-4 ${
                      alert.severity === 'high' ? 'bg-red-500' : 
                      alert.severity === 'critical' ? 'bg-red-600' : 'bg-yellow-500'
                    }`} />
                    <div className="flex-1">
                      <p className="font-medium text-navy dark:text-white text-sm">{alert.type}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{alert.vehicle}</p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{alert.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Protect your fleet 24/7</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alert Types */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Alert types</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alertTypes.map((alert) => (
              <div key={alert.name} className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-100 dark:border-gray-600">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-navy dark:text-white">{alert.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    alert.severity === 'Critical' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' :
                    alert.severity === 'High' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400' :
                    'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                  }`}>
                    {alert.severity}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{alert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notification Channels */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy dark:text-white mb-6">Multi-channel notifications</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Receive alerts through multiple channels so you never miss critical events.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Bell, label: 'Push Notifications', desc: 'Instant alerts on mobile app' },
                  { icon: Eye, label: 'Email Alerts', desc: 'Detailed reports in your inbox' },
                  { icon: Shield, label: 'SMS Alerts', desc: 'Critical alerts via text message' },
                  { icon: Lock, label: 'Webhook Integration', desc: 'Send alerts to your systems' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-navy dark:text-white">{item.label}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy dark:bg-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Security Statistics</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 mb-1">Theft Prevention Rate</p>
                  <p className="text-3xl font-bold text-primary">98.5%</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Avg. Alert Response Time</p>
                  <p className="text-3xl font-bold text-primary">{'< 30 sec'}</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Vehicles Protected</p>
                  <p className="text-3xl font-bold text-primary">50,000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy dark:bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Secure your fleet today</h2>
          <p className="text-lg text-gray-300 mb-8">
            Get comprehensive security monitoring for your entire fleet.
          </p>
          <Link
            to="/company/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-navy font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SecurityAlerts;