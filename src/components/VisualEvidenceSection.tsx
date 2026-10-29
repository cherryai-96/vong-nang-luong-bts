'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, Beaker, Flame, WifiOff, Award, ShieldCheck } from 'lucide-react';
import { VISUAL_EVIDENCES_DATA, PARTNER_RND_DATA } from '@/data/siteContent';

const EVIDENCE_ICONS = [Beaker, Flame, WifiOff];

export default function VisualEvidenceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentEvidence = VISUAL_EVIDENCES_DATA[activeTab];

  return (
    <section id="visual-evidence" className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-xs font-bold tracking-widest text-[#667085] uppercase mb-3">
            BẰNG CHỨNG THỊ GIÁC & THỰC NGHIỆM
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17212B] tracking-tight mb-4">
            KIỂM CHỨNG TRƯỚC VÀ SAU KHI ĐEO
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed max-w-2xl mx-auto">
            Quan sát trực tiếp sự thay đổi của dòng máu, nhiệt độ cơ thể và khả năng phân tán bức xạ sóng điện từ qua các thiết bị đo lường chuyên dụng.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {VISUAL_EVIDENCES_DATA.map((item, idx) => {
            const Icon = EVIDENCE_ICONS[idx] || Beaker;
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#17212B] text-white shadow-md'
                    : 'bg-[#F4FAFD] text-slate-700 hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#75D6EA]' : 'text-slate-500'}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Evidence Showcase Card */}
        <div className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Image Display (No Crop, Crisp Contain) */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <div className="relative w-full bg-black/95 rounded-2xl overflow-hidden shadow-lg p-3 sm:p-4 border border-slate-800">
                <div className="relative w-full h-[280px] sm:h-[380px] md:h-[440px] flex items-center justify-center">
                  <Image
                    src={currentEvidence.image}
                    alt={currentEvidence.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 text-center mt-3 font-medium">
                Ảnh chụp thực nghiệm lâm sàng trích xuất từ tài liệu nghiên cứu y sinh học.
              </p>
            </div>

            {/* Analysis & Key Findings */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase bg-[#17212B] text-[#75D6EA] mb-3">
                  {currentEvidence.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#17212B] tracking-tight mb-4 leading-tight">
                  {currentEvidence.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {currentEvidence.summary}
                </p>

                {/* Before vs After Callout Box */}
                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-white border border-rose-100 shadow-2xs">
                    <span className="text-[11px] font-black uppercase tracking-wider text-rose-600 block mb-1">
                      ● Trước khi đeo:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                      {currentEvidence.beforeLabel}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-emerald-100 shadow-2xs">
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 block mb-1">
                      ● Sau khi đeo:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                      {currentEvidence.afterLabel}
                    </p>
                  </div>
                </div>

                {/* 3 Bullet Highlights */}
                <div className="space-y-2">
                  {currentEvidence.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8ight Labs USA Credibility & Strategic Partner - Guaranteed Solid Dark Background with Razor Sharp Contrast */}
        <div
          style={{ backgroundColor: '#17212B' }}
          className="rounded-3xl text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-slate-700"
        >
          {/* Subtle Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#75D6EA]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Top Partner Header */}
            <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20 pb-10 border-b border-slate-700/80">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold tracking-widest text-[#75D6EA] uppercase mb-5 border border-white/15">
                {PARTNER_RND_DATA.eyebrow}
              </span>

              {/* Logo Pill Card with US Flag */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="inline-flex items-center gap-4 bg-white rounded-2xl py-3 px-6 sm:px-8 shadow-xl">
                  <div className="relative w-44 sm:w-56 h-12 sm:h-14">
                    <Image
                      src={PARTNER_RND_DATA.logo}
                      alt="8ight Research Labs Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="h-8 w-[1px] bg-slate-200" />
                  <div className="relative w-8 h-5.5 rounded-xs overflow-hidden shadow-xs border border-slate-200 shrink-0">
                    <Image
                      src={PARTNER_RND_DATA.flag}
                      alt="USA Flag"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">
                {PARTNER_RND_DATA.title}
              </h3>
              <p className="text-sm sm:text-base font-bold text-[#75D6EA] tracking-wide mb-4">
                {PARTNER_RND_DATA.tagline}
              </p>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed max-w-3xl mx-auto font-normal">
                {PARTNER_RND_DATA.description}
              </p>
            </div>

            {/* 2 Symmetrical, Balanced Leadership Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              {PARTNER_RND_DATA.leaders.map((leader, idx) => {
                const IconComponent = idx === 0 ? Award : ShieldCheck;
                return (
                  <div
                    key={idx}
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                    className="hover:bg-white/[0.08] rounded-3xl p-8 sm:p-10 border border-white/15 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-lg"
                  >
                    <div>
                      {/* Avatar & Identifiers Centered */}
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-[#75D6EA]/40 group-hover:border-[#75D6EA] transition-all duration-300 group-hover:scale-103 bg-[#17212B]">
                          <Image
                            src={leader.image}
                            alt={leader.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 176px, 208px"
                          />
                        </div>

                        <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1.5">
                          {leader.name}
                        </h4>

                        <div className="inline-block px-3.5 py-1 rounded-full bg-[#75D6EA]/20 text-xs sm:text-sm font-bold text-[#75D6EA] mb-1.5 border border-[#75D6EA]/30">
                          {leader.role}
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">
                          {leader.company}
                        </p>
                      </div>

                      {/* Content Box (High Contrast, Large Legible Text) */}
                      <div
                        style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)' }}
                        className="p-6 sm:p-7 rounded-2xl border border-white/15 mb-6"
                      >
                        {leader.bio && (
                          <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal text-left">
                            {leader.bio}
                          </p>
                        )}
                        {leader.quote && (
                          <blockquote className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal italic text-left relative pl-1">
                            {leader.quote}
                          </blockquote>
                        )}
                      </div>
                    </div>

                    {/* Symmetrical Bottom Credential Badge */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#75D6EA]">
                      <IconComponent className="w-4 h-4 shrink-0" />
                      <span>{leader.badge}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
