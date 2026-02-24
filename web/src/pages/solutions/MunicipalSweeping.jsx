import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplets, Map, CheckCircle, AlertCircle, FileText } from 'lucide-react';

const MunicipalSweeping = () => {
  const painPoints = [
    'No proof that cleaning actually happened',
    'Missed zones go undetected',
    'Citizen complaints with no response data',
    'Manual reporting is time-consuming',
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: 'Cleaning Verification',
      description: 'PTO sensors prove sweeping activity occurred.',
    },
    {
      icon: Map,
      title: 'Coverage Maps',
      description: 'Visual proof of cleaned areas for stakeholders.',
    },
    {
      icon: AlertCircle,
      title: 'Missed Zone Alerts',
      description: 'Automatic alerts when scheduled areas are skipped.',
    },
    {
      icon: FileText,
      title: 'Automated Reports',
      description: 'Daily, weekly, monthly cleaning reports generated automatically.',
    },
  ];

  const kpis = [
    { metric: 'Coverage Verified', value: '100%' },
    { metric: 'Missed Zones', value: '-85%' },
    { metric: 'Complaint Response', value: '< 2 hrs' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/solutions" className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-navy dark:hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Solutions
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-50 dark:bg-cyan-900/30 rounded-2xl mb-6">
              <Droplets className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-6">
              Municipal Sweeping
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Don't just track movement. Verify cleaning happened.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Specialized solution for municipal corporations and cleaning contractors to prove work completion and respond to citizen complaints with data.
            </p>
            <Link
              to="/company/contact"
              className="inline-flex items-center px-6 py-3 bg-navy dark:bg-primary text-white dark:text-navy font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-80 flex items-center justify-center">
            <Droplets className="h-24 w-24 text-gray-300 dark:text-gray-600" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-navy dark:text-white mb-6">Pain Points</h2>
            <ul className="space-y-4">
              {painPoints.map((p) => (
                <li key={p} className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2" />
                  <span className="text-gray-700 dark:text-gray-300">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-navy dark:text-white mb-6">How InteliFleet Helps</h2>
            <div className="space-y-4">
              {solutions.map((s) => (
                <div key={s.title} className="flex items-start">
                  <s.icon className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium text-navy dark:text-white">{s.title}:</span>{' '}
                    <span className="text-gray-600 dark:text-gray-400">{s.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-navy dark:text-white mb-8">Key Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {kpis.map((k) => (
              <div key={k.metric} className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">{k.value}</p>
                <p className="text-gray-600 dark:text-gray-400">{k.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MunicipalSweeping;