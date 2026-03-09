import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "solara",
    title: "Solara",
    category: "UX/UI",
    year: "2024",
    description: "An AI-powered wellbeing tool designed for students navigating academic pressure.",
    coverImage: "/images/projects/solara-cover.jpg",
    tags: ["Product Design", "AI", "Wellbeing"],
    featured: true,
  },
  {
    slug: "public-pulse",
    title: "Public Pulse",
    category: "UX/UI",
    year: "2024",
    description: "An AI civic feedback system bridging communities and local government.",
    coverImage: "/images/projects/public-pulse-cover.jpg",
    tags: ["Product Design", "Civic Tech", "AI"],
    featured: true,
  },
  {
    slug: "flowspace",
    title: "Flowspace",
    category: "UX/UI",
    year: "2024",
    description: "A published productivity tool designed around deep focus and intentional work.",
    coverImage: "/images/projects/flowspace-cover.jpg",
    tags: ["Product Design", "Productivity"],
    featured: true,
  },
  {
    slug: "bbc-news-branding",
    title: "BBC News — Event Branding",
    category: "Graphic Design",
    year: "2023",
    description: "Graphic design and event branding work produced during a BBC News contract.",
    coverImage: "/images/projects/bbc-cover.jpg",
    tags: ["Branding", "Editorial", "BBC"],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
