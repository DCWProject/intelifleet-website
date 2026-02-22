import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Hammer, Fuel, Shield, Clock, CheckCircle } from 'lucide-react';

const ConstructionIndustrial = () => {
  const painPoints = [
    'Equipment theft and unauthorized usage',
    'High fuel consumption without tracking',
    'Poor maintenance leading to breakdowns',
    'No visibility on equipment location',
  ];

  const solutions = [
    {
      icon: Shield,
      title: 'Theft Protection',
      description: 'Geofencing and unauthorized use alerts for expensive equipment.',
    },
    {
      icon: Fuel,
      title: 'Fuel Monitoring',
      description: 'Track fuel usage and detect theft on heavy machinery.',
    },
    {
      icon: Clock,
      title: 'Engine Hour Tracking',
      description: 'Monitor usage for maintenance scheduling and billing.',
    },
    {
      icon: Hammer,
      title: 'Utilization Reports',
      description: 'Analyze equipment usage across job sites.',
    },
  ];

  const kpis = [
    { metric: 'Theft Prevention', value: '99%' },
    { metric: 'Fuel Savings', value: '20%' },
    { metric: 'Uptime Improvement', value: '+30%' },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/solutions" className="inline-flex items-center text-gray-500 hover:text-navy mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Solutions
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-2xl mb-6">
              <Hammer className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Construction & Industrial
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Protect heavy equipment, monitor fuel usage, and maximize uptime for construction and industrial fleets.
            </p>
            <Link
              to="/company/contact"
              className="inline-flex items-center px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
            <Hammer className="h-24 w-24 text-gray-300" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-red-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-navy mb-6">Pain Points</h2>
            <ul className="space-y-4">
              {painPoints.map((p) => (
                <li key={p} className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2" />
                  <span className="text-gray-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-navy mb-6">How InteliFleet Helps</h2>
            <div className="space-y-4">
              {solutions.map((s) => (
                <div key={s.title} className="flex items-start">
                  <s.icon className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium text-navy">{s.title}:</span>{' '}
                    <span className="text-gray-600">{s.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-navy mb-8">Key Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {kpis.map((k) => (
              <div key={k.metric} className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">{k.value}</p>
                <p className="text-gray-600">{k.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionIndustrial;