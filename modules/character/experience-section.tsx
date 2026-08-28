import { Container } from '@/components/ui/container';
import { experiences } from '@/lib/data/content/experience';

export function ExperienceSection() {
  return (
    <section id='experience' className='border-b border-border bg-background'>
      <Container className='py-28 sm:py-36'>
        <div className='grid gap-14 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16'>
          {/* Header */}
          <div className='lg:sticky lg:top-32 lg:self-start'>
            <p
              className='
                text-xs font-medium uppercase
                tracking-[0.3em]
                text-cyan-600
                dark:text-cyan-400
              '
            >
              Experience
            </p>

            <h2
              className='
                mt-4 text-3xl
                font-semibold
                tracking-tight
                text-foreground
                sm:text-4xl
              '
            >
              Development experience.
            </h2>

            <p
              className='
                mt-5 max-w-sm
                text-sm leading-7
                text-muted-foreground
                sm:text-base
              '
            >
              Experience across modern web development, application
              architecture, databases, and user interface systems.
            </p>
          </div>

          {/* Timeline */}
          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute bottom-0 left-[11px] top-2 w-px bg-border' />

            <div className='space-y-16'>
              {experiences.map((experience, index) => {
                const Icon = experience.icon;

                return (
                  <article
                    key={`${experience.role}-${experience.company}`}
                    className='group relative pl-10'
                  >
                    {/* Timeline Point */}
                    <div
                      className='
                        absolute left-[-1px] top-0
                        flex size-6 items-center justify-center
                        rounded-full
                        border border-cyan-600/20
                        bg-background
                        transition-all duration-300
                        group-hover:border-cyan-600/50
                        dark:border-cyan-400/20
                        dark:group-hover:border-cyan-400/50
                      '
                    >
                      <span
                        className='
                          size-1.5 rounded-full
                          bg-cyan-600
                          transition-transform duration-300
                          group-hover:scale-150
                          dark:bg-cyan-400
                        '
                      />
                    </div>

                    {/* Period */}
                    <div className='flex items-center justify-between gap-4'>
                      <p className='text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground'>
                        {experience.period}
                      </p>

                      <span className='font-mono text-[10px] text-muted-foreground/50'>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Role */}
                    <div className='mt-4 flex items-start gap-3'>
                      <div
                        className='
                          mt-1 flex size-9 shrink-0
                          items-center justify-center
                          rounded-lg
                          border border-border
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
                            size-4
                            text-muted-foreground
                            transition-colors duration-300
                            group-hover:text-cyan-600
                            dark:group-hover:text-cyan-400
                          '
                        />
                      </div>

                      <div>
                        <h3
                          className='
                            text-xl font-semibold
                            tracking-tight
                            text-foreground
                            sm:text-2xl
                          '
                        >
                          {experience.role}
                        </h3>

                        <p
                          className='
                            mt-1 text-sm
                            text-cyan-600/80
                            dark:text-cyan-400/80
                          '
                        >
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className='
                        mt-6 max-w-2xl
                        text-sm leading-7
                        text-muted-foreground
                        sm:text-base
                      '
                    >
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className='mt-6'>
                      <p className='mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60'>
                        Technologies
                      </p>

                      <div className='flex flex-wrap gap-2'>
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className='
                              rounded-full
                              border border-border
                              bg-muted
                              px-3 py-1.5
                              text-[11px]
                              text-muted-foreground
                              transition-all duration-300
                              group-hover:border-foreground/10
                              group-hover:text-foreground/70
                            '
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Divider */}
                    {index !== experiences.length - 1 && (
                      <div className='mt-10 h-px bg-border' />
                    )}
                  </article>
                );
              })}
            </div>

            {/* Timeline End */}
            <div className='absolute bottom-[-4px] left-[7px] size-2 rounded-full bg-muted-foreground/40' />
          </div>
        </div>
      </Container>
    </section>
  );
}
