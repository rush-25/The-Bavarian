import React, { useState } from 'react';

export interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/3]',
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-[#1D1A17] ${aspectRatio} ${className}`}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-[#1D1A17] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/90 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

