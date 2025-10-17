import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingHeadlineProps {
  headlines: string[];
  interval?: number;
  className?: string;
}

export function RotatingHeadline({ headlines, interval = 2500, className = '' }: RotatingHeadlineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, interval);

    return () => clearInterval(timer);
  }, [headlines.length, interval]);

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden h-full ${className}`}
      role="region"
      aria-label="Rotating headlines"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 30, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -30, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-center px-4 absolute inset-0 flex items-center justify-center"
          style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
        >
          {headlines[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Hidden version for screen readers */}
      <div className="sr-only">
        {headlines.join('. ')}
      </div>
    </div>
  );
}