import Link from 'next/link';

import { portfolioData } from '@/lib/data/content/profile';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className='border-t border-border'>
      <div className='mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10'>
        <div>
          <p className='font-semibold text-foreground'>{portfolioData.name}</p>
          <p className='mt-1 text-sm text-muted-foreground'>
            {portfolioData.role}
          </p>
        </div>

        <div className='flex items-center gap-5 text-sm text-muted-foreground'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='transition hover:text-foreground'
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
