import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Book, MessageCircle, Ticket } from 'lucide-react';

const Support = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-6">Support Center</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get help with InteliFleet. Browse FAQs, documentation, or contact our support team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/support/faq" className="group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                <Book className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">FAQs</h3>
                <p className="text-gray-600 dark:text-gray-400">Browse frequently asked questions and find quick answers.</p>
              </div>
            </Link>

            <Link to="/docs" className="group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                <MessageCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">Documentation</h3>
                <p className="text-gray-600 dark:text-gray-400">Read our comprehensive guides and API documentation.</p>
              </div>
            </Link>

            <Link to="/company/contact" className="group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                <Ticket className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">Contact Support</h3>
                <p className="text-gray-600 dark:text-gray-400">Get in touch with our support team for personalized help.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;