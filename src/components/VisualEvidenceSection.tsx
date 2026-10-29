'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, CheckCircle2, ExternalLink, Play, Beaker, Flame, WifiOff } from 'lucide-react';
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

        {/* 8ight Labs USA Credibility & R&D Section */}
        <div className="rounded-3xl bg-linear-to-b from-[#17212B] to-[#0F172A] text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#75D6EA]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Top Partner Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-slate-700/60 mb-10">
              <div className="flex items-center gap-5">
                <div className="relative w-28 sm:w-36 h-12 shrink-0 bg-white/5 rounded-xl p-2 border border-white/10 flex items-center justify-center">
                  <Image
                    src={PARTNER_RND_DATA.logo}
                    alt="8ight Research Labs Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {PARTNER_RND_DATA.headline}
                    </h3>
                    <div className="relative w-5 h-3.5 rounded-xs overflow-hidden shrink-0">
                      <Image
                        src={PARTNER_RND_DATA.flag}
                        alt="USA Flag"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-[#75D6EA] tracking-wide">
                    {PARTNER_RND_DATA.tagline}
                  </p>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                {PARTNER_RND_DATA.description}
              </div>
            </div>

            {/* Founders & Leadership Quote */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
              {PARTNER_RND_DATA.leaders.map((leader, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-xs flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#75D6EA]/40">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {leader.name}
                      </h4>
                      <p className="text-xs font-medium text-slate-400">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    {leader.bio || leader.quote}
                  </p>
                </div>
              ))}
            </div>

            {/* Lab Test Videos External Links */}
            <div className="pt-6 border-t border-slate-700/60">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Xem thêm video kiểm chứng trực tiếp từ 8ight Research Labs (Hoa Kỳ):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PARTNER_RND_DATA.labVideos.map((vid, idx) => (
                  <a
                    key={idx}
                    href={vid.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#75D6EA]/50 transition-all text-xs font-medium text-slate-200 hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <Play className="w-3.5 h-3.5 text-red-400 group-hover:scale-110 transition-transform" />
                      <span className="truncate">{vid.title}</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
