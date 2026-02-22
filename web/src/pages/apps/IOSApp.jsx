import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Apple, MapPin, Bell, History, Shield, Check } from 'lucide-react';

const IOSApp = () => {
  const features = [
    'Live vehicle tracking with real-time map updates',
    'Push notifications for all alert types',
    'Complete trip history with route playback',
    'Live Activities for ongoing trips (iOS 16.1+)',
    'Siri shortcuts for quick actions',
    'Widget support for Home Screen',
    'Biometric authentication (Face ID / Touch ID)',
    'Dark mode support',
  ];

  const requirements = [
    'iPhone or iPad running iOS 15 or later',
    'Active InteliFleet subscription',
    'Internet connection (WiFi or cellular)',
  ];

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/apps" className="inline-flex items-center text-gray-500 hover:text-navy mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Apps
        </Link>

        <div className="flex items-center mb-8">
          <div className="w-20 h-20 bg-navy rounded-2xl flex items-center justify-center mr-6">
            <Apple className="h-10 w-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-navy">InteliFleet for iOS</h1>
            <p className="text-lg text-gray-500">iPhone and iPad</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-navy mb-6">Features</h2>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy mb-6">Requirements</h2>
            <ul className="space-y-4 mb-8">
              {requirements.map((req) => (
                <li key={req} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-navy mb-2">Download on the App Store</h3>
              <p className="text-gray-600 text-sm mb-4">
                Free download. Requires InteliFleet subscription.
              </p>
              <button className="w-full py-3 bg-navy text-white font-medium rounded-lg opacity-50 cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* Permissions */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-navy mb-6">Permissions</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 mb-4">
              The InteliFleet iOS app requests the following permissions:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-medium text-navy mr-2">Location:</span>
                <span className="text-gray-600">Used to show your position relative to fleet vehicles. Optional.</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-navy mr-2">Notifications:</span>
                <span className="text-gray-600">Used to send alert notifications. Recommended.</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-navy mr-2">Face ID / Touch ID:</span>
                <span className="text-gray-600">Used for quick, secure authentication. Optional.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOSApp;