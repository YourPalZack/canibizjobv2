import React from 'react';
import { Star, MapPinIcon, BriefcaseIcon, DollarSignIcon } from 'lucide-react';
import type { Job } from '../data/jobs';

interface FeaturedJobProps {
  job: Job;
}

const FeaturedJob: React.FC<FeaturedJobProps> = ({ job }) => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-md p-6 border border-green-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="relative">
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="w-16 h-16 rounded-lg mr-4"
            />
            <Star className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 fill-current" />
          </div>
          <div>
            <span className="text-sm text-green-600 font-medium">Featured Position</span>
            <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">
          Apply Now
        </button>
      </div>
      
      <p className="text-gray-700 mb-4">{job.description}</p>
      
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <div className="flex items-center">
          <MapPinIcon className="w-4 h-4 mr-1" />
          {job.location}, {job.state}
        </div>
        <div className="flex items-center">
          <BriefcaseIcon className="w-4 h-4 mr-1" />
          {job.type}
        </div>
        {job.salary && (
          <div className="flex items-center">
            <DollarSignIcon className="w-4 h-4 mr-1" />
            {job.salary}
          </div>
        )}
      </div>
    </div>
  );
}

export default FeaturedJob;