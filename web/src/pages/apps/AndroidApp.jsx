import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, MapPin, Bell, History, Shield, Check } from 'lucide-react';

const AndroidApp = () => {
  const features = [
    'Real-time GPS tracking with live map updates',
    'Push notifications for alerts and events',
    'Trip history with detailed route playback',
    'Background location for continuous tracking',
    'Customizable notification channels',
    'Biometric authentication support',
    'Dark mode support',
    'Offline mode for viewing cached data',
  ];

  const requirements = [
    'Android phone or tablet running Android 8.0+',
    'Active InteliFleet subscription',
    'Internet connection (WiFi or mobile data)',
    'GPS enabled for location features',
  ];

  const batteryTips = [
    'Disable battery optimization for InteliFleet in system settings',
    'Allow background location access for real-time tracking',
    'Enable "Unrestricted" background activity',
    'Add InteliFleet to "Never sleeping apps" list',
  ];

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/apps" className="inline-flex items-center text-gray-500 hover:text-navy mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Apps
        </Link>

        <div className="flex items-center mb-8">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mr-6">
            <Play className="h-10 w-10 text-navy" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-navy">InteliFleet for Android</h1>
            <p className="text-lg text-gray-500">Phones and tablets</p>
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
              <h3 className="font-semibold text-navy mb-2">Get it on Google Play</h3>
              <p className="text-gray-600 text-sm mb-4">
                Free download. Requires InteliFleet subscription.
              </p>
              <button className="w-full py-3 bg-navy text-white font-medium rounded-lg opacity-50 cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* Battery Optimization */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-navy mb-6">Battery Optimization Guide</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 mb-4">
              For the best experience with real-time tracking, please configure these settings:
            </p>
            <ul className="space-y-3">
              {batteryTips.map((tip) => (
                <li key={tip} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Permissions */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-navy mb-6">Permissions</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 mb-4">
              The InteliFleet Android app requests the following permissions:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-medium text-navy mr-2">Location:</span>
                <span className="text-gray-600">Used for map display and nearby vehicle features. Required.</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-navy mr-2">Background Location:</span>
                <span className="text-gray-600">Used for continuous tracking when the app is closed. Optional.</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-navy mr-2">Notifications:</span>
                <span className="text-gray-600">Used for alert notifications. Recommended.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidApp;