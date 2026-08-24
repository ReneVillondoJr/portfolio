import { ArrowUpRight, LockKeyhole } from 'lucide-react';

import { Container } from '@/components/ui/container';

import { projects } from '@/lib/data/content/projects';

export function ProjectsSection() {
  return (
    <section id='projects' className='border-b border-white/6 bg-zinc-950'>
      <Container className='py-28 sm:py-36'>
        {/* Header */}
        <div className='max-w-2xl'>
          <p className='text-xs font-medium uppercase tracking-[0.3em] text-cyan-400'>
            Projects
          </p>

          <h2 className='mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
            Selected work.
          </h2>

          <p className='mt-5 text-sm leading-7 text-zinc-500 sm:text-base'>
            A selection of projects and applications I&apos;ve built using
            modern web technologies.
          </p>
        </div>

        {/* Projects */}
        <div className='mt-14 grid gap-8 lg:grid-cols-2'>
          {projects.map((project) => (
            <article
              key={project.title}
              className='group overflow-hidden rounded-2xl border border-white/[0.07] bg-white/2 transition-all duration-300 hover:-translate-y-1 hover:border-white/12'
            >
              {/* Project image */}
              <div className='relative aspect-16/10 overflow-hidden bg-zinc-900'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]'
                />

                <div className='absolute inset-0 bg-linear-to-t from-zinc-950/70 via-transparent to-transparent' />

                {project.private && (
                  <div className='absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-md'>
                    <LockKeyhole className='size-3.5 text-amber-400' />
                    Private Project
                  </div>
                )}
              </div>

              {/* Content */}
              <div className='p-6 sm:p-7'>
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <p className='text-xs uppercase tracking-[0.2em] text-cyan-400/80'>
                      {project.category}
                    </p>

                    <h3 className='mt-2 text-xl font-semibold tracking-tight text-white'>
                      {project.title}
                    </h3>
                  </div>

                  <ArrowUpRight className='mt-1 size-5 text-zinc-700 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white' />
                </div>

                <p className='mt-5 text-sm leading-7 text-zinc-500'>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className='mt-6 flex flex-wrap gap-x-4 gap-y-2'>
                  {project.technologies.map((technology) => (
                    <span key={technology} className='text-xs text-zinc-600'>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Private notice */}
                {project.private && project.privateNotice && (
                  <div className='mt-6 border-t border-white/6 pt-5'>
                    <p className='text-xs leading-5 text-zinc-600'>
                      {project.privateNotice}
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
