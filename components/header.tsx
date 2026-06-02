"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">薬</span>
          </div>
          <span className="text-lg font-bold text-primary">薬局のミライ</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            特徴
          </a>
          <a
            href="#roadmap"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            ロードマップ
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            料金
          </a>
          <Button
            size="sm"
            className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <MessageCircle className="h-4 w-4" />
            審査に応募
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="メニューを開く"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 py-4">
            <a
              href="#features"
              className="block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              特徴
            </a>
            <a
              href="#roadmap"
              className="block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              ロードマップ
            </a>
            <a
              href="#pricing"
              className="block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              料金
            </a>
            <div className="pt-2">
              <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                <MessageCircle className="h-4 w-4" />
                審査に応募
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
