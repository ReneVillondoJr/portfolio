import { Container } from '@/components/ui/container';

import { skillGroups } from '@/lib/data/content/skills';

export function SkillsSection() {
  return (
    <section id='skills' className='border-b border-white/6 bg-zinc-950'>
      <Container className='py-28 sm:py-36'>
        <div className='grid gap-16 lg:grid-cols-[0.3fr_0.7fr]'>
          {/* Section information */}
          <div className='lg:sticky lg:top-32 lg:self-start'>
            <p className='text-xs font-medium uppercase tracking-[0.3em] text-cyan-400'>
              Skills
            </p>

            <h2 className='mt-4 max-w-sm text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
              Tools I use to build.
            </h2>

            <p className='mt-6 max-w-sm text-sm leading-7 text-zinc-600 sm:text-base'>
              A practical stack focused on modern web development, clean
              interfaces, reliable data, and useful digital experiences.
            </p>
          </div>

          {/* Skills */}
          <div className='divide-y divide-white/6 border-y border-white/6'>
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article key={group.title} className='group py-8 sm:py-10'>
                  <div className='flex gap-5'>
                    {/* Icon */}
                    <div className='flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/2.5 transition-colors duration-200 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/4'>
                      <Icon className='size-4 text-zinc-500 transition-colors duration-200 group-hover:text-cyan-400' />
                    </div>

                    <div className='min-w-0 flex-1'>
                      {/* Heading */}
                      <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
                        <h3 className='text-lg font-semibold tracking-tight text-white sm:text-xl'>
                          {group.title}
                        </h3>

                        <span className='text-xs text-zinc-700'>
                          {String(group.skills.length).padStart(2, '0')} skills
                        </span>
                      </div>

                      <p className='mt-2 text-sm leading-6 text-zinc-600'>
                        {group.description}
                      </p>

                      {/* Skill list */}
                      <div className='mt-5 flex flex-wrap gap-2'>
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className='rounded-full border border-white/6 bg-white/2 px-3 py-1.5 text-xs text-zinc-500 transition-colors duration-200 group-hover:border-white/9 group-hover:text-zinc-400'
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
