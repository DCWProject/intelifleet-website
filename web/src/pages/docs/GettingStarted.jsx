import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const GettingStarted = () => {
  const steps = [
    {
      title: 'Create an Account',
      description: 'Sign up for an InteliFleet account at intelifleet.in. Choose a plan that fits your fleet size.',
    },
    {
      title: 'Add Your Vehicles',
      description: 'Add vehicles to your fleet using the web dashboard. Enter registration numbers, vehicle types, and other details.',
    },
    {
      title: 'Install GPS Devices',
      description: 'Install compatible GPS devices in your vehicles. We support 50+ device models. See the Device Integration guide for details.',
    },
    {
      title: 'Configure Alerts',
      description: 'Set up alerts for speed limits, geofences, fuel theft, and other events. Customize notification channels.',
    },
    {
      title: 'Invite Your Team',
      description: 'Add drivers, managers, and admins to your account. Set appropriate permissions for each role.',
    },
    {
      title: 'Download the Mobile App',
      description: 'Get the InteliFleet app for iOS or Android to track on the go.',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/docs" className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-navy dark:hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Docs
        </Link>

        <h1 className="text-4xl font-bold text-navy dark:text-white mb-8">Getting Started</h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Welcome to InteliFleet! This guide will help you get up and running in minutes.
        </p>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-navy font-bold">
                {index + 1}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-navy dark:text-white mb-2">{step.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-navy dark:text-white mb-4">Need Help?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Our support team is available to help you get started.
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>📧 Email: support@intelifleet.in</li>
            <li>📞 Phone: +91 80 1234 5678</li>
            <li>💬 Live Chat: Available in dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;