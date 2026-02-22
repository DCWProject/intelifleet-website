import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, CheckCircle, Map, AlertCircle, Clock } from 'lucide-react';

const SweepingIntelligence = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Cleaning Verification',
      description: 'Verify PTO engagement and actual sweeping activity, not just vehicle movement.',
    },
    {
      icon: Map,
      title: 'Coverage Maps',
      description: 'Visual heatmaps showing cleaned areas and missed zones.',
    },
    {
      icon: Clock,
      title: 'Activity Timeline',
      description: 'Detailed timeline showing when cleaning was ON vs OFF.',
    },
    {
      icon: AlertCircle,
      title: 'Missed Zone Alerts',
      description: 'Automatic detection and alerts for areas that were skipped.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
                <Droplets className="w-4 h-4 mr-2" />
                Sweeping Intelligence
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
                Sweeping Intelligence
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Don't just track movement. Verify cleaning happened. Purpose-built for municipal sweeping, road cleaning, and maintenance vehicles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/company/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <img 
                  src="/images/hero-sweeping.png" 
                  alt="Sweeping Intelligence Dashboard"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden h-80 bg-gray-100 items-center justify-center">
                  <div className="text-center">
                    <Droplets className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-gray-500">Sweeping Intelligence Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Built for cleaning operations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">How sweeping verification works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'PTO Sensor',
                description: 'Sensor installed on PTO (Power Take-Off) detects when brooms/brushes are engaged.',
              },
              {
                step: '02',
                title: 'GPS Correlation',
                description: 'System correlates PTO state with GPS location to map cleaning activity.',
              },
              {
                step: '03',
                title: 'Verification Reports',
                description: 'Generate proof-of-work reports showing exactly what was cleaned and when.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-6xl font-bold text-gray-200">{item.step}</span>
                <h3 className="text-xl font-semibold text-navy mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Perfect for</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Municipal Corporations',
                description: 'Prove to citizens that roads are being cleaned. Generate compliance reports for audits.',
              },
              {
                title: 'Road Maintenance',
                description: 'Verify sweeping before/after road work. Document work completion for contractors.',
              },
              {
                title: 'Industrial Facilities',
                description: 'Ensure plant roads and yards are cleaned per safety and environmental standards.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-8">Developer API</h2>
          
          <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300">
{
`// Sweeping event payload
{
  "event": "cleaning.started",
  "vehicle_id": "SWEEP-001",
  "pto_state": "engaged",
  "broom_state": "active",
  "location": {
    "lat": 28.6139,
    "lng": 77.2090,
    "address": "Connaught Place, New Delhi"
  },
  "timestamp": "2025-02-22T10:30:00Z"
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prove cleaning happened</h2>
          <p className="text-lg text-gray-300 mb-8">
            Get the data you need for compliance, billing, and quality assurance.
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

export default SweepingIntelligence;