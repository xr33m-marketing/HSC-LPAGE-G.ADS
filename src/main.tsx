import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DeferredComponent } from './components/ui/deferred-component';
import { usePageTracking } from './lib/analytics';
import { initGoogleAds } from './lib/google-ads';
import { initGclidTracking } from './lib/gclid';
import './index.css';

// Initialize tracking
initGoogleAds();
initGclidTracking();

// Lazy load pages with prefetching hints
const Landscaping = () => import(/* webpackPrefetch: true */ './pages/Landscaping');
const Driveways = () => import(/* webpackPrefetch: true */ './pages/Driveways');
const ArtificialTurf = () => import(/* webpackPrefetch: true */ './pages/ArtificialTurf');
const Fencing = () => import(/* webpackPrefetch: true */ './pages/Fencing');
const PatiosDecking = () => import(/* webpackPrefetch: true */ './pages/PatiosDecking');
const RetainingWalls = () => import(/* webpackPrefetch: true */ './pages/RetainingWalls');
const PrivacyPolicy = () => import(/* webpackPrefetch: true */ './pages/PrivacyPolicy');
const ThankYouDriveways = () => import(/* webpackPrefetch: true */ './pages/thank-you/ThankYouDriveways');

function App() {
  usePageTracking();

  return (
    <Routes>
      <Route path="/" element={<DeferredComponent component={Landscaping} />} />
      <Route path="/driveways" element={<DeferredComponent component={Driveways} />} />
      <Route path="/artificial-turf" element={<DeferredComponent component={ArtificialTurf} />} />
      <Route path="/fencing" element={<DeferredComponent component={Fencing} />} />
      <Route path="/patios-decking" element={<DeferredComponent component={PatiosDecking} />} />
      <Route path="/retaining-walls" element={<DeferredComponent component={RetainingWalls} />} />
      <Route path="/privacy-policy" element={<DeferredComponent component={PrivacyPolicy} />} />
      <Route path="/thank-you-driveways" element={<DeferredComponent component={ThankYouDriveways} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename="/">
      <App />
    </Router>
  </StrictMode>
);
