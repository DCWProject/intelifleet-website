import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-navy">Privacy Policy</h1>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">Last updated: February 2025</p>
          
          <h2 className="text-xl font-semibold text-navy mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">We collect information you provide directly to us, including account information, vehicle data, and usage information.</p>

          <h2 className="text-xl font-semibold text-navy mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use your information to provide, maintain, and improve our services, and to communicate with you.</p>

          <h2 className="text-xl font-semibold text-navy mt-8 mb-4">3. Data Security</h2>
          <p className="text-gray-600 mb-4">We implement appropriate security measures to protect your data, including encryption and access controls.</p>

          <h2 className="text-xl font-semibold text-navy mt-8 mb-4">4. Your Rights</h2>
          <p className="text-gray-600 mb-4">You have the right to access, correct, or delete your personal information at any time.</p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link to="/legal/terms" className="text-primary hover:underline">View Terms of Service →</Link>
        </div>
      </div>
    </div>
  );
};

export default Privacy;