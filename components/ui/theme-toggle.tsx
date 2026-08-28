'use client';

import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div
        className='
          inline-flex
          size-9
          items-center
          justify-center
          rounded-md
          border
          border-border
          bg-background
        '
        aria-hidden='true'
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type='button'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='
        inline-flex
        size-9
        items-center
        justify-center
        rounded-md
        border
        border-border
        bg-background
        text-muted-foreground
        transition-all
        duration-200
        hover:bg-foreground/5
        hover:text-foreground
      '
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ?
        <Sun className='size-4' />
      : <Moon className='size-4' />}
    </button>
  );
}
