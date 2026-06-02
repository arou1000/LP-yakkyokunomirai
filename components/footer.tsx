export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:gap-4 md:text-left lg:flex-row lg:items-start">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-base font-bold text-primary-foreground">薬</span>
            </div>
            <span className="text-base font-bold text-primary">薬局のミライ</span>
          </div>

          {/* Office info */}
          <div className="space-y-1 text-xs text-muted-foreground sm:text-sm">
            <p className="font-semibold text-foreground">薬局のミライ運営事務局</p>
            <p>〒1070062</p>
            <p>東京都港区南青山3丁目1番36号青山丸竹ビル6F</p>
            <p className="pt-2">
              <a
                href="https://forms.gle/uFJAC8KKxGfGZGgB9"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
              >
                お問い合わせ
              </a>
            </p>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground sm:text-sm lg:self-center">
            © 2026 薬局のミライ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
