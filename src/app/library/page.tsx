import Link from "next/link";
import { ArrowUpRight, BookOpen, Brain, Layout as LayoutIcon } from "lucide-react";

import { Layout } from "@/components/layout";

type LibraryItem = {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const LIBRARY = {
  Education: [
    {
      title: "Data 8 Student Materials",
      description: "Spring 2025 Study Guide & Resources.",
      href: "#",
      icon: BookOpen,
    },
  ],
  Systems: [
    {
      title: "Job Tracker Template",
      description: "A strategic framework for recruitment.",
      href: "#",
      icon: LayoutIcon,
    },
  ],
  Curation: [
    {
      title: "Brainmaxxing",
      description: "Personal knowledge base and reading list.",
      href: "#",
      icon: Brain,
    },
  ],
} satisfies Record<string, LibraryItem[]>;

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
            <p className="text-[13px] text-muted-foreground leading-tight mt-0.5">
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
        {Object.entries(LIBRARY).map(([category, items]) => (
          <section key={category} className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight">{category}</h2>
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

