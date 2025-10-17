import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Bundle {
  title: string;
  description: string;
  savings: string;
  features: string[];
  primaryService: string;
  secondaryService: string;
  image: string;
}

interface ServiceBundlesProps {
  bundles: Bundle[];
}

export default function ServiceBundles({ bundles }: ServiceBundlesProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Save More with Service Bundles</h2>
        <p className="text-center text-gray-600 mb-12">Combine services for bigger savings and a complete transformation</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {bundles.map((bundle, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={bundle.image} 
                  alt={bundle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full">
                  Save {bundle.savings}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{bundle.title}</h3>
                <p className="text-gray-600 mb-6">{bundle.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {bundle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="text-green-600" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-4">
                  <Link
                    to={`/${bundle.primaryService}`}
                    className="flex-1 bg-[#FF5733] hover:bg-[#e64a2e] text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    to={`/${bundle.secondaryService}`}
                    className="flex-1 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                  >
                    Details
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}