"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function HeroSection() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[600px] w-full overflow-hidden sm:min-h-[700px] lg:min-h-[800px]">
      {/* Full-width background image */}
      <Image
        src="/hero/hero-bg.png"
        alt="薬局のミライ ヒーロー"
        fill
        className="object-cover object-bottom"
        priority
        sizes="100vw"
      />

      {/* Content container - positioned in the sky area */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-8 text-center sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        {/* Social proof badge */}
        <Badge
          variant="secondary"
          className="mb-3 inline-flex items-center gap-1 rounded-lg border border-emerald-200/60 bg-emerald-50 px-3 py-1 text-[1.07rem] font-bold tracking-wide text-emerald-800 shadow-[0_0_12px_rgba(16,185,129,0.28)]"
        >
          <span>3週間で薬剤師</span>
          <span className="mx-0.5 text-[1.07rem] font-black text-emerald-600">750名</span>
          <span>が登録</span>
        </Badge>

        {/* Main catchphrase - Ultra bold, deep navy blue for contrast */}
        <h1 className="text-balance text-3xl font-black leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          新世代に届く求人サイト
        </h1>

        {/* CTA Button - Floating in the sky */}
        <div className="mt-6 sm:mt-8 lg:mt-10">
          <Button
            size="lg"
            className="h-12 rounded-full bg-accent px-8 text-sm font-bold text-accent-foreground shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-xl sm:h-14 sm:px-10 sm:text-base lg:h-16 lg:px-12 lg:text-lg"
            onClick={scrollToPricing}
          >
            求人掲載を申し込む
          </Button>
        </div>

        {/* Trust badges - Small and clean */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-primary/80 sm:mt-6 sm:gap-5 sm:text-sm">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(16,185,129,0.75)]" />
            仲介手数料0円
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(16,185,129,0.75)]" />
            直接マッチング
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(16,185,129,0.75)]" />
            返金保証あり
          </span>
        </div>
      </div>
    </section>
  );
}
