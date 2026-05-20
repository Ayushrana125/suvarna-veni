import React from 'react';
import { Heart, Menu, Search, ShoppingBag } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const iconButton = 'grid h-10 w-10 place-items-center rounded-full text-ink transition hover:bg-white/70 hover:text-cocoa';

function SiteHeader() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 80],
    ['rgba(248, 245, 240, 0.78)', 'rgba(248, 245, 240, 0.92)']
  );
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ['0 0 0 rgba(0,0,0,0)', '0 18px 45px rgba(111,78,45,0.10)']
  );

  return (
    <motion.header
      style={{ background, boxShadow: shadow }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/40 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 pt-4 sm:px-6 lg:px-8">
        <a href="#" className="group flex items-center -ml-4" aria-label="Suvarna Veni home">
          <img
            src="/suvarna-veni-logo.png"
            alt="Suvarna Veni logo"
            className="h-48 w-48 object-contain transition duration-500 group-hover:scale-105"
          />
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <button className={iconButton} aria-label="Search">
            <Search size={22} strokeWidth={1.8} />
          </button>
          <button className={iconButton} aria-label="Wishlist">
            <Heart size={23} strokeWidth={1.8} />
          </button>
          <button className={`${iconButton} relative`} aria-label="Cart">
            <ShoppingBag size={23} strokeWidth={1.8} />
            <span className="absolute right-1.5 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-kraft px-1 text-[11px] font-semibold text-white">
              2
            </span>
          </button>
          <button className={iconButton} aria-label="Menu">
            <Menu size={26} strokeWidth={1.6} />
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

export default SiteHeader;
