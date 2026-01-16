import data from './survivalData.json';

export const ASSETS = data.assets;

export interface Checklist {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  supplies?: string[];
  steps: string[];
}

export const CHECKLISTS: Checklist[] = data.checklists as Checklist[];
