import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-granite-darker text-white border-t border-granite-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Column - Contact Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-white">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-accent" />
                <span>07490738974</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-accent" />
                <span>hscbuildersglasgow@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-accent" />
                <span>Serving the entire Central Belt of Scotland</span>
              </div>
            </div>
          </div>

          {/* Right Column - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400">© 2024 HSC Builders Glasgow</p>
            <p className="text-gray-400">All rights reserved</p>
          </div>
        </div>

        {/* Bottom Center Row */}
        <div className="mt-8 pt-4 border-t border-granite-dark">
          <p className="text-center text-sm text-gray-500 tracking-wide">
            Created by Xr33m Media
          </p>
        </div>
      </div>
    </footer>
  );
}