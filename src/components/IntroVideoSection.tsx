'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { INTRO_VIDEO } from '@/data/siteContent';
import { getYouTubeId } from '@/lib/utils';

export default function IntroVideoSection() {
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const videoId = getYouTubeId(INTRO_VIDEO.youtubeUrl) || '7aEpPB8fh8E';
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!isPlayingInline) return;

    let destroyed = false;
    let checkInterval: any = null;

    const enforceVietnameseCaptions = (player: any) => {
      if (!player) return;
      try {
        if (typeof player.loadModule === 'function') {
          player.loadModule('captions');
        }
        if (typeof player.setOption === 'function') {
          // 1. Force preferred track language to Vietnamese
          player.setOption('captions', 'track', { languageCode: 'vi' });

          // 2. Target automatic translation language to Vietnamese
          player.setOption('captions', 'translationLanguage', { languageCode: 'vi' });

          // 3. Fallback translation on standard track
          player.setOption('captions', 'track', {
            languageCode: 'en',
            translationLanguage: { languageCode: 'vi' },
          });

          // 4. Dynamically inspect tracklist and apply Vietnamese if available
          if (typeof player.getOption === 'function') {
            const tracklist = player.getOption('captions', 'tracklist');
            if (Array.isArray(tracklist) && tracklist.length > 0) {
              const vi = tracklist.find((t: any) => t.languageCode === 'vi');
              if (vi) {
                player.setOption('captions', 'track', vi);
              } else {
                player.setOption('captions', 'track', {
                  ...tracklist[0],
                  translationLanguage: { languageCode: 'vi' },
                });
              }
            }
          }
        }
      } catch (err) {
        // Fallback to URL embed parameters
      }
    };

    const initPlayer = () => {
      if (destroyed) return;
      const YT = (window as any).YT;
      if (!YT || !YT.Player) return;

      try {
        playerRef.current = new YT.Player('intro-video-container', {
          videoId,
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 1,
            cc_load_policy: 1,
            cc_lang_pref: 'vi',
            hl: 'vi',
            rel: 0,
            modestbranding: 1,
            enablejsapi: 1,
            playsinline: 1,
            origin: typeof window !== 'undefined' ? window.location.origin : '',
          },
          events: {
            onReady: (event: any) => {
              if (destroyed) return;
              try {
                event.target.playVideo();
              } catch (e) {}
              enforceVietnameseCaptions(event.target);
            },
            onStateChange: (event: any) => {
              if (destroyed) return;
              if (event.data === YT.PlayerState.PLAYING) {
                enforceVietnameseCaptions(event.target);
                setTimeout(() => enforceVietnameseCaptions(event.target), 600);
                setTimeout(() => enforceVietnameseCaptions(event.target), 1500);
                setTimeout(() => enforceVietnameseCaptions(event.target), 3000);
              }
            },
            onApiChange: (event: any) => {
              if (destroyed) return;
              enforceVietnameseCaptions(event.target);
            },
          },
        });
      } catch (e) {
        // Player creation fallback
      }
    };

    // Load YouTube API script if not present
    if (!(window as any).YT || !(window as any).YT.Player) {
      const existingScript = document.querySelector('script[src*="youtube.com/iframe_api"]');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
      }

      const prevCallback = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (typeof prevCallback === 'function') prevCallback();
        initPlayer();
      };

      checkInterval = setInterval(() => {
        if ((window as any).YT && (window as any).YT.Player) {
          clearInterval(checkInterval);
          initPlayer();
        }
      }, 200);
    } else {
      initPlayer();
    }

    return () => {
      destroyed = true;
      if (checkInterval) clearInterval(checkInterval);
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (e) {}
      }
    };
  }, [isPlayingInline, videoId]);

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
              <div id="intro-video-container" className="w-full h-full" />
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
