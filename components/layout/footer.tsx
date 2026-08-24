import Link from 'next/link';

import { portfolioData } from '@/lib/data/content/profile';

export function Footer() {
  return (
    <footer className='border-t border-white/10'>
      <div className='mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10'>
        <div>
          <p className='font-semibold text-white'>{portfolioData.name}</p>

          <p className='mt-1 text-sm text-zinc-500'>{portfolioData.role}</p>
        </div>

        <div className='flex items-center gap-5 text-sm text-zinc-500'>
          <Link href='#about' className='transition hover:text-white'>
            About
          </Link>

          <Link href='#projects' className='transition hover:text-white'>
            Projects
          </Link>

          <Link href='#contact' className='transition hover:text-white'>
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
