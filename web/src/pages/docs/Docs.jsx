import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Code, Cpu, Webhook, ArrowRight } from 'lucide-react';

const Docs = () => {
  const sections = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Quick start guide for new users. Learn the basics of InteliFleet.',
      path: '/docs/getting-started',
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete REST API documentation with examples and authentication details.',
      path: '/docs/api-reference',
    },
    {
      icon: Cpu,
      title: 'Device Integration',
      description: 'Connect your GPS devices and sensors. Supported protocols and setup guides.',
      path: '/docs/device-integration',
    },
    {
      icon: Webhook,
      title: 'Webhooks',
      description: 'Real-time event notifications. Configure endpoints and handle events.',
      path: '/docs',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to integrate and build with InteliFleet
            </p>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((s) => (
              <Link
                key={s.title}
                to={s.path}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-navy dark:text-white mb-3">
                  {s.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {s.description}
                </p>
                <span className="inline-flex items-center text-primary font-medium">
                  Read docs
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Quick Links</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Authentication', desc: 'API keys and OAuth' },
              { title: 'Rate Limits', desc: 'Understanding quotas' },
              { title: 'Error Codes', desc: 'Handling API errors' },
              { title: 'Pagination', desc: 'Working with large datasets' },
              { title: 'Changelog', desc: 'API version history' },
              { title: 'SDKs', desc: 'Official client libraries' },
            ].map((link) => (
              <div key={link.title} className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-100 dark:border-gray-600">
                <h3 className="font-semibold text-navy dark:text-white mb-1">{link.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{link.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs;