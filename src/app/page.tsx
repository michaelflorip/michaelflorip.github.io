import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { Projects } from "@/components/sections/projects";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-24">
      <div className="space-y-14">
        <Hero />
        <Work />
        <Projects />
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </main>
  );
}
