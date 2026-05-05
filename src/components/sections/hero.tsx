"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Status() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      <span className="text-[12px] font-medium tracking-wide text-zinc-500">
        Currently: Building at Handshake
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <motion.section
      className="space-y-4"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      <Status />
      <h1 className="text-2xl font-semibold tracking-tight">Michael Florip</h1>
      <div className="space-y-3 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          Based in the Bay Area. I spend most of my time building products,
          writing code, and exploring what&apos;s next in technology.
        </p>
        <p>
          I studied at{" "}
          <Link
            href="https://berkeley.edu"
            target="_blank"
            className="text-foreground underline decoration-muted-foreground/40 underline-offset-[3px] transition-colors hover:decoration-foreground"
          >
            UC Berkeley
          </Link>
          , where I developed a deep interest in engineering and
          entrepreneurship.
        </p>
        <p>
          Previously, I worked at{" "}
          <Link
            href="https://tesla.com"
            target="_blank"
            className="text-foreground underline decoration-muted-foreground/40 underline-offset-[3px] transition-colors hover:decoration-foreground"
          >
            Tesla
          </Link>{" "}
          and{" "}
          <Link
            href="https://joinhandshake.com"
            target="_blank"
            className="text-foreground underline decoration-muted-foreground/40 underline-offset-[3px] transition-colors hover:decoration-foreground"
          >
            Handshake
          </Link>
          . I care about building things that are useful, well-crafted, and
          simple.
        </p>
      </div>
    </motion.section>
  );
}
