import fs from 'fs/promises';
import path from 'path';

export async function writeReadme(content: string) {
  const outputPath = path.join(process.cwd(), 'README.md');
  await fs.writeFile(outputPath, content, 'utf-8');
}
