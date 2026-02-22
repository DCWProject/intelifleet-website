import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Shield, Zap, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Accuracy First',
      description: 'We believe decisions should be based on data, not guesses. Our sensors and algorithms deliver precise, actionable intelligence.',
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your fleet data is sensitive. We built enterprise-grade security into every layer of our platform from day one.',
    },
    {
      icon: Zap,
      title: 'Reliability',
      description: 'Fleet operations don\'t stop. Neither do we. 99.9% uptime and offline resilience ensure you\'re always connected.',
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'We don\'t just sell software — we partner with you. Our success team ensures you get the most from InteliFleet.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              About InteliFleet
            </h1>
            <p className="text-xl text-gray-600">
              We\'re building the future of fleet intelligence — one vehicle at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To bring certainty to fleet operations. We believe every fleet operator deserves complete visibility into their vehicles — where they are, how they\'re performing, and what needs attention.
              </p>
              <p className="text-lg text-gray-600">
                Founded in 2023, InteliFleet started with a simple observation: most fleet tracking solutions only showed GPS dots on a map. We set out to build something more intelligent — a platform that combines location data with sensor intelligence to provide true operational insights.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
              <span className="text-gray-400">Company Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-8">
                <v.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-3">{v.title}</h3>
                <p className="text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Fleets Tracked' },
              { value: '50,000+', label: 'Vehicles Monitored' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Support' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;