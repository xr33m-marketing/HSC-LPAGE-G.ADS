import React from 'react';
import ThankYouPage from '../../components/ThankYouPage';

export default function ThankYouRetainingWalls() {
  return (
    <ThankYouPage
      title="Thanks for Enquiring About Retaining Walls & Masonry!"
      nextSteps="We'll call to schedule your free site visit and provide expert guidance on layout, drainage, and structural design. Our masonry specialists will help plan your perfect solution."
      bonus="You've unlocked FREE gravel fill or a raised bed upgrade with your wall build - worth up to £400!"
      crossLinks={[
        {
          text: "See Turfing & Makeovers",
          url: "/turf"
        },
        {
          text: "Explore Decking & Patios",
          url: "/patios"
        }
      ]}
      service="Retaining Wall"
    />
  );
}
