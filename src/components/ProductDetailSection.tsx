'use client';

import React from 'react';
import Image from 'next/image';
import { PRODUCTS, SITE_CONFIG } from '@/data/siteContent';

export default function ProductDetailSection() {
  return (
    <section id="products" className="divide-y divide-slate-100/60">
      {PRODUCTS.map((product, index) => {
        const isImageLeft = index % 2 === 0;

        return (
          <div
            key={product.id}
            id={`detail-${product.id}`}
            className="py-20 sm:py-28 scroll-mt-28 transition-colors duration-500"
            style={{
              background: product.bgGradient,
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Product Visual Column (Compact & Neat, 100% Uncropped Transparent PNG) */}
                <div
                  className={`lg:col-span-5 ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg flex flex-col items-center justify-center max-w-md mx-auto">
                    {/* Compact Image Container */}
                    <div className="product-detail-box relative w-full flex items-center justify-center py-4">
                      <Image
                        src={product.image}
                        alt={`${product.name} - ${product.healthTheme}`}
                        width={600}
                        height={1000}
                        className="product-detail-image transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 70vw, 300px"
                      />
                    </div>

                    {/* Prominent Price Banner Directly Under Each Ring */}
                    <div className="mt-4 pt-4 border-t border-slate-100 w-full flex flex-col items-center justify-center">
                      <div className="w-full py-3 px-4 rounded-2xl bg-[#17212B] text-white shadow-md text-center border border-slate-800">
                        <span className="text-[10px] font-bold tracking-widest text-[#75D6EA] uppercase block mb-0.5">
                          GIÁ NIÊM YẾT CHÍNH HÃNG
                        </span>
                        <div className="flex items-baseline justify-center gap-1.5">
                          <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                            {SITE_CONFIG.priceFormatted}
                          </span>
                          <span className="text-xs font-bold text-slate-300 uppercase">/ VÒNG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Editorial Content Column */}
                <div
                  className={`lg:col-span-7 ${
                    isImageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Category Eyebrow */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-white border border-slate-200/80">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: product.accentHex }}
                    />
                    <span className="text-[#17212B]">{product.name}</span>
                  </div>

                  {/* Main Headline */}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-black text-[#17212B] tracking-tight leading-tight mb-2">
                    <span className="inline-block">VÒNG NĂNG LƯỢNG</span>{' '}
                    <span className="inline-block">{product.name.replace('Vòng ', '').toUpperCase()}</span>
                  </h2>

                  {/* Subheading */}
                  <p
                    className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wide mb-6"
                    style={{
                      color: product.accentHex === '#75D6EA' ? '#0284c7' : product.accentHex,
                    }}
                  >
                    {product.subheading.includes(' – ') ? (
                      <>
                        <span className="inline-block">{product.subheading.split(' – ')[0]}</span>
                        <span className="inline-block"> – {product.subheading.split(' – ')[1]}</span>
                      </>
                    ) : (
                      product.subheading
                    )}
                  </p>

                  {/* 3 Key Health Benefit Points (Directly matching the 3 bullet points in flyer) */}
                  <div className="space-y-3.5">
                    {product.healthTopics.map((topic, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-white/95 border border-slate-200/60 shadow-xs flex items-start gap-3.5 hover:shadow-sm transition-shadow"
                      >
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-black shadow-xs"
                          style={{ backgroundColor: product.accentHex }}
                        >
                          0{i + 1}
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-black text-[#17212B] tracking-tight mb-0.5">
                            {topic.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
                            {topic.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
