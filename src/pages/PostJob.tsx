import React from 'react';
import JobPostingForm from '../components/JobPostingForm';

const PostJob: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Post a Job</h1>
            <p className="text-gray-600 mt-2">
              Find the perfect candidate for your cannabis industry position
            </p>
          </div>
          
          <JobPostingForm />
          
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Post with CannaBiz Careers?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Industry Focus</h3>
                <p className="text-gray-600">
                  Connect with candidates who understand the unique requirements of the cannabis industry
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Qualified Talent</h3>
                <p className="text-gray-600">
                  Access a pool of experienced professionals specifically interested in cannabis careers
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Compliance First</h3>
                <p className="text-gray-600">
                  All job postings are reviewed to ensure compliance with state and local regulations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;