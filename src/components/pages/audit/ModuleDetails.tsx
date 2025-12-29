"use client";

import { useState } from 'react';
import { useDashboard } from "@/contexts/DashboardProvider";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Lightbulb, AlertTriangle, CheckCircle, Bot, Loader } from "lucide-react";
import type { AuditData, Brand, AuditModuleInfo } from "@/lib/types";
import { provideAiPoweredRecommendations } from "@/ai/flows/provide-ai-powered-recommendations";
import { useToast } from "@/hooks/use-toast";


type ModuleDetailsProps = {
  allData: {
    acme: { moduleInfo: AuditModuleInfo; moduleAuditData: AuditData; brand: Brand; };
    globex: { moduleInfo: AuditModuleInfo; moduleAuditData: AuditData; brand: Brand; };
  }
}

export default function ModuleDetails({ allData }: ModuleDetailsProps) {
  const { selectedBrand } = useDashboard();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [aiRecommendations, setAiRecommendations] = useState<string[] | null>(null);

  const data = allData[selectedBrand.id as keyof typeof allData];

  if (!data) return null;

  const { moduleInfo, moduleAuditData } = data;

  const handleGenerateRecommendations = async () => {
    setLoading(true);
    setAiRecommendations(null);
    try {
      const input = {
        auditResults: {
          [moduleInfo.id]: {
            score: moduleAuditData.score,
            keyInsights: moduleAuditData.keyInsights,
            issues: moduleAuditData.issues,
            recommendations: moduleAuditData.recommendations,
          },
        },
        brandName: selectedBrand.name,
      };
      
      const result = await provideAiPoweredRecommendations(input);
      const newRecs = result.aiRecommendations[moduleInfo.id];
      if (newRecs && newRecs.length > 0) {
        setAiRecommendations(newRecs);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "AI could not generate new recommendations.",
        });
      }
    } catch (error) {
      console.error("Failed to generate AI recommendations:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate AI recommendations. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const scoreColorClass = moduleAuditData.score > 80 ? "bg-chart-2" : moduleAuditData.score > 60 ? "bg-chart-4" : "bg-destructive";
  const scoreTextColorClass = moduleAuditData.score > 80 ? "text-chart-2" : moduleAuditData.score > 60 ? "text-chart-4" : "text-destructive";

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <moduleInfo.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">{moduleInfo.name}</CardTitle>
              <CardDescription>{moduleInfo.description}</CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-2">
                <span className={`text-2xl font-bold ${scoreTextColorClass}`}>{moduleAuditData.score}</span>
                <span className="text-sm text-muted-foreground">/ 100</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={moduleAuditData.score} indicatorClassName={scoreColorClass} />
        </CardContent>
      </Card>

      <Accordion type="multiple" defaultValue={['insights', 'issues', 'recommendations']} className="w-full space-y-4">
        <Card>
          <AccordionItem value="insights" className="border-b-0">
            <AccordionTrigger className="p-6">
              <div className="flex items-center gap-3">
                <Lightbulb className="h-5 w-5 text-chart-4" />
                <h3 className="font-semibold">Key Insights</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6">
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {moduleAuditData.keyInsights.map((insight, i) => <li key={i}>{insight}</li>)}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Card>
        
        <Card>
          <AccordionItem value="issues" className="border-b-0">
            <AccordionTrigger className="p-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <h3 className="font-semibold">Issues / Flags</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6">
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {moduleAuditData.issues.map((issue, i) => <li key={i}>{issue}</li>)}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Card>

        <Card>
          <AccordionItem value="recommendations" className="border-b-0">
            <AccordionTrigger className="p-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-chart-2" />
                <h3 className="font-semibold">Recommendations</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-4">
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {(aiRecommendations ?? moduleAuditData.recommendations).map((rec, i) => <li key={i}>{rec}</li>)}
                </ul>
                <div className="flex items-center justify-between rounded-lg border bg-secondary/50 p-4">
                  <div>
                    <h4 className="font-semibold flex items-center gap-2"><Bot className="h-5 w-5 text-primary" /> AI-Powered Recommendations</h4>
                    <p className="text-sm text-muted-foreground">Get enhanced recommendations from our AI engine.</p>
                  </div>
                  <Button onClick={handleGenerateRecommendations} disabled={loading}>
                    {loading ? <Loader className="h-4 w-4 animate-spin" /> : "Generate"}
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Card>

      </Accordion>
    </div>
  );
}
