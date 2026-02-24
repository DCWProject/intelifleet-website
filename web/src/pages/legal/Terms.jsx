import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-navy dark:text-white">Terms of Service</h1>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Last updated: February 2025</p>
          
          <h2 className="text-xl font-semibold text-navy dark:text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">By accessing or using InteliFleet, you agree to be bound by these Terms of Service.</p>

          <h2 className="text-xl font-semibold text-navy dark:text-white mt-8 mb-4">2. Use of Service</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">You agree to use InteliFleet only for lawful purposes and in accordance with these Terms.</p>

          <h2 className="text-xl font-semibold text-navy dark:text-white mt-8 mb-4">3. Account Security</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">You are responsible for maintaining the security of your account credentials.</p>

          <h2 className="text-xl font-semibold text-navy dark:text-white mt-8 mb-4">4. Data Usage</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">You retain ownership of your data. We use it only to provide and improve our services.</p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link to="/legal/privacy" className="text-primary hover:underline">View Privacy Policy →</Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;