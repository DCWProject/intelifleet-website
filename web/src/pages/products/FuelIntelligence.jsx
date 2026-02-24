import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Fuel, AlertTriangle, TrendingDown, Droplet } from 'lucide-react';

const FuelIntelligence = () => {
  const features = [
    {
      icon: Droplet,
      title: 'Real-time Monitoring',
      description: 'Live fuel level tracking with ultrasonic sensor accuracy (±1%).',
    },
    {
      icon: AlertTriangle,
      title: 'Theft Detection',
      description: 'Instant alerts for sudden fuel drops that indicate theft.',
    },
    {
      icon: TrendingDown,
      title: 'Efficiency Analytics',
      description: 'Track mileage, km/l efficiency, and benchmark across your fleet.',
    },
    {
      icon: Fuel,
      title: 'Refuel Tracking',
      description: 'Automatic detection of refueling events with volume logged.',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium mb-6">
                <Fuel className="w-4 h-4 mr-2" />
                Fuel Intelligence
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-6">
                Fuel Intelligence
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Advanced fuel monitoring with ultrasonic sensors. Detect theft, track efficiency, and optimize fuel costs across your entire fleet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/company/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-navy dark:bg-primary text-white dark:text-navy font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <img 
                  src="/images/hero-fuel-analytics.png" 
                  alt="Fuel Analytics Dashboard"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden h-80 bg-gray-100 dark:bg-gray-700 items-center justify-center">
                  <div className="text-center">
                    <Fuel className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">Fuel Analytics Dashboard</p>
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
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Stop fuel theft, start saving</h2>
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
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">How fuel monitoring works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Sensor Installation',
                description: 'Ultrasonic fuel sensor installed on fuel tank. Non-intrusive, no drilling required.',
              },
              {
                step: '02',
                title: 'Continuous Monitoring',
                description: 'Sensor measures fuel level every 30 seconds with ±1% accuracy.',
              },
              {
                step: '03',
                title: 'Smart Detection',
                description: 'AI detects refuels, thefts, and anomalies automatically.',
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

      {/* ROI Calculator */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy dark:bg-primary rounded-2xl p-8 lg:p-12 text-white dark:text-navy">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Typical ROI</h2>
              <p className="text-gray-300 dark:text-navy/70">Based on customer data across 500+ fleets</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold text-primary mb-2">23%</p>
                <p className="text-gray-300 dark:text-navy/70">Average fuel cost reduction</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">3mo</p>
                <p className="text-gray-300 dark:text-navy/70">Payback period</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">15L+</p>
                <p className="text-gray-300 dark:text-navy/70">Avg. theft prevented/year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-8">Developer Integration</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Data Fields</h3>
              <pre className="text-sm text-gray-300 overflow-x-auto">
{
`{
  "fuel_liters": 45.5,
  "fuel_raw": 892,
  "sensor_type": "ultrasonic",
  "calibration_profile": "tank_100l",
  "temperature": 32.5
}`}
              </pre>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Webhook Events</h3>
              <pre className="text-sm text-gray-300 overflow-x-auto">
{
`{
  "event": "fuel.theft_alert",
  "vehicle_id": "VH001",
  "drop_liters": 15.2,
  "location": {...}
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Start saving fuel today</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Join hundreds of fleets that have reduced fuel costs by 20%+.
          </p>
          <Link
            to="/company/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-navy dark:bg-primary text-white dark:text-navy font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FuelIntelligence;