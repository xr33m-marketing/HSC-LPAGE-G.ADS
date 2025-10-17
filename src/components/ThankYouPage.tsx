import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BadgeCheck, Gift, ArrowRight, Phone, Clock, Shield, Star } from 'lucide-react';
import { cn } from '../lib/utils';

interface ThankYouPageProps {
  title: string;
  nextSteps: string;
  bonus: string;
  crossLinks: {
    text: string;
    url: string;
  }[];
  service?: string;
}

export default function ThankYouPage({ 
  title, 
  nextSteps, 
  bonus, 
  crossLinks,
  service = "Garden"
}: ThankYouPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FF5733]/5 to-white">
      {/* Top Banner */}
      <div className="bg-[#FF5733] text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
          <Clock size={16} />
          <span>We'll be in touch within 24 hours</span>
        </div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-12 md:py-20"
      >
        {/* Success Message */}
        <motion.div variants={item} className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <BadgeCheck className="w-12 h-12 text-green-600" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{nextSteps}</p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <Shield className="w-8 h-8 text-[#FF5733] mx-auto mb-2" />
            <p className="font-semibold">Fully Insured</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <Star className="w-8 h-8 text-[#FF5733] mx-auto mb-2" />
            <p className="font-semibold">5-Star Rated</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <Clock className="w-8 h-8 text-[#FF5733] mx-auto mb-2" />
            <p className="font-semibold">15+ Years</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <BadgeCheck className="w-8 h-8 text-[#FF5733] mx-auto mb-2" />
            <p className="font-semibold">Guaranteed</p>
          </div>
        </motion.div>

        {/* Bonus Card */}
        <motion.div variants={item} className="mb-12">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-100">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <Gift className="w-12 h-12 text-[#FF5733]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Exclusive Bonus</h2>
                <p className="text-lg text-gray-700">{bonus}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cross-sell Section */}
        <motion.div variants={item}>
          <h2 className="text-2xl font-bold text-center mb-6">Explore More Services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {crossLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                onClick={() => window.scrollTo(0, 0)}
                className={cn(
                  "group relative overflow-hidden bg-white rounded-xl shadow-sm p-6",
                  "hover:shadow-md transition-shadow duration-300",
                  "border border-gray-100 hover:border-[#FF5733]"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{link.text}</span>
                  <ArrowRight className="w-5 h-5 text-[#FF5733] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={item} className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-6 py-3">
            <Phone className="w-5 h-5 text-[#FF5733]" />
            <span className="font-semibold">1-800 159-157</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}