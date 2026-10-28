'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { INTRO_VIDEO } from '@/data/siteContent';
import { getYouTubeEmbedUrl, getYouTubeId } from '@/lib/utils';

export default function IntroVideoSection() {
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const videoId = getYouTubeId(INTRO_VIDEO.youtubeUrl);
  const embedUrl = getYouTubeEmbedUrl(INTRO_VIDEO.youtubeUrl, true);

  // Programmatically enforce Vietnamese captions via YouTube Iframe API when video starts
  useEffect(() => {
    if (!isPlayingInline) return;

    const setupPlayerCaptions = () => {
      try {
        if (!(window as any).YT || !(window as any).YT.Player) return;
        new (window as any).YT.Player('intro-video-iframe', {
          events: {
            onReady: (event: any) => {
              try {
                event.target.playVideo();
                event.target.loadModule('captions');
                event.target.setOption('captions', 'track', { languageCode: 'vi' });
                event.target.setOption('captions', 'translationLanguage', { languageCode: 'vi' });
              } catch (e) {
                // Ignore if browser restricts
              }
            },
            onApiChange: (event: any) => {
              try {
                event.target.loadModule('captions');
                event.target.setOption('captions', 'track', { languageCode: 'vi' });
                event.target.setOption('captions', 'translationLanguage', { languageCode: 'vi' });
              } catch (e) {
                // Ignore
              }
            },
          },
        });
      } catch (e) {
        // Fallback already guaranteed via URL parameters
      }
    };

    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      (window as any).onYouTubeIframeAPIReady = setupPlayerCaptions;
    } else {
      setupPlayerCaptions();
    }
  }, [isPlayingInline]);

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

        {/* Video Showcase Container: Plays directly inline on the page */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-black border border-slate-200/80 group">
            {isPlayingInline && videoId ? (
              <iframe
                id="intro-video-iframe"
                src={embedUrl}
                title={INTRO_VIDEO.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
        </div>
      </div>
    </section>
  );
}
