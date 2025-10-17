import React from 'react';
import ThankYouPage from '../../components/ThankYouPage';

export default function ThankYouLandscaping() {
  return (
    <ThankYouPage
      title="Thanks for Your Garden Transformation Enquiry!"
      nextSteps="We'll be in touch within 24 hours to schedule your free design consultation. Our landscaping experts will help create your perfect outdoor space with a custom plan tailored to your needs."
      bonus="You've unlocked a FREE garden maintenance package worth £250 with your landscaping project!"
      crossLinks={[
        {
          text: "Explore Patio Options",
          url: "/patios"
        },
        {
          text: "Add Fencing to Your Project",
          url: "/fencing"
        },
        {
          text: "Consider Artificial Turf",
          url: "/turf"
        }
      ]}
      service="Garden"
    />
  );
}