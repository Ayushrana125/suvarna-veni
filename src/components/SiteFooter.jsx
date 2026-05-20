import React from 'react';
import { Instagram, MessageCircle, Pin } from 'lucide-react';

const links = ['Home', 'Collections', 'About', 'Contact'];

function SiteFooter() {
  return (
    <footer className="border-t border-kraft/20 bg-[#f2e8dc]">
      <div className="mx-auto max-w-7xl px-4 py-0 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center justify-center w-full overflow-hidden">
            <img
              src="/suvarna-veni-logo.png"
              alt="Suvarna Veni logo"
              className="w-40 object-contain scale-[1.8]"
            />
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold uppercase tracking-[0.16em] text-cocoa">
            {links.map(link => (
              <a key={link} href="#" className="transition hover:text-ink">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {[
              { label: 'Instagram', icon: Instagram },
              { label: 'WhatsApp', icon: MessageCircle },
              { label: 'Pinterest', icon: Pin },
            ].map(social => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/70 text-cocoa transition hover:-translate-y-1 hover:bg-cocoa hover:text-white"
                >
                  <Icon size={20} strokeWidth={1.8} />
                </a>
              );
            })}
          </div>

        </div>

        <p className="mt-4 border-t border-kraft/20 pt-4 text-center text-sm text-ink/60">
          Made with love by Suvarna Veni
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
