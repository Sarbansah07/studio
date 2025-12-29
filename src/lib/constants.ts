import type { AuditModuleInfo } from "@/lib/types";
import {
  Cog,
  FileText,
  ShieldCheck,
  BrainCircuit,
  Users,
  Telescope,
  Bot,
} from "lucide-react";

export const APP_NAME = "Kasparro";

export const PUBLIC_ROUTES = [
  { name: "Platform", href: "/platform" },
  { name: "About", href: "/about" },
];

export const APP_ROUTES = [
  { name: "Dashboard", href: "/app/dashboard", icon: "LayoutDashboard" },
  { name: "Audit", href: "/app/audit", icon: "Search" },
  { name: "Architecture", href: "/app/architecture", icon: "Network" },
  { name: "Run AI Audit", href: "/app/audit-run", icon: "Play" },
];

export const AUDIT_MODULES: AuditModuleInfo[] = [
  {
    id: "technical-seo",
    name: "Technical SEO",
    description: "Crawling, indexing, and performance analysis.",
    icon: Cog,
    iconName: "Cog",
  },
  {
    id: "content-structure",
    name: "Content & Structure",
    description: "On-page elements, schema, and content hierarchy.",
    icon: FileText,
    iconName: "FileText",
  },
  {
    id: "brand-authority",
    name: "Brand Authority",
    description: "Trust signals, E-E-A-T, and backlink profile.",
    icon: ShieldCheck,
    iconName: "ShieldCheck",
  },
  {
    id: "semantic-relevance",
    name: "Semantic Relevance",
    description: "Entity analysis and topic modeling.",
    icon: BrainCircuit,
    iconName: "BrainCircuit",
  },
  {
    id: "user-experience",
    name: "User Experience",
    description: "Core Web Vitals and user engagement metrics.",
    icon: Users,
    iconName: "Users",
  },
  {
    id: "competitive-landscape",
    name: "Competitive Landscape",
    description: "Analysis of competitors in the AI search space.",
    icon: Telescope,
    iconName: "Telescope",
  },
  {
    id: "ai-readiness",
    name: "AI Readiness",
    description: "How well the content is optimized for AI consumption.",
    icon: Bot,
    iconName: "Bot",
  },
];
