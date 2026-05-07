import Link from "next/link";
import { Activity, Airplay, ArrowUpRight, BookOpen, Briefcase } from "lucide-react";

import { Layout } from "@/components/layout";

type LibraryItem = {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const KICKSTARTING_YOUR_CAREER_SLIDES_URL =
  "https://docs.google.com/presentation/d/REPLACE_ME/edit?usp=sharing";

const LIBRARY_SECTIONS: { category: string; items: LibraryItem[] }[] = [
  {
    category: "Academic Resources",
    items: [
      {
        title: "Data 8 Student Materials",
        description: "Weekly discussion section slide decks from Spring 2025.",
        href: "https://michaelflorip.notion.site/data8-sp25",
        icon: BookOpen,
      },
      {
        title: "Kickstarting Your Career",
        description:
          "A strategic guide to navigating imposter syndrome, job boards, and the data science recruitment landscape.",
        href: KICKSTARTING_YOUR_CAREER_SLIDES_URL,
        icon: Airplay,
      },
    ],
  },
  {
    category: "Career Tools",
    items: [
      {
        title: "Job Tracker Template",
        description: "A Google Sheet to keep track of your job applications and progress.",
        href: "https://docs.google.com/spreadsheets/d/1qjiChS0MA6ly0MUnwqLdEC51BtibXjuFvJE0fSGcvho/edit?usp=sharing",
        icon: Briefcase,
      },
    ],
  },
  {
    category: "Performance",
    items: [
      {
        title: "Brainmaxxing",
        description: "Daily micro-drills for focus, recall, and deliberate skill stacking.",
        href: "https://michaelflorip.notion.site/brainmaxxing",
        icon: Activity,
      },
    ],
  },
];

function ResourceRow({ item }: { item: LibraryItem }) {
  const Icon = item.icon;

  return (
    <li>
      <Link
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-lg px-2 py-2 -mx-2 transition-colors hover:bg-muted/60"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground">
          <Icon className="h-4 w-4" />
        </div>

        <div className="flex flex-1 items-center justify-between gap-2 min-w-0">
          <div className="min-w-0">
            <p className="text-sm font-medium leading-tight text-foreground">
              {item.title}
            </p>
            <p className="text-sm text-muted-foreground leading-snug mt-1">
              {item.description}
            </p>
          </div>

          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
        </div>
      </Link>
    </li>
  );
}

export default function LibraryPage() {
  return (
    <Layout>
      <main className="space-y-14">
        {LIBRARY_SECTIONS.map(({ category, items }) => (
          <section key={category} className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight border-b border-border pb-3">
              {category}
            </h2>
            <ul className="space-y-3">
              {items.map((item) => (
                <ResourceRow key={item.title} item={item} />
              ))}
            </ul>
          </section>
        ))}
      </main>
    </Layout>
  );
}
