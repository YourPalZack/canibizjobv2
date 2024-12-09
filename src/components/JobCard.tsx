import React from 'react';
import { MapPinIcon, BriefcaseIcon, ThumbsUpIcon, ShareIcon, DollarSignIcon } from 'lucide-react';
import type { Job } from '../data/jobs';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-4">
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{job.company}</h3>
          <p className="text-sm text-gray-500">{job.postedAt}</p>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-green-600 mb-2">{job.title}</h4>
        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
          {job.category}
        </span>
        <p className="text-gray-600 mb-4">{job.description}</p>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
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
      <div className="border-t border-gray-200 pt-4">
        <h5 className="font-medium text-gray-700 mb-2">Requirements:</h5>
        <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-gray-600">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center border-t border-gray-200 pt-4">
        <div className="flex space-x-4">
          <button className="flex items-center text-gray-600 hover:text-green-600">
            <ThumbsUpIcon className="w-5 h-5 mr-1" />
            {job.likes}
          </button>
          <button className="flex items-center text-gray-600 hover:text-green-600">
            <ShareIcon className="w-5 h-5 mr-1" />
            Share
          </button>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;