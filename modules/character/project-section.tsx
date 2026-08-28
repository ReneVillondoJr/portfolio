import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, LockKeyhole } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { projects, type Project } from '@/lib/data/content/projects';

function ProjectMedia({ project, index }: { project: Project; index: number }) {
  return (
    <div className='relative aspect-video overflow-hidden bg-muted'>
      <Image
        src={project.image}
        alt={project.title}
        fill
        className='object-cover transition-transform duration-700 group-hover:scale-[1.035]'
        sizes='(max-width: 1024px) 100vw, 50vw'
      />

      <div className='absolute inset-0 bg-gradient-to-t from-background/75 via-background/10 to-transparent' />

      {/* Number */}
      <div className='absolute left-5 top-5 flex size-8 items-center justify-center rounded-full border border-border bg-background/70 font-mono text-[10px] text-muted-foreground backdrop-blur-md'>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Private */}
      {project.private && (
        <div className='absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs text-foreground backdrop-blur-md'>
          <LockKeyhole className='size-3.5 text-amber-400' />
          Private Project
        </div>
      )}

      {/* View Project */}
      {project.link && (
        <div className='absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs text-foreground opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100'>
          <ExternalLink className='size-3.5' />
          View Project
        </div>
      )}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id='projects'
      className='relative overflow-hidden border-b border-border bg-background'
    >
      {/* Section Glow */}
      <div className='pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.05),transparent_70%)]' />

      <Container className='relative py-28 sm:py-36'>
        {/* Header */}
        <div className='max-w-2xl'>
          <p className='text-xs font-medium uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400'>
            Projects
          </p>

          <h2 className='mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl'>
            Selected work.
          </h2>

          <p className='mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base'>
            A selection of applications and systems I&apos;ve built across
            management platforms, business applications, and modern web
            experiences.
          </p>

          <div className='mt-8 flex items-center gap-3'>
            <span className='h-px w-8 bg-cyan-600/30 dark:bg-cyan-400/30' />

            <span className='font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground'>
              {String(projects.length).padStart(2, '0')} projects
            </span>
          </div>
        </div>

        {/* Projects */}
        <div className='mt-14 grid gap-8 lg:grid-cols-2'>
          {projects.map((project, index) => {
            const isExternalProject = Boolean(project.link);

            return (
              <article
                key={project.title}
                className='group overflow-hidden rounded-2xl border border-border bg-foreground/2 transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/10 hover:bg-foreground/[0.025]'
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
                    <ProjectMedia project={project} index={index} />
                  </Link>
                : <ProjectMedia project={project} index={index} />}

                {/* Content */}
                <div className='p-6 sm:p-7'>
                  {/* Title */}
                  <div className='flex items-start justify-between gap-4'>
                    <div>
                      <p className='text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-600/80 dark:text-cyan-400/80'>
                        {project.category}
                      </p>

                      {isExternalProject ?
                        <Link
                          href={project.link!}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='group/title mt-2 inline-flex items-center gap-2'
                        >
                          <h3 className='text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover/title:text-cyan-600 dark:group-hover/title:text-cyan-400 sm:text-2xl'>
                            {project.title}
                          </h3>

                          <ExternalLink className='size-4 text-muted-foreground transition-colors duration-300 group-hover/title:text-cyan-600 dark:group-hover/title:text-cyan-400' />
                        </Link>
                      : <h3 className='mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl'>
                          {project.title}
                        </h3>
                      }
                    </div>

                    <ArrowUpRight
                      className={`mt-1 size-5 shrink-0 transition-all duration-300 ${
                        isExternalProject ?
                          'text-muted-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'
                        : 'text-muted-foreground/50'
                      }`}
                    />
                  </div>

                  {/* Description */}
                  <p className='mt-5 text-sm leading-7 text-muted-foreground'>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className='mt-6 flex flex-wrap gap-2'>
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className='rounded-full border border-border bg-foreground/2 px-3 py-1.5 text-[11px] text-muted-foreground transition-colors duration-300'
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Private Notice */}
                  {project.private && project.privateNotice && (
                    <div className='mt-6 border-t border-border pt-5'>
                      <p className='text-xs leading-5 text-muted-foreground'>
                        {project.privateNotice}
                      </p>
                    </div>
                  )}

                  {/* Actions */}
                  {(project.link || project.guestLink || project.adminLink) && (
                    <div className='mt-6 flex flex-wrap gap-2 border-t border-border pt-5'>
                      {project.link && (
                        <Link
                          href={project.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='group/link inline-flex items-center gap-2 rounded-full border border-border bg-foreground/2 px-4 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-cyan-600/20 hover:bg-cyan-600/6 hover:text-cyan-600 dark:hover:border-cyan-400/20 dark:hover:bg-cyan-400/6 dark:hover:text-cyan-400'
                        >
                          View Live Project
                          <ArrowUpRight className='size-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5' />
                        </Link>
                      )}

                      {project.guestLink && (
                        <Link
                          href={project.guestLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='group/link inline-flex items-center gap-2 rounded-full border border-border bg-foreground/2 px-4 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-cyan-600/20 hover:bg-cyan-600/6 hover:text-cyan-600 dark:hover:border-cyan-400/20 dark:hover:bg-cyan-400/6 dark:hover:text-cyan-400'
                        >
                          View Guest Site
                          <ArrowUpRight className='size-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5' />
                        </Link>
                      )}

                      {project.adminLink && (
                        <Link
                          href={project.adminLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='group/link inline-flex items-center gap-2 rounded-full border border-border bg-foreground/2 px-4 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-cyan-600/20 hover:bg-cyan-600/6 hover:text-cyan-600 dark:hover:border-cyan-400/20 dark:hover:bg-cyan-400/6 dark:hover:text-cyan-400'
                        >
                          View Admin Site
                          <ArrowUpRight className='size-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5' />
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
