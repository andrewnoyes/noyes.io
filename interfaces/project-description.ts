export interface ProjectDescription {
  title: string;
  description: string;
  images: { url: string; caption?: string }[];
  techStack: { frontend: string[]; backend: string[] };
}
