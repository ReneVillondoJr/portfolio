import { Container } from '@/components/ui/container';
import { skillGroups } from '@/lib/data/content/skills';

export function SkillsSection() {
  return (
    <section id='skills' className='border-b border-border bg-background'>
      <Container className='py-28 sm:py-36'>
        <div className='grid gap-16 lg:grid-cols-[0.3fr_0.7fr]'>
          {/* Section Information */}
          <div className='lg:sticky lg:top-32 lg:self-start'>
            <p
              className='
                text-xs font-medium uppercase
                tracking-[0.3em]
                text-cyan-600
                dark:text-cyan-400
              '
            >
              Skills
            </p>

            <h2
              className='
                mt-4 max-w-sm
                text-3xl font-semibold
                tracking-tight
                text-foreground
                sm:text-4xl
              '
            >
              Tools I use to build.
            </h2>

            <p
              className='
                mt-6 max-w-sm
                text-sm leading-7
                text-muted-foreground
                sm:text-base
              '
            >
              A practical stack focused on modern web development, clean
              interfaces, reliable data, and useful digital experiences.
            </p>

            <div className='mt-8 hidden items-center gap-3 lg:flex'>
              <span className='h-px w-8 bg-cyan-600/30 dark:bg-cyan-400/30' />

              <span className='font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60'>
                {String(skillGroups.length).padStart(2, '0')} groups
              </span>
            </div>
          </div>

          {/* Skills */}
          <div className='divide-y divide-border border-y border-border'>
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className='group relative py-8 sm:py-10'
                >
                  {/* Active indicator */}
                  <div
                    className='
                      absolute bottom-0 left-0 top-0
                      w-px origin-top
                      scale-y-0
                      bg-cyan-600
                      transition-transform duration-500
                      group-hover:scale-y-100
                      dark:bg-cyan-400
                    '
                  />

                  <div className='flex gap-5'>
                    {/* Icon */}
                    <div
                      className='
                        flex size-10 shrink-0
                        items-center justify-center
                        rounded-xl
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

                    <div className='min-w-0 flex-1'>
                      {/* Heading */}
                      <div
                        className='
                          flex flex-col gap-1
                          sm:flex-row
                          sm:items-center
                          sm:justify-between
                        '
                      >
                        <div className='flex items-center gap-3'>
                          <span className='font-mono text-[10px] text-muted-foreground/60'>
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <h3
                            className='
                              text-lg font-semibold
                              tracking-tight
                              text-foreground
                              sm:text-xl
                            '
                          >
                            {group.title}
                          </h3>
                        </div>

                        <span className='text-xs text-muted-foreground/60'>
                          {String(group.skills.length).padStart(2, '0')} skills
                        </span>
                      </div>

                      {/* Description */}
                      <p
                        className='
                          mt-3
                          text-sm leading-6
                          text-muted-foreground
                        '
                      >
                        {group.description}
                      </p>

                      {/* Skill List */}
                      <div className='mt-5 flex flex-wrap gap-2'>
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className='
                              rounded-full
                              border border-border
                              bg-muted
                              px-3 py-1.5
                              text-xs
                              text-muted-foreground
                              transition-all duration-300
                              hover:border-cyan-600/20
                              hover:bg-cyan-600/5
                              hover:text-cyan-600
                              dark:hover:border-cyan-400/20
                              dark:hover:bg-cyan-400/5
                              dark:hover:text-cyan-400
                            '
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
