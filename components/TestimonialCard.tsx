import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      id={`testimonial-card-${testimonial.id}`}
      className="bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200/80 shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between h-full"
    >
      <div>
        {/* Header: Avatar, Name, Rating */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ff6000] text-white font-black flex items-center justify-center text-sm shadow-xs">
              {testimonial.avatarLetter}
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#111111] leading-snug">
                {testimonial.name}
              </h4>
              {testimonial.discipline && (
                <span className="text-[11px] font-semibold text-[#ff6000] block">
                  {testimonial.discipline}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-0.5 mt-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-[#ff6000] text-[#ff6000]"
              />
            ))}
          </div>
        </div>

        {/* Text */}
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal italic">
          {testimonial.text}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
        <span className="font-semibold text-neutral-600">Membre IRON FIT</span>
        <span>Khemis Miliana</span>
      </div>
    </div>
  );
}
