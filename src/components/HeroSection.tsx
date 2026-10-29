'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteContent';

interface HeroSectionProps {
  onOpenVideo?: () => void;
}

export default function HeroSection({ onOpenVideo }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-24 bg-gradient-to-b from-[#F4FAFD] via-[#FFFFFF] to-[#FFFFFF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Eyebrow */}
            <p className="text-xs font-bold tracking-widest text-[#75D6EA] uppercase mb-4">
              KHÁM PHÁ BỘ SƯU TẬP
            </p>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17212B] tracking-tight leading-tight mb-4">
              <span className="inline-block">VÒNG NĂNG LƯỢNG</span>{' '}
              <span className="inline-block">VÔ HƯỚNG</span>
            </h1>

            {/* Subheading */}
            <p className="text-xs sm:text-sm lg:text-base font-bold tracking-wider uppercase text-[#667085] mb-4">
              <span className="inline-block">BỐN PHIÊN BẢN</span> –{' '}
              <span className="inline-block">BỐN GIẢI PHÁP CHĂM SÓC SỨC KHỎE</span>
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#17212B]/80 leading-relaxed font-normal mb-6 max-w-md">
              Tìm hiểu các dòng vòng được giới thiệu theo những nhu cầu về vận động, thể lực, thư
              giãn và sức khỏe chuyển hóa.
            </p>

            {/* Highly Prominent Price Banner */}
            <div className="inline-flex items-center gap-4 py-3.5 px-6 rounded-2xl bg-[#17212B] text-white shadow-xl border border-slate-800 mb-8">
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold tracking-widest text-[#75D6EA] uppercase mb-0.5">
                  GIÁ NIÊM YẾT CHÍNH HÃNG
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {SITE_CONFIG.priceFormatted}
                  </span>
                  <span className="text-xs font-bold text-slate-300 uppercase">/ VÒNG</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#health-topics"
                className="px-7 py-3.5 rounded-full bg-[#17212B] hover:bg-[#253647] text-white font-bold text-xs sm:text-sm tracking-wider uppercase text-center transition-all shadow-sm"
              >
                KHÁM PHÁ CÔNG DỤNG
              </a>
              <a
                href="#video-showcase"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#17212B] border border-slate-200 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xs text-center"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#75D6EA]" />
                <span>XEM VIDEO CÔNG NGHỆ</span>
              </a>
            </div>
          </div>

          {/* Right Column: 100% Full Uncropped Transparent 4 Rings PNG Visual */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="product-image-wrapper relative w-full max-w-xl">
              <Image
                src="/images/transparent/bo-suu-tap-4-vong-trimmed.png"
                alt="Bộ sưu tập 4 dòng Vòng Năng Lượng Vô Hướng"
                width={674}
                height={508}
                priority
                className="product-image hero-image transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 650px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
