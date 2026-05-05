# michaelflorip.github.io

A minimalist, high-density personal portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion. Monochrome design, editorial layout, no distractions.

**Live:** [michaelflorip.github.io](https://michaelflorip.github.io)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (zinc theme) |
| Animations | Framer Motion |
| Font | Geist Sans / Geist Mono |
| Deployment | Vercel |

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server supports hot reload — changes to any file under `src/` reflect instantly.

```bash
npm run build   # production build (run this to catch type/lint errors before pushing)
```

---

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — font setup, metadata, body wrapper
│   ├── page.tsx            # Main page — assembles all sections
│   └── globals.css         # Tailwind imports, CSS variables, base styles
└── components/
    ├── ui/                 # shadcn/ui primitives (button, etc.)
    └── sections/
        ├── hero.tsx        # Name, bio paragraphs, Status badge
        ├── work.tsx        # Work history list
        ├── projects.tsx    # 2-column project card grid
        └── footer.tsx      # Copyright line

public/
└── logos/                  # SVG logos used in the Work section
    ├── handshake.svg
    └── tesla.svg
```

---

## How To: Managing the Site

### Updating Your Bio

Open `src/components/sections/hero.tsx`. The bio lives in the three `<p>` tags inside the `<div className="space-y-3 ...">` block. Edit the text directly — links use Next.js `<Link>` with `href`, `target="_blank"`.

### Updating the Status Badge

The "Currently: ..." pill is the `Status` component at the top of `hero.tsx`. Change the text in the single `<span>`:

```tsx
// src/components/sections/hero.tsx
<span className="text-[12px] font-medium tracking-wide text-zinc-500">
  Currently: Building at Handshake   {/* ← edit this */}
</span>
```

The green pulsing dot is always visible. If you want to remove the badge entirely, delete the `<Status />` line inside `Hero`.

---

### Adding or Editing Work Experience

Open `src/components/sections/work.tsx`. All entries live in the `WORK_HISTORY` array near the top of the file.

There are two entry types:

**Single role** (one title at a company):
```ts
{
  type: "single",
  company: "Tesla",
  role: "Software Engineer Intern",
  period: "Summer 2024",
  logo: "/logos/tesla.svg",
  url: "https://tesla.com",
},
```

**Multi role** (multiple titles at the same company, displayed nested):
```ts
{
  type: "multi",
  company: "Handshake",
  logo: "/logos/handshake.svg",
  url: "https://joinhandshake.com",
  roles: [
    { title: "Strategic Projects Associate", period: "2026 – Present" },
    { title: "Software Engineer Intern",     period: "2022 – 2023" },
  ],
},
```

Entries render in the order they appear in the array — keep the most recent at the top. To add a new company, copy either template above and append it to the array.

---

### Adding a New Project

Open `src/components/sections/projects.tsx`. Projects live in the `PROJECTS` array:

```ts
const PROJECTS = [
  {
    title: "Rolodex",
    description: "A modern contact manager for keeping track of your professional network.",
    url: "#",   // ← replace with the live URL
  },
  // add new entries here
] as const;
```

Each entry renders as a card in the 2-column grid automatically. The grid wraps to a single column on mobile. No other changes needed.

---

### Adding a Company Logo

1. Export the logo as an SVG (square viewBox recommended, e.g. `viewBox="0 0 100 100"`).
2. Drop the file into `public/logos/`, e.g. `public/logos/newco.svg`.
3. Reference it in `work.tsx` as `logo: "/logos/newco.svg"`.

Keep logos simple and monochrome (`fill="#1a1a1a"`) so they match the site palette. The logo container is `40×40px` and renders the SVG at `22×22px`.

---

## Deployment

The site is deployed on **Vercel**. Every push to the `main` branch triggers an automatic production deployment — no manual steps needed.

```bash
git add .
git commit -m "your message"
git push origin main   # → Vercel builds and deploys automatically
```

Preview deployments are created for every pull request if you ever want to review changes before they go live.
