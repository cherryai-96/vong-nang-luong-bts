'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SITE_CONFIG } from '@/data/siteContent';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav border-b border-slate-100 py-3 shadow-xs'
            : 'bg-white/85 backdrop-blur-xs py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left Text Name (No brand logo) */}
          <a
            href="#hero"
            className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#17212B] hover:text-[#75D6EA] transition-colors"
          >
            {SITE_CONFIG.siteTitle}
          </a>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold tracking-wider text-[#667085] hover:text-[#17212B] transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action (Clean Discovery CTA) */}
          <div className="hidden sm:block">
            <a
              href="#health-topics"
              className="px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-[#17212B] text-white hover:bg-[#253647] transition-colors"
            >
              Khám phá
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#17212B]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-3/4 max-w-xs bg-white p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#17212B]">
                  {SITE_CONFIG.siteTitle}
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-slate-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-bold uppercase tracking-wider text-[#667085] hover:text-[#17212B] py-1 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <a
                href="#health-topics"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block py-3 rounded-xl bg-[#17212B] text-white font-bold text-xs uppercase tracking-wider text-center"
              >
                KHÁM PHÁ CÔNG DỤNG
              </a>
              <p className="text-center text-[11px] text-slate-400 mt-3">
                {SITE_CONFIG.priceFormatted} / VÒNG
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
