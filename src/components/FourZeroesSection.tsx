'use client';

import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { FOUR_ZEROES_DATA } from '@/data/siteContent';

export default function FourZeroesSection() {
  return (
    <section id="four-zeroes" className="py-20 sm:py-28 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <p className="text-xs font-bold tracking-widest text-[#667085] uppercase mb-3">
            ĐỘT PHÁ CHĂM SÓC SỨC KHỎE THỤ ĐỘNG
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17212B] tracking-tight mb-4">
            GIẢI PHÁP 4 KHÔNG TOÀN DIỆN
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed max-w-2xl mx-auto">
            Kích hoạt năng lượng sinh học và khả năng tự phục hồi của cơ thể suốt 24/7, loại bỏ hoàn toàn các nỗi lo về hóa chất hay can thiệp xâm lấn.
          </p>
        </div>

        {/* 4 Cards Grid with Large Crisp Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FOUR_ZEROES_DATA.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative bg-[#F8FAFD] hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between items-center text-center"
              >
                {/* Number Badge Top Right */}
                <div className="w-full flex justify-between items-center mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                    {item.badge}.
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    Thuần Tự Nhiên
                  </span>
                </div>

                {/* Big Bold Icon Container */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 my-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-108 drop-shadow-sm">
                  <Image
                    src={item.iconImage}
                    alt={item.title}
                    width={144}
                    height={144}
                    className="w-full h-full object-contain filter group-hover:drop-shadow-md transition-all"
                  />
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-xl sm:text-2xl font-black text-[#17212B] tracking-tight mb-1 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Trust Stamp */}
                <div className="mt-6 pt-4 w-full border-t border-slate-200/60 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-600">
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
