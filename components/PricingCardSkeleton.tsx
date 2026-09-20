'use client';

import React from 'react';

interface PricingCardSkeletonProps {
  isHighlight?: boolean;
}

export default function PricingCardSkeleton({ isHighlight = false }: PricingCardSkeletonProps) {
  return (
    <div
      className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between border animate-pulse ${
        isHighlight
          ? 'bg-[#0f0f0f] border-[#ff6000]/40 shadow-xl shadow-[#ff6000]/5'
          : 'bg-white border-neutral-200/90 shadow-sm'
      }`}
    >
      {/* Top Badge Skeleton for Highlight Card */}
      {isHighlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 rounded-full bg-[#ff6000]/30" />
      )}

      <div>
        {/* Header with Icon and Title Skeleton */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-9 h-9 rounded-xl shrink-0 ${
              isHighlight ? 'bg-neutral-800' : 'bg-neutral-200'
            }`}
          />
          <div className="space-y-2 grow">
            <div
              className={`h-2.5 w-16 rounded ${
                isHighlight ? 'bg-[#ff6000]/40' : 'bg-[#ff6000]/30'
              }`}
            />
            <div
              className={`h-5 w-3/4 rounded ${
                isHighlight ? 'bg-neutral-800' : 'bg-neutral-200'
              }`}
            />
          </div>
        </div>

        {/* Sessions count skeleton */}
        <div className="mt-4 mb-2">
          <div
            className={`h-7 w-28 rounded-lg ${
              isHighlight ? 'bg-neutral-800' : 'bg-neutral-200'
            }`}
          />
        </div>

        {/* Price Block Skeleton */}
        <div className="my-4">
          <div
            className={`h-11 w-36 rounded-xl ${
              isHighlight ? 'bg-[#ff6000]/30' : 'bg-neutral-900/10'
            }`}
          />
        </div>

        {/* Support Message Skeleton */}
        <div
          className={`h-8 w-full rounded-lg my-3 ${
            isHighlight ? 'bg-neutral-800/80' : 'bg-neutral-100'
          }`}
        />

        {/* Options list Skeleton */}
        <div className="space-y-3.5 my-6 pt-3 border-t border-neutral-100 dark:border-neutral-800">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 grow">
                <div
                  className={`w-3.5 h-3.5 rounded-full shrink-0 ${
                    isHighlight ? 'bg-[#ff6000]/40' : 'bg-[#ff6000]/30'
                  }`}
                />
                <div
                  className={`h-3 rounded grow ${
                    isHighlight ? 'bg-neutral-800' : 'bg-neutral-200'
                  }`}
                  style={{ maxWidth: `${65 + (i % 3) * 10}%` }}
                />
              </div>
              <div
                className={`h-3 w-12 rounded shrink-0 ${
                  isHighlight ? 'bg-neutral-800' : 'bg-neutral-200'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button Skeleton */}
      <div
        className={`w-full h-11 rounded-full ${
          isHighlight ? 'bg-[#ff6000]/40' : 'bg-neutral-900/20'
        }`}
      />
    </div>
  );
}
