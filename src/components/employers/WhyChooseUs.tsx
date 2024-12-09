import React from 'react';
import { Target, Users, Shield, Zap } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-12 bg-white rounded-lg shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Why Choose CannaBiz Careers?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Industry Focus</h3>
            <p className="text-gray-600">
              Reach candidates specifically interested in cannabis industry careers
            </p>
          </div>

          <div className="text-center">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Qualified Talent</h3>
            <p className="text-gray-600">
              Access pre-screened candidates with relevant industry experience
            </p>
          </div>

          <div className="text-center">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Compliance First</h3>
            <p className="text-gray-600">
              All listings reviewed for compliance with state regulations
            </p>
          </div>

          <div className="text-center">
            <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick Results</h3>
            <p className="text-gray-600">
              Average time-to-hire of just 14 days for featured listings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;