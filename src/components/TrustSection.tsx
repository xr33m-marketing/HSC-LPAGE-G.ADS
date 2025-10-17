import React from 'react';
import { Shield, Star, Clock, Users } from 'lucide-react';
import { ScrollReveal, StaggerContainer } from './ScrollReveal';

interface Review {
  text: string;
  author: string;
  rating: number;
  platform: string;
}

interface TrustSectionProps {
  reviews: Review[];
  yearsExperience: number;
  projectsCompleted: number;
  satisfactionRate: number;
}

export default function TrustSection({ reviews, yearsExperience, projectsCompleted, satisfactionRate }: TrustSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Stats */}
          <StaggerContainer className="grid grid-cols-4 gap-8 mb-16">
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

          {/* Trust Badges */}
          <StaggerContainer className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <Shield className="text-[#FF5733] mb-4" size={40} />
              <h3 className="font-bold mb-2">Fully Insured</h3>
              <p className="text-gray-600">Protected up to £5M</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="text-[#FF5733] mb-4" size={40} />
              <h3 className="font-bold mb-2">12-Month Guarantee</h3>
              <p className="text-gray-600">On all workmanship</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <Users className="text-[#FF5733] mb-4" size={40} />
              <h3 className="font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <Shield className="text-[#FF5733] mb-4" size={40} />
              <h3 className="font-bold mb-2">Licensed</h3>
              <p className="text-gray-600">Fully accredited</p>
            </div>
          </StaggerContainer>

          {/* Reviews */}
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{review.author}</span>
                  <span className="text-sm text-gray-500">{review.platform}</span>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}