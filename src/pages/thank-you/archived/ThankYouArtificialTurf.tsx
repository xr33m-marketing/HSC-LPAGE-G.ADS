import React from 'react';
import ThankYouPage from '../../components/ThankYouPage';

export default function ThankYouArtificialTurf() {
  return (
    <ThankYouPage
      title="Thanks for Your Artificial Turf Enquiry!"
      nextSteps="We'll call you shortly to walk through layout options, turf choices, and provide your free design plan. Our turf specialists will help you choose the perfect solution."
      bonus="You've secured a FREE turf rinse or border tidy as part of your booking - worth up to £200!"
      crossLinks={[
        {
          text: "Add Decking or Pergola",
          url: "/patios"
        },
        {
          text: "Need Fencing Too?",
          url: "/fencing"
        }
      ]}
      service="Garden"
    />
  );
}