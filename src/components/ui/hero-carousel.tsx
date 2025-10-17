import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface HeroCarouselProps {
  slides: {
    title: string;
    description: string;
  }[];
  interval?: number;
  children: React.ReactNode;
  backgroundImage?: string;
  carouselImages?: string[];
}

export function HeroCarousel({ 
  slides, 
  interval = 5000, 
  children,
  backgroundImage,
  carouselImages = []
}: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    speed: 8,
    dragFree: true
  });
  const autoplayRef = useRef<NodeJS.Timeout>();

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(scrollNext, interval);
  }, [interval, scrollNext]);

  useEffect(() => {
    if (!emblaApi) return;
    startAutoplay();
    emblaApi.on('pointerDown', () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    });
    emblaApi.on('pointerUp', startAutoplay);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, startAutoplay]);

  // Use provided images or fallback to background image
  const images = carouselImages.length > 0 
    ? [backgroundImage, ...carouselImages]
    : [backgroundImage];

  return (
    <div className="relative overflow-hidden min-h-[85vh]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 md:bg-gradient-to-r md:from-black/70 md:to-black/40 z-10" />
      </div>

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] min-w-0 relative"
            >
              <div className="relative min-h-[85vh] w-full">
                <img
                  src={image}
                  alt={`Hero image ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding={index === 0 ? "sync" : "async"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="container mx-auto px-4 h-full flex items-start">
          {children}
        </div>
      </div>
    </div>
  );
}