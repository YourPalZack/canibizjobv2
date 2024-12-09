import React from 'react';
import { BookOpen, Scale, TrendingUp, GraduationCap } from 'lucide-react';

const IndustryResources: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
          Industry Insights
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Market Growth</h4>
            <p className="text-sm text-gray-600">Cannabis industry jobs grew by 33% in the past year</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Top Skills</h4>
            <p className="text-sm text-gray-600">Most in-demand: Cultivation, Compliance, Retail Management</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Scale className="w-5 h-5 mr-2 text-green-600" />
          Compliance Resources
        </h4>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
              → State Licensing Requirements
            </a>
          </li>
          <li>
            <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
              → Regulatory Updates
            </a>
          </li>
          <li>
            <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
              → Compliance Guidelines
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <GraduationCap className="w-5 h-5 mr-2 text-green-600" />
          Education & Training
        </h4>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
              → Cannabis Career Guide
            </a>
          </li>
          <li>
            <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
              → Certification Programs
            </a>
          </li>
          <li>
            <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
              → Industry Workshops
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2 text-green-600" />
          Latest Resources
        </h4>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
              → Industry Reports
            </a>
          </li>
          <li>
            <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
              → Market Analysis
            </a>
          </li>
          <li>
            <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
              → Best Practices
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IndustryResources;