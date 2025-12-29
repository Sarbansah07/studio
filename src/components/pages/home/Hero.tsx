import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");

  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
       {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover object-center opacity-10"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="container relative text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          AI-Native SEO for the AI-First Era
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
          Kasparro is an AI-native SEO & Brand Intelligence platform designed to help you dominate in the new age of search with ChatGPT, Gemini, and Perplexity.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/app/audit-run">
              Run Free AI-SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/platform">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
