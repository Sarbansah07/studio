import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Box, FileInput, Layers } from "lucide-react";

const steps = [
  {
    icon: <FileInput className="h-8 w-8 text-primary" />,
    title: "1. Input Assembly",
    description: "We gather data from your site, search engines, and the web."
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "2. Modular Audit",
    description: "Our 7 AI-powered modules analyze every aspect of your brand."
  },
  {
    icon: <Box className="h-8 w-8 text-primary" />,
    title: "3. Output Surfaces",
    description: "Receive actionable insights, scores, and recommendations."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            From Raw Data to Actionable Intelligence
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our pipeline turns complexity into clarity in three simple steps.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-4">
          {steps.map((step, index) => (
            <>
              <Card key={step.title} className="w-full max-w-sm">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  {step.icon}
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="h-8 w-8 text-muted-foreground rotate-90 md:rotate-0" />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
