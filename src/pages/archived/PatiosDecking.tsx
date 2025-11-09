import React from 'react';
import { Star, Check, Clock, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StickyTopNavBar } from '../../components/StickyTopNavBar';
import { TestimonialsSection } from '../../components/ui/TestimonialsSection';
import { FeatureSteps } from '../../components/ui/feature-steps';
import { defaultFeatureSteps } from '../../components/FeatureStepsData';
import BeforeAfterCarousel from '../../components/ui/before-after-carousel';
import ServiceHero from '../../components/ServiceHero';
import ReferralSection from '../../components/ReferralSection';
import { FeaturesSectionWithHoverEffects } from '../../components/ui/features-section-hover';
import RecentProjectsCarousel from '../../components/RecentProjectsCarousel';
import Footer from '../../components/Footer';
import { ScrollReveal, StaggerContainer, FadeIn } from '../../components/ScrollReveal';

const recentProjects = [
  { image: '', alt: 'Patio & Decking Project 1' },
  { image: '', alt: 'Patio & Decking Project 2' },
  { image: '', alt: 'Patio & Decking Project 3' },
  { image: '', alt: 'Patio & Decking Project 4' },
  { image: '', alt: 'Patio & Decking Project 5' },
  { image: '', alt: 'Patio & Decking Project 6' },
  { image: '', alt: 'Patio & Decking Project 7' }
];

const patioHeadlines = [
  "Cracked Slabs?",
  "Uneven Surface?",
  "Rotting Decking?",
  "Sinking Patio?",
  "Moss & Weeds?",
  "Drainage Issues?"
];

const beforeAfterProjects = [
  {
    title: "Luxury Sandstone Patio",
    description: "Complete patio transformation with premium sandstone and lighting",
    beforeImage: "https://imgur.com/ZHY9jPC.jpg",
    afterImage: "https://imgur.com/9HYYjWw.jpg",
    category: "Natural Stone",
    location: "Glasgow",
    duration: "7 days"
  },
  {
    title: "Modern Composite Decking",
    description: "Low-maintenance composite deck with glass balustrade",
    beforeImage: "https://imgur.com/oCDWvfa.jpg",
    afterImage: "https://imgur.com/k7O0yEu.jpg",
    category: "Decking",
    location: "Bearsden",
    duration: "5 days"
  },
  {
    title: "Mediterranean Style Terrace",
    description: "Terracotta paving with pergola and water feature",
    beforeImage: "https://imgur.com/lnh9qFX.jpg",
    afterImage: "https://imgur.com/bLY2rey.jpg",
    category: "Terrace",
    location: "Clydebank",
    duration: "8 days"
  },
  {
    title: "Contemporary Garden Design",
    description: "Modern patio design with integrated seating and planters",
    beforeImage: "https://imgur.com/fRbq8QR.jpg",
    afterImage: "https://imgur.com/FhWJ1nS.jpg",
    category: "Contemporary",
    location: "Partick",
    duration: "6 days"
  }
];

