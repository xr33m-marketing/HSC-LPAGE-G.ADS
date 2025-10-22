import React, { useState, useEffect } from 'react';
import { Star, Check, ChevronDown, ChevronUp, Clock, Shield, Truck, Users, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const services = [
    {
      type: "DRIVEWAYS",
      title: "Block Paving & Monoblock",
      description: "Premium driveway solutions built to last. Our expert team specializes in creating stunning, durable driveways that enhance your property's value and curb appeal.",
      image: "https://imgur.com/zfWY92r.jpg",
      features: [
        "Premium Materials",
        "24-Month Workmanship Guarantee",
        "Professional Installation",
        "Free Design Service"
      ],
      link: "/driveways"
    }
  ];

  const testimonials = [
    {
      text: "First class job done so pleased with my composite decking. Hugh & Brian are very reliable hard working guys who I would highly recommend.",
      author: "Claire Harley",
      rating: 5,
      date: "2 days ago",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
      photos: 2,
      reviews: 2
    },
    {
      text: "I contacted Hugh to quote me on mending my broken gate post. He came out to quote when he said he would and came out to do the job on the day agreed. The work is to a good standard and the guys left the area that they were working on clean & tidy.",
      author: "Stephen Brandon",
      rating: 5,
      date: "1 week ago",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
      photos: 1,
      reviews: 4
    },
    {
      text: "Contacted HSC Builders after suffering storm damage to both mine and my neighbours fences. Scott came out the very next day, provided a fair price. The work was booked within a week. Very impressed with their professionalism, the job was finished ahead of schedule!",
      author: "Ross Taylor",
      rating: 5,
      date: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
      photos: 0,
      reviews: 3
    },
    {
      text: "So happy with the work done by Hugh and his team. Our garden looks amazing, thanks again!",
      author: "Shaunna Elliott",
      rating: 5,
      date: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
      photos: 1,
      reviews: 1
    },
    {
      text: "Hugh, Brian & the team arrived on time every day. Worked hard from start to finish in all conditions & left us with two beautiful garden walls. Excellent service, excellent work would recommend every time.",
      author: "Rita Cameron",
      rating: 5,
      date: "3 weeks ago",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop",
      photos: 1,
      reviews: 2
    },
    {
      text: "Can't thank Scott and his team enough, from the start to the end true to his word and an excellent finish on the job itself, even in the terrible weather powered on. Highly recommend these guys.",
      author: "Mary Carlyle",
      rating: 5,
      date: "4 weeks ago",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
      photos: 0,
      reviews: 2
    },
    {
      text: "HSC turned up promptly on the day. Both guys were very helpful, EXTREMELY tidy workers and a great job done. Delighted with their work",
      author: "Margery Cherry",
      rating: 5,
      date: "22 weeks ago",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop",
      photos: 0,
      reviews: 2
    },
    {
      text: "The service from Hugh was exceptional. From his quick response to my enquiry, came to survey the job, provided a detailed quote and offered dates to start. The job was to remove a part of an old wall, which they did in a thoroughly professional manner. 2nd job was to build steps at a new patio door. Could not be happier with the finished jobs, and would definitely recommend High, without hesitation.",
      author: "Kim Armstrong",
      rating: 5,
      date: "21 weeks ago",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=50&h=50&fit=crop",
      photos: 1,
      reviews: 6
    },
    {
      text: "Reliable company. Hugh made a great job replacing my stairs. Lovely neat job with minimal disruption and mess. Would recommend and wouldn't hesitate to use again.",
      author: "Wilma Paterson",
      rating: 5,
      date: "25 weeks ago",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=50&h=50&fit=crop",
      photos: 4,
      reviews: 3
    },
    {
      text: "Efficient service. Great company explained everything and worked timely also made sure everything to specification required. The workmanship fantastic great finish and cleaned up after finished (all rubbish taken with them) Highly recommend this company. Very knowledgeable.",
      author: "Mary Carlyle",
      rating: 5,
      date: "6 months ago",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
      photos: 0,
      reviews: 2
    },
    {
      text: "Great job in sorting our garden out. Would recommend these guys 100%",
      author: "Tigersb",
      rating: 5,
      date: "8 months ago",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&h=50&fit=crop",
      photos: 0,
      reviews: 1
    }
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of garden services including landscaping, patios, turfing, and fencing. Our team specializes in full garden makeovers, outdoor living spaces, and garden maintenance."
    },
    {
      question: "How much will my project cost?",
      answer: "Each project is unique and costs vary depending on size, materials, and complexity. We offer free consultations where we can provide a detailed quote based on your specific requirements. Currently, we're offering £200 off projects over £5,000."
    },
    {
      question: "How long will my project take?",
      answer: "Project timelines vary based on scope and complexity. A typical garden makeover can take 1-2 weeks, while smaller projects like fencing might take 2-3 days. We'll provide a detailed timeline during your consultation."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "Yes, we provide a 12-month workmanship guarantee on all our projects. This covers any issues related to installation or materials used. We also ensure all work meets current industry standards."
    },
    {
      question: "What areas do you cover?",
      answer: "We serve all of Scotland, with particular focus on major cities and surrounding areas. Contact us to confirm if we cover your specific location."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-granite w-full overflow-x-hidden">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        {/* Dark Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 pt-20 lg:pt-0">
            <div className="max-w-xl">
              <h1 className="text-[#FF5733] text-4xl lg:text-6xl font-bold mb-6">Transform Your Garden This Spring</h1>
              <p className="text-white text-lg lg:text-xl mb-8">Landscaping, patios, turfing, and fencing – built with care, made to last.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <Check className="text-[#FF5733] shrink-0" size={24} />
                  <p className="text-white text-base lg:text-lg">£200 Off Projects Over £5,000</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#FF5733] shrink-0" size={24} />
                  <p className="text-white text-base lg:text-lg">Free Design Plan + On-Site Tidy-Up (Worth £150)</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#FF5733] shrink-0" size={24} />
                  <p className="text-white text-base lg:text-lg">Only 3 April Projects Left – Book Now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-[450px] mt-8 lg:mt-0 lg:ml-auto">
            <div className="bg-granite-light/95 backdrop-blur-sm rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)] p-8 border border-gray-600">
              <h3 className="text-2xl font-bold mb-2 text-white">Let's get in touch</h3>
              <p className="text-gray-300 mb-6">1-800 159-157</p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-granite-medium text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-granite-medium text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-granite-medium text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-granite-medium text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
                />
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="consent" className="mt-1" />
                  <label htmlFor="consent" className="text-sm text-gray-300">
                    I agree to receive commercial information from [Company Name]
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF5733] hover:bg-[#e64a2e] text-white font-bold py-4 px-8 rounded-lg transition duration-300"
                >
                  GET MY FREE QUOTE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="py-16 bg-granite-medium">
        <div className="container mx-auto px-4">
          {/* Customer Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">100+</div>
              <p className="text-gray-300 mt-2">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">5.0</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">100%</div>
              <p className="text-gray-300 mt-2">Satisfaction Rate</p>
            </div>
          </div>

          {/* Reviews Carousel */}
          <div className="max-w-2xl mx-auto">
            <div className="relative h-[280px] perspective-1000">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute w-full transition-all duration-700 ease-in-out bg-granite-light rounded-lg shadow-md p-6 border border-gray-600
                    ${index === activeReviewIndex ? 
                      'opacity-100 translate-z-0 rotate-0' : 
                      index === (activeReviewIndex + 1) % testimonials.length ?
                      'opacity-60 translate-z-[-100px] rotate-[5deg] translate-x-[50%]' :
                      index === (activeReviewIndex + 2) % testimonials.length ?
                      'opacity-30 translate-z-[-200px] rotate-[10deg] translate-x-[100%]' :
                      'opacity-0 translate-z-[-300px] rotate-[15deg] translate-x-[150%]'
                    }`}
                  style={{
                    transform: `
                      perspective(1000px)
                      rotateY(${index === activeReviewIndex ? 0 : (index - activeReviewIndex) * 5}deg)
                      translateZ(${index === activeReviewIndex ? 0 : -100 * (index - activeReviewIndex)}px)
                      translateX(${index === activeReviewIndex ? 0 : 50 * (index - activeReviewIndex)}%)
                    `,
                    zIndex: testimonials.length - Math.abs(index - activeReviewIndex)
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <img
                      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                      alt="Google"
                      className="h-5"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>{testimonial.reviews} reviews</span>
                        <span>•</span>
                        <span>{testimonial.photos} photos</span>
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-gray-200 mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <p className="text-sm text-gray-400">{testimonial.date}</p>
                </div>
              ))}
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveReviewIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeReviewIndex ? 'bg-green-400 w-6' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-granite-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">What We Do</h2>
          <p className="text-center text-gray-300 mb-12">Expert solutions for every outdoor space</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link} 
                className="block bg-granite-medium rounded-lg shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300 border border-gray-600"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="relative h-64">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#FF5733] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {service.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="text-green-400" size={18} />
                        <span className="text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="w-full bg-granite-dark hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-granite-medium">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Got Questions?</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-granite-light rounded-lg shadow border border-gray-600">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center text-white"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-green-400" />
                  ) : (
                    <ChevronDown className="text-green-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 border-t border-gray-600">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Garden?</h2>
          <div className="max-w-xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Check className="text-white" />
              <p className="text-xl">£200 Off Projects Over £5,000</p>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Check className="text-white" />
              <p className="text-xl">Free Planning Session (Worth £150)</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="text-white" />
              <p className="text-xl">Limited April Availability</p>
            </div>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-block bg-white text-green-700 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300"
          >
            Get My Free Garden Plan
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-granite-darker text-white py-12 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone size={20} />
                  <span>0800 123 4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={20} />
                  <span>info@yourcompany.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  <span>Serving all of Scotland</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">© 2024 Your Company Name</p>
              <p className="text-sm text-gray-400">All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;