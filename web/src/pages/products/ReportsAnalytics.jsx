import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, FileText, Download, PieChart, TrendingUp, Calendar } from 'lucide-react';

const ReportsAnalytics = () => {
  const features = [
    {
      icon: FileText,
      title: 'MIS Reports',
      description: 'Standard management reports for daily, weekly, and monthly fleet performance.',
    },
    {
      icon: PieChart,
      title: 'Utilization Metrics',
      description: 'Track vehicle utilization, idle time, and efficiency across your fleet.',
    },
    {
      icon: Download,
      title: 'Data Exports',
      description: 'Export data in Excel, PDF, or CSV formats for further analysis.',
    },
    {
      icon: BarChart3,
      title: 'Custom Dashboards',
      description: 'Build personalized dashboards with the metrics that matter to you.',
    },
  ];

  const reportTypes = [
    { name: 'Vehicle Summary', desc: 'Overview of all vehicles and their status', freq: 'Daily/Weekly/Monthly' },
    { name: 'Trip Report', desc: 'Detailed trip logs with routes and stoppages', freq: 'Daily' },
    { name: 'Fuel Report', desc: 'Fuel consumption, efficiency, and alerts', freq: 'Daily/Weekly' },
    { name: 'Driver Performance', desc: 'Driver scores and behavior summary', freq: 'Weekly/Monthly' },
    { name: 'Maintenance Report', desc: 'Upcoming and overdue services', freq: 'Weekly' },
    { name: 'Alert Report', desc: 'Summary of all alerts and violations', freq: 'Daily/Weekly' },
    { name: 'Geofence Report', desc: 'Entry/exit logs for all geofences', freq: 'Daily' },
    { name: 'Custom Report', desc: 'Build your own with filters and fields', freq: 'On-demand' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-full text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4 mr-2" />
                Reports & Analytics
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-6">
                Reports & Analytics
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Comprehensive reporting suite with MIS reports, utilization metrics, custom filters, and exports. Make data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/company/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-navy dark:bg-primary text-white dark:text-navy font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <p className="text-2xl font-bold text-navy dark:text-white">Fleet Efficiency</p>
                <p className="text-green-600 dark:text-green-400 font-medium">+12% this month</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Vehicle Utilization', value: '87%', trend: 'up' },
                  { label: 'Fuel Efficiency', value: '12.5 km/l', trend: 'up' },
                  { label: 'Driver Score Avg', value: '84/100', trend: 'up' },
                  { label: 'On-time Delivery', value: '94%', trend: 'stable' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                    <div className="flex items-center">
                      <span className="font-semibold text-navy dark:text-white mr-2">{item.value}</span>
                      <span className={`text-xs ${
                        item.trend === 'up' ? 'text-green-500' : 
                        item.trend === 'down' ? 'text-red-500' : 
                        'text-gray-400'
                      }`}>
                        {item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '→'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Insights that drive decisions</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Types */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Report library</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportTypes.map((report) => (
              <div key={report.name} className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-100 dark:border-gray-600">
                <h3 className="font-semibold text-navy dark:text-white mb-2">{report.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{report.desc}</p>
                <span className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="w-3 h-3 mr-1" />
                  {report.freq}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Custom dashboards</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Build the perfect view for your role</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { role: 'Fleet Manager', focus: 'Utilization, costs, alerts' },
              { role: 'Operations', focus: 'Routes, deliveries, delays' },
              { role: 'Safety Officer', focus: 'Driver scores, incidents' },
              { role: 'Maintenance', focus: 'Service schedules, downtime' },
              { role: 'Executive', focus: 'KPIs, trends, ROI' },
              { role: 'Driver', focus: 'Personal score, trips, feedback' },
            ].map((item) => (
              <div key={item.role} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <h3 className="font-semibold text-navy dark:text-white mb-1">{item.role}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy dark:bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Unlock your fleet data</h2>
          <p className="text-lg text-gray-300 mb-8">
            Get the insights you need to optimize your operations.
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

export default ReportsAnalytics;