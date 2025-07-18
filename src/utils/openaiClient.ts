import { OpenAI } from 'openai';

export async function generateReadmeContent(prompt: string, apiKey: string): Promise<string> {
  const openai = new OpenAI({ apiKey });

  const chat = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  });

  return chat.choices[0].message?.content || '';
}
