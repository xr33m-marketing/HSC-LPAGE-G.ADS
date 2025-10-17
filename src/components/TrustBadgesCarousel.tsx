import React from 'react';
import { Star, Award, Shield, CheckCircle, Zap } from 'lucide-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import {
  CarouselBase,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel-base';

const trustBadges = [
  {
    icon: Star,
    text: '24 Verified 5★ Google Reviews',
    color: 'text-yellow-400'
  },
  {
    icon: Award,
    text: '17+ Years Experience',
    color: 'text-blue-400'
  },
  {
    icon: Shield,
    text: '10-Year Workmanship Guarantee',
    color: 'text-green-400'
  },
  {
    icon: CheckCircle,
    text: 'Licensed & Fully Insured',
    color: 'text-purple-400'
  },
  {
    icon: Zap,
    text: 'Limited Slots This Month',
    color: 'text-orange-400'
  }
];

export default function TrustBadgesCarousel() {
  return (
    <div className="w-full py-8">
      <CarouselBase
        opts={{
          loop: true,
          align: 'start',
          containScroll: false,
          dragFree: true
        }}
        plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
        className="w-full"
      >
        <CarouselContent className="-ml-6 md:-ml-8">
          {[...trustBadges, ...trustBadges, ...trustBadges].map((badge, index) => {
            const Icon = badge.icon;
            return (
              <CarouselItem key={index} className="pl-6 md:pl-8 basis-auto">
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-accent/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                  <Icon className={`${badge.color} flex-shrink-0 drop-shadow-lg`} size={24} strokeWidth={2.5} />
                  <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap drop-shadow-md">
                    {badge.text}
                  </span>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </CarouselBase>
    </div>
  );
}
