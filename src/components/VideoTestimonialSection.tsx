'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Film,
} from 'lucide-react';
import { TESTIMONIAL_VIDEOS, VideoItem } from '@/data/siteContent';
import { getYouTubeThumbnail, getYouTubeEmbedUrl, getYouTubeId } from '@/lib/utils';

export default function VideoTestimonialSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [playingFeaturedInline, setPlayingFeaturedInline] = useState(false);
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);
  const [showAllShorts, setShowAllShorts] = useState(false);

  // Separate featured hero video and shorts
  const featuredVideo = useMemo(
    () => TESTIMONIAL_VIDEOS.find((v) => v.featured) || TESTIMONIAL_VIDEOS[0],
    []
  );

  const shortsVideos = useMemo(
    () => TESTIMONIAL_VIDEOS.filter((v) => v.id !== featuredVideo.id),
    [featuredVideo.id]
  );

  // Dynamic category filter list for shorts
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
      return shortsVideos.some((v) => v.category === cat.id);
    });
  }, [shortsVideos]);

  // Filter shorts based on active tab
  const filteredShorts = useMemo(() => {
    if (activeCategory === 'all') return shortsVideos;
    return shortsVideos.filter((v) => v.category === activeCategory);
  }, [activeCategory, shortsVideos]);

  // Initial cards to show before "Xem thêm"
  const INITIAL_VISIBLE_COUNT = 8;
  const visibleShorts = showAllShorts
    ? filteredShorts
    : filteredShorts.slice(0, INITIAL_VISIBLE_COUNT);
  const remainingCount = Math.max(0, filteredShorts.length - INITIAL_VISIBLE_COUNT);

  // Modal navigation (next / prev)
  const currentModalIndex = useMemo(() => {
    if (!activeModalVideo) return -1;
    return filteredShorts.findIndex((v) => v.id === activeModalVideo.id);
  }, [activeModalVideo, filteredShorts]);

  const handlePrevShort = useCallback(() => {
    if (currentModalIndex > 0) {
      setActiveModalVideo(filteredShorts[currentModalIndex - 1]);
    } else {
      setActiveModalVideo(filteredShorts[filteredShorts.length - 1]);
    }
  }, [currentModalIndex, filteredShorts]);

  const handleNextShort = useCallback(() => {
    if (currentModalIndex >= 0 && currentModalIndex < filteredShorts.length - 1) {
      setActiveModalVideo(filteredShorts[currentModalIndex + 1]);
    } else {
      setActiveModalVideo(filteredShorts[0]);
    }
  }, [currentModalIndex, filteredShorts]);

  // Handle ESC key and keyboard navigation for modal
  useEffect(() => {
    if (!activeModalVideo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModalVideo(null);
      if (e.key === 'ArrowLeft') handlePrevShort();
      if (e.key === 'ArrowRight') handleNextShort();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeModalVideo, handleNextShort, handlePrevShort]);

  // Category badge colors
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
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4FAFD] border border-[#75D6EA]/40 text-[#0284C7] text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#75D6EA]" />
            <span>TRẢI NGHIỆM THỰC TẾ & KHOA HỌC</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#17212B] tracking-tight mb-4">
            <span className="inline-block">LẮNG NGHE CHIA SẺ</span>{' '}
            <span className="inline-block">TỪ NGƯỜI DÙNG THỰC TẾ</span>
          </h2>

          <p className="text-sm sm:text-base text-[#667085] font-normal leading-relaxed">
            Tổng hợp các thước phim phỏng vấn bệnh nhân phục hồi, chia sẻ từ người cao tuổi và các
            thử nghiệm sinh học trực quan với vòng năng lượng vô hướng Blessing Wave.
          </p>
        </div>

        {/* ========================================================= */}
        {/* FEATURED HERO SPOTLIGHT (Video #1: ehz5l_Jvo4E)          */}
        {/* ========================================================= */}
        {featuredVideo && (
          <div className="mb-20">
            <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl text-white border border-slate-700/60 relative overflow-hidden">
              {/* Subtle ambient background glow */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#75D6EA]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left/Top: 16:9 Video Player */}
                <div className="lg:col-span-7 xl:col-span-8">
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 group">
                    {playingFeaturedInline ? (
                      <iframe
                        src={getYouTubeEmbedUrl(featuredVideo.youtubeUrl, true)}
                        title={featuredVideo.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div
                        onClick={() => setPlayingFeaturedInline(true)}
                        className="relative w-full h-full flex items-center justify-center cursor-pointer group"
                      >
                        <Image
                          src={
                            featuredVideo.thumbnail ||
                            getYouTubeThumbnail(featuredVideo.youtubeUrl)
                          }
                          alt={featuredVideo.title}
                          fill
                          className="object-cover opacity-90 group-hover:scale-103 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 750px"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:from-black/70 transition-colors" />

                        {/* Central Play Button */}
                        <div className="relative z-10 flex flex-col items-center gap-3">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlayingFeaturedInline(true);
                            }}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#17212B] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 hover:bg-[#75D6EA] hover:text-white group-hover:shadow-[0_0_30px_rgba(117,214,234,0.6)]"
                            aria-label="Phát video phỏng vấn thực tế"
                          >
                            <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
                          </button>
                          <span className="text-xs sm:text-sm font-semibold text-white/90 bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                            Xem video tư liệu ({featuredVideo.duration || '9:43'})
                          </span>
                        </div>

                        {/* Bottom tag on thumbnail */}
                        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/80">
                          <span className="font-mono bg-black/60 px-2.5 py-1 rounded-md">
                            HD 1080p
                          </span>
                          <span className="flex items-center gap-1 font-medium bg-[#75D6EA]/20 text-[#75D6EA] px-2.5 py-1 rounded-md border border-[#75D6EA]/30">
                            ★ Phỏng vấn trực tiếp
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right/Bottom: Context & Highlights */}
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#75D6EA]/20 border border-[#75D6EA]/40 text-[#75D6EA] text-xs font-bold tracking-wider uppercase mb-4">
                      <Film className="w-3.5 h-3.5" />
                      <span>{featuredVideo.badge || 'VIDEO NỔI BẬT · CHIA SẺ THỰC TẾ'}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl xl:text-2xl font-black text-white tracking-tight leading-snug mb-3">
                      {featuredVideo.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
                      Thước phim dài ghi lại những chia sẻ chân thực từ nhiều bệnh nhân sau khi sử
                      dụng vòng năng lượng vô hướng: từ người bệnh tai biến cải thiện khả năng vận
                      động, đến người đau mỏi khớp cổ và người lớn tuổi phục hồi thể trạng.
                    </p>

                    {/* Key takeaways bullet points */}
                    <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-200">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#75D6EA] shrink-0 mt-0.5" />
                        <span>Trải nghiệm phục hồi sau tai biến và chấn thương cột sống</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#75D6EA] shrink-0 mt-0.5" />
                        <span>Chuyển biến tích cực về giấc ngủ và lưu thông khí huyết</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#75D6EA] shrink-0 mt-0.5" />
                        <span>Cảm nhận thực tế không qua dàn dựng của người dùng</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center gap-3 justify-between">
                    <button
                      type="button"
                      onClick={() => setPlayingFeaturedInline(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#75D6EA] text-[#0F172A] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md hover:scale-102 active:scale-98"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{playingFeaturedInline ? 'Đang phát' : 'Phát video ngay'}</span>
                    </button>

                    <a
                      href={featuredVideo.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      <span>Mở trên YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* SHORTS GALLERY HEADER & CATEGORY TABS                    */}
        {/* ========================================================= */}
        <div className="mt-8 mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0284C7] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#75D6EA] animate-pulse" />
              <span>KHO VIDEO SHORTS NGẮN ({shortsVideos.length} VIDEO)</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#17212B] tracking-tight">
              Trải Nghiệm Tức Thì & Thử Nghiệm Sinh Học
            </h3>
            <p className="text-xs sm:text-sm text-[#667085] mt-1">
              Nhấp vào video để xem trực tiếp dạng Shorts chuẩn màn hình dọc.
            </p>
          </div>

          {/* Filter Pills */}
          {categories.length > 1 && (
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const count =
                  cat.id === 'all'
                    ? shortsVideos.length
                    : shortsVideos.filter((v) => v.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setShowAllShorts(false);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
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
        {/* SHORTS VIDEO CARDS GRID                                  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {visibleShorts.map((video, idx) => {
            const thumb = video.thumbnail || getYouTubeThumbnail(video.youtubeUrl);

            return (
              <div
                key={video.id}
                onClick={() => setActiveModalVideo(video)}
                className="group relative rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#75D6EA] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Vertical Thumbnail with 4:5 aspect ratio */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                  <Image
                    src={thumb}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover:from-black/75 transition-colors" />

                  {/* Top: Shorts Badge & Sequence Number */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                        <path d="M17.77 10.32l-1.2-.5L18 9.06a3.74 3.74 0 0 0-3.5-3.69 3.65 3.65 0 0 0-1.63.38L6.46 9.18a3.73 3.73 0 0 0-1.74 4.88l1.2.5-1.43.76a3.74 3.74 0 0 0 3.5 3.69c.56 0 1.1-.14 1.63-.38l6.41-3.43a3.73 3.73 0 0 0 1.74-4.88zM10 14.65v-5.3l4.5 2.65-4.5 2.65z" />
                      </svg>
                      Shorts
                    </span>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/50 text-white/90 backdrop-blur-xs">
                      #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>

                  {/* Center: Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 text-[#17212B] flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-[#75D6EA] group-hover:text-white transition-all duration-300">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom: Badge / Customer */}
                  {video.badge && (
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="inline-block text-[10px] font-semibold text-white/90 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded truncate max-w-full">
                        {video.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
                  <div>
                    {/* Product Pill */}
                    <div className="mb-2">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${getBadgeStyle(
                          video.category
                        )}`}
                      >
                        {video.productName}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-xs sm:text-sm font-bold text-[#17212B] tracking-tight leading-snug line-clamp-2 group-hover:text-[#0284C7] transition-colors mb-1.5">
                      {video.title}
                    </h4>

                    {/* Customer description */}
                    {video.customerName && (
                      <p className="text-[11px] text-[#667085] line-clamp-1">
                        {video.customerName}
                      </p>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-bold text-[#17212B] group-hover:text-[#0284C7]">
                    <span className="uppercase tracking-wider">Xem video</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* SHOW MORE / COLLAPSE BUTTON                               */}
        {/* ========================================================= */}
        {filteredShorts.length > INITIAL_VISIBLE_COUNT && (
          <div className="mt-10 sm:mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAllShorts(!showAllShorts)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#17212B] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#75D6EA] hover:text-[#0F172A] transition-all shadow-md hover:scale-102 active:scale-98"
            >
              {showAllShorts ? (
                <>
                  <span>Thu gọn danh sách</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Xem thêm {remainingCount} video trải nghiệm</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* SHORTS VIDEO MODAL LIGHTBOX                               */}
      {/* ========================================================= */}
      {activeModalVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalVideo(null)}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[360px] sm:max-w-[400px] bg-[#0F172A] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="px-4 py-3 bg-[#1E293B] flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <span className="px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold uppercase shrink-0">
                  Shorts
                </span>
                <span className="text-xs font-bold text-white truncate">
                  {activeModalVideo.title}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalVideo(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="Đóng video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Vertical Video Embed (9:16) */}
            <div className="relative aspect-[9/16] w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(
                  activeModalVideo.youtubeUrl
                )}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={activeModalVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-[#1E293B] border-t border-white/10 flex items-center justify-between text-xs shrink-0">
              <div className="min-w-0 pr-2">
                <span className="text-[11px] text-slate-300 block truncate">
                  {activeModalVideo.customerName || activeModalVideo.productName}
                </span>
              </div>

              <a
                href={activeModalVideo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#75D6EA] hover:underline font-semibold shrink-0"
              >
                <span>Xem trên YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Prev / Next Buttons (Desktop Floaters) */}
            {filteredShorts.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevShort}
                  className="hidden sm:flex absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black items-center justify-center backdrop-blur-xs transition-all shadow-xl"
                  aria-label="Video trước"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNextShort}
                  className="hidden sm:flex absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black items-center justify-center backdrop-blur-xs transition-all shadow-xl"
                  aria-label="Video tiếp theo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
