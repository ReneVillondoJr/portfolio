'use client';

import { useEffect, useState } from 'react';
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className='fixed inset-x-0 top-0 z-50'>
      <div className='mx-auto max-w-6xl px-6 pt-5 sm:px-8 lg:px-10'>
        <div
          className={`flex items-center justify-between gap-4 transition-all duration-300 ${
            scrolled ? 'py-0' : 'py-1'
          }`}
        >
          {/* Logo */}
          <Link
            href='/'
            onClick={closeMenu}
            className='flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background/80 text-sm font-bold tracking-tight text-foreground backdrop-blur-xl transition-colors hover:border-cyan-600/30 dark:hover:border-cyan-400/30'
          >
            RV
            <span className='text-cyan-600 dark:text-cyan-400'>.</span>
          </Link>

          {/* Centered pill navigation */}
          <nav
            aria-label='Main navigation'
            className='hidden items-center gap-1 rounded-full border border-border bg-background/80 p-1.5 shadow-sm backdrop-blur-xl transition-colors md:flex'
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground'
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className='hidden items-center gap-2 md:flex'>
            {/* Resume */}
            <a
              href='/resume.pdf'
              download
              className='rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-xl transition-all hover:border-cyan-600/40 hover:bg-cyan-600/10 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/10'
            >
              Resume
            </a>

            {/* Theme */}
            <div className='rounded-full border border-border bg-background/80 backdrop-blur-xl'>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className='flex items-center gap-2 md:hidden'>
            {/* Theme */}
            <div className='rounded-full border border-border bg-background/80 backdrop-blur-xl'>
              <ThemeToggle />
            </div>

            {/* Menu */}
            <button
              type='button'
              onClick={() => setOpen((value) => !value)}
              className='inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur-xl transition-colors hover:border-cyan-600/30 hover:text-foreground dark:hover:border-cyan-400/30'
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              aria-expanded={open}
            >
              {open ?
                <X className='size-5' />
              : <Menu className='size-5' />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {open && (
          <div className='mt-2 rounded-2xl border border-border bg-background/95 p-3 shadow-lg backdrop-blur-xl md:hidden'>
            <nav aria-label='Mobile navigation'>
              <div className='flex flex-col gap-1'>
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className='rounded-xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground'
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile resume */}
                <a
                  href='/resume.pdf'
                  download
                  onClick={closeMenu}
                  className='mt-2 rounded-xl border border-border px-3 py-3 text-sm font-medium text-foreground transition-all hover:border-cyan-600/40 hover:bg-cyan-600/10 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/10'
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
