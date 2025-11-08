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
import Footer from '../../components/Footer';
import { ScrollReveal, StaggerContainer, FadeIn } from '../../components/ScrollReveal';

const wallHeadlines = [
  "Leaning Wall?",
  "Crumbling Bricks?",
  "Drainage Issues?",
  "Structural Problems?",
  "Soil Erosion?",
  "Foundation Concerns?"
];

const beforeAfterProjects = [
  {
    title: "Natural Stone Retaining Wall",
    description: "Engineered retaining wall with integrated steps and lighting",
    afterImage: "https://imgur.com/3J8urFI.jpg",
    category: "Retaining Wall",
    location: "Glasgow"
  },
  {
    title: "Modern Gabion Wall",
    description: "Contemporary gabion wall with decorative stone fill",
    afterImage: "https://imgur.com/GF5qwSh.jpg",
    category: "Gabion Wall",
    location: "Bearsden"
  },
  {
    title: "Garden Feature Wall",
    description: "Decorative wall with built-in planters and water feature",
    afterImage: "https://imgur.com/ivf415w.jpg",
    category: "Feature Wall",
    location: "Clydebank"
  },
  {
    title: "Luxury Stone Wall",
    description: "Premium stone wall with integrated lighting and coping stones",
    afterImage: "https://imgur.com/p6ffGIt.jpg",
    category: "Stone Wall",
    location: "Partick"
  },
  {
    title: "Contemporary Block Wall",
    description: "Modern block wall design with clean lines and premium finish",
    afterImage: "https://imgur.com/qgW6YWx.jpg",
    category: "Block Wall",
    location: "Giffnock"
  }
];

export default function RetainingWalls() {
  const testimonials = [
    {
      author: {
        name: "David Wilson",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
        title: "Verified Customer"
      },
      text: "Excellent job on our retaining wall. The team was professional and the finish is perfect."
    },
    {
      author: {
        name: "Sarah Thompson",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
        title: "Verified Customer"
      },
      text: "Very impressed with the structural work. The drainage solution has completely fixed our garden problems."
    },
    {
      author: {
        name: "Michael Brown",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
        title: "Verified Customer"
      },
      text: "Professional service from start to finish. Fair price and excellent workmanship."
    }
  ];

  return (
    <div className="min-h-screen bg-granite w-full overflow-x-hidden">
      <StickyTopNavBar />
      <ServiceHero 
        headlines={wallHeadlines}
        backgroundImage="https://imgur.com/N1I2w82.jpg"
        carouselImages={[
          "https://imgur.com/njO8Dct.jpg",
          "https://imgur.com/lkO0R4t.jpg"
        ]}
        features={[
          "Free On-Site Estimate & Consultation — Full Design Provided After Approval",
          "Pick Your Free Upgrade: Jet Wash Finish, Garden Tidy-Up, or Dump Run"
        ]}
        offer="No pressure. Just answers, expert ideas, and a plan you'll love."
        addOnBonus="🔒 Limited Time Offer - Next 30 Days Only"
        thankYouPage="/thank-you-retaining-walls"
        service="retaining-walls"
      />

      {/* Pain Points Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Your Wall's Not Getting Better on Its Own</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-200">
            <p>Crumbling bricks. Leaning sections. That worrying crack that keeps getting bigger.</p>
            <p>You've looked at it and thought <i>"we really need to fix this"</i> — then let it go another 6 months.</p>
            <p>Meanwhile, the lean gets worse. The cracks widen. That temporary fix from last year is failing.</p>
            <p className="font-semibold">Let's fix it once — and do it right.</p>
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
              We don't cut corners, use cheap materials, or leave you with drainage problems.
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
                    This Month Only — Bonus <span className="text-accent">Garden Tidy-Up Service</span>
                  </h3>
                  <p className="text-lg text-gray-200">
                    Book your retaining wall project this month and we'll include a complete site cleanup — <span className="text-accent font-semibold">worth £250</span>.
                  </p>
                  <p className="text-base text-gray-300 italic">
                    Complete site cleanup so your new wall looks perfect from day one.
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
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Every wall starts as a problem.</h2>
          <p className="text-center max-w-2xl mx-auto text-gray-300 mt-4 mb-12 text-lg">
            Too damaged. Too dangerous. Too unstable. These ones were exactly the same — until we got stuck in.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {beforeAfterProjects.map((project, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-3">{project.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-white/60">{project.location}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-sm text-white/60">{project.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Steps Section */}
      <FeatureSteps
        features={defaultFeatureSteps}
        title="How It Works – A Simple 3-Step Process"
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
      <ReferralSection service="wall" />

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