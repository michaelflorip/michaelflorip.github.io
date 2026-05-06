import { Coffee, GraduationCap } from "lucide-react";

import { Layout } from "@/components/layout";

const BERKELEY_FORM_URL = "https://forms.gle/XBTz8sTHUr1qPp7h6";
const TIDYCAL_URL = "https://tidycal.com/michaelhflorip/coffee-chat";

type MentorshipRow = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: React.ComponentType<{ className?: string }>;
};

const ROWS: MentorshipRow[] = [
  {
    title: "Berkeley Student Mentorship",
    description: "Free 30-minute sync for current Bears and recent alums.",
    href: BERKELEY_FORM_URL,
    cta: "Verify & Book",
    icon: GraduationCap,
  },
  {
    title: "Professional Coffee Chat",
    description: "30-minute strategic advising session.",
    href: TIDYCAL_URL,
    cta: "Book Session ($40)",
    icon: Coffee,
  },
];

function Row({ row }: { row: MentorshipRow }) {
  const Icon = row.icon;

  return (
    <li>
      <div className="group flex items-center gap-4 rounded-lg px-2 py-2 -mx-2 transition-colors hover:bg-muted/60">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground">
          <Icon className="h-4 w-4" />
        </div>

        <div className="flex flex-1 items-center justify-between gap-2 min-w-0">
          <div className="min-w-0">
            <p className="text-sm font-medium leading-tight text-foreground">
              {row.title}
            </p>
            <p className="text-[13px] text-muted-foreground leading-tight mt-0.5">
              {row.description}
            </p>
          </div>

          <a
            href={row.href}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {row.cta}
          </a>
        </div>
      </div>
    </li>
  );
}

export default function MentorshipPage() {
  return (
    <Layout>
      <main>
        <div className="space-y-6">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            I enjoy helping students and early-career professionals navigate the
            intersection of data science, institutional strategy, and tech
            recruitment.
          </p>

          <ul className="space-y-3">
            {ROWS.map((row) => (
              <Row key={row.title} row={row} />
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}

