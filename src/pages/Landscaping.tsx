import React from 'react';
import { Star, Check, Clock, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TestimonialsSection } from '../components/ui/TestimonialsSection';
import { FeatureSteps } from '../components/ui/feature-steps';
import { defaultFeatureSteps } from '../components/FeatureStepsData';
import BeforeAfterCarousel from '../components/ui/before-after-carousel';
import ServiceHero from '../components/ServiceHero';
import ReferralSection from '../components/ReferralSection';
import Footer from '../components/Footer';
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
    title: "Modern Garden Transformation",
    description: "Complete garden makeover with new patio, artificial grass, and raised beds",
    beforeImage: "https://imgur.com/ZHY9jPC.jpg",
    afterImage: "https://imgur.com/9HYYjWw.jpg",
    category: "Full Garden Makeover",
    location: "Glasgow",
    duration: "2 weeks"
  },
  {
    title: "Family Garden Redesign",
    description: "Child-friendly garden with play area and low-maintenance features",
    beforeImage: "https://imgur.com/Heep3zw.jpg",
    afterImage: "https://imgur.com/j8r7kko.jpg",
    category: "Family Garden",
    location: "Bearsden",
    duration: "10 days"
  },
  {
    title: "Contemporary Garden Design",
    description: "Modern landscaping with integrated lighting and water features",
    beforeImage: "https://imgur.com/6C1fio4.jpg",
    afterImage: "https://imgur.com/MSYwxqn.jpg",
    category: "Modern Design",
    location: "Clydebank",
    duration: "2 weeks"
  },
  {
    title: "Low Maintenance Garden",
    description: "Beautiful yet practical design with artificial grass and raised planters",
    beforeImage: "https://imgur.com/yGuMKW6.jpg",
    afterImage: "https://imgur.com/fvM4Fdg.jpg",
    category: "Low Maintenance",
    location: "Partick",
    duration: "1 week"
  }
];

