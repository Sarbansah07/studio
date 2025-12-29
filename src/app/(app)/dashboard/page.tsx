"use client";

import { useDashboard } from "@/contexts/DashboardProvider";
import { dashboardData } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bot, ShieldCheck, Percent, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const SnapshotCard = ({
  title,
  value,
  icon: Icon,
  suffix = "",
}: {
  title: string;
  value: string | number;
  icon: React.ElementType;
  suffix?: string;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">
        {value}
        {suffix}
      </div>
    </CardContent>
  </Card>
);

export default function DashboardPage() {
  const { selectedBrand } = useDashboard();
  const data = dashboardData.find((d) => d.brandId === selectedBrand.id);

  if (!data) {
    return (
      <div className="flex h-full items-center justify-center">
        <p>No data available for {selectedBrand.name}.</p>
      </div>
    );
  }

  const lastAuditRelative = formatDistanceToNow(new Date(data.lastAudit), {
    addSuffix: true,
  });

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <SnapshotCard
        title="AI Visibility Score"
        value={data.aiVisibilityScore}
        icon={Bot}
      />
      <SnapshotCard
        title="Trust / E-E-A-T Score"
        value={data.trustScore}
        icon={ShieldCheck}
      />
      <SnapshotCard
        title="Non-Branded Keyword Coverage"
        value={data.keywordCoverage}
        icon={Percent}
        suffix="%"
      />
      <SnapshotCard
        title="Last Audit"
        value={lastAuditRelative}
        icon={Clock}
      />
    </div>
  );
}
