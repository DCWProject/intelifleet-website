import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplets, Map, CheckCircle, AlertCircle, BarChart3, Code } from 'lucide-react';

const SweepingIntelligence = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Cleaning Verification',
      description: 'Verify that sweeping/cleaning actually happened with PTO sensor data.',
    },
    {
      icon: Map,
      title: 'Coverage Maps',
      description: 'Visualize cleaned areas and identify missed zones.',
    },
    {
      icon: AlertCircle,
      title: 'Missed Zone Alerts',
      description: 'Get notified when scheduled areas were not cleaned.',
    },
    {
      icon: BarChart3,
      title: 'Efficiency Scoring',
      description: 'Score cleaning efficiency based on time, area, and quality.',
    },
  ];

  const dataFields = [
    { field: 'cleaning_state', type: 'boolean', description: 'Cleaning active status' },
    { field: 'pto_state', type: 'boolean', description: 'PTO engaged/disengaged' },
    { field: 'broom_state', type: 'boolean', description: 'Broom rotation active' },
    { field: 'gps_segment_id', type: 'string', description: 'Road segment identifier' },
    { field: 'area_cleaned_m2', type: 'float', description: 'Area cleaned in sq meters' },
    { field: 'cleaning_duration', type: 'int', description: 'Duration in seconds' },
  ];

  const events = [
    { event: 'cleaning.started', description: 'Sweeping activity began' },
    { event: 'cleaning.stopped', description: 'Sweeping activity ended' },
    { event: 'coverage.missed_zone', description: 'Scheduled area not cleaned' },
    { event: 'coverage.completed', description: 'Scheduled route completed' },
    { event: 'pto.engaged', description: 'PTO system activated' },
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-50 rounded-2xl mb-6">
              <Droplets className="h-8 w-8 text-cyan-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Sweeping Intelligence
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Don't just track movement. Verify cleaning happened.
            </p>
            <p className="text-gray-600 mb-8">
              Specialized monitoring for municipal sweeping, road cleaning, and industrial cleaning vehicles. Prove work completion with sensor data.
            </p>
            <Link
              to="/company/contact"
              className="inline-flex items-center px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
            <Droplets className="h-24 w-24 text-gray-300" />
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

export default SweepingIntelligence;