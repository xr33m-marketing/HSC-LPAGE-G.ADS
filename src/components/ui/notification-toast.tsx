import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, BadgeCheck } from 'lucide-react';
import { useNotificationStore } from '@/lib/stores/notification-store';

const areas = ['Cambuslang', 'Rutherglen', 'Bearsden', 'Clydebank', 'Partick', 'Shawlands', 'Giffnock', 'Newton Mearns'];
const names = ['Sarah', 'John', 'Emma', 'David', 'Lisa', 'Mark', 'Anna', 'James'];

const serviceMessages = {
  landscaping: [
    'garden transformation consultation',
    'full garden makeover quote',
    'landscaping estimate',
  ],
  driveways: [
    'driveway installation survey',
    'block paving consultation',
    'resin driveway quote',
  ],
  fencing: [
    'fencing installation quote',
    'garden privacy consultation',
    'fence replacement survey',
  ],
  'artificial-turf': [
    'artificial lawn consultation',
    'turf installation quote',
    'grass replacement survey',
  ],
  'patios-decking': [
    'patio design consultation',
    'decking installation quote',
    'outdoor living space survey',
  ],
  'retaining-walls': [
    'retaining wall consultation',
    'garden wall quote',
    'structural survey',
  ],
};

export function NotificationToast() {
  const { shown, setShown, service, popupCount } = useNotificationStore();
  const [progress, setProgress] = useState(100);
  
  const [notification] = useState(() => {
    const name = names[Math.floor(Math.random() * names.length)];
    const area = areas[Math.floor(Math.random() * areas.length)];
    const messages = service ? serviceMessages[service] : serviceMessages.landscaping;
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    return { name, area, message };
  });

  useEffect(() => {
    // Only show up to 2 popups per session
    if (!shown && popupCount < 2) {
      const minDelay = 30000; // 30 seconds minimum
      const maxDelay = 60000; // 60 seconds maximum
      const randomDelay = minDelay + Math.random() * (maxDelay - minDelay);
      
      const timer = setTimeout(() => {
        setShown(true);
      }, randomDelay);
      
      return () => clearTimeout(timer);
    }
  }, [shown, setShown, popupCount]);

  useEffect(() => {
    if (shown) {
      const startTime = Date.now();
      const duration = 6000;

      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, 100 * (1 - elapsed / duration));
        
        if (remaining > 0) {
          setProgress(remaining);
          requestAnimationFrame(updateProgress);
        } else {
          setShown(false);
          setProgress(100);
        }
      };

      requestAnimationFrame(updateProgress);
    }
  }, [shown, setShown]);

  return (
    <AnimatePresence>
      {shown && (
        <motion.div
          initial={{ 
            x: window.innerWidth <= 768 ? '-50%' : '-100%',
            y: 20, 
            opacity: 0 
          }}
          animate={{ 
            x: window.innerWidth <= 768 ? '-50%' : 20,
            y: 0, 
            opacity: 0.98 
          }}
          exit={{ 
            x: window.innerWidth <= 768 ? '-50%' : '-100%',
            y: 20, 
            opacity: 0 
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className={`
            fixed z-50 
            ${window.innerWidth <= 768 ? 'bottom-4 left-1/2' : 'bottom-4 left-0'}
            w-[calc(100%-2rem)] max-w-sm
          `}
        >
          <div className="relative bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100/20 p-3 overflow-hidden">
            <div 
              className="absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-200"
              style={{ width: `${progress}%` }}
            />

            <div className="flex items-start gap-3">
              <div className="shrink-0">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-accent" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900 truncate">
                    {notification.name} in {notification.area}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-xs text-gray-600 mt-0.5">
                  Just booked their {notification.message}
                </p>

                <div className="mt-1.5 flex items-center gap-2">
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="Google"
                    className="h-3.5 w-auto"
                  />
                  <span className="text-[10px] text-gray-500">Verified Customer</span>
                </div>
              </div>

              <button 
                onClick={() => setShown(false)}
                className="shrink-0 text-gray-400 hover:text-gray-500 transition-colors"
              >
                <span className="sr-only">Close notification</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}