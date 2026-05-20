import React from 'react';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { socialPosts } from '../data/homeContent';
import ImageWithSkeleton from './ImageWithSkeleton';

function SocialFeed() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cocoa">In The Moment</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-none text-ink sm:text-6xl">
            Worn, gifted, loved.
          </h2>
        </div>
        <Instagram className="hidden text-cocoa sm:block" size={34} strokeWidth={1.4} />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
        {socialPosts.map((post, index) => (
          <motion.a
            href="#"
            key={`${post.alt}-${index}`}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.42, delay: index * 0.04 }}
            className={`group relative overflow-hidden rounded-[1.25rem] shadow-sm ${index === 1 || index === 6 ? 'sm:row-span-2' : ''}`}
            aria-label={post.alt}
          >
            <ImageWithSkeleton
              src={post.image}
              alt={post.alt}
              position={post.position}
              className={`w-full ${index === 1 || index === 6 ? 'aspect-[1/2.05]' : 'aspect-square'}`}
              imageClassName="transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-cocoa/0 transition group-hover:bg-cocoa/10" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default SocialFeed;
