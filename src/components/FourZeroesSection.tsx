'use client';

import React from 'react';
import { Pill, Syringe, FlaskConical, ShieldCheck, Check } from 'lucide-react';
import { FOUR_ZEROES_DATA } from '@/data/siteContent';

const ICONS = [Pill, Syringe, FlaskConical, ShieldCheck];

export default function FourZeroesSection() {
  return (
    <section id="four-zeroes" className="py-20 sm:py-28 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
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

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FOUR_ZEROES_DATA.map((item, idx) => {
            const Icon = ICONS[idx] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group relative bg-[#F8FAFC] hover:bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                      {item.badge}.
                    </span>
                    <div className="relative w-12 h-12 rounded-2xl bg-white group-hover:bg-red-50 border border-slate-200/80 group-hover:border-red-100 flex items-center justify-center transition-colors shadow-xs">
                      <Icon className="w-6 h-6 text-slate-700 group-hover:text-red-500 transition-colors" />
                      {/* Gentle diagonal line to symbolize "Zero / Không" */}
                      <span className="absolute w-8 h-[2px] bg-red-500/80 -rotate-45 rounded-full pointer-events-none" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-black text-[#17212B] tracking-tight mb-1.5 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    {item.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Trust Stamp */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-medium text-emerald-600">
                  <Check className="w-4 h-4 shrink-0" />
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
