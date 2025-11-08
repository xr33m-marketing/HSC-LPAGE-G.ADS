import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Phone, Check, Shield } from 'lucide-react';
import { RotatingHeadline } from './ui/rotating-headline';
import { NotificationToast } from './ui/notification-toast';
import { useNotificationStore } from '@/lib/stores/notification-store';
import { trackFormSubmission, trackPhoneCall } from '../lib/analytics';
import { initGclidTracking, getRedirectUrl } from '../lib/gclid';
import TrustBadgesCarousel from './TrustBadgesCarousel';
import { ScrollReveal, StaggerContainer, FadeIn } from './ScrollReveal';

interface ServiceHeroProps {
  headlines: string[];
  description?: string;
  backgroundImage: string;
  carouselImages: string[];
  features: string[];
  offer: string;
  addOnBonus?: string;
  thankYouPage: string;
  service: string;
}

const DEFAULT_DESCRIPTION = "You've either put it off, or tried to sort it yourself — but here we are, and your garden still isn't right.";

export default function ServiceHero({
  headlines,
  description = DEFAULT_DESCRIPTION,
  backgroundImage,
  carouselImages,
  features,
  offer,
  addOnBonus,
  thankYouPage,
  service
}: ServiceHeroProps) {
  const navigate = useNavigate();
  const { setService } = useNotificationStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    initGclidTracking();
    setService(service);
  }, [service, setService]);

  useEffect(() => {
    if (carouselImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [carouselImages.length]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xvgqzbeo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      trackFormSubmission(service || 'general', {
        service_type: service,
        form_location: 'hero',
        user_postcode: formData.get('postcode'),
        user_email_domain: formData.get('email')?.toString().split('@')[1]
      });

      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-16631948260',
          value: 1.0,
          currency: 'GBP'
        });
      }

      setIsSuccess(true);
      form.reset();

      setTimeout(() => {
        window.scrollTo(0, 0);
        const redirectUrl = getRedirectUrl(thankYouPage);
        navigate(redirectUrl);
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      alert('There was an error submitting the form. Please try again or contact us directly.');
    }
  };

  const handlePhoneClick = () => {
    trackPhoneCall('07490738974');
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="relative bg-granite overflow-x-hidden overflow-y-auto min-h-screen w-full pt-16">
        {/* Hero Background Image Carousel */}
        <div className="absolute inset-0 w-full h-full z-0">
          {carouselImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Hero Background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              onError={(e) => {
                console.error('Image failed to load:', image);
                e.currentTarget.style.display = 'none';
              }}
            />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 z-[1]">
          {/* Gradient Overlay: Top 80% → Bottom 40% */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/40"></div>

          {/* Subtle reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent opacity-30"></div>
        </div>

        {/* Hero Content - Centered */}
        <div className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 text-center w-full">
          <div className="max-w-5xl mx-auto space-y-8 w-full">
            {/* Problem Headline */}
            <ScrollReveal width="100%" delay={0.2}>
              <h1 className="text-white font-serif">
                <span className="block text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-2xl">
                  Still Looking at
                </span>
                <div className="h-[120px] md:h-[140px] lg:h-[160px] flex items-center justify-center w-full overflow-hidden">
                  <RotatingHeadline
                    headlines={headlines}
                    className="text-accent text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg w-full"
                  />
                </div>
              </h1>
            </ScrollReveal>

            {/* Subheadline - Agitate */}
            <ScrollReveal width="100%" delay={0.4}>
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                You notice it every time you park — the cracks, the weeds, the uneven patches. It's gone from annoying to embarrassing.
              </p>
            </ScrollReveal>

            {/* Support Line - Solution */}
            <ScrollReveal width="100%" delay={0.6}>
              <p className="text-white text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                Our expert team transforms tired driveways into flawless entrances — backed by a 24-Month Workmanship Guarantee.
              </p>
            </ScrollReveal>

            {/* CTA Buttons - Centered */}
            <FadeIn delay={0.8}>
              <div className="pt-8 flex flex-col items-center gap-4">
              <button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-white font-bold py-5 px-12 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent/50 inline-flex items-center gap-3"
                style={{
                  boxShadow: '0 10px 40px rgba(255, 107, 0, 0.3)'
                }}
              >
                Can You Fit Me In?
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <a
                href="tel:07490738974"
                onClick={handlePhoneClick}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold py-4 px-10 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-500/50 inline-flex items-center gap-3"
                style={{
                  boxShadow: '0 8px 30px rgba(34, 197, 94, 0.3)'
                }}
              >
                <Phone size={20} />
                May As Well Call
              </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Trust Badges Carousel */}
        <div className="relative z-20">
          <FadeIn delay={1.0}>
            <TrustBadgesCarousel />
          </FadeIn>
        </div>

        {/* Contact Form Section - Two Column Layout */}
        <div id="contact-form" className="relative z-20 container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">

            {/* Left Column - Content */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-6 text-white">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Tired of Putting It Off?
                </h3>

                <p className="text-lg text-gray-200 leading-relaxed">
                  We know how it goes — you've thought about fixing it, maybe even got a few quotes… but nothing felt right. That's where we step in.
                </p>

                <StaggerContainer className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <span className="font-semibold text-white">Fast Replies</span>
                    <span className="text-gray-300"> — We'll get back to you within 24 hours, guaranteed.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <span className="font-semibold text-white">All Types of Driveways</span>
                    <span className="text-gray-300"> — From block paving to monoblock paths & full driveway rebuilds.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <span className="font-semibold text-white">Expert Advice</span>
                    <span className="text-gray-300"> — Honest recommendations from tradesmen, not salesmen.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <span className="font-semibold text-white">Smooth Process</span>
                    <span className="text-gray-300"> — From first quote to finished job, everything handled start to finish.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <span className="font-semibold text-white">Free On-Site Assessment</span>
                    <span className="text-gray-300"> — Get clear pricing and design ideas before spending a penny.</span>
                  </div>
                </li>
                </StaggerContainer>

                <p className="text-gray-300 italic border-l-4 border-accent pl-4 py-2">
                  "We keep our project list short, so you'll always deal with our in-house team — no subcontractors, no delays."
                </p>
              </div>
            </ScrollReveal>

            {/* Right Column - Form */}
            <ScrollReveal direction="right" delay={0.2}>
              <div>
              <div className="flex items-center justify-between gap-4 rounded-t-xl px-6 py-3 w-full">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="Google"
                    className="h-5"
                    loading="lazy"
                    decoding="async"
                    width="92"
                    height="30"
                  />
                </div>
                <a
                  href="tel:07490738974"
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Phone size={18} />
                  <span className="font-semibold">Call Now</span>
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-b-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-2 text-white">Get Your Free Quote & Jet Wash Finish</h3>
                <p className="text-gray-200 mb-6">{offer}</p>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  action="https://formspree.io/f/xvgqzbeo"
                  method="POST"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="postcode"
                    placeholder="Postcode"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
                    required
                  ></textarea>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="consent" name="consent" className="mt-1" required />
                    <label htmlFor="consent" className="text-sm text-gray-200">
                      I agree to receive information about my enquiry
                    </label>
                  </div>

                  {/* FormSubmit.co configuration */}
                  <input type="hidden" name="_subject" value={`New ${service} Enquiry`} />
                  <input type="hidden" name="_next" value={`https://hscbuildersglasgow.netlify.app${thankYouPage}`} />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="service" value={service} />
                  <input type="hidden" name="source" value="Website Form" />

                  {isSuccess ? (
                    <div className="bg-green-500/20 border-2 border-green-500 rounded-lg p-6 text-center">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <Check className="text-green-500" size={32} />
                        <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                      </div>
                      <p className="text-white text-lg mb-1">Your quote request has been sent successfully.</p>
                      <p className="text-gray-200 text-sm">We'll be in touch within 24 hours.</p>
                    </div>
                  ) : (
                    <>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Get My Free Quote & Jet Wash Finish'}
                      </button>
                      <p className="text-center text-sm text-amber-400 font-semibold">
                        Spaces are limited — applications reviewed daily.
                      </p>
                    </>
                  )}
                </form>
              </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        <NotificationToast />
      </div>
    </>
  );
}