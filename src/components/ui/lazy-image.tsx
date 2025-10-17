import React, { useState } from 'react';
import { optimizeImage, generateSrcSet, generateSizes } from '@/lib/image-loader';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
}

export function LazyImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  quality = 80,
  sizes
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const optimizedSrc = optimizeImage(src, { width, quality });
  const srcSet = generateSrcSet(src, { quality });
  const sizeStr = sizes ? generateSizes(sizes) : undefined;

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        aspectRatio: `${width}/${height}`,
        width: '100%',
        maxWidth: width,
      }}
    >
      {!loaded && !priority && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"
          style={{ aspectRatio: `${width}/${height}` }}
        />
      )}
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={sizeStr}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        onLoad={() => setLoaded(true)}
        className={`
          w-full h-full object-cover
          ${loaded || priority ? 'opacity-100' : 'opacity-0'}
          transition-opacity duration-300
          ${className}
        `}
      />
    </div>
  );
}