import Hero from "@/src/components/Hero";
import ExperienceTimeline from "@/src/components/ExperienceTimeline";
import ProjectGrid from "@/src/components/ProjectGrid";
import TechStack from "@/src/components/TechStack";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ExperienceTimeline />
      <TechStack />
      <ProjectGrid />
      <Footer />
    </main>
  )
}
