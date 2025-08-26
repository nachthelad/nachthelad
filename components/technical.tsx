import { Badge } from "@/components/ui/badge";

export function Technical() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Material-UI",
    "Node.js",
    "Git",
    "Firebase",
    "Vercel",
    "REST APIs",
    "Responsive Design",
    "PWA",
    "MongoDB",
  ];

  return (
    <section className="mb-20">
      <h2 className="text-2xl font-medium text-foreground mb-12">Skills</h2>

      <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="px-4 py-2 text-sm font-normal bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
