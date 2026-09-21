export interface ProjectStackItem {
  name: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  status: 'completed' | 'in-progress';
  context: string;
  results: string;
  story: string; // segments séparés par '||' : challenge || vision || approche
  stack: string[];
  link?: string;
  image: string;
  gallery: string[];
}
