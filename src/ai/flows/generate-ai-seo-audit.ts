'use server';

/**
 * @fileOverview An AI-powered SEO audit flow.
 *
 * - generateAiSeoAudit - A function that initiates the AI-powered SEO audit.
 * - GenerateAiSeoAuditInput - The input type for the generateAiSeoAudit function.
 * - GenerateAiSeoAuditOutput - The return type for the generateAiSeoAudit function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAiSeoAuditInputSchema = z.object({
  url: z.string().url().describe('The URL of the website to audit.'),
});
export type GenerateAiSeoAuditInput = z.infer<typeof GenerateAiSeoAuditInputSchema>;

const GenerateAiSeoAuditOutputSchema = z.object({
  auditResults: z.string().describe('The results of the AI-powered SEO audit.'),
});
export type GenerateAiSeoAuditOutput = z.infer<typeof GenerateAiSeoAuditOutputSchema>;

export async function generateAiSeoAudit(input: GenerateAiSeoAuditInput): Promise<GenerateAiSeoAuditOutput> {
  return generateAiSeoAuditFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAiSeoAuditPrompt',
  input: {schema: GenerateAiSeoAuditInputSchema},
  output: {schema: GenerateAiSeoAuditOutputSchema},
  prompt: `You are an AI-powered SEO auditor. Analyze the website at the given URL and provide a detailed SEO audit report.

URL: {{{url}}}

Include key insights, issues/flags, and recommendations for improving the website's SEO performance. Focus on areas relevant to AI-first search engines.
`,
});

const generateAiSeoAuditFlow = ai.defineFlow(
  {
    name: 'generateAiSeoAuditFlow',
    inputSchema: GenerateAiSeoAuditInputSchema,
    outputSchema: GenerateAiSeoAuditOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
