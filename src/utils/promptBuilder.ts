import { ProjectData } from './fileScanner';

export function buildPrompt(data: ProjectData): string {
  return `
You are an expert technical writer.

Based on the following project metadata, generate a professional README.md with the following sections:
- Project title and description
- Installation
- Usage
- Dependencies



Project metadata:
Name: ${data.name || 'Unknown'}
Description: ${data.description || 'No description'}
Scripts: ${JSON.stringify(data.scripts, null, 2)}
Dependencies: ${Object.keys(data.dependencies || {}).join(', ') || 'None'}
DevDependencies: ${Object.keys(data.devDependencies || {}).join(', ') || 'None'}
`;
}
