import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Lightbulb, Target, Telescope } from "lucide-react";

const aboutContent = [
    {
        icon: <Target className="h-6 w-6 text-primary" />,
        title: "Our Mission",
        text: "To empower brands with the intelligence and tools required to thrive in the AI-first search era. We believe the future of brand discovery lies in how AI systems perceive and represent information, and our mission is to make that process transparent and navigable."
    },
    {
        icon: <Lightbulb className="h-6 w-6 text-primary" />,
        title: "Product Philosophy",
        text: "We build systems, not just features. Our product philosophy is rooted in first-principles thinking about how large language models and generative AI consume, process, and synthesize information. We prioritize clarity, systematic design, and actionable insights over vanity metrics."
    },
    {
        icon: <Telescope className="h-6 w-6 text-primary" />,
        title: "Vision for AI-First Search",
        text: "We envision a future where 'search' is a continuous, conversational dialogue with AI agents. In this world, brand authority and semantic relevance are paramount. Our vision is to be the foundational intelligence layer that helps brands build trust and authority directly with these AI systems."
    }
]

const AboutPage = () => {
  const missionImage = PlaceHolderImages.find((img) => img.id === "about-mission");

  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Engineers and Product Thinkers Building for a New Web
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We are a team of builders passionate about the intersection of AI, search, and brand intelligence.
        </p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
            {aboutContent.map(section => (
                <Card key={section.title} className="bg-transparent border-none shadow-none">
                    <CardHeader className="flex flex-row items-center gap-4 p-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                          {section.icon}
                        </div>
                        <CardTitle>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-4">
                        <p className="text-muted-foreground">{section.text}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
        <div className="flex items-center justify-center">
          {missionImage && (
            <Image
              src={missionImage.imageUrl}
              alt={missionImage.description}
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-lg"
              data-ai-hint={missionImage.imageHint}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
