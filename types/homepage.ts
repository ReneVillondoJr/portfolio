import { LucideIcon } from 'lucide-react';

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}
export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  private: boolean;
  privateNotice?: string;

  demoLogin?: {
    admin?: string;
    customer?: string;
    notice?: string;
  };

  link?: string;
  guestLink?: string;
  adminLink?: string;
};

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}
