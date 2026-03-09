import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "bbc-news-branding",
    title: "BBC News",
    category: "Visual Journalism",
    year: "2025",
    description: "Graphic design and event branding work produced during a BBC News contract.",
    coverImage: "/images/projects/bbc-cover.png",
    tags: ["Branding", "Infographics", "Editorial", "BBC"],
    featured: true,
  },
  {
    slug: "solara",
    title: "Solara",
    category: "UX/UI",
    year: "2024",
    description: "An AI-powered wellbeing tool designed for students navigating academic pressure.",
    coverImage: "/images/projects/solara-cover.png",
    tags: ["Product Design", "AI", "Wellbeing"],
    featured: true,
  },
  {
    slug: "public-pulse",
    title: "Public Pulse",
    category: "UX/UI",
    year: "2023",
    description: "An AI civic feedback system bridging communities and local government.",
    coverImage: "/images/projects/public-pulse-cover.png",
    tags: ["Product Design", "Civic Tech", "AI"],
    featured: true,
  },
  {
    slug: "flowspace",
    title: "Flowspace",
    category: "UX/UI",
    year: "2026",
    description: "A published productivity tool designed around deep focus and intentional work.",
    coverImage: "/images/projects/flowspace-cover.png",
    tags: ["Product Design", "Productivity"],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
