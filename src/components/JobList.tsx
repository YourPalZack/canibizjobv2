import React from 'react';
import JobCard from './JobCard';
import { jobs } from '../data/jobs';

interface JobListProps {
  selectedCategory: string;
  selectedState: string;
}

const JobList: React.FC<JobListProps> = ({ selectedCategory, selectedState }) => {
  const filteredJobs = jobs.filter(job => {
    const categoryMatch = selectedCategory === 'All' || job.category === selectedCategory;
    const stateMatch = selectedState === 'ALL' || job.state === selectedState;
    return categoryMatch && stateMatch;
  });

  return (
    <div className="space-y-6">
      {filteredJobs.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-600">No jobs found matching your criteria.</p>
        </div>
      ) : (
        filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      )}
    </div>
  );
};

export default JobList;