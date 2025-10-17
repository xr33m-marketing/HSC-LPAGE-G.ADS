import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PromoBannerProps {
  offers?: string[];
  interval?: number;
}

export function PromoBanner({ 
  offers = [
    "Limited Time: Free Add-On With Every Project This Month",
    "Jet Wash Finish Included With Every Project",
    "No Strings Garden Tidy-Up With Every Project",
    "Dump Run On Us With Every Project"
  ],
  interval = 4000 
}: PromoBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % offers.length);
    }, interval);

    return () => clearInterval(timer);
  }, [offers.length, interval]);

  return (
    <div className="relative h-8 overflow-hidden bg-white/5 backdrop-blur-sm rounded-full px-6 py-1.5 mt-4">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-white/90 text-sm font-medium text-center"
        >
          {offers[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}