import { Header } from "@/components/header";
import { ProjectsMobile } from "@/components/projects-mobile";
import { ProjectsDesktop } from "@/components/projects-desktop";
import { Technical } from "@/components/technical";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <Header />
        <ProjectsMobile />
        <ProjectsDesktop />
        <Technical />
        <Contact />
      </div>
    </div>
  );
}
