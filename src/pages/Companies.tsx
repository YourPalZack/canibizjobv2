import React, { useState } from 'react';
import { Building2, PlusCircle } from 'lucide-react';
import CompanyCard from '../components/CompanyCard';
import CompanySubmissionForm from '../components/CompanySubmissionForm';
import { companies } from '../data/companies';

const Companies: React.FC = () => {
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Building2 className="w-8 h-8 text-green-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">Cannabis Companies Directory</h1>
          </div>
          <button
            onClick={() => setShowSubmissionForm(!showSubmissionForm)}
            className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            {showSubmissionForm ? 'View Directory' : 'Add Company'}
          </button>
        </div>

        {showSubmissionForm ? (
          <CompanySubmissionForm />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Companies;