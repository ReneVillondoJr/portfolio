import { ArrowUpRight } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { portfolioData } from '@/lib/data/content/profile';

export function AboutSection() {
  return (
    <section id='about' className='border-b border-white/6 bg-zinc-950'>
      <Container className='py-28 sm:py-36'>
        <div className='grid gap-16 lg:grid-cols-[0.3fr_0.7fr]'>
          {/* Label */}
          <div>
            <p className='text-xs font-medium uppercase tracking-[0.3em] text-cyan-400'>
              About
            </p>
          </div>

          {/* Content */}
          <div>
            <h2 className='max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
              I enjoy building useful things that are simple to understand and
              easy to use.
            </h2>

            <p className='mt-8 max-w-3xl text-base leading-8 text-zinc-500 sm:text-lg'>
              {portfolioData.about}
            </p>

            <div className='mt-10'>
              <a
                href='#contact'
                className='group inline-flex items-center gap-2 text-sm font-medium text-white'
              >
                Let&apos;s work together
                <ArrowUpRight className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
