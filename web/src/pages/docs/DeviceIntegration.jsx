import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wifi } from 'lucide-react';

const DeviceIntegration = () => {
  const protocols = [
    {
      name: 'MQTT',
      description: 'Preferred for real-time streaming. Low latency, bidirectional communication.',
      port: '8883 (TLS)',
    },
    {
      name: 'HTTP/HTTPS',
      description: 'REST-style POST requests. Simple to implement, works everywhere.',
      port: '443',
    },
  ];

  const supportedDevices = [
    { brand: 'Queclink', models: 'GV300, GV600, GMT100', features: 'GPS, Ignition, OBD' },
    { brand: 'Teltonika', models: 'FMC001, FMB920, FMB120', features: 'GPS, CAN, BLE' },
    { brand: 'Concox', models: 'GT06N, JM-VL01', features: 'GPS, ACC, SOS' },
    { brand: 'Wanway', models: 'S20, G19', features: 'GPS, Fuel, Temperature' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/docs" className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-navy dark:hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Docs
        </Link>

        <h1 className="text-4xl font-bold text-navy dark:text-white mb-4">Device Integration</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Connect your GPS devices and sensors to InteliFleet.
        </p>

        {/* Protocols */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-navy dark:text-white mb-6">Supported Protocols</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {protocols.map((p) => (
              <div key={p.name} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Wifi className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-navy dark:text-white">{p.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{p.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Port: {p.port}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Devices */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-navy dark:text-white mb-6">Supported Devices</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 text-navy dark:text-white font-medium">Brand</th>
                  <th className="text-left py-3 text-navy dark:text-white font-medium">Models</th>
                  <th className="text-left py-3 text-navy dark:text-white font-medium">Features</th>
                </tr>
              </thead>
              <tbody>
                {supportedDevices.map((d) => (
                  <tr key={d.brand} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-medium text-navy dark:text-white">{d.brand}</td>
                    <td className="py-3 text-gray-600 dark:text-gray-400">{d.models}</td>
                    <td className="py-3 text-gray-600 dark:text-gray-400">{d.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Setup Steps */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-navy dark:text-white mb-6">Setup Steps</h2>
          
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="font-bold text-primary mr-2">1.</span>
              <span className="text-gray-700 dark:text-gray-300">Register your device IMEI in the InteliFleet dashboard</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-primary mr-2">2.</span>
              <span className="text-gray-700 dark:text-gray-300">Configure device to send data to InteliFleet servers (endpoint provided in dashboard)</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-primary mr-2">3.</span>
              <span className="text-gray-700 dark:text-gray-300">Verify connection status in the device management page</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-primary mr-2">4.</span>
              <span className="text-gray-700 dark:text-gray-300">Start receiving location and sensor data!</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DeviceIntegration;