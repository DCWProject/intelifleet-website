import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Route, Clock, Navigation, Check } from 'lucide-react';

const LiveTracking = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Real-time GPS',
      description: '10-second location updates with precise coordinates, speed, and heading.',
    },
    {
      icon: Route,
      title: 'Route Playback',
      description: 'Replay any journey with speed overlays, stoppages, and timeline scrubbing.',
    },
    {
      icon: Navigation,
      title: 'Geofencing',
      description: 'Create virtual boundaries and get instant entry/exit alerts.',
    },
    {
      icon: Clock,
      title: 'Idle Detection',
      description: 'Monitor engine status and detect excessive idling automatically.',
    },
  ];

  const developerFields = [
    { field: 'vehicle_id', type: 'string', desc: 'Unique vehicle identifier' },
    { field: 'lat', type: 'float', desc: 'Latitude coordinate' },
    { field: 'lng', type: 'float', desc: 'Longitude coordinate' },
    { field: 'speed', type: 'float', desc: 'Speed in km/h' },
    { field: 'heading', type: 'int', desc: 'Direction in degrees (0-360)' },
    { field: 'ignition', type: 'boolean', desc: 'Engine ON/OFF state' },
    { field: 'ts', type: 'timestamp', desc: 'Event timestamp (ISO 8601)' },
  ];

  const events = [
    { event: 'location.ping', desc: 'Periodic location update' },
    { event: 'ignition.on', desc: 'Engine started' },
    { event: 'ignition.off', desc: 'Engine stopped' },
    { event: 'geofence.enter', desc: 'Vehicle entered defined zone' },
    { event: 'geofence.exit', desc: 'Vehicle left defined zone' },
    { event: 'idle.start', desc: 'Vehicle started idling' },
    { event: 'idle.end', desc: 'Vehicle stopped idling' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                GPS Tracking
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-6">
                Live Tracking
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Real-time GPS tracking with 10-second updates. Know exactly where every vehicle is, where it's been, and where it's heading.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/company/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-navy dark:bg-primary text-white dark:text-navy font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/docs/device-integration"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy dark:border-primary text-navy dark:text-primary font-medium rounded-lg hover:bg-navy dark:hover:bg-primary hover:text-white dark:hover:text-navy transition-colors"
                >
                  View API Docs
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <img 
                  src="/images/hero-fleet-map.png" 
                  alt="Live Fleet Tracking Dashboard"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden h-80 bg-gray-100 dark:bg-gray-700 items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">Live Fleet Map Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Everything you need to track your fleet</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">How it works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Device Installation',
                description: 'GPS device installed in vehicle. Connects via 4G/LTE network.',
              },
              {
                step: '02',
                title: 'Data Streaming',
                description: 'Location data streams every 10 seconds via MQTT or HTTP.',
              },
              {
                step: '03',
                title: 'Real-time Display',
                description: 'Dashboard updates live with position, speed, and status.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-6xl font-bold text-gray-200 dark:text-gray-700">{item.step}</span>
                <h3 className="text-xl font-semibold text-navy dark:text-white mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy dark:text-white mb-6">Developer-friendly data</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Access raw location data via our API or receive real-time events via webhooks.
              </p>

              <h3 className="text-lg font-semibold text-navy dark:text-white mb-4">Data Fields</h3>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-gray-400 font-medium">Field</th>
                      <th className="px-4 py-3 text-left text-gray-400 font-medium">Type</th>
                      <th className="px-4 py-3 text-left text-gray-400 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {developerFields.map((field) => (
                      <tr key={field.field}>
                        <td className="px-4 py-3 text-primary font-mono">{field.field}</td>
                        <td className="px-4 py-3 text-gray-500 font-mono">{field.type}</td>
                        <td className="px-4 py-3 text-gray-300">{field.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-navy dark:text-white mb-4">Event Types</h3>
              <div className="space-y-3">
                {events.map((evt) => (
                  <div key={evt.event} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <code className="text-primary font-mono text-sm">{evt.event}</code>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{evt.desc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-xl">
                <h4 className="font-semibold text-navy dark:text-white mb-2">Quick Start</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Get your API key and start tracking in minutes.
                </p>
                <Link
                  to="/docs/getting-started"
                  className="inline-flex items-center text-primary font-medium"
                >
                  View Documentation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy dark:bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start tracking your fleet today</h2>
          <p className="text-lg text-gray-300 mb-8">
            Get real-time visibility into your entire fleet.
          </p>
          <Link
            to="/company/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-navy font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LiveTracking;