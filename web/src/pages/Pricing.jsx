import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const plans = [
    {
      name: 'Basic',
      description: 'For small fleets getting started',
      price: '₹299',
      period: '/vehicle/month',
      features: [
        { name: 'Real-time GPS tracking', included: true },
        { name: 'Trip history (30 days)', included: true },
        { name: 'Basic alerts (speed, geofence)', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Email support', included: true },
        { name: 'Fuel monitoring', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'API access', included: false },
        { name: 'Multi-tenant', included: false },
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      description: 'For growing fleets that need more',
      price: '₹499',
      period: '/vehicle/month',
      features: [
        { name: 'Everything in Basic, plus:', included: true },
        { name: 'Fuel intelligence & theft alerts', included: true },
        { name: 'Advanced alerts (idle, towing)', included: true },
        { name: 'Trip history (1 year)', included: true },
        { name: 'MIS reports & exports', included: true },
        { name: 'Driver behavior scoring', included: true },
        { name: 'Priority support', included: true },
        { name: 'API access', included: false },
        { name: 'Multi-tenant', included: false },
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Business',
      description: 'For fleet operators with multiple clients',
      price: '₹799',
      period: '/vehicle/month',
      features: [
        { name: 'Everything in Pro, plus:', included: true },
        { name: 'Multi-tenant & roles', included: true },
        { name: 'White-label options', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Full API access', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'SLA guarantee', included: true },
        { name: 'On-premise option', included: false },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
    {
      name: 'Enterprise',
      description: 'For large fleets & municipalities',
      price: 'Custom',
      period: '',
      features: [
        { name: 'Everything in Business, plus:', included: true },
        { name: 'Sweeping intelligence', included: true },
        { name: 'On-premise deployment', included: true },
        { name: 'Custom SLAs', included: true },
        { name: '24/7 phone support', included: true },
        { name: 'Dedicated infrastructure', included: true },
        { name: 'Custom development', included: true },
        { name: 'Training & onboarding', included: true },
        { name: 'Account success team', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const hardwareAddons = [
    { name: 'GPS Device (4G)', price: '₹2,999', note: 'One-time' },
    { name: 'Fuel Sensor (Ultrasonic)', price: '₹4,499', note: 'One-time' },
    { name: 'PTO Sensor', price: '₹1,499', note: 'One-time' },
    { name: 'Temperature Sensor', price: '₹2,499', note: 'One-time' },
    { name: 'Driver RFID', price: '₹999', note: 'One-time' },
    { name: 'Installation', price: '₹499', note: 'Per vehicle' },
  ];

  const faqs = [
    {
      question: 'Is there a minimum number of vehicles?',
      answer: 'No minimum for Basic and Pro plans. Business plan requires minimum 20 vehicles. Enterprise is tailored to your fleet size.',
    },
    {
      question: 'Can I change plans later?',
      answer: 'Absolutely. You can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, UPI, net banking, and NEFT/RTGS for annual payments.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for cloud deployments. On-premise and custom integrations may have one-time setup costs.',
    },
    {
      question: 'Do you offer annual discounts?',
      answer: 'Yes! Pay annually and get 2 months free (17% discount) on all plans.',
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'You can export all your data before cancellation. We retain data for 30 days after cancellation for recovery purposes, then permanently delete it.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Pay per vehicle, per month. No hidden fees.
            </p>
            <p className="text-primary font-medium">
              🎉 Save 17% with annual billing
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 ${
                  plan.popular
                    ? 'bg-navy text-white ring-4 ring-primary/20'
                    : 'bg-white border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-navy text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                )}
                
                <div className="mb-6">
                  <h3 className={`text-xl font-semibold mb-1 ${plan.popular ? 'text-white' : 'text-navy'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-navy'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start">
                      {feature.included ? (
                        <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-primary' : 'text-green-500'}`} />
                      ) : (
                        <X className="h-5 w-5 mr-3 flex-shrink-0 text-gray-300" />
                      )}
                      <span className={`text-sm ${feature.included ? (plan.popular ? 'text-gray-200' : 'text-gray-600') : 'text-gray-400'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/company/contact"
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-primary text-navy hover:bg-opacity-90'
                      : 'bg-navy text-white hover:bg-opacity-90'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Hardware & Sensors</h2>
            <p className="text-lg text-gray-600">
              One-time costs for physical devices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {hardwareAddons.map((item) => (
              <div key={item.name} className="bg-white rounded-xl p-4 border border-gray-100 flex justify-between items-center">
                <div>
                  <p className="font-medium text-navy">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.note}</p>
                </div>
                <span className="text-lg font-semibold text-primary">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Frequently asked questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-navy">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Our team is here to help you choose the right plan.
          </p>
          <Link
            to="/company/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-navy font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Talk to Sales
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;