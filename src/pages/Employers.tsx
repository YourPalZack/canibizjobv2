import React from 'react';
import { Building2, Star, Users, TrendingUp } from 'lucide-react';
import PostingOptions from '../components/employers/PostingOptions';
import WhyChooseUs from '../components/employers/WhyChooseUs';
import PricingPlans from '../components/employers/PricingPlans';
import ReachMetrics from '../components/employers/ReachMetrics';

const Employers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hire Cannabis Industry Professionals
          </h1>
          <p className="text-xl text-gray-600">
            Connect with qualified candidates in the cannabis industry through our specialized job board
          </p>
        </div>

        <ReachMetrics />
        <PostingOptions />
        <PricingPlans />
        <WhyChooseUs />

        <div className="mt-12 text-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition duration-300">
            Post Your Job Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employers;