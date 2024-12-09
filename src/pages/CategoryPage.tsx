import React from 'react';
import { jobs } from '../data/jobs';
import JobList from '../components/JobList';
import FeaturedJob from '../components/FeaturedJob';
import JobAlerts from '../components/JobAlerts';
import IndustryResources from '../components/IndustryResources';

interface CategoryPageProps {
  category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  // Find the first job in the category to use as featured
  const featuredJob = jobs.find(job => job.category === category);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">{category} Jobs</h1>
      
      {featuredJob && (
        <section className="mb-8">
          <FeaturedJob job={featuredJob} />
        </section>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <JobList selectedCategory={category} selectedState="ALL" />
        </section>
        <section className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <JobAlerts />
            <IndustryResources />
          </div>
        </section>
      </div>
    </main>
  );
};

export default CategoryPage;