function Landscaping() {
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
    <div className="min-h-screen bg-gray-950 w-full overflow-x-hidden">
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
        thankYouPage="/thank-you-landscaping"
        service="landscaping"
      />

      {/* Pain Points Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Your Garden's Not Getting Better on Its Own</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-200">
            <p>Cracked paving. Standing water. That patchy corner where grass refuses to grow.</p>
            <p>You've looked out the window and thought <i>"we really need to do something"</i> — then let it go another 6 months.</p>
            <p>Meanwhile, the mud spreads. The drainage gets worse. That cheap "fix" from 3 years ago is crumbling.</p>
            <p className="font-semibold">Let's fix it once — and do it right.</p>
          </div>
        </div>
      </section>

      {/* Professional Landscaping Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Professional Landscaping Services in Glasgow</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-200 mb-6">
              As one of Glasgow's leading landscaping companies, we specialize in transforming outdoor spaces across the city. 
              Our expert landscapers in Glasgow have been creating stunning gardens for over 17 years.
            </p>
            <p className="text-lg text-gray-200">
              From complete garden makeovers to specialized landscaping projects, our team delivers exceptional results 
              that enhance your property's value and your quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Expert Landscaping Built To Last. Designed For You. Done Properly.</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-200 mb-8 text-center">
              We don't cut corners, use flimsy materials, or vanish halfway through the job. Our landscaping approach 
              ensures every project meets the highest standards expected from professional landscapers in Glasgow.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
                <h3 className="font-bold text-xl mb-4 text-white">Proper Preparation</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={20} />
                    <span className="text-gray-200">Expert leveling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={20} />
                    <span className="text-gray-200">Drainage solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={20} />
                    <span className="text-gray-200">Ground testing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
                <h3 className="font-bold text-xl mb-4 text-white">Quality Materials</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={20} />
                    <span className="text-gray-200">Premium products</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={20} />
                    <span className="text-gray-200">Weather resistant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={20} />
                    <span className="text-gray-200">Long-lasting finish</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
                <h3 className="font-bold text-xl mb-4 text-white">Expert Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={20} />
                    <span className="text-gray-200">17+ years experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={20} />
                    <span className="text-gray-200">Local knowledge</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={20} />
                    <span className="text-gray-200">Council compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Landscaping Company Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Why Choose Our Landscaping Company in Glasgow?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Comprehensive Landscaping Services</h3>
                <p className="text-gray-200 mb-4">
                  Our landscaping expertise covers everything from garden design and installation to ongoing maintenance. 
                  We're not just landscapers in Glasgow – we're your complete outdoor transformation partners.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Garden Design & Planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Patio & Decking Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Artificial Grass & Turfing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Local Glasgow Landscaping Experts</h3>
                <p className="text-gray-200 mb-4">
                  As established landscaping companies go, we understand Glasgow's unique climate and soil conditions. 
                  Our local knowledge ensures your landscaping project thrives in Scotland's weather.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Climate-Appropriate Plant Selection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Drainage Solutions for Scottish Weather</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Local Council Compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Professional Landscaping Transformations</h2>
          <p className="text-center max-w-2xl mx-auto text-gray-300 mt-4 mb-12 text-lg">
            Every garden starts as a mess. Too small. Too wet. Too forgotten. These landscaping projects were exactly the same — until our expert landscapers in Glasgow got stuck in.
          </p>
          <BeforeAfterCarousel projects={beforeAfterProjects} />
        </div>
      </section>

      {/* Feature Steps Section */}
      <FeatureSteps
        features={defaultFeatureSteps}
        title="How Our Landscaping Process Works – A Simple 3-Step Process"
        className="bg-gray-800"
      />

      {/* Reviews Section */}
      <TestimonialsSection
        title="What Our Landscaping Customers Say"
        description="Read trusted reviews from our satisfied landscaping clients across Glasgow"
        testimonials={testimonials}
        className="bg-gray-900"
      />

      {/* Trust Indicators Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Why Glasgow Homeowners Choose Our Landscaping Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">5-Star Landscaping Reviews</h3>
              <p className="text-gray-300">Top-rated landscapers in Glasgow on Google</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12 text-[#FF5733]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">17+ Years Landscaping Experience</h3>
              <p className="text-gray-300">Serving Glasgow with expert landscaping</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">12-Month Landscaping Guarantee</h3>
              <p className="text-gray-300">Comprehensive Workmanship Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Bundles Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Complete Landscaping Packages - Save More with Service Bundles</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            As one of Glasgow's premier landscaping companies, we offer comprehensive packages that combine multiple services for bigger savings and a complete transformation. Popular landscaping bundles include:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
              <div className="relative h-48">
                <img 
                  src="https://i.imgur.com/leqwhwc.jpg"
                  alt="Complete Landscaping & Patio Bundle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full">
                  Save 20%
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Complete Landscaping & Patio Bundle</h3>
                <p className="text-gray-300 mb-6">Full outdoor living space transformation with professional landscaping and premium patio installation.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Full Landscaping Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Premium Patio Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Premium Paving With Weed-Resistant Joints</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
              <div className="relative h-48">
                <img 
                  src="https://i.imgur.com/Orv62sB.jpg"
                  alt="Landscaping & Fencing Package"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full">
                  Save 15%
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Landscaping & Fencing Package</h3>
                <p className="text-gray-300 mb-6">Professional landscaping with premium fencing for complete garden privacy and beauty.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Quality Fencing Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Old Fence Removal & Site Prep Included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Low-Maintenance Gravel Boards Installed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
              <div className="relative h-48">
                <img 
                  src="https://imgur.com/fvM4Fdg.jpg"
                  alt="Low Maintenance Landscaping Bundle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full">
                  Save 15%
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Low Maintenance Landscaping Bundle</h3>
                <p className="text-gray-300 mb-6">Perfect landscaping solution for busy homeowners who want a beautiful, easy-care garden.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Artificial Grass Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Low-Maintenance Plants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span className="text-gray-200">Weed-Proof Membrane & Sub-Base Prep</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <ReferralSection service="landscaping project" />

      {/* Local Map & Trust Badges Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Local Glasgow Landscapers. Trusted. Working Near You.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.3191637325403!2d-4.1035873999999986!3d55.805059299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8b50b938909fffb5%3A0x9295392d88e539!2sHSC%20Builders%20%7C%20Landscape%20Gardeners%20%7C%20Glasgow!5e0!3m2!1sen!2suk!4v1745001551346!5m2!1sen!2suk"
                width="100%" 
                height="400" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Trust Badges */}
            <div>
              <div className="grid gap-4">
                <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700">
                  <Star className="text-yellow-400 w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-white">5-Star Landscaping Reviews</h3>
                    <p className="text-gray-300">Top-rated landscaping company on Google</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700">
                  <MapPin className="text-[#FF5733] w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-white">Landscaping All Glasgow Areas</h3>
                    <p className="text-gray-300">Southside, Clydebank, Bearsden, Partick & More</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700">
                  <Clock className="text-[#FF5733] w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-white">17+ Years Landscaping Experience</h3>
                    <p className="text-gray-300">Established landscapers serving the local community</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700">
                  <Shield className="text-[#FF5733] w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-white">Licensed & Insured Landscaping</h3>
                    <p className="text-gray-300">Fully vetted, professional landscaping crew</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
                <div className="space-y-4">
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
                    <span className="text-gray-300">WhatsApp available for fast landscaping quotes</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-amber-900/20 border border-amber-700 p-6 rounded-lg">
                <p className="font-medium text-amber-200 mb-2">
                  Need urgent landscaping help? Our team is active in your area this week.
                </p>
                <p className="text-amber-300">
                  Ask about next-day landscaping quotes — limited slots available.
                </p>
              </div>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full mt-6 bg-[#FF5733] hover:bg-[#e64a2e] text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 flex items-center justify-center gap-2"
              >
                👉 Get My Free Landscaping Site Visit & Bonus
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landscaping;