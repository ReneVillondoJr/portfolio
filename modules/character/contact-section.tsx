import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

import { Container } from '@/components/ui/container';

import { contactItems } from '@/lib/data/content/contact';
import { portfolioData } from '@/lib/data/content/profile';

export function ContactSection() {
  return (
    <section
      id='contact'
      className='relative overflow-hidden border-t border-white/6 bg-zinc-950'
    >
      {/* Subtle background glow */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute left-1/2 top-1/2 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/4 blur-[120px]' />
      </div>

      <Container className='relative py-28 sm:py-36'>
        <div className='grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20'>
          {/* Main CTA */}
          <div>
            <div className='flex items-center gap-3'>
              <span className='size-1.5 rounded-full bg-cyan-400' />

              <p className='text-xs font-medium uppercase tracking-[0.3em] text-cyan-400'>
                Contact
              </p>
            </div>

            <h2 className='mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl'>
              Let&apos;s build something{' '}
              <span className='text-zinc-500'>useful.</span>
            </h2>

            <p className='mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base'>
              Have a project in mind, need a website, or want to discuss a
              technical idea? I&apos;m always open to meaningful conversations
              and new opportunities.
            </p>

            {/* Email CTA */}
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className='group mt-9 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-sm font-medium text-white transition-colors hover:border-cyan-400 hover:text-cyan-400'
            >
              <Mail className='size-4' />

              {portfolioData.contact.email}

              <ArrowUpRight className='size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
            </a>
          </div>

          {/* Contact Information */}
          <div className='lg:border-l lg:border-white/6 lg:pl-12'>
            <p className='text-xs uppercase tracking-[0.25em] text-zinc-700'>
              Get in touch
            </p>

            <div className='mt-6 divide-y divide-white/6 border-y border-white/6'>
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className='group flex items-center justify-between gap-5 py-6'
                  >
                    <div className='flex items-center gap-4'>
                      <div className='flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/2 transition-colors duration-200 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/4'>
                        <Icon className='size-4 text-zinc-500 transition-colors duration-200 group-hover:text-cyan-400' />
                      </div>

                      <div>
                        <p className='text-[10px] uppercase tracking-[0.2em] text-zinc-700'>
                          {item.label}
                        </p>

                        <p className='mt-1 text-sm text-zinc-300 transition-colors group-hover:text-white'>
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className='size-4 text-zinc-700 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400' />
                  </a>
                );
              })}

              {/* Location */}
              <div className='flex items-center gap-4 py-6'>
                <div className='flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/2'>
                  <MapPin className='size-4 text-zinc-500' />
                </div>

                <div>
                  <p className='text-[10px] uppercase tracking-[0.2em] text-zinc-700'>
                    Location
                  </p>

                  <p className='mt-1 text-sm text-zinc-300'>
                    {portfolioData.contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className='mt-8 flex items-center gap-3'>
              <span className='relative flex size-2'>
                <span className='absolute inline-flex size-full animate-ping rounded-full bg-cyan-400/60' />
                <span className='relative inline-flex size-2 rounded-full bg-cyan-400' />
              </span>

              <p className='text-xs text-zinc-600'>
                Open to opportunities and collaborations
              </p>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className='mt-24 flex flex-col gap-4 border-t border-white/6 pt-6 text-xs text-zinc-700 sm:flex-row sm:items-center sm:justify-between'>
          <p>
            © {new Date().getFullYear()} {portfolioData.name}
          </p>

          <a
            href='#top'
            className='group inline-flex items-center gap-2 transition-colors hover:text-zinc-400'
          >
            Back to top
            <ArrowUpRight className='size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
          </a>
        </div>
      </Container>
    </section>
  );
}
