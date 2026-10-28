'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, Activity, Zap, Moon, HeartPulse } from 'lucide-react';
import { HEALTH_CATEGORIES, PRODUCTS } from '@/data/siteContent';

const ICONS = {
  Activity,
  Zap,
  Moon,
  HeartPulse,
};

export default function HealthTopicsSection() {
  return (
    <section id="health-topics" className="py-24 sm:py-32 bg-[#F4FAFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-xs font-bold tracking-widest text-[#667085] uppercase mb-3">
            BỐN NHÓM NHU CẦU SỨC KHỎE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17212B] tracking-tight mb-4">
            BẠN QUAN TÂM ĐẾN ĐIỀU GÌ?
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed max-w-2xl mx-auto">
            Khám phá 4 nhóm giải pháp chăm sóc sức khỏe tương ứng với từng dòng sản phẩm.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HEALTH_CATEGORIES.map((cat, idx) => {
            const Icon = ICONS[cat.iconName as keyof typeof ICONS] || Activity;
            const product = PRODUCTS.find((p) => p.id === cat.id);

            return (
              <div
                key={cat.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/70 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1}.
                    </span>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: cat.accentColor }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Compact, Neat Ring Visual */}
                  {product && (
                    <div className="relative w-full h-44 rounded-2xl bg-slate-50/60 mb-5 p-3 flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={`${cat.productName} - ${cat.theme}`}
                        width={280}
                        height={460}
                        className="max-h-36 w-auto object-contain transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 70vw, 200px"
                      />
                    </div>
                  )}

                  {/* Theme Headline & Product Name */}
                  <h3 className="text-base sm:text-lg font-black text-[#17212B] tracking-tight mb-1">
                    {cat.theme.includes(' & ') ? (
                      <>
                        <span className="inline-block">{cat.theme.split(' & ')[0]}</span>{' '}
                        <span className="inline-block">& {cat.theme.split(' & ')[1]}</span>
                      </>
                    ) : (
                      cat.theme
                    )}
                  </h3>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-2.5"
                    style={{
                      color: cat.accentColor === '#75D6EA' ? '#0284c7' : cat.accentColor,
                    }}
                  >
                    {cat.productName}
                  </p>
                  <p className="text-xs text-[#17212B]/75 leading-relaxed font-normal mb-5">
                    {cat.description}
                  </p>
                </div>

                {/* Card CTA: TÌM HIỂU */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Giá niêm yết</span>
                    <span className="text-sm font-black text-[#17212B] tracking-tight">
                      2.800.000 VNĐ
                    </span>
                  </div>
                  <a
                    href={`#${cat.targetId}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#17212B] hover:bg-[#253647] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-xs"
                  >
                    <span>TÌM HIỂU</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
