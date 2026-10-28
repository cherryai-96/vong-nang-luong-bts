'use client';

import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG, NAV_ITEMS } from '@/data/siteContent';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#17212B] text-white pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          {/* Logo & Website Info on Left */}
          <div>
            <div className="mb-4 bg-white/95 rounded-xl px-3 py-1.5 inline-block">
              <Image
                src="/images/logo-bw.png"
                alt="Blessings Wave International"
                width={140}
                height={62}
                className="h-8 w-auto object-contain"
              />
            </div>
            <h3 className="text-base sm:text-lg font-black tracking-widest uppercase text-white mb-2">
              {SITE_CONFIG.siteTitle}
            </h3>
            <p className="text-xs text-slate-400 font-normal">
              Bộ sưu tập 4 phiên bản phong cách sống và chăm sóc sức khỏe chủ động.
            </p>
          </div>

          {/* Quick Section Links */}
          <nav className="flex items-center gap-6 flex-wrap">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold tracking-wider text-slate-300 hover:text-[#75D6EA] transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright & Price Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 pt-6">
          <p>© {currentYear} {SITE_CONFIG.siteTitle}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Giá niêm yết:</span>
            <span className="font-extrabold text-[#75D6EA] text-sm">{SITE_CONFIG.priceFormatted}</span>
            <span>/ vòng</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
