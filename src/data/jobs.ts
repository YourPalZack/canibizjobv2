export interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  description: string;
  location: string;
  state: string;
  type: string;
  postedAt: string;
  likes: number;
  category: string;
  requirements: string[];
  salary?: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: 'Master Grower',
    company: 'Green Leaf Cultivators',
    logo: 'https://source.unsplash.com/random/100x100?cannabis,plant',
    description: 'Seeking an experienced Master Grower to oversee our state-of-the-art indoor cultivation facility. Must have extensive knowledge of cannabis cultivation, pest management, and compliance regulations.',
    location: 'Denver',
    state: 'CO',
    type: 'Full-time',
    postedAt: '2 days ago',
    likes: 42,
    category: 'Cultivation',
    requirements: [
      '5+ years of commercial cannabis cultivation experience',
      'Deep knowledge of plant genetics and breeding',
      'Pest management expertise',
      'State licensing requirements'
    ],
    salary: '$80,000 - $120,000'
  },
  {
    id: 2,
    title: 'Dispensary Manager',
    company: 'Wellness Botanicals',
    logo: 'https://source.unsplash.com/random/100x100?store,retail',
    description: 'Leading dispensary seeking a manager to oversee daily operations, ensure compliance, and maintain exceptional customer service standards.',
    location: 'Los Angeles',
    state: 'CA',
    type: 'Full-time',
    postedAt: '1 week ago',
    likes: 35,
    category: 'Retail',
    requirements: [
      'Previous dispensary management experience',
      'Strong knowledge of cannabis products',
      'Inventory management skills',
      'Customer service excellence'
    ],
    salary: '$65,000 - $85,000'
  },
  {
    id: 3,
    title: 'Cannabis Extract Technician',
    company: 'Pure Extracts',
    logo: 'https://source.unsplash.com/random/100x100?laboratory',
    description: 'Join our extraction team in producing high-quality cannabis concentrates using state-of-the-art CO2 and hydrocarbon extraction equipment.',
    location: 'Portland',
    state: 'OR',
    type: 'Full-time',
    postedAt: '3 days ago',
    likes: 29,
    category: 'Processing',
    requirements: [
      'Experience with extraction equipment',
      'Laboratory background',
      'Understanding of safety protocols',
      'Quality control experience'
    ],
    salary: '$55,000 - $75,000'
  }
];