import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, LineChart, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Generative Ranking Factors",
    description: "Traditional SEO focuses on keywords and links. AI-SEO optimizes for E-E-A-T, semantic relevance, and brand authority to win in generative AI answers."
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "Proactive Brand Intelligence",
    description: "Instead of just tracking ranks, Kasparro audits your entire digital presence to understand how AI perceives your brand, identifying threats and opportunities."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Future-Proof Your Strategy",
    description: "The search landscape is changing. We provide the tools and insights to ensure your brand remains visible and authoritative in an AI-first world."
  }
];

const WhyAiseo = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            A New Era of Search Demands a New Approach
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            AI is rewriting the rules of search. What worked yesterday won't work tomorrow.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                {feature.icon}
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription className="px-4">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAiseo;
