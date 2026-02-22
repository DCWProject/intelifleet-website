import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navGroups = [
    {
      label: 'PRODUCT',
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
    {
      label: 'SOLUTIONS',
      links: [
        { name: 'Solutions Overview', path: '/solutions' },
        { name: 'Individual Owners', path: '/solutions/individual-owners' },
        { name: 'Logistics & Transport', path: '/solutions/logistics-transporters' },
        { name: 'Bus Operators', path: '/solutions/bus-operators' },
        { name: 'Municipal Sweeping', path: '/solutions/municipal-sweeping' },
        { name: 'Construction & Industrial', path: '/solutions/construction-industrial' },
      ],
    },
    {
      label: 'APPS',
      links: [
        { name: 'Mobile Apps', path: '/apps' },
        { name: 'iOS App', path: '/apps/ios' },
        { name: 'Android App', path: '/apps/android' },
      ],
    },
    {
      label: 'DEVELOPERS',
      links: [
        { name: 'Documentation', path: '/docs' },
        { name: 'Getting Started', path: '/docs/getting-started' },
        { name: 'API Reference', path: '/docs/api-reference' },
        { name: 'Device Integration', path: '/docs/device-integration' },
      ],
    },
    {
      label: 'COMPANY',
      links: [
        { name: 'About', path: '/company/about' },
        { name: 'Customers', path: '/company/customers' },
        { name: 'Case Studies', path: '/company/case-studies' },
        { name: 'Careers', path: '/company/careers' },
        { name: 'Contact', path: '/company/contact' },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/brand/intelifleet-dark.png" 
              alt="InteliFleet" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(group.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-3 py-2 text-sm font-medium text-navy hover:text-primary transition-colors uppercase tracking-wide">
                  {group.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === group.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 animate-in fade-in duration-200">
                    {group.links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/pricing"
              className="px-4 py-2 text-sm font-medium text-navy hover:text-primary transition-colors"
            >
              View Pricing
            </Link>
            <Link
              to="/company/contact"
              className="px-4 py-2 text-sm font-medium bg-navy text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-navy"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="py-4 space-y-4">
              {navGroups.map((group) => (
                <div key={group.label} className="px-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {group.label}
                  </p>
                  <div className="space-y-1">
                    {group.links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="block py-1 text-sm text-gray-600 hover:text-navy"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="px-4 pt-4 border-t border-gray-100 space-y-2">
                <Link
                  to="/pricing"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-2 text-sm font-medium text-navy border border-navy rounded-lg"
                >
                  View Pricing
                </Link>
                <Link
                  to="/company/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-2 text-sm font-medium bg-navy text-white rounded-lg"
                >
                  Get a Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;