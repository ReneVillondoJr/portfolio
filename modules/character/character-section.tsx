import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
} from 'lucide-react';

import { Container } from '@/components/ui/container';
import { portfolioData } from '@/lib/data/content/profile';

export function CharacterSection() {
  return (
    <section
      id='top'
      className='
        relative min-h-screen overflow-hidden
        border-b border-border
        bg-background
      '
    >
      {/* Background */}
      <div className='pointer-events-none absolute inset-0'>
        {/* Glow */}
        <div
          className='
            absolute left-1/2 top-0
            size-175 -translate-x-1/2
            rounded-full
            bg-cyan-500/[0.045]
            blur-[140px]
          '
        />

        {/* Grid */}
        <div
          className='
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(128,128,128,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.08)_1px,transparent_1px)]
            bg-size-[72px_72px]
            mask-[linear-gradient(to_bottom,black,transparent_85%)]
          '
        />
      </div>

      <Container className='relative flex min-h-screen items-center py-32'>
        <div className='w-full'>
          {/* Availability */}
          <div className='mb-8 flex items-center gap-3'>
            <span className='relative flex size-2'>
              <span className='absolute size-full animate-ping rounded-full bg-emerald-400/60' />
              <span className='relative size-2 rounded-full bg-emerald-400' />
            </span>

            <span className='text-sm text-muted-foreground'>
              {portfolioData.availability}
            </span>
          </div>

          {/* Main */}
          <div className='max-w-5xl'>
            <p
              className='
                mb-5 text-sm font-medium uppercase
                tracking-[0.3em]
                text-cyan-600 dark:text-cyan-400
              '
            >
              Full-Stack Developer
            </p>

            <h1
              className='
                text-5xl font-bold
                tracking-[-0.055em]
                text-foreground
                sm:text-6xl
                md:text-7xl
                lg:text-[5.5rem]
                lg:leading-[0.95]
              '
            >
              Building digital
              <br />
              <span className='text-muted-foreground'>
                experiences that work.
              </span>
            </h1>

            <p
              className='
                mt-8 max-w-2xl
                text-base leading-8
                text-muted-foreground
                sm:text-lg
              '
            >
              {portfolioData.tagline}
            </p>
          </div>

          {/* Actions */}
          <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
            <a
              href='#projects'
              className='
                group inline-flex h-12
                items-center justify-center gap-2
                rounded-full
                bg-primary
                px-7
                text-sm font-semibold
                text-primary-foreground
                transition-all duration-200
                hover:-translate-y-0.5
                hover:bg-primary/90
              '
            >
              View selected work
              <ArrowUpRight
                className='
                  size-4
                  transition-transform duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                '
              />
            </a>

            <a
              href='public/resume.pdf'
              download
              className='
                inline-flex h-12
                items-center justify-center
                rounded-full
                border border-border
                bg-background
                px-7
                text-sm font-medium
                text-foreground
                transition-all duration-200
                hover:border-foreground/20
                hover:bg-accent
              '
            >
              Download CV
            </a>
          </div>

          {/* Social */}
          <div className='mt-12 flex flex-wrap items-center gap-6'>
            <a
              href='https://github.com/ReneVillondoJr'
              target='_blank'
              rel='noreferrer'
              className='
                group flex items-center gap-2
                text-sm text-muted-foreground
                transition-colors
                hover:text-foreground
              '
            >
              <Code2 className='size-4 transition-transform group-hover:-translate-y-0.5' />
              GitHub
            </a>

            <a
              href={portfolioData.social.linkedin}
              target='_blank'
              rel='noreferrer'
              className='
                group flex items-center gap-2
                text-sm text-muted-foreground
                transition-colors
                hover:text-foreground
              '
            >
              <BriefcaseBusiness className='size-4 transition-transform group-hover:-translate-y-0.5' />
              LinkedIn
            </a>

            <a
              href={`mailto:${portfolioData.contact.email}`}
              className='
                group flex items-center gap-2
                text-sm text-muted-foreground
                transition-colors
                hover:text-foreground
              '
            >
              <Mail className='size-4 transition-transform group-hover:-translate-y-0.5' />
              Email
            </a>
          </div>

          {/* Bottom information */}
          <div
            className='
              mt-24 flex flex-col justify-between
              gap-6 border-t border-border
              pt-6
              sm:flex-row sm:items-center
            '
          >
            <p className='text-xs uppercase tracking-[0.2em] text-muted-foreground/60'>
              Rene B. Villondo Jr.
            </p>

            <a
              href='#about'
              className='
                group flex items-center gap-2
                text-xs uppercase tracking-[0.2em]
                text-muted-foreground
                transition-colors
                hover:text-foreground
              '
            >
              Scroll to explore
              <ArrowDown
                className='
                  size-3
                  transition-transform
                  group-hover:translate-y-1
                '
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
