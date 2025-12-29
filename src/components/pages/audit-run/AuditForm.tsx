"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader, Wand2 } from "lucide-react";
import { generateAiSeoAudit } from "@/ai/flows/generate-ai-seo-audit";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  url: z.string().url({ message: "Please enter a valid URL." }),
});

export default function AuditForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const response = await generateAiSeoAudit({ url: values.url });
      setResult(response.auditResults);
    } catch (error) {
      console.error("Audit failed:", error);
      toast({
        variant: "destructive",
        title: "Audit Failed",
        description: "There was an error running the AI audit. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <Loader className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              {loading ? "Auditing..." : "Run Audit"}
            </Button>
          </CardFooter>
        </form>
      </Form>
      {loading && (
         <CardContent>
            <div className="flex flex-col items-center justify-center gap-4 text-center p-8 border rounded-lg">
                <Loader className="h-8 w-8 animate-spin text-primary" />
                <h3 className="font-semibold">AI Audit in Progress...</h3>
                <p className="text-sm text-muted-foreground">Our AI is analyzing the website. This may take a moment.</p>
            </div>
         </CardContent>
      )}
      {result && (
        <CardContent>
            <Card>
                <CardHeader>
                    <CardTitle>Audit Results</CardTitle>
                </CardHeader>
                <CardContent>
                    <pre className="whitespace-pre-wrap font-sans text-sm">{result}</pre>
                </CardContent>
            </Card>
        </CardContent>
      )}
    </>
  );
}
