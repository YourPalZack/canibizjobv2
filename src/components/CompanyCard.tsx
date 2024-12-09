import React from 'react';
import { Globe, MapPin, Users, Calendar, Award } from 'lucide-react';
import type { Company } from '../data/companies';

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-4">
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          className="w-16 h-16 rounded-lg mr-4 object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{company.name}</h3>
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            {company.type}
          </span>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{company.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          {company.location}
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-2" />
          {company.employees}
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          Founded {company.founded}
        </div>
        <div className="flex items-center text-gray-600">
          <Globe className="w-4 h-4 mr-2" />
          <a href={company.website} className="text-green-600 hover:text-green-700">
            Website
          </a>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="mb-3">
          <h4 className="font-medium text-gray-700 mb-2 flex items-center">
            <Award className="w-4 h-4 mr-2" />
            Licenses
          </h4>
          <div className="flex flex-wrap gap-2">
            {company.licenses.map((license) => (
              <span
                key={license}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {license}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-700 mb-2">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {company.specialties.map((specialty) => (
              <span
                key={specialty}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;