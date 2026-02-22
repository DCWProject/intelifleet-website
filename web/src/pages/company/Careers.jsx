import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, Clock, Heart } from 'lucide-react';

const Careers = () => {
  const openings = [
    {
      title: 'Senior Backend Engineer',
      department: 'Engineering',
      location: 'Bangalore / Remote',
      type: 'Full-time',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Bangalore',
      type: 'Full-time',
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Bangalore / Mumbai',
      type: 'Full-time',
    },
    {
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Delhi / Mumbai / Bangalore',
      type: 'Full-time',
    },
    {
      title: 'Hardware Integration Specialist',
      department: 'Engineering',
      location: 'Bangalore',
      type: 'Full-time',
    },
  ];

  const benefits = [
    'Competitive salary & ESOPs',
    'Health insurance for you & family',
    'Flexible work arrangements',
    'Learning & development budget',
    'Paid time off & holidays',
    'Team retreats & events',
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
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600">
            Help us build the future of fleet intelligence
          </p>
        </div>

        {/* Culture */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold text-navy mb-4">Why InteliFleet?</h2>
          <p className="text-gray-600 mb-6">
            We\'re a team of builders, problem-solvers, and fleet enthusiasts. We move fast, care deeply about our customers, and believe in the power of data to transform operations.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-700">Customer-obsessed</span>
            </div>
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-700">Data-driven</span>
            </div>
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-700">Ownership mindset</span>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-navy mb-8">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-center bg-gray-50 rounded-lg p-4">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span className="text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Openings */}
        <div>
          <h2 className="text-2xl font-semibold text-navy mb-8">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-gray-100 rounded-xl hover:border-primary/20 hover:shadow-md transition-all">
                <div>
                  <h3 className="text-lg font-semibold text-navy">{job.title}</h3>
                  <p className="text-gray-500">{job.department}</p>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  <button className="px-4 py-2 bg-navy text-white text-sm font-medium rounded-lg opacity-50 cursor-not-allowed">
                    Apply Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;