import React from 'react';
import { Star, Check, Clock, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TestimonialsSection } from '../components/ui/TestimonialsSection';
import { FeatureSteps } from '../components/ui/feature-steps';
import BeforeAfterCarousel from '../components/ui/before-after-carousel';
import ServiceHero from '../components/ServiceHero';
import Footer from '../components/Footer';
import { ScrollReveal, StaggerContainer, FadeIn } from '../components/ScrollReveal';
import { FeaturesSectionWithHoverEffects } from '../components/ui/features-section-hover';
import RecentProjectsCarousel from '../components/RecentProjectsCarousel';
import { StickyTopNavBar } from '../components/StickyTopNavBar';

const landscapingHeadlines = [
  "Patchy Lawn?",
  "Sunken Decking?",
  "Flooding & Pooling Water?",
  "Rotting Timber?",
  "Uneven Surfaces?",
  "Moss Growing Everywhere?"
];

const beforeAfterProjects = [
  {
    beforeImage: "https://imgur.com/ZHY9jPC.jpg",
    afterImage: "https://imgur.com/9HYYjWw.jpg"
  },
  {
    beforeImage: "https://imgur.com/Heep3zw.jpg",
    afterImage: "https://imgur.com/j8r7kko.jpg"
  },
  {
    beforeImage: "https://imgur.com/6C1fio4.jpg",
    afterImage: "https://imgur.com/MSYwxqn.jpg"
  },
  {
    beforeImage: "https://imgur.com/yGuMKW6.jpg",
    afterImage: "https://imgur.com/fvM4Fdg.jpg"
  }
];

const recentProjects = [
  { image: '', alt: 'Landscaping Project 1' },
  { image: '', alt: 'Landscaping Project 2' },
  { image: '', alt: 'Landscaping Project 3' },
  { image: '', alt: 'Landscaping Project 4' },
  { image: '', alt: 'Landscaping Project 5' },
  { image: '', alt: 'Landscaping Project 6' },
  { image: '', alt: 'Landscaping Project 7' }
];

