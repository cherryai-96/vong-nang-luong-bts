'use client';

import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { HEALTH_MATRIX_DATA } from '@/data/siteContent';

export default function HealthMatrixSection() {
  return (
    <section id="health-matrix" className="py-24 sm:py-32 bg-[#F4FAFD] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#75D6EA]" />
            BẢN ĐỒ TÁC ĐỘNG TOÀN DIỆN
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17212B] tracking-tight mb-4">
            5 TRỤ CỘT NĂNG LƯỢNG SỨC KHỎE
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed max-w-2xl mx-auto">
            Khám phá cơ chế tác động đa tầng của trường năng lượng vô hướng và tần số thảo mộc đối với từng hệ thống sinh học trong cơ thể.
          </p>
        </div>

        {/* 5 Columns Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {HEALTH_MATRIX_DATA.map((col) => {
            return (
              <div
                key={col.id}
                className="bg-white rounded-3xl p-6 border transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
                style={{
                  borderColor: col.borderHex,
                }}
              >
                <div>
                  {/* Top Badge */}
                  <div className="mb-5">
                    <span
                      className="inline-block px-3 py-1 rounded-lg text-xs font-black tracking-widest text-white shadow-xs"
                      style={{ backgroundColor: col.badgeBg }}
                    >
                      {col.label}
                    </span>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-2.5">
                      {col.sublabel}
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    className="h-1 w-10 rounded-full mb-5"
                    style={{ backgroundColor: col.badgeBg }}
                  />

                  {/* Bullet Items */}
                  <ul className="space-y-3.5">
                    {col.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white"
                          style={{ backgroundColor: col.badgeBg }}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle footer stamp */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Hỗ trợ tự nhiên</span>
                  <span className="font-mono">TCM × Scalar</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Notice / Reassurance */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 max-w-2xl mx-auto">
            * Hiệu quả hỗ trợ dựa trên nguyên lý cộng hưởng tần số sinh học và đả thông kinh lạc tự nhiên, mang lại cảm giác nhẹ nhõm và sảng khoái cho cơ thể khi đeo đều đặn.
          </p>
        </div>
      </div>
    </section>
  );
}
