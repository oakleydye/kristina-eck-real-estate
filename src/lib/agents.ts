import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

const agentsDirectory = path.join(process.cwd(), 'content/agents');

export interface Agent {
  slug: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  order: number;
}

export const getAllAgents = cache((): Agent[] => {
  try {
    const fileNames = fs.readdirSync(agentsDirectory);
    const agents = fileNames
      .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.(md|mdx)$/, '');
        const fullPath = path.join(agentsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          name: data.name || 'Team Member',
          title: data.title || 'Real Estate Agent',
          photo: data.photo || '',
          bio: content.trim(),
          order: data.order ?? 99,
        } satisfies Agent;
      })
      .sort((a, b) => a.order - b.order);

    return agents;
  } catch {
    return [];
  }
});
