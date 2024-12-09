export interface Company {
  id: number;
  name: string;
  logo: string;
  description: string;
  location: string;
  type: string;
  founded: string;
  employees: string;
  website: string;
  licenses: string[];
  specialties: string[];
}

export const companies: Company[] = [
  {
    id: 1,
    name: "Green Horizons Cultivation",
    logo: "https://source.unsplash.com/random/100x100?cannabis,greenhouse",
    description: "Leading cultivator of premium cannabis strains using sustainable growing practices.",
    location: "Boulder, CO",
    type: "Cultivation",
    founded: "2015",
    employees: "50-100",
    website: "https://greenhorizons.example",
    licenses: ["Cultivation", "Processing"],
    specialties: ["Indoor Growing", "Organic", "Sustainable Practices"]
  },
  {
    id: 2,
    name: "Wellness Dispensary Co.",
    logo: "https://source.unsplash.com/random/100x100?store,medical",
    description: "Premium dispensary chain focused on medical cannabis and patient education.",
    location: "Portland, OR",
    type: "Retail",
    founded: "2018",
    employees: "20-50",
    website: "https://wellnessdispensary.example",
    licenses: ["Retail", "Medical"],
    specialties: ["Medical Cannabis", "Patient Education", "CBD Products"]
  },
  {
    id: 3,
    name: "Pure Extracts Labs",
    logo: "https://source.unsplash.com/random/100x100?laboratory,science",
    description: "State-of-the-art extraction facility producing premium cannabis concentrates.",
    location: "Oakland, CA",
    type: "Processing",
    founded: "2019",
    employees: "10-20",
    website: "https://pureextracts.example",
    licenses: ["Processing", "Manufacturing"],
    specialties: ["Concentrates", "Edibles", "Research"]
  }
];