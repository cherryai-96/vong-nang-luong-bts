'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FourZeroesSection from '@/components/FourZeroesSection';
import HealthTopicsSection from '@/components/HealthTopicsSection';
import StickyProductNav from '@/components/StickyProductNav';
import ProductDetailSection from '@/components/ProductDetailSection';
import HealthMatrixSection from '@/components/HealthMatrixSection';
import TechnologySection from '@/components/TechnologySection';
import VisualEvidenceSection from '@/components/VisualEvidenceSection';
import IntroVideoSection from '@/components/IntroVideoSection';
import VideoTestimonialSection from '@/components/VideoTestimonialSection';
import FaqSection from '@/components/FaqSection';
import FinalShowcaseSection from '@/components/FinalShowcaseSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17212B] selection:bg-[#75D6EA] selection:text-[#17212B]">
      {/* 01. Minimal Header */}
      <Navbar />

      <main className="flex-1">
        {/* 02. Hero Section */}
        <HeroSection />

        {/* Đột phá 4 KHÔNG (Chăm sóc sức khỏe thụ động) */}
        <FourZeroesSection />

        {/* 03. Bốn nhóm nhu cầu sức khỏe */}
        <HealthTopicsSection />

        {/* Sticky Mini Navigation (BLUNT style) */}
        <StickyProductNav />

        {/* 04 - 07. Chi tiết 4 dòng vòng */}
        <ProductDetailSection />

        {/* Ma trận 5 Trụ cột tác động sức khỏe */}
        <HealthMatrixSection />

        {/* 08. Công nghệ & Tần số sinh học */}
        <TechnologySection />

        {/* Kiểm chứng thực nghiệm Before/After & Bảo chứng USA */}
        <VisualEvidenceSection />

        {/* 09. Video giới thiệu sản phẩm (Chạy trực tiếp trên trang) */}
        <IntroVideoSection />

        {/* 10. Video trải nghiệm khách hàng (Chạy trực tiếp trên trang) */}
        <VideoTestimonialSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Final Showcase */}
        <FinalShowcaseSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
