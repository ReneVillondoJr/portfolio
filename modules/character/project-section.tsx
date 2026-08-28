import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, LockKeyhole } from 'lucide-react';

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
          {projects.map((project) => {
            const isExternalProject = Boolean(project.link);

            return (
              <article
                key={project.title}
                className='group overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12]'
              >
                {/* Project Image */}
                {isExternalProject ?
                  <Link
                    href={project.link!}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`View ${project.title}`}
                    className='block'
                  >
                    <div className='relative aspect-video overflow-hidden bg-zinc-900'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-[1.02]'
                        sizes='(max-width: 1024px) 100vw, 50vw'
                      />

                      <div className='absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent' />

                      {/* External link */}
                      <div className='absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 px-3 py-1.5 text-xs text-zinc-300 opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100'>
                        <ExternalLink className='size-3.5' />
                        View Project
                      </div>

                      {/* Private */}
                      {project.private && (
                        <div className='absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-md'>
                          <LockKeyhole className='size-3.5 text-amber-400' />
                          Private Project
                        </div>
                      )}
                    </div>
                  </Link>
                : <div className='relative aspect-video overflow-hidden bg-zinc-900'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-[1.02]'
                      sizes='(max-width: 1024px) 100vw, 50vw'
                    />

                    <div className='absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent' />

                    {project.private && (
                      <div className='absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-md'>
                        <LockKeyhole className='size-3.5 text-amber-400' />
                        Private Project
                      </div>
                    )}
                  </div>
                }

                {/* Content */}
                <div className='p-6 sm:p-7'>
                  <div className='flex items-start justify-between gap-4'>
                    <div>
                      <p className='text-xs uppercase tracking-[0.2em] text-cyan-400/80'>
                        {project.category}
                      </p>

                      {isExternalProject ?
                        <Link
                          href={project.link!}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='group/title mt-2 inline-flex items-center gap-2'
                        >
                          <h3 className='text-xl font-semibold tracking-tight text-white transition-colors group-hover/title:text-cyan-400'>
                            {project.title}
                          </h3>

                          <ExternalLink className='size-4 text-zinc-600 transition-colors group-hover/title:text-cyan-400' />
                        </Link>
                      : <h3 className='mt-2 text-xl font-semibold tracking-tight text-white'>
                          {project.title}
                        </h3>
                      }
                    </div>

                    <ArrowUpRight
                      className={`mt-1 size-5 transition-all duration-200 ${
                        isExternalProject ?
                          'text-zinc-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white'
                        : 'text-zinc-800'
                      }`}
                    />
                  </div>

                  {/* Description */}
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

                  {/* Private Notice */}
                  {project.private && project.privateNotice && (
                    <div className='mt-6 border-t border-white/6 pt-5'>
                      <p className='text-xs leading-5 text-zinc-600'>
                        {project.privateNotice}
                      </p>
                    </div>
                  )}

                  {/* View Project */}
                  {(project.link || project.guestLink || project.adminLink) && (
                    <div className='mt-6 flex flex-wrap gap-4 border-t border-white/6 pt-5'>
                      {/* General project */}
                      {project.link && (
                        <Link
                          href={project.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-400'
                        >
                          View Live Project
                          <ArrowUpRight className='size-4' />
                        </Link>
                      )}

                      {/* Guest */}
                      {project.guestLink && (
                        <Link
                          href={project.guestLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-400'
                        >
                          View Guest Site
                          <ArrowUpRight className='size-4' />
                        </Link>
                      )}

                      {/* Admin */}
                      {project.adminLink && (
                        <Link
                          href={project.adminLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-400'
                        >
                          View Admin Site
                          <ArrowUpRight className='size-4' />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
