'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteContent';

export default function FinalShowcaseSection() {
  const scrollToProducts = () => {
    document.getElementById('health-topics')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white via-[#F4FAFD] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <p className="text-xs font-bold tracking-widest text-[#667085] uppercase mb-3">
          TỔNG KẾT BỘ SƯU TẬP
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#17212B] tracking-tight leading-tight mb-4">
          <span className="inline-block">KHÁM PHÁ BỘ SƯU TẬP</span>{' '}
          <span className="inline-block">4 DÒNG VÒNG</span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto text-base sm:text-lg text-[#667085] leading-relaxed mb-6 font-normal">
          Bốn dòng sản phẩm với những giải pháp chăm sóc sức khỏe toàn diện.
        </p>

        {/* Prominent Price Banner */}
        <div className="inline-flex items-center gap-3 py-3.5 px-8 rounded-2xl bg-[#17212B] text-white shadow-xl border border-slate-800 mb-10">
          <div className="flex flex-col text-center">
            <span className="text-[10px] font-bold tracking-widest text-[#75D6EA] uppercase mb-0.5">
              GIÁ NIÊM YẾT CHÍNH HÃNG
            </span>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {SITE_CONFIG.priceFormatted}
              </span>
              <span className="text-xs font-bold text-slate-300 uppercase">/ VÒNG</span>
            </div>
          </div>
        </div>

        {/* 100% Full Uncropped 4 Rings Transparent PNG Visual */}
        <div className="max-w-3xl mx-auto mb-12 flex justify-center items-center">
          <div className="product-image-wrapper relative w-full flex items-center justify-center">
            <Image
              src="/images/transparent/bo-suu-tap-4-vong-trimmed.png"
              alt="Toàn bộ 4 phiên bản Vòng Năng Lượng Vô Hướng"
              width={1004}
              height={760}
              className="product-image hero-image hover:scale-102 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 760px"
            />
          </div>
        </div>

        {/* CTA: XEM LẠI 4 DÒNG VÒNG */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={scrollToProducts}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#17212B] hover:bg-[#253647] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all"
          >
            <span>XEM LẠI 4 DÒNG VÒNG</span>
            <ArrowUp className="w-4 h-4 text-[#75D6EA]" />
          </button>
        </div>
      </div>
    </section>
  );
}
