"use client";

import Link from "next/link";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8H4.5V23H.5V8ZM8 8H11.83V10.05H11.88C12.41 9.09 13.72 8.08 15.66 8.08 19.73 8.08 20.5 10.76 20.5 14.24V23H16.5V15.09C16.5 13.21 16.46 10.79 13.9 10.79 11.3 10.79 10.9 12.82 10.9 14.96V23H6.9V8H8Z" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link
        href="/"
        className="font-serif text-lg font-semibold tracking-[-0.01em] text-foreground"
      >
        Michael Florip
      </Link>

      <nav className="flex items-center gap-4 text-sm font-sans">
        <Link
          href="/writing"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Writing
        </Link>
        <Link
          href="/library"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Library
        </Link>

        <a
          href="https://www.linkedin.com/in/michaelflorip/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <LinkedInIcon className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}

