"use client";

import { EyeOff, JapaneseYen, Shuffle, UserX } from "lucide-react";

const painPoints = [
  {
    icon: EyeOff,
    title: "見られない求人",
    description: "ハローワークでは若手に届かない",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-500",
  },
  {
    icon: JapaneseYen,
    title: "高額な採用コスト",
    description: "1名採用に150万円以上",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Shuffle,
    title: "強引なマッチング",
    description: "紹介会社の都合で選考が進む",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: UserX,
    title: "採用後のミスマッチ",
    description: "早期離職でまた費用がかかる",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
  },
];

export function PainSection() {
  return (
    <section className="relative overflow-hidden bg-[#f0f4f3] py-16 md:min-h-[700px] md:py-20 lg:min-h-[800px] lg:py-24">
      {/* Mobile: subtle background with low opacity */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10 md:hidden"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%20%2838%29-tjtvZpa4hKWQNI7HoBJAJP9qIj414L.png')`,
        }}
      />
      {/* Desktop: full opacity background */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%20%2838%29-tjtvZpa4hKWQNI7HoBJAJP9qIj414L.png')`,
        }}
      />

      {/* Premium depth effect (desktop only) */}
      <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
        <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-br from-accent/20 via-primary/10 to-transparent blur-3xl lg:h-[700px] lg:w-[700px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-14 lg:mb-16">
          <h2 className="text-balance text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            こんな悩みありませんか？
          </h2>
        </div>

        {/* Mobile Layout: clean vertical stack */}
        <div className="flex flex-col gap-4 md:hidden">
          {painPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${point.iconBg}`}
                  >
                    <Icon className={`h-6 w-6 ${point.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold tracking-tight text-primary">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Layout: positioned bubbles around central character */}
        <div className="relative mx-auto hidden min-h-[500px] max-w-4xl md:block lg:min-h-[560px]">
          <div className="absolute left-2 top-0 w-52 lg:left-0 lg:w-60">
            <div className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <EyeOff className="h-6 w-6 text-slate-500" />
              </div>
              <h3 className="text-base font-extrabold tracking-tight text-primary">
                見られない求人
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                ハローワークでは若手に届かない
              </p>
            </div>
          </div>

          <div className="absolute right-2 top-0 w-52 lg:right-0 lg:w-60">
            <div className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                <JapaneseYen className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-base font-extrabold tracking-tight text-primary">
                高額な採用コスト
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                1名採用に150万円以上
              </p>
            </div>
          </div>

          <div className="absolute bottom-16 left-2 w-52 lg:bottom-20 lg:left-0 lg:w-60">
            <div className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50">
                <Shuffle className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-base font-extrabold tracking-tight text-primary">
                強引なマッチング
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                紹介会社の都合で選考が進む
              </p>
            </div>
          </div>

          <div className="absolute bottom-16 right-2 w-52 lg:bottom-20 lg:right-0 lg:w-60">
            <div className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50">
                <UserX className="h-6 w-6 text-rose-500" />
              </div>
              <h3 className="text-base font-extrabold tracking-tight text-primary">
                採用後のミスマッチ
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                早期離職でまた費用がかかる
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
