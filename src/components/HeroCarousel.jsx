import React, { useEffect, useState } from 'react';
import { heroSlides } from '../data/homeContent';

function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive(current => (current + 1) % heroSlides.length);
    }, 4600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden cursor-pointer mt-20 md:mt-0"
      onClick={() => document.getElementById('best-sellers')?.scrollIntoView({ behavior: 'smooth' })}
    >
      {heroSlides.map((slide, index) => (
        <img
          key={slide.image + index}
          src={slide.image}
          alt={slide.alt}
          loading={index === 0 ? 'eager' : 'lazy'}
          className="w-full h-auto block brightness-[0.98] transition-opacity duration-700"
          style={{
            position: index === 0 ? 'relative' : 'absolute',
            top: 0,
            left: 0,
            opacity: active === index ? 1 : 0,
            pointerEvents: active === index ? 'auto' : 'none',
          }}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white/50 px-4 py-3 backdrop-blur-lg">
        {heroSlides.map((item, index) => (
          <button
            key={item.moment}
            aria-label={`Go to ${item.moment} slide`}
            onClick={(e) => { e.stopPropagation(); setActive(index); }}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              active === index ? 'w-8 bg-cocoa' : 'w-2.5 bg-white ring-1 ring-cocoa/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;
