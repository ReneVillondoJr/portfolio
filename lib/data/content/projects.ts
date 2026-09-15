import { Project } from '@/types/homepage';

export const projects: Project[] = [
  {
    title: 'Financial Assistance Proposed System Access Control',
    category: 'Private Client Project',
    description:
      'Built and maintained a full-stack access control and management system for financial assistance operations. Implemented role-based authentication and permissions for Super Admin, Finance, Staff, and Branch Manager accounts, along with client and beneficiary status tracking, bulk data updates, automated data reconciliation, and Excel/Instafin data workflows using a centralized PostgreSQL database.',
    image: '/project3.png',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Prisma',
      'PostgreSQL',
      'Auth.js',
    ],
    private: true,
    privateNotice:
      'Screenshots are shown for portfolio purposes. Source code and client data are private.',
  },

  {
    title: 'LoanFlow',
    category: 'Full-Stack Web Application',
    description:
      'Built a full-stack loan origination and decisioning application covering the workflow from loan application through assessment and decision. Implemented separate customer and staff experiences with authentication, role-based access control, loan application management, credit scoring, automated decisioning, document management, loan tracking, customer portals, and administrative workflows backed by Prisma and PostgreSQL.',
    image: '/project5.png',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Prisma',
      'PostgreSQL',
      'Auth.js',
    ],
    private: false,
    demoLogin: {
      admin: 'admin@gmail.com',
      customer: 'customer@gmail.com',
      notice:
        'Demo accounts are provided for testing and demonstration purposes.',
    },
    link: 'https://loanflow-one.vercel.app/auth/login',
  },

  {
    title: 'Real Estate Property Management Platform',
    category: 'Full-Stack Web Application',
    description:
      'Built a full-stack real estate platform with separate public and administrative experiences. Implemented property listing management, agent and customer management, inquiries, appointments, reporting, activity tracking, and role-based admin workflows, together with a public property discovery experience, detailed listings, viewing requests, and an AI-powered real estate concierge.',
    images: ['/project-front-6.png', '/project-login-6.png'],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Prisma',
      'PostgreSQL',
      'Auth.js',
    ],
    private: false,
    guestLink: 'https://real-estate-property-gilt.vercel.app/',
    adminLink: 'https://real-estate-property-gilt.vercel.app/login',
    demoLogin: {
      admin: 'admin@gmail.com',
      notice:
        'Demo accounts are provided for testing and demonstration purposes.',
    },
  },

  {
    title: 'Hotel Booking System',
    category: 'Full-Stack Web Application',
    description:
      'Built a full-stack hotel booking application with separate guest and administrative workflows. Implemented room discovery, room-type and guest-capacity filtering, detailed room views, reservation workflows, authentication, room management, and booking management with Prisma and PostgreSQL.',
    image: '/project4.png',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Prisma',
      'PostgreSQL',
      'Auth.js',
    ],
    private: false,
    guestLink: 'https://hotel-booking-lake-three.vercel.app/guest',
    adminLink: 'https://hotel-booking-lake-three.vercel.app/admin',
  },

  {
    title: 'Paws Grooming',
    category: 'Web Application',
    description:
      'Built a responsive dog grooming website with service presentation, appointment booking, gallery content, and mobile-friendly interfaces. Structured the application around reusable React components and a straightforward booking experience for customers.',
    image: '/project2.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    private: false,
    link: 'https://pawsgrooming.vercel.app/',
  },
];
