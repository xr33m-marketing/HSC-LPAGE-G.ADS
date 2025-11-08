import React from 'react';
import { Star, Check, Clock, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { TestimonialsSection } from '../../components/ui/TestimonialsSection';
import { FeatureSteps } from '../../components/ui/feature-steps';
import BeforeAfterCarousel from '../../components/ui/before-after-carousel';
import ServiceHero from '../../components/ServiceHero';
import Footer from '../../components/Footer';
import { ScrollReveal, StaggerContainer, FadeIn } from '../../components/ScrollReveal';
import { StickyTopNavBar } from '../../components/StickyTopNavBar';
import { FeaturesSectionWithHoverEffects } from '../../components/ui/features-section-hover';
const fencingHeadlines = [
  "Leaning Fence Posts?",
  "Loose, Wobbly Panels?",
  "Gaps & Missing Boards?",
  "Storm Damage?",
  "Privacy Concerns?",
  "Boundary Disputes?"
];

const beforeAfterProjects = [
  {
    beforeImage: "/BEfore-HSC-Fencing-Gallery.webp",
    afterImage: "/HSC-fencing-SERVICES (1).webp"
  },
  {
    beforeImage: "/HSC-fencing-BEFORE-GALLERY (1).webp",
    afterImage: "/SERVICES-fencing-HSC (1).webp"
  },
  {
    beforeImage: "/fencing-BEFORE-HSC-Gallery (1).webp",
    afterImage: "/Compostite-fencing-HSC-home (1).webp"
  }
];

export default function Fencing() {
  const testimonials = [
    {
      author: {
        name: "Stephen Brandon",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
        title: "Verified Customer"
      },
      text: "I contacted Hugh to quote me on mending my broken gate post. He came out to quote when he said he would and came out to do the job on the day agreed. The work is to a good standard and the guys left the area clean & tidy."
    },
    {
      author: {
        name: "Ross Taylor",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
        title: "Verified Customer"
      },
      text: "Contacted HSC Builders after suffering storm damage to both mine and my neighbours fences. Scott came out the very next day, provided a fair price. The work was booked within a week. Very impressed with their professionalism!"
    }
  ];

  return (
    <div className="min-h-screen bg-granite w-full overflow-x-hidden">
      <StickyTopNavBar />
      <ServiceHero
        headlines={fencingHeadlines}
        backgroundImage="/fencing-hsc-hero-1.webp"
        carouselImages={[
          "/fencing-hsc-hero-1.webp",
          "/hsc-hero-fencing-2.webp",
          "/hsc-hero-decking-2.webp"
        ]}
        features={[
          "Free On-Site Estimate & Consultation — Full Design Provided After Approval",
          "Pick Your Free Upgrade: Jet Wash Finish, Garden Tidy-Up, or Dump Run"
        ]}
        offer="No pressure. Just answers, expert ideas, and a plan you'll love."
        addOnBonus="🔒 Limited Time Offer - Next 30 Days Only"
        thankYouPage="/thank-you-driveways"
        service="fencing"
      />

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              That Fence Won't Fix Itself
            </h2>
          </ScrollReveal>
          <StaggerContainer className="max-w-4xl mx-auto space-y-6 text-lg text-gray-200">
            <p>Every storm makes it worse. Privacy's gone. Neighbors can see everything. And you're worried it'll blow down completely.</p>
            <p>You know it needs sorted — but finding reliable fencers near me, getting quotes from fencers Glasgow, coordinating everything… it feels like a hassle.</p>
            <p>That's why we built a process that's simple, collaborative, and completely pressure-free. As experienced fencers in Glasgow, we make the entire process easy.</p>
            <p className="font-semibold text-white text-xl border-l-4 border-accent pl-6 py-2">
              Here's how we make getting your fence sorted feel easy — and make sure it lasts for years to come.
            </p>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 bg-granite-darker">
        <div className="container mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Solid Fencing. Built To Last. Designed For Your Property.</h2>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="text-lg text-gray-200 mb-8 text-center max-w-3xl mx-auto">
              We don't use weak posts or skip the groundwork. As professional fencers Glasgow trusts, every fence we build is engineered to withstand local weather with proper concrete footings and quality materials.
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
                    This Month Only — Bonus <span className="text-accent">Post Treatment & Finish</span>
                  </h3>
                  <p className="text-lg text-gray-200">
                    Book your fencing project this month and we'll include professional post treatment and protective finish — <span className="text-accent font-semibold">worth £250</span>.
                  </p>
                  <p className="text-base text-gray-300 italic">
                    Protect your investment and extend fence life by years.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="max-w-5xl mx-auto mt-6 text-center">
              <a href="tel:07490738974" className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl">
                <Phone className="w-6 h-6" />
                No Harm In Calling
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-granite-medium">
        <div className="container mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">Fencing Transformations</h2>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="text-center max-w-2xl mx-auto text-gray-300 mt-4 mb-12 text-lg">
              From broken and unstable to secure, private, and built to last.
            </p>
          </ScrollReveal>
          <FadeIn delay={0.3}>
            <BeforeAfterCarousel projects={beforeAfterProjects} />
          </FadeIn>
        </div>
      </section>

      <FeatureSteps
        features={[
          { step: "Free On-Site Consultation", content: "We visit your property to assess your fencing needs, discuss panel styles, and provide a clear quote.", image: "/HSC-STEP1-PROCESS copy.webp" },
          { step: "Professional Installation", content: "Our team removes old fencing, installs concrete posts, and fits premium panels with proper fixings.", image: "/step2-HSC-PROCESS copy.webp" },
          { step: "Final Inspection & Cleanup", content: "We ensure everything is level, secure, and tidy before completing the job.", image: "/step3-HSC-PROCESS copy.webp" }
        ]}
        title="How It Works – A Simple 3-Step Process"
        subtitle="Most fencing projects completed in 2–3 days."
        className="bg-granite-light"
      />

      <TestimonialsSection title="What Our Customers Say" description="Read trusted reviews from our satisfied customers" testimonials={testimonials} className="bg-granite-medium" />

      <section className="py-16 bg-granite-medium">
        <div className="container mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">We're Local. We're Trusted. We're Working Near You.</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.3191637325403!2d-4.1035873999999986!3d55.805059299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8b50b938909fffb5%3A0x9295392d88e539!2sHSC%20Builders%20%7C%20Landscape%20Gardeners%20%7C%20Property%20Renovators%20%7C%20Glasgow!5e0!3m2!1sen!2suk!4v1745001551346!5m2!1sen!2suk" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="HSC Builders Location"></iframe>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-8">
                <StaggerContainer className="grid gap-4">
                  <div className="flex items-center gap-3 bg-granite-light p-4 rounded-lg border border-gray-600">
                    <Star className="text-yellow-400 w-8 h-8" />
                    <div><h3 className="font-bold text-white">24 5-Star Google Reviews</h3><p className="text-gray-300">Trusted by local homeowners</p></div>
                  </div>
                  <div className="flex items-center gap-3 bg-granite-light p-4 rounded-lg border border-gray-600">
                    <MapPin className="text-accent w-8 h-8" />
                    <div><h3 className="font-bold text-white">Covering All Glasgow Areas</h3><p className="text-gray-300">Southside, Clydebank, Bearsden & More</p></div>
                  </div>
                  <div className="flex items-center gap-3 bg-granite-light p-4 rounded-lg border border-gray-600">
                    <Clock className="text-accent w-8 h-8" />
                    <div><h3 className="font-bold text-white">17+ Years Experience</h3><p className="text-gray-300">Serving the local community</p></div>
                  </div>
                  <div className="flex items-center gap-3 bg-granite-light p-4 rounded-lg border border-gray-600">
                    <Shield className="text-accent w-8 h-8" />
                    <div><h3 className="font-bold text-white">Licensed & Insured</h3><p className="text-gray-300">Fully vetted, professional crew</p></div>
                  </div>
                </StaggerContainer>
                <FadeIn delay={0.6}>
                  <div className="bg-granite-light p-6 rounded-lg border border-gray-600 space-y-4">
                    <div className="flex items-center gap-3"><Phone className="text-accent w-6 h-6" /><span className="font-bold text-white">07490738974</span></div>
                    <div className="flex items-center gap-3"><Mail className="text-accent w-6 h-6" /><span className="text-white">hscbuildersglasgow@gmail.com</span></div>
                    <div className="flex items-center gap-3"><div className="w-2 h-2 bg-green-500 rounded-full"></div><span className="text-gray-300">WhatsApp available for fast replies</span></div>
                  </div>
                </FadeIn>
                <FadeIn delay={1.0}>
                  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">👉 Get My Free Site Visit & Bonus</button>
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
