import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Github, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    products: {
      title: 'Products',
      links: [
        { name: 'Product Overview', path: '/product' },
        { name: 'Live Tracking', path: '/product/live-tracking' },
        { name: 'Fuel Intelligence', path: '/product/fuel-intelligence' },
        { name: 'Sweeping Intelligence', path: '/product/sweeping-intelligence' },
        { name: 'Driver Intelligence', path: '/product/driver-intelligence' },
        { name: 'Maintenance', path: '/product/maintenance' },
        { name: 'Security & Alerts', path: '/product/security-alerts' },
        { name: 'Reports & Analytics', path: '/product/reports-analytics' },
      ],
    },
    solutions: {
      title: 'Solutions',
      links: [
        { name: 'Individual Owners', path: '/solutions/individual-owners' },
        { name: 'Logistics & Transport', path: '/solutions/logistics-transporters' },
        { name: 'Bus Operators', path: '/solutions/bus-operators' },
        { name: 'Municipal Sweeping', path: '/solutions/municipal-sweeping' },
        { name: 'Construction & Industrial', path: '/solutions/construction-industrial' },
      ],
    },
    developers: {
      title: 'Developers',
      links: [
        { name: 'Documentation', path: '/docs' },
        { name: 'API Reference', path: '/docs/api-reference' },
        { name: 'Device Integration', path: '/docs/device-integration' },
        { name: 'Webhooks', path: '/docs' },
        { name: 'SDKs', path: '/docs' },
        { name: 'Status', path: '/support' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About', path: '/company/about' },
        { name: 'Customers', path: '/company/customers' },
        { name: 'Case Studies', path: '/company/case-studies' },
        { name: 'Blog', path: '/company/about' },
        { name: 'Careers', path: '/company/careers' },
        { name: 'Partners', path: '/company/about' },
        { name: 'Contact', path: '/company/contact' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', path: '/legal/terms' },
        { name: 'Privacy Policy', path: '/legal/privacy' },
        { name: 'Cookie Policy', path: '/legal/privacy' },
        { name: 'DPA', path: '/legal/privacy' },
        { name: 'Acceptable Use', path: '/legal/terms' },
      ],
    },
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo & Newsletter Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/brand/intelifleet-dark.png" 
                alt="InteliFleet" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 mb-4">
              Real-time fleet intelligence for every vehicle.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-navy transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
              {footerLinks.products.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm text-gray-500 hover:text-navy transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
              {footerLinks.solutions.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.solutions.links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm text-gray-500 hover:text-navy transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
              {footerLinks.developers.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.developers.links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm text-gray-500 hover:text-navy transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
              {footerLinks.company.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm text-gray-500 hover:text-navy transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
              {footerLinks.legal.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm text-gray-500 hover:text-navy transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} InteliFleet. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">
              Built in India 🇮🇳
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;