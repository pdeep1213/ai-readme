import fs from 'fs';
import path from 'path';

export interface ProjectData {
    name?: string;
    description?: string;
    scripts?: Record<string, string>;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
}

export async function scanProject(): Promise<ProjectData> {
  const packageJsonPath = path.join(process.cwd(), 'package.json');

  try {
    const data = await fs.promises.readFile(packageJsonPath, 'utf-8');
    const parsed = JSON.parse(data);

    return {
      name: parsed.name,
      description: parsed.description,
      scripts: parsed.scripts,
      dependencies: parsed.dependencies,
      devDependencies: parsed.devDependencies,
    };
  } catch (err) {
    throw new Error('package.json not found or invalid.');
  }
}