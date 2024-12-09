import React from 'react';
import { LeafIcon, TrendingUpIcon, BookOpenIcon } from 'lucide-react';

const AdSpace: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-md p-6 text-white">
        <h3 className="text-xl font-bold mb-3">Premium Job Listing</h3>
        <p className="mb-4">Get 3x more visibility for your job posting</p>
        <button className="bg-white text-green-700 px-4 py-2 rounded-md hover:bg-green-50 transition duration-300">
          Upgrade Now
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <TrendingUpIcon className="w-5 h-5 mr-2 text-green-600" />
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
          <BookOpenIcon className="w-5 h-5 mr-2 text-green-600" />
          Industry Resources
        </h4>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
              → State Licensing Requirements
            </a>
          </li>
          <li>
            <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
              → Cannabis Career Guide
            </a>
          </li>
          <li>
            <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
              → Industry News & Updates
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdSpace;