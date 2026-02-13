import fs from 'fs';
import path from 'path';

// Types for the portfolio data
export interface ProfileLinks {
  github: string;
  linkedin: string;
  scholar: string;
  website: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone?: string;
  links: ProfileLinks;
  location: string;
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
  paper?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  role: string;
  outcomes: string;
  links: ProjectLinks;
  image: string;
  featured: boolean;
  date?: string;
}

export interface Experience {
  id: string;
  role: string;
  org: string;
  dates: string;
  highlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  dates: string;
  location: string;
  gpa?: string;
  coursework?: string[];
}

export interface PublicationLinks {
  paper?: string;
  code?: string;
  slides?: string;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: number;
  authors: string;
  links: PublicationLinks;
}

export interface Award {
  id: string;
  title: string;
  description: string;
  year: number | null;
}

export interface Skills {
  research: string[];
  engineering: string[];
  tools: string[];
}

export interface PortfolioData {
  profile: Profile;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  publications: Publication[];
  awards: Award[];
  skills: Skills;
}

// Cache for parsed data
let cachedData: PortfolioData | null = null;

/**
 * Loads and parses portfolio data from the info directory
 * Memoized to avoid repeated FS reads
 */
export function getPortfolioData(): PortfolioData {
  if (cachedData) {
    return cachedData;
  }

  const dataPath = path.join(process.cwd(), 'info', 'data.json');

  try {
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    const parsed = JSON.parse(rawData);
    // Ensure arrays exist even if not in JSON
    cachedData = {
      ...parsed,
      education: parsed.education || [],
      awards: parsed.awards || [],
      publications: parsed.publications || [],
    } as PortfolioData;
  } catch (error) {
    console.error('Error reading portfolio data:', error);
    cachedData = getDefaultData();
  }

  return cachedData;
}

/**
 * Returns default portfolio data structure
 */
function getDefaultData(): PortfolioData {
  return {
    profile: {
      name: 'Your Name',
      title: 'AI Researcher',
      tagline: 'Building the future with AI',
      bio: 'Add your bio here.',
      email: 'email@example.com',
      links: {
        github: '',
        linkedin: '',
        scholar: '',
        website: '',
      },
      location: 'City, Country',
    },
    projects: [],
    experience: [],
    education: [],
    publications: [],
    awards: [],
    skills: {
      research: [],
      engineering: [],
      tools: [],
    },
  };
}

/**
 * Get featured projects only
 */
export function getFeaturedProjects(): Project[] {
  const data = getPortfolioData();
  return data.projects.filter((p) => p.featured);
}

/**
 * Get all unique tags from projects
 */
export function getAllTags(): string[] {
  const data = getPortfolioData();
  const tags = new Set<string>();
  data.projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

/**
 * Get projects filtered by tag
 */
export function getProjectsByTag(tag: string): Project[] {
  const data = getPortfolioData();
  if (!tag) return data.projects;
  return data.projects.filter((p) => p.tags.includes(tag));
}

/**
 * Get base URL from environment or fallback
 */
export function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
}