export default function PatiosDecking() {
  const testimonials = [
    {
      author: {
        name: "David Wilson",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
        title: "Verified Customer"
      },
      text: "Excellent job on our new patio. The team was professional and completed everything to a high standard."
    },
    {
      author: {
        name: "Sarah Thompson",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
        title: "Verified Customer"
      },
      text: "Very impressed with our new composite decking. The finish is perfect and it's transformed our garden."
    },
    {
      author: {
        name: "Michael Brown",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
        title: "Verified Customer"
      },
      text: "Professional service from start to finish. Fair price and great attention to detail."
    }
  ];

  return (
    <div className="min-h-screen bg-granite w-full overflow-x-hidden">
      <StickyTopNavBar />
      <ServiceHero
        headlines={patioHeadlines}
        backgroundImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000"
        carouselImages={[
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000",
          "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=2000"
        ]}
        features={[
          "Free On-Site Estimate & Consultation — Full Design Provided After Approval",
          "Pick Your Free Upgrade: Jet Wash Finish, Garden Tidy-Up, or Dump Run"
        ]}
        offer="No pressure. Just answers, expert ideas, and a plan you'll love."
        addOnBonus="🔒 Limited Time Offer - Next 30 Days Only"
        thankYouPage="/thank-you-patios-decking"
        service="patios-decking"
        serviceFeatures={[
          {
            title: "Fast Replies",
            description: "We'll get back to you within 24 hours, guaranteed."
          },
          {
            title: "Patio & Decking Specialists",
            description: "From natural stone patios to composite decking installations."
          },
          {
            title: "Design Expertise",
            description: "Create the perfect outdoor entertaining space for your home."
          },
          {
            title: "Quality Materials",
            description: "Premium paving, decking boards, and finishing touches."
          },
          {
            title: "Free On-Site Assessment",
            description: "Get clear pricing and material options before spending a penny."
          }
        ]}
      />

      {/* Pain Points Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Your Patio's Not Getting Better on Its Own</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-200">
            <p>Cracked slabs. Uneven surfaces. That wobbly decking that's starting to rot. Maybe you've been considering composite decking as a low-maintenance solution?</p>
            <p>You've looked at it and thought <i>"we really need to fix this"</i> — then let it go another 6 months.</p>
            <p>Meanwhile, the cracks widen. The lean gets worse. That temporary fix from last summer is falling apart.</p>
            <p className="font-semibold">Let's fix it once — and do it right with premium materials including composite wood decking options.</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-granite-darker">
        <div className="container mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Built To Last. Designed For You. Done Properly.</h2>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="text-lg text-gray-200 mb-8 text-center max-w-3xl mx-auto">
              We don't cut corners, use cheap materials, or leave you with drainage problems. Whether you choose traditional paving or modern composite decking, we deliver quality installations that last.
            </p>
          </ScrollReveal>
          <FadeIn delay={0.4}>
            <FeaturesSectionWithHoverEffects />
          </FadeIn>

          {/* Bonus Banner */}
          <FadeIn delay={0.6}>
            <div className="max-w-5xl mx-auto mt-12">
              <div className="bg-[#2B2B2B]/80 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700 shadow-2xl">
                <div className="text-center space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    This Month Only — Bonus <span className="text-accent">Jet Wash & Seal Finish</span>
                  </h3>
                  <p className="text-lg text-gray-200">
                    Book your patio or decking project this month and we'll include a full professional wash & seal treatment — <span className="text-accent font-semibold">worth £250</span>.
                  </p>
                  <p className="text-base text-gray-300 italic">
                    Keeps your outdoor space looking brand new for years.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Call Button */}
          <FadeIn delay={0.8}>
            <div className="max-w-5xl mx-auto mt-6 text-center">
              <a
                href="tel:07490738974"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-6 h-6" />
                No Harm In Calling
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-granite-medium">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Every patio starts as a problem.</h2>
          <p className="text-center max-w-2xl mx-auto text-gray-300 mt-4 mb-12 text-lg">
            Too cracked. Too uneven. Too dangerous. These ones were exactly the same — until we got stuck in.
          </p>
          <BeforeAfterCarousel projects={beforeAfterProjects} />
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16 bg-granite-dark">
        <div className="container mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">Our Recent Projects</h2>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="text-center max-w-2xl mx-auto text-gray-300 mt-4 mb-12 text-lg">
              See the quality of our craftsmanship in these completed patio and composite wood decking installations
            </p>
          </ScrollReveal>
          <FadeIn delay={0.3}>
            <RecentProjectsCarousel projects={recentProjects} />
          </FadeIn>
        </div>
      </section>

      {/* Feature Steps Section */}
      <FeatureSteps
        features={[
          {
            step: "Free On-Site Consultation & Design Plan",
            content: "We visit your property to assess your current surface, discuss your goals, and show material and layout options. You'll get a clear quote and plan — no guesswork, no pressure.",
            image: "/HSC-STEP1-PROCESS copy.webp"
          },
          {
            step: "Expert Groundwork & Installation",
            content: "Once approved, our in-house team handles everything — from excavation and drainage setup to paving or decking installation. No subcontractors, no cut corners, just a clean, efficient build done right the first time.",
            image: "/step2-HSC-PROCESS copy.webp"
          },
          {
            step: "Final Jet Wash, Seal & Hand-Off",
            content: "We don't just finish the job — we perfect it. Every new patio or deck gets a professional jet wash and finishing treatment to lock in that just-installed look and long-term durability.",
            image: "/step3-HSC-PROCESS copy.webp"
          }
        ]}
        title="How It Works – A Simple 3-Step Process"
        subtitle="Our average installation takes 3–5 days, depending on size. You'll always deal directly with our team — start to finish."
        className="bg-granite-light"
      />

      {/* Reviews Section */}
      <TestimonialsSection
        title="What Our Customers Say"
        description="Read trusted reviews from our satisfied customers"
        testimonials={testimonials}
        className="bg-granite-medium"
      />

      {/* Trust Indicators Section */}
      <section className="py-16 bg-granite-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Why Glasgow Homeowners Trust Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">100+ 5-Star Reviews</h3>
              <p className="text-gray-300">On Google & Trustpilot</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12 text-[#FF5733]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">17+ Years Experience</h3>
              <p className="text-gray-300">Serving Glasgow</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">10-Year Guarantee</h3>
              <p className="text-gray-300">Workmanship Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <ReferralSection service="patio" />

      {/* Local Map & Trust Badges Section */}
      <section className="py-16 bg-granite-medium">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            We're Local. We're Trusted. We're Working Near You.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg google-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.3191637325403!2d-4.1035873999999986!3d55.805059299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8b50b938909fffb5%3A0x9295392d88e539!2sHSC%20Builders%20%7C%20Landscape%20Gardeners%20%7C%20Property%20Renovators%20%7C%20Glasgow!5e0!3m2!1sen!2suk!4v1745001551346!5m2!1sen!2suk"
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HSC Builders Location"
                className="w-full"
              ></iframe>
            </div>

            {/* Trust Badges & Contact */}
            <div className="space-y-8">
              <div className="grid gap-4">
                <div className="flex items-center gap-3 bg-granite-light p-4 rounded-lg shadow-sm border border-gray-600">
                  <Star className="text-yellow-400 w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-white">100+ 5-Star Google Reviews</h3>
                    <p className="text-gray-300">Trusted by local homeowners</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-granite-light p-4 rounded-lg shadow-sm border border-gray-600">
                  <MapPin className="text-[#FF5733] w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-white">Covering All Glasgow Areas</h3>
                    <p className="text-gray-300">Southside, Clydebank, Bearsden, Partick & More</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-granite-light p-4 rounded-lg shadow-sm border border-gray-600">
                  <Clock className="text-[#FF5733] w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-white">17+ Years Experience</h3>
                    <p className="text-gray-300">Serving the local community</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-granite-light p-4 rounded-lg shadow-sm border border-gray-600">
                  <Shield className="text-[#FF5733] w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-white">Licensed & Insured</h3>
                    <p className="text-gray-300">Fully vetted, professional crew</p>
                  </div>
                </div>
              </div>

              <div className="bg-granite-light p-6 rounded-lg shadow-sm space-y-4 border border-gray-600">
                <div className="flex items-center gap-3">
                  <Phone className="text-[#FF5733] w-6 h-6" />
                  <span className="font-bold text-white">07490738974</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#FF5733] w-6 h-6" />
                  <span className="text-white">hscbuildersglasgow@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">WhatsApp available for fast replies</span>
                </div>
              </div>

              <div className="bg-amber-900/20 border border-amber-700 p-6 rounded-lg">
                <p className="font-medium text-amber-200 mb-2">
                  Need urgent help? Our team is active in your area this week.
                </p>
                <p className="text-amber-300">
                  Ask about next-day quotes — limited slots available.
                </p>
              </div>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full bg-[#FF5733] hover:bg-[#e64a2e] text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 flex items-center justify-center gap-2"
              >
                👉 Get My Free Site Visit & Bonus
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}