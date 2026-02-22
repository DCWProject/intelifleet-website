import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Quote } from 'lucide-react';

const Customers = () => {
  const testimonials = [
    {
      quote: 'InteliFleet helped us reduce fuel costs by 23% in the first quarter. The theft detection alone paid for the system.',
      author: 'Rajesh Kumar',
      role: 'Fleet Manager',
      company: 'NorthStar Logistics',
      fleetSize: '120 vehicles',
    },
    {
      quote: 'Finally, a solution that verifies our sweeping operations. Our municipal clients love the proof-of-work reports.',
      author: 'Priya Sharma',
      role: 'Operations Director',
      company: 'CleanCity Municipal Services',
      fleetSize: '45 sweepers',
    },
    {
      quote: 'The driver behavior scoring has transformed our safety culture. Incidents are down 40% since implementation.',
      author: 'Amit Patel',
      role: 'Safety Manager',
      company: 'Metro Bus Corporation',
      fleetSize: '200 buses',
    },
    {
      quote: 'We tried three other solutions before InteliFleet. This is the first one that actually delivered on its promises.',
      author: 'Suresh Reddy',
      role: 'CEO',
      company: 'AgriFleet India',
      fleetSize: '350 tractors',
    },
  ];

  const industries = [
    { name: 'Logistics & Transport', percentage: '35%' },
    { name: 'Construction', percentage: '25%' },
    { name: 'Municipal Services', percentage: '20%' },
    { name: 'Bus Operators', percentage: '15%' },
    { name: 'Others', percentage: '5%' },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/company/about" className="inline-flex items-center text-gray-500 hover:text-navy mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to About
        </Link>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Our Customers
          </h1>
          <p className="text-xl text-gray-600">
            Trusted by 500+ fleet operators across India
          </p>
        </div>

        {/* Industry Breakdown */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold text-navy mb-8 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {industries.map((i) => (
              <div key={i.name} className="text-center">
                <p className="text-3xl font-bold text-primary mb-1">{i.percentage}</p>
                <p className="text-sm text-gray-600">{i.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-white rounded-2xl p-8 border border-gray-100">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <blockquote className="text-lg text-gray-700 mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-semibold text-gray-500">{t.author[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-navy">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
                  <p className="text-xs text-primary mt-1">{t.fleetSize}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;