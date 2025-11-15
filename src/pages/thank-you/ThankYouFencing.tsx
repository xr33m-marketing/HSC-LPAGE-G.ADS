import React from 'react';
import ThankYouPage from '../../components/ThankYouPage';

export default function ThankYouFencing() {
  return (
    <ThankYouPage
      title="Thanks for Your Fencing Enquiry!"
      nextSteps="We'll be in touch to arrange your quote and help you choose the right fencing style. Our design team will prepare custom options based on your requirements."
      bonus="You've unlocked FREE fence treatment or a gate upgrade with your project - worth up to £250!"
      crossLinks={[
        {
          text: "Thinking Turf?",
          url: "/turf"
        },
        {
          text: "Add Driveway or Patio",
          url: "/driveways"
        }
      ]}
      service="Fence"
    />
  );
}
