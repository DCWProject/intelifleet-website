import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Fuel, Droplets, TrendingUp, AlertTriangle, BarChart3, Code } from 'lucide-react';

const FuelIntelligence = () => {
  const features = [
    {
      icon: Droplets,
      title: 'Fuel Level Monitoring',
      description: 'Real-time fuel level tracking with ultrasonic or capacitive sensors.',
    },
    {
      icon: AlertTriangle,
      title: 'Theft Detection',
      description: 'Instant alerts for sudden fuel drops that indicate theft or leakage.',
    },
    {
      icon: TrendingUp,
      title: 'Refuel Detection',
      description: 'Automatic detection and logging of all refueling events.',
    },
    {
      icon: BarChart3,
      title: 'Efficiency Reports',
      description: 'Track mileage, km/l, and benchmark across your fleet.',
    },
  ];

  const dataFields = [
    { field: 'fuel_liters', type: 'float', description: 'Current fuel level in liters' },
    { field: 'fuel_raw', type: 'int', description: 'Raw sensor reading' },
    { field: 'sensor_type', type: 'string', description: 'ultrasonic | capacitive' },
    { field: 'calibration_profile', type: 'string', description: 'Tank calibration ID' },
    { field: 'mileage', type: 'float', description: 'Distance since last refuel' },
    { field: 'efficiency', type: 'float', description: 'km per liter' },
  ];

  const events = [
    { event: 'fuel.refuel', description: 'Fuel added to tank' },
    { event: 'fuel.drop_suspected', description: 'Sudden fuel level decrease' },
    { event: 'fuel.theft_alert', description: 'Theft threshold crossed' },
    { event: 'fuel.leak_suspected', description: 'Gradual fuel loss detected' },
    { event: 'fuel.low', description: 'Fuel below threshold' },
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-2xl mb-6">
              <Fuel className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Fuel Intelligence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Advanced fuel monitoring with theft detection, refuel alerts, and efficiency analytics. Stop losing fuel to theft and inefficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/company/contact"
                className="inline-flex items-center px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-6 py-3 border-2 border-navy text-navy font-medium rounded-lg hover:bg-navy hover:text-white transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
            <Fuel className="h-24 w-24 text-gray-300" />
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

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-xl font-semibold text-navy">Data Fields</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-navy font-medium">Field</th>
                    <th className="text-left py-2 text-navy font-medium">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {dataFields.map((f) => (
                    <tr key={f.field} className="border-b border-gray-100">
                      <td className="py-2 font-mono text-primary">{f.field}</td>
                      <td className="py-2 text-gray-600">{f.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-xl font-semibold text-navy">Event Types</h3>
            </div>
            <div className="space-y-3">
              {events.map((e) => (
                <div key={e.event} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-mono text-sm text-primary">{e.event}</span>
                  <span className="text-sm text-gray-600">{e.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelIntelligence;