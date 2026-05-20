import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageWithSkeleton from './ImageWithSkeleton';

function StorySection() {
  return (
    <section className="overflow-hidden bg-white/50 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1.08fr_0.92fr] md:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <ImageWithSkeleton
            src="/banner-image-1.png"
            alt="Suvarna Veni crochet scrunchie lifestyle story"
            position="66% 34%"
            className="aspect-[4/4.6] rounded-[2rem] shadow-soft md:aspect-[5/4]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="md:pl-8"
        >
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cocoa">The Feeling</p>
          <h2 className="mt-4 max-w-md font-serif text-3xl font-semibold leading-[0.96] text-ink sm:text-6xl">
            Little details, beautiful moments.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-ink/70">
            Accessories that quietly become part of everyday stories.
          </p>
          <a
            href="#best-sellers"
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-ink shadow-glow transition hover:bg-cocoa hover:text-white"
          >
            Explore Collection
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default StorySection;
