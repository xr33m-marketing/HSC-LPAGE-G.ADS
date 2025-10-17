import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeftRight } from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { cn } from "@/lib/utils";

interface BeforeAfterProject {
  title?: string;
  description?: string;
  beforeImage: string;
  afterImage: string;
  category?: string;
  location?: string;
}

interface BeforeAfterCarouselProps {
  projects: BeforeAfterProject[];
  className?: string;
}

export default function BeforeAfterCarousel({
  projects,
  className,
}: BeforeAfterCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(50);
  const [showTooltip, setShowTooltip] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload images for current and next slides
  useEffect(() => {
    const preloadImages = async () => {
      setIsLoading(true);
      const imagesToLoad = [];
      
      // Current slide
      imagesToLoad.push(projects[currentIndex].beforeImage);
      imagesToLoad.push(projects[currentIndex].afterImage);
      
      // Next slide
      const nextIndex = (currentIndex + 1) % projects.length;
      imagesToLoad.push(projects[nextIndex].beforeImage);
      imagesToLoad.push(projects[nextIndex].afterImage);
      
      // Previous slide
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      imagesToLoad.push(projects[prevIndex].beforeImage);
      imagesToLoad.push(projects[prevIndex].afterImage);

      const newLoadedImages = new Set(loadedImages);
      
      await Promise.all(
        imagesToLoad.map((src) => {
          if (!newLoadedImages.has(src)) {
            return new Promise((resolve) => {
              const img = new Image();
              img.onload = () => {
                newLoadedImages.add(src);
                resolve(null);
              };
              img.onerror = () => resolve(null);
              img.src = src;
            });
          }
          return Promise.resolve();
        })
      );

      setLoadedImages(newLoadedImages);
      setIsLoading(false);
    };

    preloadImages();
  }, [currentIndex, projects]);

  // Handle tooltip
  useEffect(() => {
    if (!isMobile) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      return () => clearTimeout(tooltipTimer);
    }
  }, [isMobile]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setPosition(50);
  }, [projects.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setPosition(50);
  }, [projects.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX || !touchStartY) return;

    const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
    const deltaY = Math.abs(e.touches[0].clientY - touchStartY);

    // If vertical scrolling is dominant or we haven't started dragging yet
    if (deltaY > deltaX && !isDragging) {
      e.stopPropagation();
      return;
    }

    // If horizontal movement is dominant, prevent scrolling
    if (deltaX > deltaY) {
      setIsDragging(true);
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX || !isDragging) return;
    
    const deltaX = touchStartX - e.changedTouches[0].clientX;
    const isLeftSwipe = deltaX > 50;
    const isRightSwipe = deltaX < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStartX(0);
    setTouchStartY(0);
    setIsDragging(false);
  };

  if (isLoading) {
    return (
      <div className={cn(
        "relative w-full bg-gray-100 animate-pulse rounded-lg",
        isMobile ? "h-[400px]" : "h-[600px]",
        className
      )} />
    );
  }

  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={cn(
        "relative w-full",
        isMobile ? "h-[400px]" : "h-[600px]"
      )}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <div className="relative h-full w-full">
              <ReactCompareSlider
                position={position}
                onPositionChange={setPosition}
                itemOne={
                  <ReactCompareSliderImage 
                    src={projects[currentIndex].beforeImage}
                    alt="Before"
                    className="h-full w-full object-cover"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage 
                    src={projects[currentIndex].afterImage}
                    alt="After"
                    className="h-full w-full object-cover"
                  />
                }
                className="h-full rounded-lg overflow-hidden"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
              
              {/* Project info */}
              {(projects[currentIndex].title || projects[currentIndex].description || projects[currentIndex].location || projects[currentIndex].category) && (
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {projects[currentIndex].title && (
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{projects[currentIndex].title}</h3>
                    )}
                    {projects[currentIndex].description && (
                      <p className="text-base md:text-lg mb-4">{projects[currentIndex].description}</p>
                    )}
                    {(projects[currentIndex].location || projects[currentIndex].category) && (
                      <div className="flex gap-4 md:gap-6">
                        {projects[currentIndex].location && (
                          <div>
                            <p className="text-xs md:text-sm text-gray-300">Location</p>
                            <p className="font-semibold text-sm md:text-base">{projects[currentIndex].location}</p>
                          </div>
                        )}
                        {projects[currentIndex].category && (
                          <div>
                            <p className="text-xs md:text-sm text-gray-300">Category</p>
                            <p className="font-semibold text-sm md:text-base">{projects[currentIndex].category}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons - hidden on mobile */}
        {!isMobile && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Navigation dots */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setPosition(50);
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-white w-6" : "bg-white/50"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}