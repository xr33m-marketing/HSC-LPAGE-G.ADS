// Initialize Google Ads tracking
export function initGoogleAds() {
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  
  // Initialize gtag function
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }

  // Add gtag to window object
  window.gtag = gtag;

  // Initialize Google Ads
  gtag('js', new Date());
  gtag('config', 'AW-16631948260');

  // Check for GCLID in URL or cookie
  const gclid = new URLSearchParams(window.location.search).get('gclid');
  if (gclid) {
    gtag('set', {'google_gclid': gclid});
  }
}

// Track conversions
export function trackConversion(conversionId: string, conversionLabel: string, value?: number) {
  if (typeof window.gtag !== 'undefined') {
    const gclid = new URLSearchParams(window.location.search).get('gclid') || 
                 document.cookie.split(';').find(c => c.trim().startsWith('gclid='))?.split('=')[1];

    window.gtag('event', 'conversion', {
      send_to: `AW-16631948260/${conversionLabel}`,
      value: value,
      currency: 'GBP',
      ...(gclid && { google_gclid: gclid })
    });
  }
}

// Declare types for window object
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}