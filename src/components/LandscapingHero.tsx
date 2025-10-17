import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Star } from 'lucide-react';

export default function LandscapingHero() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/thank-you-landscaping');
  };

  return (
    <div
      className="relative min-h-[90vh] w-full bg-cover bg-center bg-no-repeat animate-hero-rotate"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Still Looking at That...
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-[#FF5733] mt-2 text-center">
          Garden You Keep Putting Off?
        </p>
        <p className="mt-4 text-lg max-w-xl text-center">
          You've either put it off, or tried to sort it yourself — but here we are, and your garden still isn't right.
        </p>

        {/* Contact Form */}
        <div className="max-w-xl w-full mt-8">
          <div className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm rounded-t-xl px-6 py-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={20} />
              ))}
            </div>
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-5"
              loading="eager"
              decoding="sync"
            />
          </div>
          <div className="bg-white rounded-b-xl shadow-[0_5px_15px_rgba(0,0,0,0.2)] p-8">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Get Your Free Quote & Design Plan</h3>
            <p className="text-gray-600 mb-6">No pressure. Just answers, expert ideas, and a plan you'll love.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
                required
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
                required
              />
              <input
                type="text"
                placeholder="Postcode"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
                required
              />
              <textarea
                placeholder="Tell us about your garden problems..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
                required
              ></textarea>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" className="mt-1" required />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I agree to receive information about my enquiry
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF5733] hover:bg-[#e64a2e] text-white font-bold py-4 px-8 rounded-lg transition duration-300"
              >
                Get My Free Quote & Design Plan
              </button>
              <p className="text-center text-sm text-gray-500">
                No pressure. Just answers, expert ideas, and a plan you'll love.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}