export default function Landscaping() {
  const testimonials = [
    {
      author: {
        name: "Claire Harley",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
        title: "Verified Customer"
      },
      text: "The service from Hugh was exceptional. Quick response, detailed quote, and professional work throughout. Could not be happier!"
    },
    {
      author: {
        name: "Kim Armstrong",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
        title: "Verified Customer"
      },
      text: "The service from Hugh was exceptional. Quick response, detailed quote, and professional work throughout. Could not be happier!"
    },
    {
      author: {
        name: "Ross Taylor",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
        title: "Verified Customer"
      },
      text: "Transformed our garden completely. The team was professional, tidy, and finished ahead of schedule."
    }
  ];

  return (
    <div className="min-h-screen bg-granite w-full overflow-x-hidden">
      <StickyTopNavBar />
      <ServiceHero
        headlines={landscapingHeadlines}
        backgroundImage="https://imgur.com/RJiytpz.jpg"
        carouselImages={[
          "https://imgur.com/Yfg88CG.jpg",
          "https://imgur.com/JK828ck.jpg"
        ]}
        features={[
          "Free On-Site Estimate & Consultation — Full Design Provided After Approval",
          "Pick Your Free Upgrade: Jet Wash Finish, Garden Tidy-Up, or Dump Run"
        ]}
        offer="No pressure. Just answers, expert ideas, and a plan you'll love."
        addOnBonus="🔒 Limited Time Offer - Next 30 Days Only"
        thankYouPage="/thank-you-driveways"
        service="landscaping"
      />

      {/* Bridge Into Belief Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              So… What's Really Holding You Back?
            </h2>
          </ScrollReveal>
          <StaggerContainer className="max-w-4xl mx-auto space-y-6 text-lg text-gray-200">
            <p>
              You've thought about sorting your garden more than once — maybe even looked at quotes — but something's always stopped you.
            </p>
            <p>
              Maybe it's the cost. Maybe it's worrying the job won't go smoothly, or that you'll end up chasing contractors.
            </p>
            <p>
              That's why we built a process that's simple, collaborative, and completely pressure-free.
            </p>
            <p>
              From your first site visit to the final walk-through, we'll guide you through every step — clear pricing, quick updates, and expert advice so you always know what's happening.
            </p>
            <p className="font-semibold text-white text-xl border-l-4 border-accent pl-6 py-2">
              Here's how we make getting your landscaping done feel easy — and make sure the result lasts for years to come.
            </p>
          </StaggerContainer>
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
              We don't cut corners, use cheap materials, or leave you with drainage problems. Every landscaping project is designed to enhance your outdoor space and backed by our commitment to quality.
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
                    Book your landscaping project this month and we'll include a complete garden cleanup and waste removal — <span className="text-accent font-semibold">worth £250</span>.
                  </p>
                  <p className="text-base text-gray-300 italic">
                    Start your new garden completely fresh and pristine.
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
          <ScrollReveal width="100%">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">What's Possible With HSC Builders</h2>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="text-center max-w-2xl mx-auto text-gray-300 mt-4 mb-12 text-lg">
              From overgrown and neglected to stunning outdoor spaces built for years of enjoyment.
            </p>
          </ScrollReveal>
          <FadeIn delay={0.3}>
            <BeforeAfterCarousel projects={beforeAfterProjects} />
          </FadeIn>
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
              See the quality of our craftsmanship in these completed landscaping installations
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
            content: "We visit your property to assess your outdoor space, discuss your vision, and show design and material options. You'll get a clear quote and plan — no guesswork, no pressure.",
            image: "/HSC-STEP1-PROCESS copy.webp"
          },
          {
            step: "Expert Planning & Installation",
            content: "Once approved, our in-house team handles everything — from site preparation and drainage to planting and finishing touches. No subcontractors, no cut corners, just a clean, efficient project done right the first time.",
            image: "/step2-HSC-PROCESS copy.webp"
          },
          {
            step: "Final Inspection & Hand-Off",
            content: "We don't just finish the job — we perfect it. Every project gets a final inspection and cleanup to ensure everything looks amazing and is ready for you to enjoy.",
            image: "/step3-HSC-PROCESS copy.webp"
          }
        ]}
        title="How It Works – A Simple 3-Step Process"
        subtitle="Our average landscaping project takes 1–2 weeks, depending on scope. You'll always deal directly with our team — start to finish."
        className="bg-granite-light"
      />

      {/* Reviews Section */}
      <TestimonialsSection
        title="What Our Customers Say"
        description="Read trusted reviews from our satisfied customers"
        testimonials={testimonials}
        className="bg-granite-medium"
      />

      {/* Local Map & Trust Badges Section */}
      <section className="py-16 bg-granite-medium">
        <div className="container mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              We're Local. We're Trusted. We're Working Near You.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Map */}
            <ScrollReveal direction="left" delay={0.2}>
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
            </ScrollReveal>

            {/* Trust Badges & Contact */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-8">
                <StaggerContainer className="grid gap-4">
                <div className="flex items-center gap-3 bg-granite-light p-4 rounded-lg shadow-sm border border-gray-600">
                  <Star className="text-yellow-400 w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-white">24 5-Star Google Reviews</h3>
                    <p className="text-gray-300">Trusted by local homeowners</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-granite-light p-4 rounded-lg shadow-sm border border-gray-600">
                  <MapPin className="text-accent w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-white">Covering All Glasgow Areas</h3>
                    <p className="text-gray-300">Southside, Clydebank, Bearsden, Partick & More</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-granite-light p-4 rounded-lg shadow-sm border border-gray-600">
                  <Clock className="text-accent w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-white">17+ Years Experience</h3>
                    <p className="text-gray-300">Serving the local community</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-granite-light p-4 rounded-lg shadow-sm border border-gray-600">
                  <Shield className="text-accent w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-white">Licensed & Insured</h3>
                    <p className="text-gray-300">Fully vetted, professional crew</p>
                  </div>
                </div>
                </StaggerContainer>

              <FadeIn delay={0.6}>
                <div className="bg-granite-light p-6 rounded-lg shadow-sm space-y-4 border border-gray-600">
                <div className="flex items-center gap-3">
                  <Phone className="text-accent w-6 h-6" />
                  <span className="font-bold text-white">07490738974</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-accent w-6 h-6" />
                  <span className="text-white">hscbuildersglasgow@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">WhatsApp available for fast replies</span>
                </div>
              </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="bg-amber-900/20 border border-amber-700 p-6 rounded-lg">
                  <p className="font-medium text-amber-200 mb-2">
                    Need urgent help? Our team is active in your area this week.
                  </p>
                  <p className="text-amber-300">
                    Ask about next-day quotes — limited slots available.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={1.0}>
                <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 flex items-center justify-center gap-2"
              >
                👉 Get My Free Site Visit & Bonus
              </button>
              </FadeIn>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
