'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, ExternalLink } from 'lucide-react';
import { INTRO_VIDEO } from '@/data/siteContent';
import { getYouTubeId } from '@/lib/utils';

export default function IntroVideoSection() {
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const videoId = getYouTubeId(INTRO_VIDEO.youtubeUrl) || 'O30mRejto84';

  return (
    <section id="video-showcase" className="py-24 sm:py-32 bg-[#F4FAFD] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold tracking-widest text-[#75D6EA] uppercase mb-3">
            VIDEO GIỚI THIỆU CÔNG NGHỆ
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#17212B] tracking-tight mb-3">
            <span className="inline-block">CƠ CHẾ HOẠT ĐỘNG</span>{' '}
            <span className="inline-block">NĂNG LƯỢNG VÔ HƯỚNG</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085] font-normal">
            {INTRO_VIDEO.subtitle}
          </p>
        </div>

        {/* Video Showcase Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-black border border-slate-200/80 group">
            {isPlayingInline ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={INTRO_VIDEO.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div
                onClick={() => setIsPlayingInline(true)}
                className="relative w-full h-full flex items-center justify-center cursor-pointer"
              >
                <Image
                  src={INTRO_VIDEO.thumbnail}
                  alt={INTRO_VIDEO.title}
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlayingInline(true);
                  }}
                  className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-[#17212B] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 hover:bg-[#75D6EA] hover:text-white"
                  aria-label="Phát video trực tiếp"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </button>
              </div>
            )}
          </div>

          {/* Quick link to YouTube if needed */}
          <div className="mt-4 flex justify-center">
            <a
              href={INTRO_VIDEO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#667085] hover:text-[#17212B] transition-colors"
            >
              <span>Xem trực tiếp trên YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
