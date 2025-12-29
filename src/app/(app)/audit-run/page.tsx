import AuditForm from "@/components/pages/audit-run/AuditForm";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AuditRunPage() {
  return (
    <div>
       <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Run AI-SEO Audit</CardTitle>
          <CardDescription>
            Enter a website URL to run a high-level AI-powered SEO audit. This will analyze the site and provide key insights, issues, and recommendations.
          </CardDescription>
        </CardHeader>
        <AuditForm />
       </Card>
    </div>
  );
}
