import React from 'react';
import { StickyTopNavBar } from '../components/StickyTopNavBar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopNavBar />
      
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: May 2, 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="mb-8">
            At HSC Builders Glasgow, we take your privacy seriously. This privacy policy outlines how we collect, use, and protect your personal information.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="mb-4">When you submit your information through our lead forms, we may collect:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Project details</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information solely to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact you about your inquiry</li>
              <li>Provide a quote or service</li>
              <li>Follow up with related offers or updates (you can opt out at any time)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Data Sharing</h2>
            <p>
              We do not sell or share your personal information with third parties, except for trusted services that help us operate our business (e.g., email or CRM platforms).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p>
              Your data is stored securely. We take appropriate measures to protect it from unauthorized access or disclosure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information at any time by contacting us at:{' '}
              <a href="mailto:hscbuildersglasgow@gmail.com" className="text-[#FF5733] hover:underline">
                hscbuildersglasgow@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, contact us at the email above.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}