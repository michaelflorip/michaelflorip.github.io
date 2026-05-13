"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Rolodex",
    description:
      "A dynamic contact manager for monitoring the health of your professional network.",
    url: "https://myrolodex.vercel.app/",
  },
  {
    title: "Zetavant",
    description:
      "Master mental math through deep-dive analytics and competitive performance tracking.",
    url: "https://zetavant.com/",
  },
  /*
  {
    title: "Univocity",
    description:
      "Tools for university students to collaborate and share resources.",
    url: "#",
  },
  {
    title: "Billinda Tech",
    description:
      "Fintech platform simplifying billing and invoicing for small businesses.",
    url: "#",
  },
  */
] as const;

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2, ease: "easeOut" as const } },
};

const arrowVariants = {
  rest: { x: -6, opacity: 0 },
  hover: { x: 0, opacity: 1, transition: { duration: 0.2, ease: "easeOut" as const } },
};

export function Projects() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight">Projects</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            className="group relative flex flex-col justify-between rounded-xl border bg-card p-4 transition-colors duration-200 hover:bg-muted/50 hover:shadow-sm"
            style={{ transformOrigin: "center" }}
          >
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-semibold">{project.title}</h3>
                <motion.span variants={arrowVariants}>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </motion.span>
              </div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
