import React from 'react';
import ThankYouPage from '../../components/ThankYouPage';

export default function ThankYouPatiosDecking() {
  return (
    <ThankYouPage
      title="Thanks for Requesting Your Patio or Decking Quote!"
      nextSteps="We'll call to confirm your design consultation and walk you through materials and layout ideas. Our design team will prepare custom options for your space."
      bonus="You've unlocked FREE solar lighting or timber treatment with your build - worth up to £350!"
      crossLinks={[
        {
          text: "Bundle With Turfing",
          url: "/turf"
        },
        {
          text: "Add a Retaining Wall",
          url: "/walls"
        }
      ]}
      service="Patio"
    />
  );
}
