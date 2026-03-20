import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material-UI"],
  },
  {
    label: "Backend & DB",
    skills: ["Node.js", "MongoDB", "Firebase"],
  },
  {
    label: "Tools",
    skills: ["Git", "Vercel", "REST APIs"],
  },
  {
    label: "Otros",
    skills: ["PWA", "Responsive Design"],
  },
];

export function Technical() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-medium text-foreground mb-12">Skills</h2>

      <div className="space-y-6 max-w-2xl mx-auto">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-widest mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-normal bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
