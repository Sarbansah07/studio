import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

const platformSections = [
  {
    title: "What Data Kasparro Consumes",
    description: "Our Input Assembler gathers a comprehensive dataset to build a holistic view of your brand.",
    items: ["Your website content & structure", "Public web data & social mentions", "Search engine result pages (SERPs)", "Competitor digital assets"]
  },
  {
    title: "What Outputs Brands Receive",
    description: "The platform delivers clear, actionable intelligence, not just data dumps.",
    items: ["AI Visibility & Trust Scores", "Module-specific insights & flags", "Prioritized recommendations", "Competitive landscape analysis"]
  }
];

const differenceData = {
  traditional: ["Keyword ranking reports", "Backlink quantity metrics", "On-page SEO checklists", "Manual competitor analysis"],
  kasparro: ["AI search answer optimization", "E-E-A-T & Trust signal analysis", "Semantic relevance modeling", "Automated brand perception audits"]
}

const PlatformPage = () => {
  const pipelineImage = PlaceHolderImages.find((img) => img.id === "pipeline");

  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          The Kasparro Architecture
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Built from the ground up for the AI-first search era, our platform translates vast amounts of data into strategic brand intelligence.
        </p>
      </div>

      <Card className="mt-12 overflow-hidden">
        <CardHeader>
          <CardTitle>The Audit Pipeline</CardTitle>
          <CardDescription>From data ingestion to actionable output, our process is systematic and transparent.</CardDescription>
        </CardHeader>
        <CardContent>
          {pipelineImage && (
            <div className="relative aspect-[2/1] w-full">
              <Image
                src={pipelineImage.imageUrl}
                alt={pipelineImage.description}
                fill
                className="rounded-lg object-cover"
                data-ai-hint={pipelineImage.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-around p-4 text-white">
                <div className="text-center">
                  <h3 className="font-bold text-lg md:text-xl">INPUT</h3>
                  <p className="text-xs md:text-sm">Web & SERP Data</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg md:text-xl">MODULES</h3>
                  <p className="text-xs md:text-sm">7-Layer Analysis</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg md:text-xl">OUTPUT</h3>
                  <p className="text-xs md:text-sm">Scores & Insights</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {platformSections.map(section => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.items.map(item => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight">How Kasparro is Different</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="text-destructive">Traditional SEO Tools</CardTitle>
              <CardDescription>Focus on legacy metrics and manual processes.</CardDescription>
            </CardHeader>
            <CardContent>
               <ul className="space-y-2 text-muted-foreground">
                {differenceData.traditional.map(item => <li key={item}>{item}</li>)}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-primary/50">
            <CardHeader>
              <CardTitle className="text-primary">{APP_NAME}</CardTitle>
              <CardDescription>Focus on AI-native signals and brand intelligence.</CardDescription>
            </CardHeader>
            <CardContent>
               <ul className="space-y-2">
                {differenceData.kasparro.map(item => (
                   <li key={item} className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlatformPage;
