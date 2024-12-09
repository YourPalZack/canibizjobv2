import React from 'react';
import { FileText, Building2, Star } from 'lucide-react';

const PostingOptions: React.FC = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Posting Options
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <FileText className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-xl font-semibold">Standard Job Posting</h3>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li>• 30-day listing duration</li>
            <li>• Basic job description and requirements</li>
            <li>• Company profile integration</li>
            <li>• Applicant tracking</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-green-500">
          <div className="flex items-center mb-4">
            <Star className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-xl font-semibold">Featured Job Listing</h3>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li>• Premium placement for 30 days</li>
            <li>• Highlighted in search results</li>
            <li>• Featured in job alert emails</li>
            <li>• Social media promotion</li>
            <li>• Priority support</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Building2 className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-xl font-semibold">Company Directory</h3>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li>• Enhanced company profile</li>
            <li>• Brand visibility</li>
            <li>• Showcase company culture</li>
            <li>• Link to active job listings</li>
            <li>• Industry networking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostingOptions;