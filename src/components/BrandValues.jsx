import React from 'react';
import { Gift, HeartHandshake, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  { title: 'Handmade', body: 'Slowly crafted with care', icon: HeartHandshake },
  { title: 'Skin Friendly', body: 'Soft yarns for everyday hair', icon: Sparkles },
  { title: 'Perfect Gift', body: 'Wrapped for little celebrations', icon: Gift },
  { title: 'Made in India', body: 'Designed and handmade locally', icon: MapPin },
];

function BrandValues() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-2 pb-0 sm:px-6 lg:px-8">
      <div className="hide-scrollbar flex gap-2 overflow-x-auto rounded-2xl bg-white/60 p-2 shadow-soft ring-1 ring-kraft/10 backdrop-blur md:grid md:grid-cols-4">
        {values.map((value, index) => {
          const Icon = value.icon;

          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="min-w-[22%] flex-1 rounded-xl border border-kraft/10 bg-cream/60 px-1 py-2 text-center transition hover:-translate-y-1 hover:bg-white md:px-5 md:py-6"
            >
              <Icon className="mx-auto mb-0.5 text-cocoa md:mb-4" size={14} strokeWidth={1.45} />
              <h3 className="text-[8px] font-bold uppercase tracking-[0.08em] text-cocoa md:text-sm md:tracking-[0.18em]">{value.title}</h3>
              <p className="mt-0.5 text-[7px] leading-3 text-ink/70 md:mt-2 md:text-sm md:leading-6">{value.body}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default BrandValues;
