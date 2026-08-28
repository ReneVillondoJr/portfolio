import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { contactItems } from '@/lib/data/content/contact';
import { portfolioData } from '@/lib/data/content/profile';

export function ContactSection() {
  return (
    <section
      id='contact'
      className='
        relative overflow-hidden
        border-t border-border
        bg-background
      '
    >
      {/* Background */}
      <div className='pointer-events-none absolute inset-0'>
        <div
          className='
            absolute left-1/2 top-1/2
            size-[32rem]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/[0.035]
            blur-[120px]
          '
        />

        <div
          className='
            absolute inset-x-0 top-0 h-48
            bg-gradient-to-b
            from-foreground/[0.015]
            to-transparent
          '
        />
      </div>

      <Container className='relative py-28 sm:py-36'>
        <div className='grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20'>
          {/* Main CTA */}
          <div>
            <div className='flex items-center gap-3'>
              <span className='size-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400' />

              <p
                className='
                  text-xs font-medium uppercase
                  tracking-[0.3em]
                  text-cyan-600 dark:text-cyan-400
                '
              >
                Contact
              </p>
            </div>

            <h2
              className='
                mt-6 max-w-3xl
                text-4xl font-semibold
                tracking-[-0.04em]
                text-foreground
                sm:text-5xl
                lg:text-6xl
                lg:leading-[1.05]
              '
            >
              Let&apos;s build something{' '}
              <span className='text-muted-foreground'>useful together.</span>
            </h2>

            <p
              className='
                mt-6 max-w-xl
                text-sm leading-7
                text-muted-foreground
                sm:text-base
              '
            >
              Have a project in mind, need a website, or want to discuss a
              technical idea? I&apos;m open to full-time opportunities,
              freelance projects, and meaningful collaborations.
            </p>

            {/* Email CTA */}
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className='
                group mt-9 inline-flex
                items-center gap-3
                rounded-full
                border border-border
                bg-card
                px-5 py-3
                text-sm font-medium
                text-foreground
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-cyan-600/20
                hover:bg-cyan-600/5
                hover:text-cyan-600
                dark:hover:border-cyan-400/20
                dark:hover:bg-cyan-400/5
                dark:hover:text-cyan-400
              '
            >
              <Mail className='size-4' />

              {portfolioData.contact.email}

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

          {/* Contact Information */}
          <div className='lg:border-l lg:border-border lg:pl-12'>
            <p className='text-xs uppercase tracking-[0.25em] text-muted-foreground/60'>
              Get in touch
            </p>

            <div className='mt-6 divide-y divide-border border-y border-border'>
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className='group flex items-center justify-between gap-5 py-6'
                  >
                    <div className='flex items-center gap-4'>
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

                      <div>
                        <p className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60'>
                          {item.label}
                        </p>

                        <p
                          className='
                            mt-1 text-sm
                            text-foreground/80
                            transition-colors duration-300
                            group-hover:text-foreground
                          '
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      className='
                        size-4
                        text-muted-foreground/50
                        transition-all duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-cyan-600
                        dark:group-hover:text-cyan-400
                      '
                    />
                  </a>
                );
              })}

              {/* Location */}
              <div className='flex items-center gap-4 py-6'>
                <div
                  className='
                    flex size-10 shrink-0
                    items-center justify-center
                    rounded-xl
                    border border-border
                    bg-muted
                  '
                >
                  <MapPin className='size-4 text-muted-foreground' />
                </div>

                <div>
                  <p className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60'>
                    Location
                  </p>

                  <p className='mt-1 text-sm text-foreground/80'>
                    {portfolioData.contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div
              className='
                mt-8 inline-flex items-center gap-3
                rounded-full
                border border-border
                bg-card
                px-4 py-2.5
              '
            >
              <span className='relative flex size-2'>
                <span className='absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/50' />

                <span className='relative size-2 rounded-full bg-emerald-400' />
              </span>

              <p className='text-xs text-muted-foreground'>
                Open to opportunities and collaborations
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className='
            mt-24 flex flex-col gap-4
            border-t border-border
            pt-6 text-xs
            text-muted-foreground/60
            sm:flex-row
            sm:items-center
            sm:justify-between
          '
        >
          <p>
            © {new Date().getFullYear()} {portfolioData.name}
          </p>

          <a
            href='#top'
            className='
              group inline-flex items-center gap-2
              transition-colors
              hover:text-foreground
            '
          >
            Back to top
            <ArrowUpRight
              className='
                size-3
                transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              '
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
