import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Calendar, AlertTriangle, Clock, CheckCircle, FileText } from 'lucide-react';

const Maintenance = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Service Scheduling',
      description: 'Automatic reminders based on mileage, engine hours, or time intervals.',
    },
    {
      icon: AlertTriangle,
      title: 'Proactive Alerts',
      description: 'Get notified before maintenance is due. Never miss a service.',
    },
    {
      icon: FileText,
      title: 'Service History',
      description: 'Complete digital log of all maintenance activities and costs.',
    },
    {
      icon: Clock,
      title: 'Downtime Tracking',
      description: 'Monitor vehicle availability and minimize unplanned downtime.',
    },
  ];

  const schedules = [
    { type: 'Oil Change', interval: 'Every 5,000 km or 6 months', icon: '🛢️' },
    { type: 'Tire Rotation', interval: 'Every 10,000 km', icon: '🛞' },
    { type: 'Brake Inspection', interval: 'Every 15,000 km', icon: '🔧' },
    { type: 'Air Filter', interval: 'Every 20,000 km', icon: '🌬️' },
    { type: 'Transmission', interval: 'Every 50,000 km', icon: '⚙️' },
    { type: 'Coolant', interval: 'Every 2 years', icon: '❄️' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm font-medium mb-6">
                <Wrench className="w-4 h-4 mr-2" />
                Maintenance
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-6">
                Maintenance Management
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Stay ahead of breakdowns with proactive maintenance scheduling. Track services, manage costs, and keep your fleet running smoothly.
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
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-navy dark:text-white">Upcoming Services</h3>
                <span className="text-sm text-primary font-medium">This Week</span>
              </div>
              <div className="space-y-4">
                {[
                  { vehicle: 'MH-12-AB-1234', service: 'Oil Change', due: '2 days', status: 'urgent' },
                  { vehicle: 'MH-12-CD-5678', service: 'Tire Rotation', due: '5 days', status: 'normal' },
                  { vehicle: 'MH-12-EF-9012', service: 'Brake Check', due: '1 week', status: 'normal' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className={`w-3 h-3 rounded-full mr-4 ${item.status === 'urgent' ? 'bg-red-500' : 'bg-green-500'}`} />
                    <div className="flex-1">
                      <p className="font-medium text-navy dark:text-white">{item.vehicle}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.service}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.due}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Prevent breakdowns before they happen</h2>
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

      {/* Schedule Types */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Flexible scheduling options</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedules.map((schedule) => (
              <div key={schedule.type} className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-100 dark:border-gray-600 flex items-center">
                <span className="text-3xl mr-4">{schedule.icon}</span>
                <div>
                  <h3 className="font-semibold text-navy dark:text-white">{schedule.type}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{schedule.interval}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy dark:text-white mb-6">Benefits of proactive maintenance</h2>
              <ul className="space-y-4">
                {[
                  'Reduce unexpected breakdowns by up to 40%',
                  'Extend vehicle lifespan and resale value',
                  'Lower total cost of ownership',
                  'Improve vehicle availability and utilization',
                  'Maintain warranty compliance',
                  'Ensure driver safety',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy dark:bg-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Cost Comparison</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 mb-2">Preventive Maintenance</p>
                  <p className="text-3xl font-bold text-primary">₹15,000</p>
                  <p className="text-sm text-gray-400">per year per vehicle</p>
                </div>
                <div className="border-t border-gray-700 pt-6">
                  <p className="text-gray-300 mb-2">Breakdown Repair</p>
                  <p className="text-3xl font-bold text-red-400">₹45,000+</p>
                  <p className="text-sm text-gray-400">avg. cost per incident</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy dark:bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Keep your fleet running</h2>
          <p className="text-lg text-gray-300 mb-8">
            Schedule a demo to see how maintenance management can reduce your costs.
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

export default Maintenance;