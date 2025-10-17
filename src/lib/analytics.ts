import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getGclid } from './gclid';

// Declare gtag as a global function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize dataLayer
window.dataLayer = window.dataLayer || [];

// Initialize gtag function
function gtag(...args: any[]) {
  window.dataLayer.push(args);
}

// Track page views
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      const gclid = getGclid();
      
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_location: window.location.href,
        page_title: document.title,
        send_to: 'AW-16631948260',
        gclid: gclid || undefined
      });
    }
  }, [location]);
}

// Track form submissions
export function trackFormSubmission(formType: string, additionalData = {}) {
  if (typeof window.gtag !== 'undefined') {
    const gclid = getGclid();
    
    window.gtag('event', 'generate_lead', {
      event_category: 'Form',
      event_label: formType,
      send_to: 'AW-16631948260',
      value: 1,
      gclid: gclid || undefined,
      ...additionalData
    });
  }
}

// Track button clicks
export function trackButtonClick(buttonName: string, additionalData = {}) {
  if (typeof window.gtag !== 'undefined') {
    const gclid = getGclid();
    
    window.gtag('event', 'button_click', {
      event_category: 'Engagement',
      event_label: buttonName,
      send_to: 'AW-16631948260',
      gclid: gclid || undefined,
      ...additionalData
    });
  }
}

// Track phone calls
export function trackPhoneCall(phoneNumber: string) {
  if (typeof window.gtag !== 'undefined') {
    const gclid = getGclid();
    
    window.gtag('event', 'phone_call', {
      event_category: 'Contact',
      event_label: phoneNumber,
      send_to: 'AW-16631948260',
      gclid: gclid || undefined
    });
  }
}

// Track external link clicks
export function trackExternalLink(url: string, label: string) {
  if (typeof window.gtag !== 'undefined') {
    const gclid = getGclid();
    
    window.gtag('event', 'click', {
      event_category: 'External Link',
      event_label: label,
      value: url,
      send_to: 'AW-16631948260',
      gclid: gclid || undefined
    });
  }
}