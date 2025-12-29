import type { LucideIcon } from "lucide-react";

export type Brand = {
  id: string;
  name: string;
  logo: string;
};

export type DashboardData = {
  brandId: string;
  aiVisibilityScore: number;
  trustScore: number;
  keywordCoverage: number;
  lastAudit: string;
};

export type AuditModuleId = 'technical-seo' | 'content-structure' | 'brand-authority' | 'semantic-relevance' | 'user-experience' | 'competitive-landscape' | 'ai-readiness';

export type AuditModuleInfo = {
  id: AuditModuleId;
  name: string;
  description: string;
  icon: LucideIcon;
  iconName: string;
};

export type AuditData = {
  brandId: string;
  moduleId: AuditModuleId;
  score: number;
  keyInsights: string[];
  issues: string[];
  recommendations: string[];
};

export type ArchitectureComponent = {
  name: string;
  description:string;
  subcomponents?: ArchitectureComponent[];
}
