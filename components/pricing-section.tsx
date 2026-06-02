"use client";

import { Check, Shield } from "lucide-react";

export function PricingSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            求人掲載{" "}
            <span className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-accent">
              限定50社
            </span>
            <br className="sm:hidden" />
            初期モニター募集（審査制）
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl sm:mt-16">
          {/* Main pricing card */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-accent/30 bg-card shadow-xl">
            {/* Decorative top banner */}
            <div className="bg-gradient-to-r from-accent to-accent/80 px-6 py-4 text-center">
              <p className="text-sm font-bold text-accent-foreground sm:text-base">
                初期モニター限定特別価格
              </p>
            </div>

            <div className="p-6 sm:p-10">
              {/* Pricing details */}
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Initial cost */}
                <div className="rounded-2xl border border-border bg-secondary/50 p-6">
                  <p className="text-sm font-semibold text-muted-foreground">
                    初期費用
                  </p>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="text-lg text-muted-foreground line-through">
                      通常100,000円
                    </span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-accent sm:text-5xl">
                      33,000
                    </span>
                    <span className="text-lg font-medium text-muted-foreground">
                      円（税込）
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    ※審査通過時のみ発生
                  </p>
                </div>

                {/* Monthly cost */}
                <div className="rounded-2xl border border-border bg-secondary/50 p-6">
                  <p className="text-sm font-semibold text-muted-foreground">
                    月額費用
                  </p>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary sm:text-5xl">
                      22,000
                    </span>
                    <span className="text-lg font-medium text-muted-foreground">
                      円〜（税込）
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    最低6ヶ月契約
                  </p>
                </div>
              </div>

              {/* Benefits list */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "初期ユーザー限定価格で永続利用",
                  "エリア優先マッチ",
                  "全額返金保証つき",
                  "審査通過企業のみ参加可能",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-card-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Fund usage */}
              <div className="mt-8 border-t border-border pt-8">
                <h3 className="text-lg font-bold text-primary">資金の使途</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  頂戴した月額費用は、広告、コンテンツ充実化、求人メディアの構築のために全額再投資いたします。
                </p>
              </div>

              {/* Money back guarantee */}
              <div className="mt-8 rounded-2xl border-2 border-accent bg-accent/5 p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Shield className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-accent">返金保証</h3>
                </div>
                <p className="mt-3 leading-relaxed text-card-foreground">
                  求人メディアのサービス開始が困難となった場合、お預かりした初期費用・月額費用の全額を
                  <span className="font-bold text-accent">【100%返金】</span>
                  いたします。
                </p>
                <p className="mt-3 font-semibold text-primary">
                  ▼ 返金対象となるケース
                </p>
                <ul className="mt-2 space-y-1 text-card-foreground">
                  <li>・先行パートナー枠が集まらなかった場合</li>
                  <li>・先行パートナー枠の満了後、サービス開始が難しくなった場合</li>
                </ul>
                <p className="mt-3 font-semibold text-primary">
                  貴社側の金銭的リスクは一切ございません。
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
