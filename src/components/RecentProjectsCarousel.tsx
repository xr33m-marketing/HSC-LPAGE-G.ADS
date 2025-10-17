import React from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import {
  CarouselBase,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel-base';

const recentProjects = [
  {
    image: '/RP-DRIVE-HSC.webp',
    alt: 'HSC Driveway Project'
  },
  {
    image: '/HSC-DRIVE-HSC.webp',
    alt: 'Driveway Installation'
  },
  {
    image: '/DRIVE-HSC-RP.webp',
    alt: 'Completed Driveway'
  },
  {
    image: '/DWAY-HSC-RP.webp',
    alt: 'Professional Driveway Work'
  },
  {
    image: '/RP-DWAY-HSC.webp',
    alt: 'Driveway Transformation'
  },
  {
    image: '/RP-PATH-HSC.webp',
    alt: 'Pathway Installation'
  },
  {
    image: '/RP-STEPS-HSC copy.webp',
    alt: 'Steps Installation'
  }
];

export default function RecentProjectsCarousel() {
  return (
    <div className="w-full">
      <CarouselBase
        opts={{
          loop: true,
          align: 'center',
          containScroll: false,
          dragFree: true
        }}
        plugins={[AutoScroll({ playOnInit: true, speed: 0.8, stopOnInteraction: false })]}
        className="w-full"
      >
        <CarouselContent className="-ml-6 md:-ml-8">
          {[...recentProjects, ...recentProjects].map((project, index) => (
            <CarouselItem key={index} className="pl-6 md:pl-8 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-700">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="320"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselBase>
    </div>
  );
}
