'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Play, ExternalLink, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { TESTIMONIAL_VIDEOS } from '@/data/siteContent';
import { getYouTubeThumbnail, getYouTubeEmbedUrl } from '@/lib/utils';

export default function VideoTestimonialSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [showAllVideos, setShowAllVideos] = useState<boolean>(false);

  // Category filter tabs based on available videos
  const categories = useMemo(() => {
    const list = [
      { id: 'all', label: 'Tất cả' },
      { id: 'tre-hoa', label: 'Trẻ Hóa & Tai Biến' },
      { id: 'deo-chan', label: 'Đeo Chân & Vận Động' },
      { id: 'suc-manh', label: 'Sức Mạnh & Thể Thao' },
      { id: 'thu-gian', label: 'Thử Nghiệm Sinh Học' },
    ];
    return list.filter((cat) => {
      if (cat.id === 'all') return true;
      return TESTIMONIAL_VIDEOS.some((v) => v.category === cat.id);
    });
  }, []);

  // Filtered videos based on active category
  const filteredVideos = useMemo(() => {
    if (activeCategory === 'all') return TESTIMONIAL_VIDEOS;
    return TESTIMONIAL_VIDEOS.filter((v) => v.category === activeCategory);
  }, [activeCategory]);

  // Initial cards count before "Xem thêm"
  const INITIAL_COUNT = 6;
  const isFiltering = activeCategory !== 'all';
  const visibleVideos = isFiltering || showAllVideos
    ? filteredVideos
    : filteredVideos.slice(0, INITIAL_COUNT);
  const remainingCount = Math.max(0, filteredVideos.length - INITIAL_COUNT);

  // Product badge styling
  const getBadgeStyle = (category: string) => {
    switch (category) {
      case 'tre-hoa':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'deo-chan':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'suc-manh':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'thu-gian':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4FAFD] border border-[#75D6EA]/40 text-[#0284C7] text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#75D6EA]" />
            <span>TRẢI NGHIỆM THỰC TẾ & KHOA HỌC</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#17212B] tracking-tight mb-4">
            <span className="inline-block">LẮNG NGHE CHIA SẺ</span>{' '}
            <span className="inline-block">TỪ NGƯỜI DÙNG THỰC TẾ</span>
          </h2>

          <p className="text-sm sm:text-base text-[#667085] font-normal leading-relaxed">
            Tổng hợp chia sẻ chân thực từ bệnh nhân phục hồi, người cao tuổi và các thử nghiệm sinh học
            trực quan với vòng năng lượng vô hướng Blessing Wave.
          </p>

          {/* Category Filter Pills */}
          {categories.length > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => {
                const count =
                  cat.id === 'all'
                    ? TESTIMONIAL_VIDEOS.length
                    : TESTIMONIAL_VIDEOS.filter((v) => v.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setPlayingVideoId(null);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeCategory === cat.id
                        ? 'bg-[#17212B] text-white shadow-xs'
                        : 'bg-slate-100 text-[#667085] hover:bg-slate-200'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                        activeCategory === cat.id
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-200 text-[#667085]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* UNIFIED VIDEO CARDS GRID                                  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleVideos.map((video, idx) => {
            const thumb = video.thumbnail || getYouTubeThumbnail(video.youtubeUrl);
            const isPlaying = playingVideoId === video.id;
            const isFeaturedFirst = video.id === '01';

            return (
              <div
                key={video.id}
                className={`rounded-3xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between hover:shadow-xl group ${
                  isFeaturedFirst
                    ? 'bg-gradient-to-b from-[#F0F9FF] to-[#F4FAFD] border-[#75D6EA]/60 shadow-md ring-1 ring-[#75D6EA]/20'
                    : 'bg-[#F4FAFD] border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Inline Video Player or Thumbnail */}
                  {isPlaying ? (
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black mb-4 shadow-md">
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
                      className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black cursor-pointer mb-4 shadow-xs group"
                    >
                      <Image
                        src={thumb}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        {isFeaturedFirst ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#17212B] text-[#75D6EA] text-[10px] font-bold uppercase tracking-wider shadow-sm border border-[#75D6EA]/30">
                            ★ Phỏng vấn thực tế
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                              <path d="M17.77 10.32l-1.2-.5L18 9.06a3.74 3.74 0 0 0-3.5-3.69 3.65 3.65 0 0 0-1.63.38L6.46 9.18a3.73 3.73 0 0 0-1.74 4.88l1.2.5-1.43.76a3.74 3.74 0 0 0 3.5 3.69c.56 0 1.1-.14 1.63-.38l6.41-3.43a3.73 3.73 0 0 0 1.74-4.88zM10 14.65v-5.3l4.5 2.65-4.5 2.65z" />
                            </svg>
                            Shorts
                          </span>
                        )}

                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/60 text-white backdrop-blur-xs">
                          #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                      </div>

                      {/* Central Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#17212B] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#75D6EA] group-hover:text-white transition-all duration-300">
                          <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                        </div>
                      </div>

                      {/* Duration Tag Bottom-Right */}
                      {video.duration && (
                        <div className="absolute bottom-2.5 right-2.5">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 text-white/90 backdrop-blur-xs">
                            {video.duration}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Product Badge */}
                  <div className="mb-2">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${getBadgeStyle(
                        video.category
                      )}`}
                    >
                      {video.productName}
                    </span>
                  </div>

                  {/* Title & Customer Detail */}
                  <h3 className="text-base font-bold text-[#17212B] tracking-tight leading-snug mb-1 group-hover:text-[#0284C7] transition-colors">
                    {video.title}
                  </h3>
                  {video.customerName && (
                    <p className="text-xs text-[#667085] font-normal line-clamp-1">
                      {video.customerName}
                    </p>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => setPlayingVideoId(video.id)}
                    className="font-bold text-[#17212B] hover:text-[#0284C7] transition-colors flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>{isPlaying ? 'Đang phát' : 'Xem video'}</span>
                    <span>→</span>
                  </button>

                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#667085] hover:text-[#17212B] transition-colors"
                    title="Mở trên YouTube"
                  >
                    <span>YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* SHOW MORE / COLLAPSE BUTTON                               */}
        {/* ========================================================= */}
        {!isFiltering && filteredVideos.length > INITIAL_COUNT && (
          <div className="mt-12 sm:mt-16 text-center">
            <button
              type="button"
              onClick={() => setShowAllVideos(!showAllVideos)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#17212B] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#75D6EA] hover:text-[#0F172A] transition-all shadow-md hover:scale-102 active:scale-98"
            >
              {showAllVideos ? (
                <>
                  <span>Thu gọn danh sách</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Xem thêm {remainingCount} video trải nghiệm khác</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
