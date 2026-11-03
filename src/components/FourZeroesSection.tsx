'use client';

import React from 'react';
import Image from 'next/image';
import { Check, ShieldCheck } from 'lucide-react';
import { FOUR_ZEROES_DATA } from '@/data/siteContent';

export default function FourZeroesSection() {
  return (
    <section
      id="four-zeroes"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#0F1722] via-[#141F2D] to-[#0D1520] border-y border-slate-800/80 relative overflow-hidden"
    >
      {/* Ambient Radial Energy Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-b from-[#75D6EA]/15 via-[#75D6EA]/5 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle Micro Frequency Dot Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#75D6EA_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#75D6EA]/10 border border-[#75D6EA]/25 text-xs font-bold text-[#75D6EA] uppercase tracking-widest mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#75D6EA]" />
            <span>ĐỘT PHÁ CHĂM SÓC SỨC KHỎE THỤ ĐỘNG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            GIẢI PHÁP 4 KHÔNG TOÀN DIỆN
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Kích hoạt năng lượng sinh học và khả năng tự phục hồi của cơ thể suốt 24/7, loại bỏ hoàn toàn các nỗi lo về hóa chất hay can thiệp xâm lấn.
          </p>
        </div>

        {/* 4 Cards Grid with Crisp Iconic Pedestals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FOUR_ZEROES_DATA.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative bg-gradient-to-b from-[#182433] to-[#121A24] hover:from-[#1D2B3D] hover:to-[#15202D] rounded-3xl p-7 border border-slate-700/60 hover:border-[#75D6EA]/60 shadow-xl hover:shadow-[0_20px_45px_rgba(117,214,234,0.14)] transition-all duration-300 flex flex-col justify-between items-center text-center hover:-translate-y-1"
              >
                {/* Number Badge Top Right */}
                <div className="w-full flex justify-between items-center mb-3">
                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                    {item.badge}.
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#75D6EA] bg-[#75D6EA]/10 px-2.5 py-0.5 rounded-full border border-[#75D6EA]/20">
                    Thuần Tự Nhiên
                  </span>
                </div>

                {/* Big Crisp Icon on White Pedestal */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 my-3 rounded-2xl bg-white/95 p-3.5 flex items-center justify-center shadow-md group-hover:scale-106 group-hover:shadow-lg transition-all duration-300 border border-white">
                  <Image
                    src={item.iconImage}
                    alt={item.title}
                    width={144}
                    height={144}
                    className="w-full h-full object-contain filter group-hover:drop-shadow-sm transition-all"
                  />
                </div>

                {/* Content */}
                <div className="mt-3 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1 group-hover:text-[#75D6EA] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    {item.tagline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Trust Stamp */}
                <div className="mt-6 pt-4 w-full border-t border-slate-700/60 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-400">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>An toàn tự nhiên 100%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
