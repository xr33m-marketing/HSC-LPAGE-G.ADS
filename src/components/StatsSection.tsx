import React from 'react';
import { Star } from 'lucide-react';
import { StaggerContainer } from './ScrollReveal';

interface StatsSectionProps {
  yearsExperience: number;
  projectsCompleted: number;
  satisfactionRate: number;
}

export default function StatsSection({ 
  yearsExperience, 
  projectsCompleted, 
  satisfactionRate 
}: StatsSectionProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <StaggerContainer className="grid grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF5733]">{yearsExperience}+</div>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF5733]">{projectsCompleted}+</div>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF5733]">{satisfactionRate}%</div>
            <p className="text-gray-600 mt-2">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
            <p className="text-gray-600 mt-2">Google Rating</p>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}