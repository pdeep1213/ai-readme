import { scanProject } from './utils/fileScanner';
import { buildPrompt } from './utils/promptBuilder';
import { generateReadmeContent } from './utils/openaiClient';
import { writeReadme } from './utils/markdownWriter';

interface MainOptions {
  apiKey: string;
  interactive?: boolean;
}


export async function main(options: MainOptions) {
  console.log("🧠 Scanning project...");

  const projectData = await scanProject();

  console.log("📄 Building prompt...");
  const prompt = buildPrompt(projectData);

  console.log("🤖 Calling OpenAI...");
  const readmeContent = await generateReadmeContent(prompt, options.apiKey);

  console.log("📝 Writing README.md...");
  await writeReadme(readmeContent);

  console.log("✅ README.md successfully generated!");
}

