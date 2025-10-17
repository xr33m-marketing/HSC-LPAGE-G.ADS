// GCLID tracking utilities
export function initGclidTracking() {
  const params = new URLSearchParams(window.location.search);
  const gclid = params.get("gclid");
  
  if (gclid) {
    // Store GCLID in localStorage with 30-day expiration
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    
    localStorage.setItem("gclid", gclid);
    localStorage.setItem("gclid_expiration", expirationDate.toISOString());
    
    // Store in cookie for GTM access
    document.cookie = `gclid=${gclid}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`; // 30 days
  }
}

export function getGclid(): string | null {
  // First check URL parameters
  const params = new URLSearchParams(window.location.search);
  const gclidFromUrl = params.get("gclid");
  if (gclidFromUrl) return gclidFromUrl;

  // Then check cookies
  const cookies = document.cookie.split(';');
  const gclidCookie = cookies.find(c => c.trim().startsWith('gclid='));
  if (gclidCookie) {
    return gclidCookie.split('=')[1];
  }

  // Finally check localStorage
  const gclid = localStorage.getItem("gclid");
  const expiration = localStorage.getItem("gclid_expiration");
  
  if (gclid && expiration) {
    if (new Date(expiration) > new Date()) {
      return gclid;
    } else {
      // Clear expired GCLID
      localStorage.removeItem("gclid");
      localStorage.removeItem("gclid_expiration");
    }
  }
  
  return null;
}

export function getRedirectUrl(basePath: string): string {
  const params = new URLSearchParams(window.location.search);
  const gclid = params.get("gclid") || getGclid();
  
  if (gclid) {
    return `${basePath}?gclid=${gclid}`;
  }
  return basePath;
}