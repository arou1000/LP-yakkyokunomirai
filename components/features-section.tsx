"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            なぜ「薬局のミライ」なら
            <br />
            <span className="text-accent">若手薬剤師と出会える</span>のか？
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Card 1 - Large card spanning 2 rows */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl lg:row-span-2 lg:p-8">

            <div className="relative flex flex-col items-center text-center">
              <Image
                src="/features/smartphone_woman_mono.png"
                alt="スマートフォンを持つ人物イラスト"
                width={180}
                height={180}
                className="mt-2 h-32 w-auto object-contain sm:mt-3 sm:h-36"
                priority={false}
              />

              <div className="mt-5 inline-flex items-baseline gap-1 rounded-full bg-accent/20 px-4 py-2">
                <span className="text-3xl font-bold text-accent sm:text-4xl">
                  90%
                </span>
                <span className="text-base font-semibold text-primary/85">
                  が20代～30代
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-primary sm:text-2xl">
                新世代・若手薬剤師への
                <br />
                圧倒的リーチ
              </h3>
            </div>
          </div>

          {/* Card 2 - Top right */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl lg:col-span-2 lg:p-8">
            <div className="relative flex flex-col items-center text-center">
              <Image
                src="/features/date_window_mono.png"
                alt="日付ウィンドウのイラスト"
                width={180}
                height={180}
                className="mt-4 h-28 w-auto object-contain sm:mt-5 sm:h-32"
                priority={false}
              />

              <div className="mt-5 inline-flex items-baseline gap-1 rounded-full bg-accent/20 px-4 py-2">
                <span className="text-base font-semibold text-primary/85">3週間で</span>
                <span className="text-2xl font-bold text-accent sm:text-3xl">
                  750人
                </span>
                <span className="text-base font-semibold text-primary/85">登録</span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-primary sm:text-2xl">
                いま勢いのある
                <br className="sm:hidden" />
                最新メディア
              </h3>
            </div>
          </div>

          {/* Card 3 - Bottom right */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl lg:col-span-2 lg:p-8">
            <div className="relative flex flex-col items-center text-center">
              <Image
                src="/features/loupe_hand_mono.png"
                alt="虫眼鏡と手のイラスト"
                width={180}
                height={180}
                className="mt-4 h-28 w-auto object-contain sm:mt-5 sm:h-32"
                priority={false}
              />

              <div className="mt-5 inline-flex items-baseline gap-1 rounded-full bg-accent/20 px-4 py-2">
                <span className="text-2xl font-bold text-accent sm:text-3xl">
                  新世代
                </span>
                <span className="text-base font-semibold text-primary/85">に届ける</span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-primary sm:text-2xl">
                従来のサイトでは届かない
                <br className="sm:hidden" />
                SNS世代
              </h3>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="mt-4 flex justify-center lg:mt-2">
              <Button
                asChild
                className="h-11 rounded-full bg-accent px-8 text-sm font-bold text-accent-foreground shadow-md transition-all duration-300 hover:bg-accent/90 hover:shadow-lg"
              >
                <a href="#pricing">求人掲載を申し込む</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
