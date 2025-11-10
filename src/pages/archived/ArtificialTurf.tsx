import React from 'react';
import { Star, Check, Clock, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TestimonialsSection } from '../../components/ui/TestimonialsSection';
import { FeatureSteps } from '../../components/ui/feature-steps';
import BeforeAfterCarousel from '../../components/ui/before-after-carousel';
import ServiceHero from '../../components/ServiceHero';
import Footer from '../../components/Footer';
import { ScrollReveal, StaggerContainer, FadeIn } from '../../components/ScrollReveal';
import { StickyTopNavBar } from '../../components/StickyTopNavBar';
import { FeaturesSectionWithHoverEffects } from '../../components/ui/features-section-hover';
const turfHeadlines = [
  "Patchy Grass?",
  "Muddy Mess?",
  "Kids Can't Play?",
  "Brown & Dead Patches?",
  "Constant Maintenance?",
  "Waterlogged Lawn?"
];

const beforeAfterProjects = [
  {
    beforeImage: "/before-art-turf-hsc.webp",
    afterImage: "/turf-artificial-HSC-Service (1).webp"
  },
  {
    beforeImage: "/art-turf-hsc-before.webp",
    afterImage: "/after-turf-hsc.webp"
  },
  {
    beforeImage: "/art-tirf-before-hsc.webp",
    afterImage: "/artificial-turf-HSC-Service (1).webp"
  }
];

export default function ArtificialTurf() {
  const testimonials = [
    {
      author: {
        name: "Lauren McFarlane",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
        title: "Verified Customer"
      },
      text: "Highly recommend Hugh and his team. The artificial grass looks amazing and the kids love playing on it all year round."
    },
    {
      author: {
        name: "Mary Carlyle",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
        title: "Verified Customer"
      },
      text: "Efficient service. Great company explained everything and worked timely. The workmanship fantastic, great finish and cleaned up after finished."
    },
    {
      author: {
        name: "Mary",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=50&h=50&fit=crop",
        title: "Verified Customer"
      },
      text: "Cant thank Scott and his team enough, from the start to the end true to his word and an excellent finish on the artificial turf installation."
    }
  ];

  return (
    <div className="min-h-screen bg-granite w-full overflow-x-hidden">
      <StickyTopNavBar />
      <ServiceHero
        headlines={turfHeadlines}
        description="You see it every time the kids want to play — the muddy patches, brown dead grass, constant maintenance. It's gone from tiring to unbearable. Our experts transform patchy lawns into perfect green surfaces — backed by a 24-month workmanship guarantee."
        backgroundImage="/hsc-hero-art-turf.webp"
        carouselImages={[
          "/hsc-hero-art-turf.webp",
          "/hero-art-turf-hsc.webp",
          "/hero-landscaping-3-hsc.webp"
        ]}
        features={[
          "Free On-Site Estimate & Consultation — Full Design Provided After Approval",
          "Pick Your Free Upgrade: Jet Wash Finish, Garden Tidy-Up, or Dump Run"
        ]}
        offer="No pressure. Just answers, expert ideas, and a plan you'll love."
        addOnBonus="🔒 Limited Time Offer - Next 30 Days Only"
        thankYouPage="/thank-you-driveways"
        service="artificial-turf"
        serviceFeatures={[
          {
            title: "Fast Replies",
            description: "We'll get back to you within 24 hours, guaranteed."
          },
          {
            title: "Premium Turf Options",
            description: "Multiple grades and pile heights to suit your needs and budget."
          },
          {
            title: "Proper Installation",
            description: "Professional base preparation and drainage for lasting quality."
          },
          {
            title: "Pet & Child Friendly",
            description: "Safe, durable surfaces that look great year-round."
          },
          {
            title: "Free On-Site Assessment",
            description: "Get clear pricing and turf samples before spending a penny."
          }
        ]}
      />

      {/* Bridge Into Belief Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              Tired of That Muddy, Patchy Lawn?
            </h2>
          </ScrollReveal>
          <StaggerContainer className="max-w-4xl mx-auto space-y-6 text-lg text-gray-200">
            <p>
              You've tried everything — reseeding, fertilizer, constant watering — but every winter it turns to mud, and every summer it's patchy and brown.
            </p>
            <p>
              The kids can't play outside without tracking dirt through the house. Your dog's turning the garden into a mess. And you're spending weekends mowing instead of relaxing.
            </p>
            <p>
              That's why we built a process that delivers a perfect, maintenance-free lawn — without the hassle.
            </p>
            <p>
              From your first site visit to the final installation, we'll walk you through every step — clear pricing, quick updates, and expert advice so you always know what's happening.
            </p>
            <p className="font-semibold text-white text-xl border-l-4 border-accent pl-6 py-2">
              Here's how we make getting your perfect lawn feel easy — and make sure it looks amazing for years to come.
            </p>
          </StaggerContainer>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-granite-darker">
        <div className="container mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Premium Artificial Grass. Built To Last. Designed For You.</h2>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="text-lg text-gray-200 mb-8 text-center max-w-3xl mx-auto">
              We don't use cheap turf or skip the groundwork. Every artificial grass installation is engineered with proper drainage and premium materials that look and feel like real grass.
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
                    Book your artificial turf installation this month and we'll include a complete garden cleanup and waste removal — <span className="text-accent font-semibold">worth £250</span>.
                  </p>
                  <p className="text-base text-gray-300 italic">
                    Start fresh with a completely cleared and prepared space.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

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
            <h2 className="text-4xl font-bold text-center mb-4 text-white">Artificial Grass Transformations</h2>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="text-center max-w-2xl mx-auto text-gray-300 mt-4 mb-12 text-lg">
              From muddy mess to perfect green lawn — see the transformation.
            </p>
          </ScrollReveal>
          <FadeIn delay={0.3}>
            <BeforeAfterCarousel projects={beforeAfterProjects} />
          </FadeIn>
        </div>
      </section>

      {/* Feature Steps Section */}
      <FeatureSteps
        features={[
          {
            step: "Free On-Site Consultation & Design Plan",
            content: "We visit your property to assess your lawn area, discuss your requirements, and show turf samples. You'll get a clear quote and plan — no guesswork, no pressure.",
            image: "/HSC-STEP1-PROCESS copy.webp"
          },
          {
            step: "Expert Ground Preparation & Installation",
            content: "Once approved, our team handles everything — from excavation and drainage to membrane laying and turf installation. No subcontractors, no shortcuts.",
            image: "/step2-HSC-PROCESS copy.webp"
          },
          {
            step: "Final Grooming & Inspection",
            content: "We brush and groom your new lawn to perfection, ensuring it looks natural and is ready for immediate use.",
            image: "/step3-HSC-PROCESS copy.webp"
          }
        ]}
        title="How It Works – A Simple 3-Step Process"
        subtitle="Our average installation takes 2–4 days, depending on size. You'll always deal directly with our team — start to finish."
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
