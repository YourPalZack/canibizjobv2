import React from 'react';
import { Filter, MapPin } from 'lucide-react';
import { states } from '../utils/states';

interface FilterBarProps {
  selectedCategory: string;
  selectedState: string;
  onCategoryChange: (category: string) => void;
  onStateChange: (state: string) => void;
}

const categories = ['All', 'Cultivation', 'Retail', 'Processing', 'Marketing', 'Administration'];

const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  selectedState,
  onCategoryChange,
  onStateChange,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row gap-4">
      <div className="flex-1 flex items-center gap-2">
        <Filter className="w-5 h-5 text-gray-400" />
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex-1 flex items-center gap-2">
        <MapPin className="w-5 h-5 text-gray-400" />
        <select
          value={selectedState}
          onChange={(e) => onStateChange(e.target.value)}
          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {states.map((state) => (
            <option key={state.code} value={state.code}>
              {state.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;