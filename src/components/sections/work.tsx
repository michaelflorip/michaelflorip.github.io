"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Role = { title: string; period: string };

type WorkEntry =
  | { type: "single"; company: string; role: string; period: string; logo: string; url: string }
  | { type: "multi"; company: string; roles: Role[]; logo: string; url: string };

const WORK_HISTORY: WorkEntry[] = [
  {
    type: "multi",
    company: "Handshake",
    logo: "/logos/handshake.svg",
    url: "https://joinhandshake.com",
    roles: [
      { title: "Strategic Projects Associate", period: "2026 – Present" },
      { title: "Software Engineer Intern", period: "2022 – 2023" },
    ],
  },
  {
    type: "single",
    company: "Tesla",
    role: "Software Engineer Intern",
    period: "Summer 2024",
    logo: "/logos/tesla.svg",
    url: "https://tesla.com",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.15,
      staggerChildren: 0.08,
      delayChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function Work() {
  return (
    <motion.section
      className="space-y-4"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-lg font-semibold tracking-tight">Work</h2>
      <ul className="space-y-3">
        {WORK_HISTORY.map((item) =>
          item.type === "single" ? (
            <motion.li key={item.company} variants={itemVariants}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg px-2 py-2 -mx-2 transition-colors hover:bg-muted/60"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border bg-white">
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-1 items-center justify-between gap-2 min-w-0">
                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-tight">{item.company}</p>
                    <p className="text-[13px] text-muted-foreground leading-tight mt-0.5">
                      {item.role}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                    {item.period}
                  </span>
                </div>
              </a>
            </motion.li>
          ) : (
            <motion.li key={item.company} variants={itemVariants}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-lg px-2 py-2 -mx-2 transition-colors hover:bg-muted/60"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border bg-white mt-0.5">
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-1 min-w-0 flex-col gap-1.5">
                  <p className="text-sm font-medium leading-tight">{item.company}</p>
                  <ul className="space-y-1">
                    {item.roles.map((role, i) => (
                      <li key={role.title} className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className={`h-[5px] w-[5px] shrink-0 rounded-full ${i === 0 ? "bg-zinc-400" : "bg-zinc-300"}`} />
                          <span className="text-[13px] text-muted-foreground leading-tight truncate">
                            {role.title}
                          </span>
                        </div>
                        <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                          {role.period}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </motion.li>
          )
        )}
      </ul>
    </motion.section>
  );
}
