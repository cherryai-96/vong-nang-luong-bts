'use client';

import React from 'react';
import { Radio, Activity, Wind, Sparkles } from 'lucide-react';
import { TECH_CONCEPTS } from '@/data/siteContent';

export default function TechnologySection() {
  const icons = [Radio, Activity, Wind];

  return (
    <section id="technology" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-xs font-bold tracking-widest text-[#75D6EA] uppercase mb-3">
            CÔNG NGHỆ ĐỘT PHÁ
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#17212B] tracking-tight mb-4">
            <span className="inline-block">CÔNG NGHỆ NĂNG LƯỢNG</span>{' '}
            <span className="inline-block">TIÊN TIẾN</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085] font-normal max-w-xl mx-auto">
            Bộ ba công nghệ năng lượng sinh học đột phá được tích hợp trọn vẹn trong từng sản phẩm, mang đến giải pháp bảo vệ, phục hồi và duy trì sinh lực bền bỉ.
          </p>
        </div>

        {/* 3 Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECH_CONCEPTS.map((tech, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={tech.title}
                className="bg-[#F4FAFD] rounded-3xl p-8 border border-slate-200/70 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between hover:shadow-lg group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#17212B] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#75D6EA]" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white text-slate-500 border border-slate-200/60">
                      <Sparkles className="w-2.5 h-2.5 text-[#75D6EA]" />
                      Tích hợp sẵn
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#17212B] tracking-tight mb-1">
                    {tech.title}
                  </h3>
                  <p className="text-xs font-bold text-[#75D6EA] uppercase tracking-wider mb-4">
                    {tech.subtitle}
                  </p>
                  <p className="text-sm text-[#17212B]/75 leading-relaxed font-normal">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/50 flex items-center text-xs font-semibold text-slate-500">
                  <span>Ứng dụng trên toàn bộ 4 phiên bản</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
