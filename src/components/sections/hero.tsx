"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Draft copy kept in-file (not rendered). Paste back into JSX when you want it live again.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _HERO_DRAFT_HANDSHAKE_BLURB = `
I currently work at Handshake AI (https://joinhandshake.com/blog/our-team/introducing-handshake-ai/)
as a Strategic Projects Associate.
`.trim();

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// Draft UI kept in-file (not rendered). Uncomment `<Status />` in `Hero` to bring it back.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <div className="space-y-3 text-[15px] leading-relaxed text-muted-foreground">
        <p className="font-medium text-foreground/90">
          I am interested in how organizations use data to scale human opportunity.
        </p>
        <p>
          I am a{" "}
          <Link
            href="https://berkeley.edu"
            target="_blank"
            className="text-foreground underline decoration-muted-foreground/40 underline-offset-[3px] transition-colors hover:decoration-foreground"
          >
            UC Berkeley
          </Link>
          {" "}graduate with a background in data science and AI engineering.
        </p>
        <p>
          During my time at Berkeley, I led{" "}
          <Link
            href="https://www.dssberkeley.org/"
            target="_blank"
            className="text-foreground underline decoration-muted-foreground/40 underline-offset-[3px] transition-colors hover:decoration-foreground"
          >
            Data Science Society at Berkeley
          </Link>
          {" "}and taught{" "}
          <Link
            href="https://data8.org/sp25/"
            target="_blank"
            className="text-foreground underline decoration-muted-foreground/40 underline-offset-[3px] transition-colors hover:decoration-foreground"
          >
            DATA C8: Foundations of Data Science
          </Link>
          . I also previously worked at{" "}
          <Link
            href="https://tesla.com"
            target="_blank"
            className="text-foreground underline decoration-muted-foreground/40 underline-offset-[3px] transition-colors hover:decoration-foreground"
          >
            Tesla
          </Link>
          {" "}focusing on systems reliability. I care about building things that are useful, well-crafted, and
          simple.
        </p>
      </div>
    </motion.section>
  );
}
