import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { heroSlides } from '../data/homeContent';

function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive(current => (current + 1) % heroSlides.length);
    }, 4600);

    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <section
      className="relative w-full overflow-hidden cursor-pointer mt-20 md:mt-0"
      onClick={() => document.getElementById('best-sellers')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.015 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-auto brightness-[0.98] block"
            loading={active === 0 ? 'eager' : 'lazy'}
          />
        </motion.div>
      </AnimatePresence>





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
