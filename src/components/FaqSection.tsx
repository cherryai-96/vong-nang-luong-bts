'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/data/siteContent';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest text-[#667085] uppercase mb-3">
            GIẢI ĐÁP NHANH
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#17212B] tracking-tight mb-3">
            <span className="inline-block">CÂU HỎI</span>{' '}
            <span className="inline-block">THƯỜNG GẶP</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085] font-normal">
            Thông tin tóm tắt về 4 dòng sản phẩm và chính sách niêm yết.
          </p>
        </div>

        {/* 4 Accordions */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#F4FAFD] border border-slate-200/70 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#17212B] tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 transition-transform duration-300 shadow-xs ${
                      isOpen ? 'rotate-180 bg-[#17212B] text-white' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#17212B]/80 leading-relaxed border-t border-slate-200/50 font-normal">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
