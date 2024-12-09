import React from 'react';
import { Users, Briefcase, Building2, TrendingUp } from 'lucide-react';

const ReachMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
        <div className="text-2xl font-bold text-gray-800">50K+</div>
        <div className="text-sm text-gray-600">Active Job Seekers</div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <Briefcase className="w-8 h-8 text-green-600 mx-auto mb-2" />
        <div className="text-2xl font-bold text-gray-800">1000+</div>
        <div className="text-sm text-gray-600">Jobs Posted Monthly</div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <Building2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
        <div className="text-2xl font-bold text-gray-800">500+</div>
        <div className="text-sm text-gray-600">Partner Companies</div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
        <div className="text-2xl font-bold text-gray-800">14 Days</div>
        <div className="text-sm text-gray-600">Avg. Time to Hire</div>
      </div>
    </div>
  );
};

export default ReachMetrics;