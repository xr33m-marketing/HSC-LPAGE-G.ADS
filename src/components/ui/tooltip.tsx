import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TooltipProps {
  text: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  className?: string;
}

export function Tooltip({ text, position, className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className={cn(
        "absolute z-30",
        className
      )}
      style={position}
    >
      {/* Pulsing Dot */}
      <motion.div
        className="relative cursor-pointer group"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)} // For mobile
      >
        <motion.div
          className="w-12 h-12 absolute -inset-2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm" />
        </motion.div>
        
        <div className="relative w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
          <Info className="w-4 h-4 text-white" />
        </div>

        {/* Tooltip Content */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 text-sm rounded-lg shadow-md px-4 py-2 min-w-[200px] max-w-[300px]"
            >
              {text}
              <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-white border-b-[8px] border-b-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}