export interface Skill {
  name: string;
  category: string;
  level: string;
  description: string;
  highlights: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  timestamp: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  url?: string;
}
