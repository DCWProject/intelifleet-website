import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, MapPin, Bell, History, Users, Apple, Play } from 'lucide-react';

const Apps = () => {
  const iosFeatures = [
    'Live vehicle tracking on map',
    'Push notifications for alerts',
    'Trip history and details',
    'Live Activities support',
    'Siri shortcuts',
    'iOS 15+ supported',
  ];

  const androidFeatures = [
    'Real-time GPS tracking',
    'Background location updates',
    'Instant alert notifications',
    'Trip replay and analytics',
    'Battery optimization guide',
    'Android 8+ supported',
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Fleet management in your pocket
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Track vehicles, receive alerts, and manage your fleet on the go with our mobile apps for iOS and Android.
            </p>
          </div>
        </div>
      </section>

      {/* App Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* iOS Card */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mr-4">
                  <Apple className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy">iOS App</h2>
                  <p className="text-gray-500">For iPhone and iPad</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {iosFeatures.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/apps/ios"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Learn more about iOS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Android Card */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-4">
                  <Play className="h-8 w-8 text-navy" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy">Android App</h2>
                  <p className="text-gray-500">For Android phones and tablets</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {androidFeatures.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/apps/android"
                className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-navy text-navy font-medium rounded-lg hover:bg-navy hover:text-white transition-colors"
              >
                Learn more about Android
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Powerful features, everywhere</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Live Tracking',
                description: 'See all your vehicles on a map in real-time with 10-second updates.',
              },
              {
                icon: Bell,
                title: 'Smart Alerts',
                description: 'Get push notifications for speed, geofence, fuel theft, and more.',
              },
              {
                icon: History,
                title: 'Trip History',
                description: 'Review past trips with detailed route playback and stoppages.',
              },
              {
                icon: Users,
                title: 'Driver Tools',
                description: 'Drivers can view assignments, mark attendance, and report issues.',
              },
            ].map((feature) => (
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

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Common questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Do I need a subscription to use the apps?',
                a: 'Yes, the mobile apps require an active InteliFleet subscription. Each vehicle subscription includes unlimited mobile app access for your team.',
              },
              {
                q: 'Can drivers use the app?',
                a: 'Absolutely! Drivers can use the app to view their assignments, mark attendance, and report issues. Admin controls let you set permissions.',
              },
              {
                q: 'Does the app drain battery?',
                a: 'We\'ve optimized both apps for minimal battery usage. Background location is only active when needed, and we provide battery optimization guides.',
              },
              {
                q: 'Is my data secure on the app?',
                a: 'Yes. All data is encrypted in transit using TLS 1.3. We also support biometric authentication on supported devices.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apps;