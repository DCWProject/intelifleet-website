import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: 'How do I install the GPS device?',
      a: 'GPS devices should be installed by a certified technician. The device connects to the vehicle\'s battery and ignition system. Installation typically takes 30-45 minutes per vehicle.',
    },
    {
      q: 'What happens if the device loses connectivity?',
      a: 'Our devices have built-in memory that stores data locally. When connectivity is restored, all stored data is automatically uploaded to the server.',
    },
    {
      q: 'Can I track my fleet on mobile?',
      a: 'Yes! We have native iOS and Android apps that let you track your fleet, receive alerts, and view reports on the go.',
    },
    {
      q: 'How accurate is the fuel monitoring?',
      a: 'Our ultrasonic fuel sensors provide accuracy within ±1% when properly calibrated.',
    },
    {
      q: 'Is my data secure?',
      a: 'Absolutely. We use bank-level encryption (TLS 1.3) for all data in transit, and data at rest is encrypted with AES-256.',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-navy dark:text-white">Frequently Asked Questions</h1>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-navy dark:text-white mb-2">{faq.q}</h3>
              <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;