import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Fence, Grab as Grass, Sun, Building, ArrowRight } from 'lucide-react';

interface ServiceLink {
  icon: React.ReactNode;
  name: string;
  description: string;
  href: string;
  currentPage?: boolean;
}

interface ServiceNavigationProps {
  currentPage: string;
}

export default function ServiceNavigation({ currentPage }: ServiceNavigationProps) {
  const services: ServiceLink[] = [
    {
      icon: <Car className="w-8 h-8" />,
      name: "Driveways",
      description: "Add kerb appeal and durability to your front entrance.",
      href: "/driveways",
      currentPage: currentPage === "driveways"
    },
    {
      icon: <Fence className="w-8 h-8" />,
      name: "Fencing",
      description: "Secure your property and increase privacy.",
      href: "/fencing",
      currentPage: currentPage === "fencing"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      name: "Patios & Decking",
      description: "Create a stunning outdoor living space.",
      href: "/patios-decking",
      currentPage: currentPage === "patios-decking"
    },
    {
      icon: <Grass className="w-8 h-8" />,
      name: "Artificial Turf",
      description: "Low-maintenance greenery that stays vibrant year-round.",
      href: "/artificial-turf",
      currentPage: currentPage === "artificial-turf"
    },
    {
      icon: <Building className="w-8 h-8" />,
      name: "Retaining Walls",
      description: "Level sloped land and add structure to your garden.",
      href: "/retaining-walls",
      currentPage: currentPage === "retaining-walls"
    }
  ];

  const filteredServices = services.filter(service => !service.currentPage);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore Other Services
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredServices.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="flex flex-col h-full">
                <div className="text-[#FF5733] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#FF5733] transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center text-[#FF5733] font-semibold group-hover:gap-2 transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}