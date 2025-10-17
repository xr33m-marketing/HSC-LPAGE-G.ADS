import React, { useState } from 'react';
import { getImagePath, generateSrcSet } from '@/lib/image-loader';

interface OptimizedImageProps {
  name: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}

export function OptimizedImage({
  name,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 80
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  
  // Ensure name is a valid string before passing to image utilities
  const validName = typeof name === 'string' ? name : 'default.webp';
  const imagePath = getImagePath(validName, { width, height, quality });
  const srcSet = generateSrcSet(validName, { quality });

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
      }}
    >
      {!loaded && !priority && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      <img
        src={imagePath}
        srcSet={srcSet}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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