import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, AlertTriangle, Award, BarChart2, Shield, Gauge } from 'lucide-react';

const DriverIntelligence = () => {
  const features = [
    {
      icon: Award,
      title: 'Driver Scoring',
      description: 'Comprehensive score based on speeding, harsh braking, acceleration, and cornering.',
    },
    {
      icon: AlertTriangle,
      title: 'Behavior Alerts',
      description: 'Real-time notifications for overspeeding, harsh events, and idle misuse.',
    },
    {
      icon: BarChart2,
      title: 'Performance Analytics',
      description: 'Track improvement over time with detailed trends and benchmarking.',
    },
    {
      icon: Shield,
      title: 'Safety Compliance',
      description: 'Ensure drivers follow safety protocols with automated monitoring.',
    },
  ];

  const behaviors = [
    { name: 'Overspeeding', desc: 'Speed above configured limits' },
    { name: 'Harsh Braking', desc: 'Sudden deceleration events' },
    { name: 'Harsh Acceleration', desc: 'Rapid speed increases' },
    { name: 'Harsh Cornering', desc: 'Sharp turns at speed' },
    { name: 'Idle Misuse', desc: 'Excessive engine idling' },
    { name: 'Night Driving', desc: 'Unauthorized after-hours use' },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                Driver Intelligence
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
                Driver Intelligence
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Understand driver behavior, reduce risk, and build a culture of safety. Score, rank, and incentivize your drivers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/company/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-4">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <p className="text-2xl font-bold text-navy">Driver Score: 87/100</p>
                <p className="text-green-600 font-medium">↑ 5 points this month</p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Overspeeding', score: 95 },
                  { label: 'Harsh Braking', score: 82 },
                  { label: 'Idle Time', score: 90 },
                  { label: 'Acceleration', score: 78 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-medium text-navy">{item.score}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Build a safer fleet</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitored Behaviors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Monitored behaviors</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {behaviors.map((behavior) => (
              <div key={behavior.name} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-navy mb-1">{behavior.name}</h3>
                <p className="text-gray-600 text-sm">{behavior.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scoring Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">How scoring works</h2>
              <p className="text-gray-600 mb-6">
                Our algorithm analyzes driving patterns and assigns scores based on:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy">Event Detection</p>
                    <p className="text-gray-600 text-sm">Sensors detect harsh braking, acceleration, and cornering</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy">Weighting</p>
                    <p className="text-gray-600 text-sm">Different events have different severity weights</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy">Normalization</p>
                    <p className="text-gray-600 text-sm">Scores normalized to 0-100 scale for easy comparison</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Score Interpretation</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-400 rounded mr-3"></div>
                  <span className="flex-1">90-100: Excellent</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-accent rounded mr-3"></div>
                  <span className="flex-1">75-89: Good</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded mr-3"></div>
                  <span className="flex-1">60-74: Average</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-400 rounded mr-3"></div>
                  <span className="flex-1">Below 60: Needs Improvement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Build your safest fleet yet</h2>
          <p className="text-lg text-gray-300 mb-8">
            Reduce accidents, lower insurance costs, and improve efficiency.
          </p>
          <Link
            to="/company/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-navy font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DriverIntelligence;