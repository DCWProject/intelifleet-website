import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wrench, Calendar, ClipboardList, Bell, TrendingDown } from 'lucide-react';

const Maintenance = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Service Scheduling',
      description: 'Schedule maintenance based on mileage, engine hours, or calendar time.',
    },
    {
      icon: Bell,
      title: 'Reminder Alerts',
      description: 'Get notified before maintenance is due. Never miss a service.',
    },
    {
      icon: ClipboardList,
      title: 'Service Logs',
      description: 'Complete history of all maintenance activities and costs.',
    },
    {
      icon: TrendingDown,
      title: 'Cost Tracking',
      description: 'Track maintenance expenses and identify cost trends.',
    },
  ];

  const scheduleTypes = [
    { type: 'Mileage-based', example: 'Every 5,000 km', icon: '🚗' },
    { type: 'Engine Hours', example: 'Every 250 hours', icon: '⏱️' },
    { type: 'Time-based', example: 'Every 3 months', icon: '📅' },
    { type: 'Custom', example: 'Based on your rules', icon: '⚙️' },
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-2xl mb-6">
              <Wrench className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Maintenance
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Proactive maintenance scheduling and tracking. Reduce breakdowns, extend vehicle life, and control costs.
            </p>
            <Link
              to="/company/contact"
              className="inline-flex items-center px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
            <Wrench className="h-24 w-24 text-gray-300" />
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
          <h2 className="text-2xl font-bold text-navy mb-8">Schedule Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scheduleTypes.map((s) => (
              <div key={s.type} className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-navy mb-1">{s.type}</h3>
                <p className="text-sm text-gray-600">{s.example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;