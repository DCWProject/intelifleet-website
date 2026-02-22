import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle, MessageCircle, Book, Ticket } from 'lucide-react';

const Support = () => {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Support Center</h1>
            <p className="text-xl text-gray-600 mb-8">
              Get help with InteliFleet. Browse FAQs, documentation, or contact our support team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/support/faq" className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                <Book className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-2">FAQs</h3>
                <p className="text-gray-600">Browse frequently asked questions and find quick answers.</p>
              </div>
            </Link>

            <Link to="/docs" className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                <MessageCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-2">Documentation</h3>
                <p className="text-gray-600">Read our comprehensive guides and API documentation.</p>
              </div>
            </Link>

            <Link to="/company/contact" className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                <Ticket className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-2">Contact Support</h3>
                <p className="text-gray-600">Get in touch with our support team for personalized help.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;