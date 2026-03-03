import Hero from "@/src/components/Hero";
import ExperienceTimeline from "@/src/components/ExperienceTimeline";
import ProjectGrid from "@/src/components/ProjectGrid";
import TechStack from "@/src/components/TechStack";
import Footer from "@/src/components/Footer";
import ThemeToggle from "@/src/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ExperienceTimeline />
      <TechStack />
      <ProjectGrid />
      <Footer />

      <ThemeToggle />
    </main>
  )
}
