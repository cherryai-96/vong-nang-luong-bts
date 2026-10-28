'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { TESTIMONIAL_VIDEOS } from '@/data/siteContent';
import { getYouTubeThumbnail, getYouTubeEmbedUrl } from '@/lib/utils';

export default function VideoTestimonialSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Filter categories dynamically based on available video items
  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'deo-chan', label: 'Đeo Chân' },
    { id: 'suc-manh', label: 'Sức Mạnh' },
    { id: 'thu-gian', label: 'Thư Giãn' },
    { id: 'tre-hoa', label: 'Trẻ Hóa' },
  ].filter((cat) => {
    if (cat.id === 'all') return true;
    return TESTIMONIAL_VIDEOS.some((v) => v.category === cat.id);
  });

  const filteredVideos =
    activeCategory === 'all'
      ? TESTIMONIAL_VIDEOS
      : TESTIMONIAL_VIDEOS.filter((v) => v.category === activeCategory);

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold tracking-widest text-[#667085] uppercase mb-3">
            TRẢI NGHIỆM THỰC TẾ
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#17212B] tracking-tight mb-3">
            <span className="inline-block">LẮNG NGHE</span>{' '}
            <span className="inline-block">TRẢI NGHIỆM THỰC TẾ</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085] font-normal">
            Những chia sẻ cá nhân từ người sử dụng (Xem trực tiếp trên trang).
          </p>

          {/* Category Filter Pills */}
          {categories.length > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setPlayingVideoId(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#17212B] text-white shadow-xs'
                      : 'bg-slate-100 text-[#667085] hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Video Cards Grid: Desktop 3 columns, Tablet 2 columns, Mobile 1 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => {
            const thumb = video.thumbnail || getYouTubeThumbnail(video.youtubeUrl);
            const isPlaying = playingVideoId === video.id;

            return (
              <div
                key={video.id}
                className="bg-[#F4FAFD] rounded-3xl p-6 border border-slate-200/70 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between hover:shadow-lg group"
              >
                <div>
                  {/* Inline Video Player or Thumbnail */}
                  {isPlaying ? (
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black mb-5 shadow-xs">
                      <iframe
                        src={getYouTubeEmbedUrl(video.youtubeUrl, true)}
                        title={video.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => setPlayingVideoId(video.id)}
                      className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black cursor-pointer mb-5 shadow-xs group"
                    >
                      <Image
                        src={thumb}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white text-[#17212B] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#75D6EA] group-hover:text-white transition-all">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Product Badge */}
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-[#17212B] border border-slate-200">
                      {video.productName}
                    </span>
                  </div>

                  {/* Title & Customer Name */}
                  <h3 className="text-base font-bold text-[#17212B] tracking-tight mb-1">
                    {video.title}
                  </h3>
                  {video.customerName && (
                    <p className="text-xs text-[#667085] font-normal">{video.customerName}</p>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setPlayingVideoId(video.id)}
                    className="text-xs font-bold text-[#17212B] hover:text-[#75D6EA] transition-colors flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>{isPlaying ? 'Đang phát' : 'Xem video'}</span>
                    <span>→</span>
                  </button>
                  {video.duration && (
                    <span className="text-[11px] font-mono text-slate-400">{video.duration}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
