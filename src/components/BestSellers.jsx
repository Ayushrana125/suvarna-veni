import React, { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/homeContent';
import ImageWithSkeleton from './ImageWithSkeleton';

function BestSellers() {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (name) => {
    setWishlist(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section id="best-sellers" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cocoa">Our Favorites</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-none text-ink sm:text-6xl">
            Best Sellers
          </h2>
        </div>
        <a href="#" className="hidden text-sm font-bold uppercase tracking-[0.18em] text-cocoa transition hover:text-ink sm:block">
          View All
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
        {products.map((product, index) => (
          <motion.article
            key={product.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-[1.4rem] border border-kraft/20 bg-white shadow-soft transition"
          >
            <div className="relative">
              <ImageWithSkeleton
                src={product.image}
                alt={product.alt}
                position={product.position}
                className="aspect-[4/4.7] w-full"
                imageClassName="transition duration-700 group-hover:scale-105"
              />
              <button
                onClick={() => toggleWishlist(product.name)}
                className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/80 shadow-sm backdrop-blur transition hover:bg-tissue sm:right-4 sm:top-4 sm:h-11 sm:w-11"
                aria-label={`Add ${product.name} to wishlist`}
              >
                <Heart
                  size={15}
                  strokeWidth={2}
                  className={wishlist[product.name] ? 'fill-red-500 text-red-500' : 'text-cocoa'}
                />
              </button>
            </div>

            <div className="px-3 pb-4 pt-3 text-center">
              <h3 className="font-serif text-lg font-semibold text-ink sm:text-2xl">{product.name}</h3>
              <div className="mt-1 flex items-center justify-center gap-2 sm:mt-3">
                <span className="text-xs text-ink/40 line-through sm:text-sm">{product.originalPrice}</span>
                <span className="text-base font-bold text-cocoa sm:text-lg">{product.price}</span>
              </div>
              <a
                href={`https://wa.me/919987380181?text=${encodeURIComponent(`Hello Deepti from Suvarna Veni! 🌸\nI want to place an order for "${product.name}" 🛍️\nThank you! 😊`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-1 rounded-sm border border-cocoa/40 px-2 py-2 text-[9px] font-bold uppercase tracking-[0.08em] text-cocoa transition hover:bg-cocoa hover:text-white sm:mt-5 sm:gap-2 sm:px-4 sm:py-3 sm:text-xs sm:tracking-[0.14em]"
              >
                <MessageCircle size={12} className="shrink-0" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default BestSellers;
