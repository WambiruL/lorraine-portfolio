import { getProjectBySlug, projects } from "@/lib/projects";
import { notFound } from "next/navigation";

// Generates static paths for all projects
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: { slug: string };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-ink text-cream">
      {/* Project detail content will be built out per project */}
      <div className="max-w-5xl mx-auto px-6 py-32">
        <p className="font-mono text-moss text-sm tracking-widest uppercase mb-4">
          {project.category} · {project.year}
        </p>
        <h1 className="font-display text-6xl text-cream mb-6">{project.title}</h1>
        <p className="font-body text-sage/70 text-lg max-w-xl">{project.description}</p>
      </div>
    </main>
  );
}
