export interface JobDescription {
  title: string;
  company: string;
  companyUrl?: string;
  dateRange: string;
  details: string[];
  techStack: string[];
}

export interface ProjectDescription {
  title: string;
  projectUrl?: string;
  description: string;
  images: { url: string; caption?: string }[];
  techStack: { frontend: string[]; backend: string[] };
}
