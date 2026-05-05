import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { Projects } from "@/components/sections/projects";
import { Footer } from "@/components/sections/footer";
import { Layout } from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="space-y-14">
          <Hero />
          <Work />
          <Projects />
        </div>
        <div className="mt-16">
          <Footer />
        </div>
      </main>
    </Layout>
  );
}
