import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const architectureData = `
InputAssembler
│
├── WebCrawler (Crawls target site)
├── SERPScraper (Scrapes search results)
└── BrandMonitor (Monitors public mentions)
│
└─► ContextPack (Unified data object for a brand)
    │
    ├─► [Module] Technical SEO
    ├─► [Module] Content & Structure
    ├─► [Module] Brand Authority
    ├─► [Module] Semantic Relevance
    ├─► [Module] User Experience
    ├─► [Module] Competitive Landscape
    └─► [Module] AI Readiness
        │
        └─► OutputSurfaces
            │
            ├── Dashboard (High-level scores)
            ├── Audit Reports (Detailed findings)
            └── Recommendation Engine (Actionable insights)
`;

export default function ArchitecturePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6 font-headline">Frontend System Representation</h1>
      <Card>
        <CardHeader>
          <CardTitle>System Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">
            This is a simplified frontend representation of the Kasparro data pipeline, demonstrating the flow from data assembly to output surfaces.
          </p>
          <div className="bg-card-foreground/5 dark:bg-card-foreground/10 p-4 rounded-md">
            <pre className="font-code text-sm text-foreground/80 overflow-x-auto">
              <code>{architectureData}</code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
