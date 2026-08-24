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
    <section className='relative min-h-screen overflow-hidden border-b border-white/6 bg-zinc-950'>
      {/* Background */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute left-1/2 top-0 size-175 -translate-x-1/2 rounded-full bg-cyan-500/4.5 blur-[140px]' />

        <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[72px_72px] mask-[linear-gradient(to_bottom,black,transparent_85%)]' />
      </div>

      <Container className='relative flex min-h-screen items-center py-32'>
        <div className='w-full'>
          {/* Availability */}
          <div className='mb-8 flex items-center gap-3'>
            <span className='relative flex size-2'>
              <span className='absolute size-full animate-ping rounded-full bg-emerald-400/60' />
              <span className='relative size-2 rounded-full bg-emerald-400' />
            </span>

            <span className='text-sm text-zinc-500'>
              {portfolioData.availability}
            </span>
          </div>

          {/* Main */}
          <div className='max-w-5xl'>
            <p className='mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400'>
              Full-Stack Developer
            </p>

            <h1 className='text-5xl font-bold tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[0.95]'>
              Building digital
              <br />
              <span className='text-zinc-500'>experiences that work.</span>
            </h1>

            <p className='mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg'>
              {portfolioData.tagline}
            </p>
          </div>

          {/* Actions */}
          <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
            <a
              href='#projects'
              className='group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-200'
            >
              View selected work
              <ArrowUpRight className='size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
            </a>

            <a
              href='/VillondoCV.pdf'
              download
              className='inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-7 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-white/20 hover:bg-white/4 hover:text-white'
            >
              Download CV
            </a>
          </div>

          {/* Social */}
          <div className='mt-12 flex flex-wrap items-center gap-6'>
            <a
              href={portfolioData.social.github}
              target='_blank'
              rel='noreferrer'
              className='group flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-white'
            >
              <Code2 className='size-4 transition-transform group-hover:-translate-y-0.5' />
              GitHub
            </a>

            <a
              href={portfolioData.social.linkedin}
              target='_blank'
              rel='noreferrer'
              className='group flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-white'
            >
              <BriefcaseBusiness className='size-4 transition-transform group-hover:-translate-y-0.5' />
              LinkedIn
            </a>

            <a
              href={`mailto:${portfolioData.contact.email}`}
              className='group flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-white'
            >
              <Mail className='size-4 transition-transform group-hover:-translate-y-0.5' />
              Email
            </a>
          </div>

          {/* Bottom information */}
          <div className='mt-24 flex flex-col justify-between gap-6 border-t border-white/6 pt-6 sm:flex-row sm:items-center'>
            <p className='text-xs uppercase tracking-[0.2em] text-zinc-700'>
              Rene B. Villondo Jr.
            </p>

            <a
              href='#about'
              className='group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-zinc-300'
            >
              Scroll to explore
              <ArrowDown className='size-3 transition-transform group-hover:translate-y-1' />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
