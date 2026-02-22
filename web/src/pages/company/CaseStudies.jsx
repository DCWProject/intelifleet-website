import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'How NorthStar Logistics reduced fuel costs by 23%',
      industry: 'Logistics',
      challenge: 'Rising fuel costs and suspected theft were eating into margins.',
      solution: 'Implemented fuel sensors with theft detection across 120 vehicles.',
      result: '23% reduction in fuel costs within 3 months. Theft incidents dropped to zero.',
      tags: ['Fuel Intelligence', 'Theft Detection'],
    },
    {
      title: 'CleanCity proves sweeping compliance to municipal clients',
      industry: 'Municipal Services',
      challenge: 'No way to prove cleaning operations were completed as contracted.',
      solution: 'Deployed PTO sensors and coverage mapping for 45 sweepers.',
      result: '100% coverage verification. Client complaints dropped by 85%.',
      tags: ['Sweeping Intelligence', 'Compliance'],
    },
    {
      title: 'Metro Bus improves safety with driver scoring',
      industry: 'Public Transport',
      challenge: 'High accident rates and passenger safety concerns.',
      solution: 'Implemented driver behavior monitoring with gamified scoring.',
      result: '40% reduction in safety incidents. Driver engagement up significantly.',
      tags: ['Driver Intelligence', 'Safety'],
    },
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
            Case Studies
          </h1>
          <p className="text-xl text-gray-600">
            Real results from real customers
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-navy text-white text-sm rounded-full">
                  {cs.industry}
                </span>
                {cs.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/20 text-navy text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-navy mb-4">{cs.title}</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-navy mb-2">Challenge</h3>
                  <p className="text-gray-600">{cs.challenge}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Solution</h3>
                  <p className="text-gray-600">{cs.solution}</p>
                </div>                <div>
                  <h3 className="font-semibold text-navy mb-2">Result</h3>
                  <p className="text-gray-600">{cs.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;