import { Command } from 'commander';
import inquirer from 'inquirer';
import dotenv from 'dotenv';
import { main } from './main';

dotenv.config();

async function getApiKey(): Promise<string> {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY;

  const { apiKey } = await inquirer.prompt([
    {
      type: 'input',
      name: 'apiKey',
      message: 'Enter your OpenAI API key:',
      validate: (input) => input ? true : 'API key cannot be empty',
    },
  ]);

  return apiKey;
}

async function cli() {
  const program = new Command();

  program
    .name('ai-readme')
    .description('AI-powered README generator CLI')
    .option('-i, --interactive', 'Run in interactive mode')
    .parse(process.argv);

  const options = program.opts();

  const apiKey = await getApiKey();

  // Pass apiKey and mode to main orchestration
  await main({ apiKey, interactive: options.interactive });
}

cli().catch((err) => {
  console.error('❌ Error:', err);
  process.exit(1);
});
