import React, { useState } from 'react';

function ImageWithSkeleton({ src, alt, className = '', imageClassName = '', position = 'center', eager = false }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <div className="image-skeleton absolute inset-0" aria-hidden />}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className={`h-full w-full object-cover transition duration-700 ${loaded ? 'scale-100 opacity-100' : 'scale-[1.03] opacity-0'} ${imageClassName}`}
        style={{ objectPosition: position }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default ImageWithSkeleton;
