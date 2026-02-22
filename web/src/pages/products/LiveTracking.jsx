import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Navigation, Map, Clock, Zap, Code } from 'lucide-react';

const LiveTracking = () => {
  const features = [
    {
      icon: Navigation,
      title: 'Real-time GPS',
      description: '10-second location updates with precise coordinates, speed, and heading.',
    },
    {
      icon: Map,
      title: 'Geofencing',
      description: 'Create unlimited virtual boundaries. Get instant alerts for entry/exit.',
    },
    {
      icon: Clock,
      title: 'Route Playback',
      description: 'Replay any journey with speed overlays, stoppages, and events.',
    },
    {
      icon: Zap,
      title: 'Ignition Status',
      description: 'Monitor engine ON/OFF status in real-time.',
    },
  ];

  const dataFields = [
    { field: 'vehicle_id', type: 'string', description: 'Unique vehicle identifier' },
    { field: 'lat', type: 'float', description: 'Latitude coordinate' },
    { field: 'lng', type: 'float', description: 'Longitude coordinate' },
    { field: 'speed', type: 'float', description: 'Speed in km/h' },
    { field: 'heading', type: 'int', description: 'Direction in degrees (0-360)' },
    { field: 'ts', type: 'timestamp', description: 'Event timestamp (ISO 8601)' },
    { field: 'ignition', type: 'boolean', description: 'Engine ON/OFF state' },
  ];

  const events = [
    { event: 'location.ping', description: 'Periodic location update' },
    { event: 'ignition.on', description: 'Engine started' },
    { event: 'ignition.off', description: 'Engine stopped' },
    { event: 'geofence.enter', description: 'Vehicle entered geofence' },
    { event: 'geofence.exit', description: 'Vehicle exited geofence' },
    { event: 'speed.violation', description: 'Speed limit exceeded' },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/product" className="inline-flex items-center text-gray-500 hover:text-navy mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-6">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Live Tracking
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Real-time GPS tracking with sub-10-second updates. Know exactly where every vehicle is, where it's been, and where it's going.
            </p>
            <Link
              to="/company/contact"
              className="inline-flex items-center px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
            <MapPin className="h-24 w-24 text-gray-300" />
          </div>
        </div>

        {/* Features Grid */}
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

        {/* Developer Section */}
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

export default LiveTracking;