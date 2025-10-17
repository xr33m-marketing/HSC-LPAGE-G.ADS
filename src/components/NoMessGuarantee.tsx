import React from 'react';
import { Truck, Recycle, Sparkles } from 'lucide-react';
import { ScrollReveal, StaggerContainer } from './ScrollReveal';

export default function NoMessGuarantee() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal width="100%">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            No Mess Left Behind – Guaranteed
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Truck className="w-12 h-12 text-[#FF5733]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Skip Hire Included</h3>
            <p className="text-gray-600">We handle all waste removal and disposal</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Recycle className="w-12 h-12 text-[#FF5733]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Responsible Disposal</h3>
            <p className="text-gray-600">Eco-friendly waste management</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-12 h-12 text-[#FF5733]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Spotless Finish</h3>
            <p className="text-gray-600">We leave your garden cleaner than we found it</p>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}