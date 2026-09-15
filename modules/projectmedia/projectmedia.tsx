'use client';

import Image from 'next/image';

import { ExternalLink, LockKeyhole } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import type { Project } from '@/types/homepage';

type ProjectMediaProps = {
  project: Project;
  index: number;
};

export function ProjectMedia({ project, index }: ProjectMediaProps) {
  const images =
    project.images && project.images.length > 0 ? project.images
    : project.image ? [project.image]
    : [];

  const hasMultipleImages = images.length > 1;

  if (images.length === 0) {
    return (
      <div className='relative flex aspect-video items-center justify-center overflow-hidden bg-muted'>
        <span className='text-xs text-muted-foreground'>No project image</span>
      </div>
    );
  }

  return (
    <div className='relative aspect-video overflow-hidden bg-muted'>
      <Carousel
        opts={{
          loop: hasMultipleImages,
        }}
        className='h-full w-full'
      >
        <CarouselContent className='ml-0 h-full'>
          {images.map((image, imageIndex) => (
            <CarouselItem
              key={`${image}-${imageIndex}`}
              className='relative h-full basis-full pl-0'
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${imageIndex + 1}`}
                fill
                priority={index === 0 && imageIndex === 0}
                className='object-cover transition-transform duration-700 group-hover:scale-[1.035]'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className='absolute inset-0 bg-linear-to-t from-background/75 via-background/10 to-transparent' />

        <div className='absolute left-5 top-5 flex size-8 items-center justify-center rounded-full border border-border bg-background/70 font-mono text-[10px] text-muted-foreground backdrop-blur-md'>
          {String(index + 1).padStart(2, '0')}
        </div>

        {project.private && (
          <div className='absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs text-foreground backdrop-blur-md'>
            <LockKeyhole className='size-3.5 text-amber-400' />
            Private Project
          </div>
        )}

        {project.link && (
          <div className='absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs text-foreground opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100'>
            <ExternalLink className='size-3.5' />
            View Project
          </div>
        )}

        {hasMultipleImages && (
          <>
            <CarouselPrevious className='left-4 border-border/60 bg-background/80 backdrop-blur-md' />

            <CarouselNext className='right-4 border-border/60 bg-background/80 backdrop-blur-md' />
          </>
        )}
      </Carousel>
    </div>
  );
}
