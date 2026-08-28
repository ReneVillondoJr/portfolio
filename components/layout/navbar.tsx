'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { ThemeToggle } from '@/components/ui/theme-toggle';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className='fixed inset-x-0 top-0 z-50'>
      <div className='mx-auto max-w-6xl px-6 pt-5 sm:px-8 lg:px-10'>
        {/* Desktop / Main Navigation */}
        <nav
          aria-label='Main navigation'
          className='
            flex items-center justify-between
            border border-border
            bg-background/80
            px-4 py-3
            shadow-sm
            backdrop-blur-xl
            transition-colors
            sm:px-5
          '
        >
          {/* Logo */}
          <Link
            href='/'
            onClick={closeMenu}
            className='
              text-lg font-bold tracking-tight
              text-foreground
              transition-colors
              hover:text-foreground/80
            '
          >
            RV
            <span className='text-cyan-600 dark:text-cyan-400'>.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden items-center gap-7 md:flex'>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='
                  text-sm
                  text-muted-foreground
                  transition-colors
                  hover:text-foreground
                '
              >
                {item.label}
              </Link>
            ))}

            {/* Resume */}
            <a
              href='/resume.pdf'
              download
              className='
                rounded-full
                border border-border
                px-4 py-2
                text-sm font-medium
                text-foreground
                transition-all
                hover:border-cyan-600/40
                hover:bg-cyan-600/10
                dark:hover:border-cyan-400/40
                dark:hover:bg-cyan-400/10
              '
            >
              Resume
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className='flex items-center gap-2 md:hidden'>
            <ThemeToggle />

            <button
              type='button'
              onClick={() => setOpen((value) => !value)}
              className='
                inline-flex
                size-9
                items-center
                justify-center
                rounded-md
                text-muted-foreground
                transition-colors
                hover:bg-foreground/5
                hover:text-foreground
              '
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              aria-expanded={open}
            >
              {open ?
                <X className='size-5' />
              : <Menu className='size-5' />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {open && (
          <div
            className='
              mt-2
              border border-border
              bg-background/95
              p-3
              shadow-lg
              backdrop-blur-xl
              md:hidden
            '
          >
            <nav aria-label='Mobile navigation'>
              <div className='flex flex-col gap-1'>
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className='
                      rounded-md
                      px-3 py-3
                      text-sm
                      text-muted-foreground
                      transition-colors
                      hover:bg-foreground/5
                      hover:text-foreground
                    '
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile Resume */}
                <a
                  href='/resume.pdf'
                  download
                  onClick={closeMenu}
                  className='
                    mt-2
                    rounded-md
                    border border-border
                    px-3 py-3
                    text-sm font-medium
                    text-foreground
                    transition-all
                    hover:border-cyan-600/40
                    hover:bg-cyan-600/10
                    dark:hover:border-cyan-400/40
                    dark:hover:bg-cyan-400/10
                  '
                >
                  Download Resume
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
