import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

interface GalleryItem {
  beforeImage: string;
  afterImage: string;
  description: string;
}

interface ServiceGalleryProps {
  title: string;
  description: string;
  items: GalleryItem[];
}

export default function ServiceGallery({ title, description, items }: ServiceGalleryProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center text-gray-600 mb-12">{description}</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="relative">
              <div className="w-full h-[400px] bg-gray-200 rounded-lg" />
              <div className="absolute bottom-4 left-4 bg-black/75 text-white px-4 py-2 rounded-lg">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}