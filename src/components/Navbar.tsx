'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
            ? 'glass-nav border-b border-slate-100 py-2.5 sm:py-3 shadow-xs'
            : 'bg-white/90 backdrop-blur-md py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity on Left */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden"
            aria-label="Blessings Wave International - Vòng Năng Lượng Vô Hướng"
          >
            <Image
              src="/images/logo-bw.png"
              alt="Blessings Wave International"
              width={160}
              height={70}
              priority
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
            <div className="hidden xl:flex flex-col border-l border-slate-200/80 pl-3">
              <span className="text-[11px] font-black tracking-widest uppercase text-[#17212B] leading-tight">
                VÒNG NĂNG LƯỢNG
              </span>
              <span className="text-[9px] font-bold tracking-wider uppercase text-[#75D6EA] leading-tight">
                VÔ HƯỚNG
              </span>
            </div>
          </a>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold tracking-wider text-[#667085] hover:text-[#17212B] transition-colors uppercase whitespace-nowrap"
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
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                <Image
                  src="/images/logo-bw.png"
                  alt="Blessings Wave International"
                  width={140}
                  height={62}
                  className="h-7 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-slate-400"
                  aria-label="Đóng menu"
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
