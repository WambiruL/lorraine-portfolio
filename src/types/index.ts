export interface Project {
  slug: string;
  title: string;
  category: 'UX/UI' | 'Graphic Design' | 'Branding'| 'Visual Journalism';
  year: string;
  description: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
