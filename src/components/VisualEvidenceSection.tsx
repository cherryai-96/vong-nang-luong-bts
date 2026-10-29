'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, Beaker, Flame, WifiOff } from 'lucide-react';
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

        {/* 8ight Labs USA Credibility & R&D Section - Large & Beautiful Portraits */}
        <div className="rounded-3xl bg-linear-to-b from-[#17212B] via-[#111827] to-[#0B0F19] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-slate-800">
          {/* Subtle Decorative Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#75D6EA]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header: Logo, Company & Description */}
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 pb-10 border-b border-slate-700/60">
              <p className="text-xs font-bold tracking-widest text-[#75D6EA] uppercase mb-4">
                {PARTNER_RND_DATA.title}
              </p>

              {/* Large 8ight Labs Logo + US Flag */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="relative w-48 sm:w-60 h-16 sm:h-20 drop-shadow-lg">
                  <Image
                    src={PARTNER_RND_DATA.logo}
                    alt="8ight Research Labs Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="relative w-7 h-5 rounded-xs overflow-hidden shadow-sm shrink-0">
                  <Image
                    src={PARTNER_RND_DATA.flag}
                    alt="USA Flag"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                {PARTNER_RND_DATA.headline}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#75D6EA] mb-4">
                {PARTNER_RND_DATA.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
                {PARTNER_RND_DATA.description}
              </p>
            </div>

            {/* 2 Big Prominent Scientists / Founders Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {PARTNER_RND_DATA.leaders.map((leader, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 hover:bg-white/8 rounded-3xl p-8 sm:p-10 border border-white/10 backdrop-blur-sm transition-all duration-300 flex flex-col items-center text-center group"
                >
                  {/* Large High-Res Avatar with Glowing Border */}
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-[#75D6EA]/30 group-hover:border-[#75D6EA] transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 176px, 208px"
                    />
                  </div>

                  {/* Name & Title */}
                  <h4 className="text-2xl font-black text-white tracking-tight mb-1">
                    {leader.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-[#75D6EA] uppercase tracking-wider mb-5">
                    {leader.role}
                  </p>

                  {/* Bio or Quote */}
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                    {leader.bio && (
                      <p className="text-slate-300 text-justify sm:text-center leading-relaxed">
                        {leader.bio}
                      </p>
                    )}
                    {leader.quote && (
                      <blockquote className="italic text-slate-200 border-t border-white/10 pt-4 mt-2 font-serif text-sm sm:text-base leading-relaxed">
                        {leader.quote}
                      </blockquote>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
