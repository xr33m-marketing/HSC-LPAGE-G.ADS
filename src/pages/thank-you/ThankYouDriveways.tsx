import React from 'react';
import ThankYouPage from '../../components/ThankYouPage';

export default function ThankYouDriveways() {
  return (
    <ThankYouPage
      title="Thanks for Requesting Your Free Driveway Quote!"
      nextSteps="We'll call soon to schedule your FREE site visit & design quote (worth £150). Expect a call within 24 hours from our expert team to discuss your project requirements."
      bonus="Choose a free jet wash, edging upgrade, or weed barrier with your booking - worth up to £300!"
      crossLinks={[
        {
          text: "Explore Fencing Upgrades",
          url: "/fencing"
        },
        {
          text: "View Patios & Decking",
          url: "/patios"
        }
      ]}
      service="Driveway"
    />
  );
}