import {
  ArrowUpRight,
  Code2,
  Database,
  LockKeyhole,
  PanelsTopLeft,
} from 'lucide-react';

import { Container } from '@/components/ui/container';
import { portfolioData } from '@/lib/data/content/profile';

const capabilities = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description: 'Modern applications with Next.js, React, and TypeScript.',
    icon: Code2,
  },
  {
    number: '02',
    title: 'Backend & Data',
    description: 'REST APIs, Prisma, PostgreSQL, and database-driven systems.',
    icon: Database,
  },
  {
    number: '03',
    title: 'Authentication',
    description: 'Secure authentication, RBAC, authorization, and permissions.',
    icon: LockKeyhole,
  },
  {
    number: '04',
    title: 'UI Systems',
    description: 'Responsive interfaces with Tailwind CSS and shadcn/ui.',
    icon: PanelsTopLeft,
  },
];

export function AboutSection() {
  return (
    <section id='about' className='border-b border-border bg-background'>
      <Container className='py-28 sm:py-36'>
        <div className='grid gap-14 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16'>
          {/* Label */}
          <div>
            <p className='text-xs font-medium uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400'>
              About
            </p>

            <p className='mt-4 max-w-xs text-sm leading-7 text-muted-foreground'>
              How I approach building modern software.
            </p>
          </div>

          {/* Content */}
          <div>
            <h2 className='max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.1]'>
              Full-stack developer focused on building useful software.
            </h2>

            <p className='mt-8 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg'>
              {portfolioData.about}
            </p>

            {/* Capabilities */}
            <div className='mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2'>
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <article
                    key={capability.number}
                    className='
                      group relative
                      bg-card p-6
                      transition-colors duration-300
                      hover:bg-accent
                      sm:p-7
                    '
                  >
                    <div className='flex items-start justify-between gap-4'>
                      <div
                        className='
                          flex size-9 items-center justify-center
                          rounded-lg border border-border
                          bg-muted
                          transition-all duration-300
                          group-hover:border-cyan-600/20
                          group-hover:bg-cyan-600/5
                          dark:group-hover:border-cyan-400/20
                          dark:group-hover:bg-cyan-400/5
                        '
                      >
                        <Icon
                          className='
                            size-4 text-muted-foreground
                            transition-colors duration-300
                            group-hover:text-cyan-600
                            dark:group-hover:text-cyan-400
                          '
                        />
                      </div>

                      <span className='font-mono text-[10px] text-muted-foreground/60'>
                        {capability.number}
                      </span>
                    </div>

                    <h3 className='mt-7 text-sm font-semibold text-card-foreground'>
                      {capability.title}
                    </h3>

                    <p
                      className='
                        mt-2 max-w-sm text-xs leading-6
                        text-muted-foreground
                        transition-colors duration-300
                        group-hover:text-muted-foreground
                      '
                    >
                      {capability.description}
                    </p>
                  </article>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href='#contact'
              className='
                group mt-10 inline-flex items-center gap-2
                text-sm font-medium text-foreground
                transition-colors
                hover:text-cyan-600
                dark:hover:text-cyan-400
              '
            >
              Let&apos;s work together
              <ArrowUpRight
                className='
                  size-4
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                '
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
