import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bell, Shield, Lock, Clock, AlertTriangle } from 'lucide-react';

const SecurityAlerts = () => {
  const features = [
    {
      icon: Shield,
      title: 'Unauthorized Ignition',
      description: 'Instant alerts when engine starts outside authorized hours.',
    },
    {
      icon: Clock,
      title: 'Off-hours Movement',
      description: 'Get notified if vehicle moves during restricted times.',
    },
    {
      icon: Lock,
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
    { name: 'Unauthorized Ignition', channels: 'Push, SMS, Email', response: 'Immediate' },
    { name: 'Off-hours Movement', channels: 'Push, Email', response: '< 30 seconds' },
    { name: 'Geofence Breach', channels: 'Push, SMS, Email', response: 'Immediate' },
    { name: 'Speed Violation', channels: 'Push, Email', response: '< 1 minute' },
    { name: 'Panic Alert', channels: 'Push, SMS, Email, Call', response: 'Immediate' },
    { name: 'Towing Detection', channels: 'Push, SMS, Email', response: '< 2 minutes' },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/product" className="inline-flex items-center text-gray-500 hover:text-navy mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6">
              <Bell className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Security & Alerts
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              24/7 security monitoring with intelligent alerts. Protect your fleet from theft, misuse, and unauthorized access.
            </p>
            <Link
              to="/company/contact"
              className="inline-flex items-center px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
            <Bell className="h-24 w-24 text-gray-300" />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-1">{f.title}</h3>
                  <p className="text-gray-600">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-navy mb-8">Alert Types & Channels</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-navy font-medium">Alert Type</th>
                  <th className="text-left py-3 text-navy font-medium">Channels</th>
                  <th className="text-left py-3 text-navy font-medium">Response Time</th>
                </tr>
              </thead>
              <tbody>
                {alertTypes.map((a) => (
                  <tr key={a.name} className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">{a.name}</td>
                    <td className="py-3 text-gray-600">{a.channels}</td>
                    <td className="py-3 text-primary font-medium">{a.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAlerts;