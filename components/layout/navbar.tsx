'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navigation = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className='fixed inset-x-0 top-0 z-50'>
      <div className='mx-auto max-w-6xl px-6 pt-5 sm:px-8 lg:px-10'>
        <nav className='flex items-center justify-between border border-white/10 bg-zinc-950/80 px-4 py-3 backdrop-blur-xl sm:px-5'>
          <Link
            href='/'
            className='text-lg font-bold tracking-tight text-white'
          >
            RV<span className='text-cyan-400'>.</span>
          </Link>

          <div className='hidden items-center gap-8 md:flex'>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='text-sm text-zinc-400 transition hover:text-white'
              >
                {item.label}
              </Link>
            ))}

            <a
              href='/VillondoCV.pdf'
              download
              className='rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10'
            >
              Resume
            </a>
          </div>

          <button
            type='button'
            onClick={() => setOpen((value) => !value)}
            className='text-zinc-300 md:hidden'
            aria-label='Toggle navigation'
          >
            {open ?
              <X className='size-5' />
            : <Menu className='size-5' />}
          </button>
        </nav>

        {open && (
          <div className='mt-2 border border-white/10 bg-zinc-950/95 p-4 backdrop-blur-xl md:hidden'>
            <div className='flex flex-col gap-1'>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className='px-3 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white'
                >
                  {item.label}
                </Link>
              ))}

              <a
                href='/VillondoCV.pdf'
                download
                className='mt-2 border border-white/10 px-3 py-3 text-sm font-medium text-white'
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
