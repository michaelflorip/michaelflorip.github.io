"use client";

import type { ReactNode } from "react";

import { Header } from "@/components/site-header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-24">
      <Header />
      <div className="mt-12">{children}</div>
    </div>
  );
}

