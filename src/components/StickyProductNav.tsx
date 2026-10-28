'use client';

import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '@/data/siteContent';

export default function StickyProductNav() {
  const [activeId, setActiveId] = useState<string>('deo-chan');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav when entering products area
      const productsSection = document.getElementById('products');
      if (productsSection) {
        const rect = productsSection.getBoundingClientRect();
        // Visible when products section is around or above viewport
        const show = rect.top <= 100 && rect.bottom >= 150;
        setIsVisible(show);
      }

      // Check which product section is currently closest to the top
      const scrollPosition = window.scrollY + 200;
      for (const prod of PRODUCTS) {
        const el = document.getElementById(`detail-${prod.id}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(prod.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 overflow-x-auto no-scrollbar gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 shrink-0">
            DÒNG SẢN PHẨM:
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 mx-auto sm:mx-0">
            {PRODUCTS.map((prod) => {
              const isActive = activeId === prod.id;
              return (
                <a
                  key={prod.id}
                  href={`#detail-${prod.id}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                    isActive
                      ? 'text-white shadow-xs'
                      : 'text-[#667085] hover:text-[#17212B] bg-slate-50 hover:bg-slate-100'
                  }`}
                  style={{
                    backgroundColor: isActive ? prod.accentHex : undefined,
                  }}
                >
                  {prod.name}
                </a>
              );
            })}
          </div>

          <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17212B] text-white shadow-xs shrink-0 border border-slate-700">
            <span className="text-xs font-black text-[#75D6EA] tracking-wide">2.800.000 VNĐ</span>
            <span className="text-[10px] font-bold text-slate-300 uppercase">/ VÒNG</span>
          </div>
        </div>
      </div>
    </div>
  );
}
