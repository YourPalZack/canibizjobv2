import React from 'react';
import { Check } from 'lucide-react';

const PricingPlans: React.FC = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Pricing Plans
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-4xl font-bold">$199<span className="text-lg text-gray-600">/post</span></p>
          </div>
          <ul className="space-y-3">
            {[
              'Single job posting',
              '30-day listing',
              'Standard visibility',
              'Basic analytics'
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-green-500 transform scale-105">
          <div className="text-center mb-6">
            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Popular</span>
            <h3 className="text-xl font-semibold mt-2 mb-2">Featured</h3>
            <p className="text-4xl font-bold">$399<span className="text-lg text-gray-600">/post</span></p>
          </div>
          <ul className="space-y-3">
            {[
              'Premium placement',
              '30-day featured listing',
              'Social media promotion',
              'Advanced analytics',
              'Priority support',
              'Company profile highlight'
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-4xl font-bold">Custom</p>
          </div>
          <ul className="space-y-3">
            {[
              'Multiple job postings',
              'Extended listing duration',
              'Dedicated account manager',
              'Custom reporting',
              'API access',
              'Bulk posting tools'
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;