import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Fuel, Users, Shield, CheckCircle } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: 'Individual Owners',
      description: 'Protect your personal vehicles with theft alerts, maintenance reminders, and document vault.',
      path: '/solutions/individual-owners',
      icon: Shield,
    },
    {
      title: 'Logistics & Transport',
      description: 'Optimize fleet utilization, ensure route compliance, and improve driver performance.',
      path: '/solutions/logistics-transporters',
      icon: MapPin,
    },
    {
      title: 'Bus Operators',
      description: 'Monitor passenger vehicles with schedule adherence, driver behavior, and safety alerts.',
      path: '/solutions/bus-operators',
      icon: Users,
    },
    {
      title: 'Municipal Sweeping',
      description: 'Verify cleaning operations with PTO monitoring, coverage proof, and missed zone alerts.',
      path: '/solutions/municipal-sweeping',
      icon: CheckCircle,
    },
    {
      title: 'Construction & Industrial',
      description: 'Track heavy equipment, monitor fuel usage, and prevent unauthorized usage.',
      path: '/solutions/construction-industrial',
      icon: Fuel,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Solutions for every fleet
            </h1>
            <p className="text-xl text-gray-600">
              Whether you run 5 vehicles or 5,000, InteliFleet has a solution tailored to your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <Link
                key={s.title}
                to={s.path}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-navy mb-3">
                  {s.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {s.description}
                </p>
                <span className="inline-flex items-center text-primary font-medium">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;