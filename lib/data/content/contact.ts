import { Mail, Phone } from 'lucide-react';
import { ContactItem } from '@/types/homepage';
import { portfolioData } from './profile';

export const contactItems: ContactItem[] = [
  {
    label: 'Email',
    value: portfolioData.contact.email,
    href: `mailto:${portfolioData.contact.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: portfolioData.contact.phone,
    href: `tel:${portfolioData.contact.phone}`,
    icon: Phone,
  },
];
