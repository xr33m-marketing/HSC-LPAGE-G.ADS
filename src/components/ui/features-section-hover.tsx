import { cn } from "../../lib/utils";
import { Hammer, Shield, Clock, Award, Users, CheckCircle, Wrench, Star } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature = ({ title, description, icon, index }: FeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-700",
        (index === 0 || index === 4) && "lg:border-l border-gray-700",
        index < 4 && "lg:border-b border-gray-700"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-granite-medium to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-granite-medium to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-accent">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-700 group-hover/feature:bg-accent transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Proper Preparation",
      description:
        "Full excavation, professional drainage solutions, and comprehensive sub-base testing for lasting results.",
      icon: <Hammer className="w-8 h-8" />,
    },
    {
      title: "Quality Materials",
      description:
        "Premium blocks, proper edging, and strong foundations. No shortcuts, no cheap alternatives.",
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: "Expert Tradesmen",
      description:
        "17+ years experience serving Glasgow. Local knowledge meets expert craftsmanship.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "10-Year Guarantee",
      description:
        "Every job backed by our comprehensive workmanship warranty. Built to last.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Fast Turnaround",
      description:
        "Most driveways completed in 3-5 days. We respect your time and your home.",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Planning Compliance",
      description:
        "Full compliance with Scottish building regulations and drainage requirements.",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      title: "In-House Team",
      description:
        "No subcontractors. You'll work with our trusted, vetted team from start to finish.",
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      title: "5-Star Rated",
      description:
        "24 verified Google reviews. See why Glasgow homeowners trust us with their driveways.",
      icon: <Star className="w-8 h-8" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}
