import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Shield, AlertTriangle, Award, TrendingUp } from 'lucide-react';

const DriverIntelligence = () => {
  const features = [
    {
      icon: Shield,
      title: 'Driver Assignment',
      description: 'Assign drivers to vehicles via RFID, mobile app, or manual entry.',
    },
    {
      icon: AlertTriangle,
      title: 'Behavior Monitoring',
      description: 'Detect overspeeding, harsh braking, rapid acceleration, and cornering.',
    },
    {
      icon: Award,
      title: 'Driver Scoring',
      description: 'Automatic safety scores based on behavior patterns.',
    },
    {
      icon: TrendingUp,
      title: 'Leaderboards',
      description: 'Gamify safety with driver rankings and performance badges.',
    },
  ];

  const scoreFactors = [
    { factor: 'Overspeeding', weight: '30%', impact: 'Reduces score when speed limits exceeded' },
    { factor: 'Harsh Braking', weight: '20%', impact: 'Penalizes sudden deceleration events' },
    { factor: 'Rapid Acceleration', weight: '20%', impact: 'Tracks aggressive acceleration' },
    { factor: 'Cornering', weight: '15%', impact: 'Monitors sharp turns at speed' },
    { factor: 'Idle Time', weight: '15%', impact: 'Excessive idling reduces score' },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/product" className="inline-flex items-center text-gray-500 hover:text-navy mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-50 rounded-2xl mb-6">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Driver Intelligence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive driver behavior analysis. Improve safety, reduce risk, and build a culture of responsible driving.
            </p>
            <Link
              to="/company/contact"
              className="inline-flex items-center px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
            <Users className="h-24 w-24 text-gray-300" />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-1">{f.title}</h3>
                  <p className="text-gray-600">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <h2 className="text-2xl font-bold text-navy mb-8">Driver Score Factors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scoreFactors.map((s) => (
              <div key={s.factor} className="bg-white rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-navy">{s.factor}</h3>
                  <span className="text-sm font-medium text-primary">{s.weight}</span>
                </div>
                <p className="text-sm text-gray-600">{s.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverIntelligence;