import React from 'react';
import { Gift, ArrowRight, ImageIcon } from 'lucide-react';
import { ScrollReveal, StaggerContainer } from './ScrollReveal';

interface ReferralSectionProps {
  service?: string;
}

export default function ReferralSection({ service = "garden" }: ReferralSectionProps) {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <ScrollReveal width="100%">
            <div className="flex items-start gap-6 mb-8">
            <div className="shrink-0">
              <div className="w-16 h-16 bg-[#FF5733]/10 rounded-2xl flex items-center justify-center">
                <Gift className="w-8 h-8 text-[#FF5733]" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-3 text-white">
                Know Someone Who Needs Their {service} Fixed?
              </h2>
              <p className="text-xl text-gray-300">
                They get £200 off. You get £100 in the post. Job done.
              </p>
            </div>
          </div>
          </ScrollReveal>

          {/* Steps */}
          <ScrollReveal width="100%" delay={0.2}>
            <div className="bg-gray-900 rounded-2xl p-8 mb-8 border border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-white">Here's How It Works:</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-[#FF5733] text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <p className="font-medium text-white">Tell a mate, neighbour or family member</p>
                  <p className="text-gray-300">When they book, they give us your name and postcode.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-[#FF5733] text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <p className="font-medium text-white">They get £200 off their {service} project</p>
                  <p className="text-gray-300">That's money off their final quote. Simple.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-[#FF5733] text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <p className="font-medium text-white">You get a £100 gift card sent to your door</p>
                  <p className="text-gray-300">As soon as their job kicks off, you get rewarded.</p>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Footer */}
          <ScrollReveal width="100%" delay={0.4}>
            <div className="text-center">
            <p className="text-lg font-medium mb-2 text-white">No limits. Refer as many people as you want.</p>
            <p className="text-gray-300">Get rewarded for telling someone how good your {service} looks.</p>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}