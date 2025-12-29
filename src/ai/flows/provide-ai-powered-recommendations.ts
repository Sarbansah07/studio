'use server';
/**
 * @fileOverview This file defines a Genkit flow for providing AI-powered SEO recommendations based on audit results.
 *
 * - provideAiPoweredRecommendations - A function that takes audit results as input and returns AI-generated SEO recommendations.
 * - ProvideAiPoweredRecommendationsInput - The input type for the provideAiPoweredRecommendations function.
 * - ProvideAiPoweredRecommendationsOutput - The return type for the provideAiPoweredRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AuditResultSchema = z.object({
  score: z.number().describe('The score of the audit module.'),
  keyInsights: z.array(z.string()).describe('Key insights from the audit.'),
  issues: z.array(z.string()).describe('Issues or flags raised by the audit.'),
  recommendations: z.array(z.string()).describe('Initial recommendations from the audit.'),
});

const ProvideAiPoweredRecommendationsInputSchema = z.object({
  auditResults: z.record(AuditResultSchema).describe('A record of audit results for different modules.'),
  brandName: z.string().describe('The name of the brand being audited.'),
});
export type ProvideAiPoweredRecommendationsInput = z.infer<typeof ProvideAiPoweredRecommendationsInputSchema>;

const ProvideAiPoweredRecommendationsOutputSchema = z.object({
  aiRecommendations: z.record(z.array(z.string())).describe('AI-generated SEO recommendations for each module.'),
});
export type ProvideAiPoweredRecommendationsOutput = z.infer<typeof ProvideAiPoweredRecommendationsOutputSchema>;

export async function provideAiPoweredRecommendations(input: ProvideAiPoweredRecommendationsInput): Promise<ProvideAiPoweredRecommendationsOutput> {
  return provideAiPoweredRecommendationsFlow(input);
}

const incorporateInsightTool = ai.defineTool({
  name: 'incorporateInsight',
  description: 'This tool is used to determine if a given insight should be incorporated into the SEO recommendations. Call this tool when an audit result contains an insight that can be used to improve recommendations.',
  inputSchema: z.object({
    insight: z.string().describe('The insight to consider.'),
    existingRecommendations: z.array(z.string()).describe('The existing recommendations for the audit module.'),
  }),
  outputSchema: z.boolean().describe('True if the insight should be incorporated, false otherwise.'),
},
async (input) => {
  // Placeholder implementation, replace with actual logic
  // For now, always incorporate the insight
  return true;
});

const generateRecommendationsPrompt = ai.definePrompt({
  name: 'generateRecommendationsPrompt',
  input: {schema: ProvideAiPoweredRecommendationsInputSchema},
  output: {schema: ProvideAiPoweredRecommendationsOutputSchema},
  tools: [incorporateInsightTool],
  prompt: `You are an AI-powered SEO expert providing recommendations based on audit results.

  You will generate a list of recommendations for each module, incorporating key insights where appropriate.
  You can use the incorporateInsight tool to help you decide if an insight should be included in the final recommendations.

  Brand Name: {{{brandName}}}

  Audit Results:
  {{#each (Object.keys auditResults) as |moduleName|}}
    Module: {{moduleName}}
    Score: {{auditResults.[moduleName].score}}
    Key Insights:
    {{#each auditResults.[moduleName].keyInsights}}
      - {{this}}
    {{/each}}
    Issues:
    {{#each auditResults.[moduleName].issues}}
      - {{this}}
    {{/each}}
    Recommendations:
    {{#each auditResults.[moduleName].recommendations}}
      - {{this}}
    {{/each}}
  {{/each}}
  `,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const provideAiPoweredRecommendationsFlow = ai.defineFlow(
  {
    name: 'provideAiPoweredRecommendationsFlow',
    inputSchema: ProvideAiPoweredRecommendationsInputSchema,
    outputSchema: ProvideAiPoweredRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await generateRecommendationsPrompt(input);
    return output!;
  }
);
