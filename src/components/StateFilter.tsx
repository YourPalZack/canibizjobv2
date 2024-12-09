import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { states } from '../utils/states';

interface StateFilterProps {
  selectedState: string;
  onStateChange: (state: string) => void;
}

const StateFilter: React.FC<StateFilterProps> = ({ selectedState, onStateChange }) => {
  return (
    <div className="flex items-center space-x-2 mb-6 bg-white p-4 rounded-lg shadow-sm">
      <MapPinIcon className="w-5 h-5 text-gray-500" />
      <select
        value={selectedState}
        onChange={(e) => onStateChange(e.target.value)}
        className="flex-grow px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        {states.map((state) => (
          <option key={state.code} value={state.code}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StateFilter;