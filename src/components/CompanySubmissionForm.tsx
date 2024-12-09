import React, { useState } from 'react';
import { Building2, MapPin, Globe, Users, Calendar } from 'lucide-react';

interface CompanyFormData {
  name: string;
  description: string;
  location: string;
  type: string;
  founded: string;
  employees: string;
  website: string;
  licenses: string[];
  specialties: string[];
}

const initialFormData: CompanyFormData = {
  name: '',
  description: '',
  location: '',
  type: 'Cultivation',
  founded: '',
  employees: '',
  website: '',
  licenses: [''],
  specialties: [''],
};

const CompanySubmissionForm: React.FC = () => {
  const [formData, setFormData] = useState<CompanyFormData>(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayInputChange = (index: number, value: string, field: 'licenses' | 'specialties') => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field: 'licenses' | 'specialties') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ''],
    }));
  };

  const removeArrayItem = (index: number, field: 'licenses' | 'specialties') => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <Building2 className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Company Details</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Company Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                Website
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                Company Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              >
                <option value="Cultivation">Cultivation</option>
                <option value="Retail">Retail</option>
                <option value="Processing">Processing</option>
                <option value="Distribution">Distribution</option>
                <option value="Testing">Testing</option>
              </select>
            </div>

            <div>
              <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
                Number of Employees
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  id="employees"
                  name="employees"
                  value={formData.employees}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select range</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="founded" className="block text-sm font-medium text-gray-700 mb-1">
                Founded Year
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="founded"
                  name="founded"
                  value={formData.founded}
                  onChange={handleInputChange}
                  placeholder="YYYY"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Licenses
            </label>
            {formData.licenses.map((license, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={license}
                  onChange={(e) => handleArrayInputChange(index, e.target.value, 'licenses')}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Add a license"
                  required
                />
                {formData.licenses.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem(index, 'licenses')}
                    className="px-3 py-2 text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('licenses')}
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              + Add License
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specialties
            </label>
            {formData.specialties.map((specialty, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={specialty}
                  onChange={(e) => handleArrayInputChange(index, e.target.value, 'specialties')}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Add a specialty"
                  required
                />
                {formData.specialties.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem(index, 'specialties')}
                    className="px-3 py-2 text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('specialties')}
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              + Add Specialty
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300"
        >
          Submit Company
        </button>
      </div>
    </form>
  );
};

export default CompanySubmissionForm;