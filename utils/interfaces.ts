export interface JobDescription {
  title: string;
  company: string;
  companyUrl?: string;
  dateRange: string;
  details: string[];
  techStack: string[];
  active?: boolean;
}

export interface ProjectDescription {
  title: string;
  projectUrl?: string;
  description: string;
  images: { url: string; caption?: string }[];
  techStack: { frontend: string[]; backend: string[] };
}

export interface Note {
  title: string;
  slug: string;
  content: string;
  created?: string;
  updated?: string;
  tags?: string[];
}
