import { Mail, Phone, type LucideIcon } from 'lucide-react';

import { portfolioData } from './profile';

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

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
