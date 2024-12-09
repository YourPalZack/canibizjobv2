import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface JobsDropdownProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const JobsDropdown: React.FC<JobsDropdownProps> = ({ currentPage, onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = ['Cultivation', 'Retail', 'Processing', 'Marketing', 'Administration'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 text-gray-600 hover:text-green-600 ${
          currentPage.startsWith('category-') ? 'text-green-600' : ''
        }`}
      >
        <span>Find Jobs</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <button
            onClick={() => {
              onPageChange('jobs');
              setIsOpen(false);
            }}
            className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
              currentPage === 'jobs' ? 'bg-gray-50' : ''
            }`}
          >
            All Jobs
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                onPageChange(`category-${category.toLowerCase()}`);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                currentPage === `category-${category.toLowerCase()}` ? 'bg-gray-50' : ''
              }`}
            >
              {category} Jobs
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobsDropdown;