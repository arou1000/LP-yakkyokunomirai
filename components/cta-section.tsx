"use client";

import { Button } from "@/components/ui/button";
import { Clock, Play } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Urgency badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
          <Clock className="h-5 w-5 text-accent" />
          <span className="text-sm font-semibold text-accent">
            審査枠が埋まり次第、予告なく終了いたします。
          </span>
        </div>

        {/* Main headline */}
        <h2 className="text-balance text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl">
          <span className="text-accent">「薬局のミライ」</span>
          <br className="sm:hidden" />
          初期モニター
          <br className="sm:hidden" />
          （求人掲載）に申し込む
        </h2>

        {/* CTA Button */}
        <div className="mt-12">
          <Button
            asChild
            size="lg"
            className="group h-18 gap-3 bg-accent px-14 text-xl font-bold text-accent-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_16px_rgba(16,185,129,0.35),0_10px_24px_rgba(16,185,129,0.3)] transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_0_22px_rgba(16,185,129,0.5),0_12px_32px_rgba(16,185,129,0.4)] sm:h-20 sm:px-[4.2rem] sm:text-2xl"
          >
            <a
              href="https://forms.gle/bxSuqApG2e91fGBA6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/95">
                <Play className="h-3.5 w-3.5 fill-accent text-accent" strokeWidth={2.5} />
              </span>
              お申し込みはコチラ
            </a>
          </Button>
        </div>

        {/* Trust text */}
        <p className="mt-8 text-sm text-primary-foreground/75">
          申し込みは無料です。
          <br />
          ご不明な点がございましたら、公式LINEよりお気軽にお問い合わせください。
        </p>
      </div>
    </section>
  );
}
