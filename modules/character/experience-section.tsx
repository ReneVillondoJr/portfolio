import { Container } from '@/components/ui/container';

import { experiences } from '@/lib/data/content/experience';

export function ExperienceSection() {
  return (
    <section id='experience' className='border-b border-white/6 bg-zinc-950'>
      <Container className='py-28 sm:py-36'>
        {/* Header */}
        <div className='grid gap-12 lg:grid-cols-[0.3fr_0.7fr]'>
          <div>
            <p className='text-xs font-medium uppercase tracking-[0.3em] text-cyan-400'>
              Experience
            </p>

            <h2 className='mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
              Technologies I work with
            </h2>

            <p className='mt-5 max-w-xs text-sm leading-7 text-zinc-600'>
              My experience spans modern web development, databases, UI systems,
              and mobile application development.
            </p>
          </div>

          {/* Timeline */}
          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute bottom-0 left-1.75 top-2 w-px bg-white/8' />

            <div className='space-y-14'>
              {experiences.map((experience) => {
                const Icon = experience.icon;

                return (
                  <article
                    key={`${experience.role}-${experience.company}`}
                    className='group relative pl-10'
                  >
                    {/* Timeline point */}
                    <div className='absolute left-0 top-1 flex size-4 items-center justify-center rounded-full border border-cyan-400/30 bg-zinc-950'>
                      <span className='size-1.5 rounded-full bg-cyan-400 transition-transform duration-200 group-hover:scale-125' />
                    </div>

                    {/* Period */}
                    <p className='text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600'>
                      {experience.period}
                    </p>

                    {/* Role */}
                    <div className='mt-3 flex items-start gap-3'>
                      <div className='mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/6 bg-white/2'>
                        <Icon className='size-4 text-zinc-500 transition-colors group-hover:text-cyan-400' />
                      </div>

                      <div>
                        <h3 className='text-xl font-semibold tracking-tight text-white'>
                          {experience.role}
                        </h3>

                        <p className='mt-1 text-sm text-cyan-400/80'>
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className='mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base'>
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className='mt-5 flex flex-wrap gap-x-4 gap-y-2'>
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className='text-xs text-zinc-600 transition-colors group-hover:text-zinc-500'
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
