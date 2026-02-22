import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, FileText, Download, Filter, Calendar } from 'lucide-react';

const ReportsAnalytics = () => {
  const features = [
    {
      icon: FileText,
      title: 'MIS Reports',
      description: 'Management reports with key metrics and KPIs.',
    },
    {
      icon: Filter,
      title: 'Custom Filters',
      description: 'Filter data by vehicle, driver, date range, and more.',
    },
    {
      icon: Download,
      title: 'Data Exports',
      description: 'Export reports in PDF, Excel, and CSV formats.',
    },
    {
      icon: Calendar,
      title: 'Scheduled Reports',
      description: 'Automated daily, weekly, or monthly report delivery.',
    },
  ];

  const reportTypes = [
    { name: 'Vehicle Utilization', description: 'Usage hours, idle time, efficiency metrics' },
    { name: 'Trip Summary', description: 'Distance, duration, stoppages by trip' },
    { name: 'Fuel Summary', description: 'Consumption, efficiency, cost analysis' },
    { name: 'Driver Performance', description: 'Behavior scores, violations, rankings' },
    { name: 'Geofence Report', description: 'Entry/exit logs with duration' },
    { name: 'Alert Summary', description: 'All alerts with severity and resolution' },
    { name: 'Maintenance Log', description: 'Service history and upcoming schedules' },
    { name: 'Cost Analysis', description: 'Operating costs by vehicle and category' },
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-2xl mb-6">
              <BarChart3 className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Reports & Analytics
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive reporting suite with customizable dashboards. Turn fleet data into actionable insights.
            </p>
            <Link
              to="/company/contact"
              className="inline-flex items-center px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
            <BarChart3 className="h-24 w-24 text-gray-300" />
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

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-navy mb-8">Available Reports</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reportTypes.map((r) => (
              <div key={r.name} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-navy mb-1">{r.name}</h3>
                <p className="text-sm text-gray-600">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;