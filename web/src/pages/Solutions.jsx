import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Truck, Bus, Building2, Hammer } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Users,
      title: 'Individual Owners',
      description: 'Perfect for personal vehicle owners who want theft protection, maintenance tracking, and peace of mind.',
      path: '/solutions/individual-owners',
      color: 'bg-blue-50',
    },
    {
      icon: Truck,
      title: 'Logistics & Transport',
      description: 'Fleet tracking, route optimization, and delivery verification for logistics companies.',
      path: '/solutions/logistics-transporters',
      color: 'bg-green-50',
    },
    {
      icon: Bus,
      title: 'Bus Operators',
      description: 'Passenger safety, schedule adherence, and route compliance for bus fleets.',
      path: '/solutions/bus-operators',
      color: 'bg-purple-50',
    },
    {
      icon: Building2,
      title: 'Municipal Sweeping',
      description: 'Cleaning verification, coverage tracking, and proof-of-work for municipal vehicles.',
      path: '/solutions/municipal-sweeping',
      color: 'bg-cyan-50',
    },
    {
      icon: Hammer,
      title: 'Construction & Industrial',
      description: 'Equipment tracking, theft prevention, and utilization monitoring for heavy machinery.',
      path: '/solutions/construction-industrial',
      color: 'bg-orange-50',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Solutions for every industry
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Tailored fleet management solutions designed for your specific industry needs and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                to={solution.path}
                className="group block"
              >
                <div className={`${solution.color} rounded-2xl p-8 h-full hover:shadow-lg transition-shadow`}>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-xl mb-6 shadow-sm">
                    <solution.icon className="h-7 w-7 text-navy" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  <span className="inline-flex items-center text-primary font-medium">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which solution fits?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Talk to our team for a personalized recommendation.
          </p>
          <Link
            to="/company/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-navy font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Contact Sales
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;