"use client";

import { Flag, Rocket, Award, Trophy } from "lucide-react";

const roadmapSteps = [
  {
    id: "start",
    phase: "Start",
    title: "先行パートナーの募集",
    description:
      "初期パートナーを募集します。先行して参画いただくことで、今後さらに拡大していく若手薬剤師プールから、他の薬局に先駆けて最優先でマッチングを開始できます。",
    icon: Flag,
    color: "accent",
  },
  {
    id: "step1",
    phase: "PHASE 1",
    title: "新世代向け求人メディア",
    description:
      "SNSを活用し、従来の求人サイトにいないスマホネイティブ世代へダイレクトにアプローチ。次世代の採用インフラを目指します。",
    icon: Rocket,
    color: "primary",
  },
  {
    id: "step2",
    phase: "PHASE 2",
    title: "スキルファーストな採用",
    description:
      "薬剤師個人のスキルや専門性を可視化。「本当に自社のカルチャーに合う若手」が、高いモチベーションを持って集まる仕組みを提供します。",
    icon: Award,
    color: "accent",
  },
  {
    id: "goal",
    phase: "PHASE 3",
    title: "潜在層へオファー",
    description:
      "潜在層に対しても、貴社の魅力を直線配信。若手薬剤師が、日常のキャリア検討の中で「次の職場」として貴社を自然に選ぶサイクルを作ります。",
    icon: Trophy,
    color: "primary",
  },
];

export function RoadmapSection() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            私たちが描く <span className="text-accent">3つの未来</span>
          </h2>
        </div>

        {/* Sugoroku Timeline */}
        <div className="relative mt-12 sm:mt-16">
          {/* SVG curved path - visible on desktop */}
          <svg
            className="absolute left-1/2 top-0 hidden h-full w-full max-w-4xl -translate-x-1/2 lg:block"
            viewBox="0 0 800 800"
            fill="none"
            preserveAspectRatio="xMidYMin meet"
          >
            <path
              d="M400 40 C600 40, 700 120, 700 200 C700 280, 500 320, 400 320 C300 320, 100 360, 100 440 C100 520, 300 560, 400 560 C500 560, 700 600, 700 680 C700 760, 500 800, 400 800"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeDasharray="12 8"
              fill="none"
              className="opacity-40"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="oklch(0.65 0.17 175)" />
                <stop offset="50%" stopColor="oklch(0.25 0.06 250)" />
                <stop offset="100%" stopColor="oklch(0.65 0.17 175)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile: sugoroku winding path layout */}
          <div className="relative lg:hidden">
            {/* SVG winding path background for mobile */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 320 900"
              fill="none"
              preserveAspectRatio="xMidYMin slice"
            >
              <path
                d="M160 20 
                   C240 20, 280 80, 280 140 
                   C280 200, 200 220, 160 220 
                   C120 220, 40 240, 40 300 
                   C40 360, 120 380, 160 380 
                   C200 380, 280 400, 280 460 
                   C280 520, 200 540, 160 540 
                   C120 540, 40 560, 40 620 
                   C40 680, 120 700, 160 700
                   C200 700, 280 720, 280 780
                   C280 840, 200 880, 160 880"
                stroke="url(#mobileGradient)"
                strokeWidth="6"
                strokeDasharray="16 10"
                fill="none"
                className="opacity-30"
              />
              <defs>
                <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="oklch(0.65 0.17 175)" />
                  <stop offset="25%" stopColor="oklch(0.25 0.06 250)" />
                  <stop offset="50%" stopColor="oklch(0.65 0.17 175)" />
                  <stop offset="75%" stopColor="oklch(0.25 0.06 250)" />
                  <stop offset="100%" stopColor="oklch(0.65 0.17 175)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Mobile step cards - centered column */}
            <div className="relative flex flex-col items-center gap-6 px-2 py-4">
              {roadmapSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={step.id}
                    className={`relative w-full max-w-xs ${
                      isEven ? "self-start ml-4" : "self-end mr-4"
                    }`}
                  >
                    {/* Step dot positioned at top of card */}
                    <div
                      className={`absolute -top-3 ${
                        isEven ? "left-4" : "right-4"
                      } z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-lg ${
                        step.color === "accent"
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Card content */}
                    <div className="group rounded-2xl border border-border bg-card p-5 pt-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold ${
                            step.color === "accent"
                              ? "bg-accent/10 text-accent"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {step.phase}
                        </span>
                        <h3 className="text-sm font-bold leading-snug text-primary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop: sugoroku curved path layout */}
          <div className="relative hidden lg:block">
            <div className="mx-auto max-w-4xl space-y-12">
              {roadmapSteps.map((step, index) => {
                const Icon = step.icon;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={step.id}
                    className={`flex items-center ${
                      isLeft ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`group relative flex w-[420px] items-start gap-5 rounded-3xl border border-border bg-card p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                        isLeft ? "mr-auto" : "ml-auto"
                      }`}
                    >
                      {/* Connector dot */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 ${
                          isLeft ? "-right-3" : "-left-3"
                        }`}
                      >
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-full shadow-lg ${
                            step.color === "accent"
                              ? "bg-accent"
                              : "bg-primary"
                          }`}
                        >
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </div>
                      </div>

                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${
                          step.color === "accent"
                            ? "bg-accent/10 text-accent"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold ${
                              step.color === "accent"
                                ? "bg-accent/10 text-accent"
                                : "bg-primary/10 text-primary"
                            }`}
                          >
                            {step.phase}
                          </span>
                          <h3 className="text-lg font-bold text-primary">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
