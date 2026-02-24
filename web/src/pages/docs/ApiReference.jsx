import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ApiReference = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/vehicles',
      description: 'List all vehicles in your fleet',
      auth: true,
    },
    {
      method: 'GET',
      path: '/api/v1/vehicles/:id',
      description: 'Get details for a specific vehicle',
      auth: true,
    },
    {
      method: 'GET',
      path: '/api/v1/vehicles/:id/location',
      description: 'Get current location of a vehicle',
      auth: true,
    },
    {
      method: 'GET',
      path: '/api/v1/trips',
      description: 'List trips with filters',
      auth: true,
    },
    {
      method: 'GET',
      path: '/api/v1/alerts',
      description: 'Fetch alerts and notifications',
      auth: true,
    },
    {
      method: 'POST',
      path: '/api/v1/geofences',
      description: 'Create a new geofence',
      auth: true,
    },
  ];

  const authExample = `// Authentication header
Authorization: Bearer YOUR_API_KEY

// Example request
curl -X GET \\
  https://api.intelifleet.in/v1/vehicles \\
  -H 'Authorization: Bearer sk_live_123456789'`;

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/docs" className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-navy dark:hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Docs
        </Link>

        <h1 className="text-4xl font-bold text-navy dark:text-white mb-4">API Reference</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          RESTful API for integrating InteliFleet into your applications.
        </p>

        {/* Auth Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-navy dark:text-white mb-4">Authentication</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All API requests require authentication using an API key. Include your key in the Authorization header.
          </p>
          <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
            <pre className="text-sm text-green-400">
              <code>{authExample}</code>
            </pre>
          </div>
        </div>

        {/* Endpoints */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-navy dark:text-white mb-4">Endpoints</h2>
          
          <div className="space-y-4">
            {endpoints.map((ep) => (
              <div key={ep.path} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-1 text-xs font-bold rounded ${
                    ep.method === 'GET' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                    ep.method === 'POST' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                    'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                  }`}>
                    {ep.method}
                  </span>
                  <code className="text-navy dark:text-white font-mono">{ep.path}</code>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{ep.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rate Limits */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-navy dark:text-white mb-4">Rate Limits</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
              <p className="font-semibold text-navy dark:text-white">Basic</p>
              <p className="text-2xl font-bold text-primary">100</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">requests/minute</p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
              <p className="font-semibold text-navy dark:text-white">Pro</p>
              <p className="text-2xl font-bold text-primary">500</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">requests/minute</p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
              <p className="font-semibold text-navy dark:text-white">Enterprise</p>
              <p className="text-2xl font-bold text-primary">2000</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">requests/minute</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiReference;