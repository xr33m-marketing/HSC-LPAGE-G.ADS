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
const Driveways = () => import(/* webpackPrefetch: true */ './pages/Driveways');
const PrivacyPolicy = () => import(/* webpackPrefetch: true */ './pages/PrivacyPolicy');
const ThankYouDriveways = () => import(/* webpackPrefetch: true */ './pages/thank-you/ThankYouDriveways');

function App() {
  usePageTracking();

  return (
    <Routes>
      <Route path="/" element={<DeferredComponent component={Driveways} />} />
      <Route path="/driveways" element={<Navigate to="/" replace />} />
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