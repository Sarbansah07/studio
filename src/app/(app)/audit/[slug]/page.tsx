import { notFound } from "next/navigation";
import { auditData, brands } from "@/lib/data";
import { AUDIT_MODULES } from "@/lib/constants";
import type { AuditData, Brand, AuditModuleInfo } from "@/lib/types";
import ModuleDetails from "@/components/pages/audit/ModuleDetails";

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  AUDIT_MODULES.forEach((module) => {
    params.push({ slug: module.id });
  });
  return params;
}

const getModuleData = (
  slug: string,
  brandId: string
): { moduleInfo: Omit<AuditModuleInfo, 'icon'>; moduleAuditData: AuditData; brand: Brand } | null => {
  const moduleInfo = AUDIT_MODULES.find((m) => m.id === slug);
  const moduleAuditData = auditData.find(
    (d) => d.moduleId === slug && d.brandId === brandId
  );
  const brand = brands.find((b) => b.id === brandId);

  if (!moduleInfo || !moduleAuditData || !brand) {
    return null;
  }
  
  const { icon, ...rest } = moduleInfo;

  return { moduleInfo: rest, moduleAuditData, brand };
};

export default function AuditModulePage({ params }: { params: { slug: string } }) {
  // Since we can't access context in a server component, we'll pass all data
  // for both brands to the client component, which will then filter based on context.
  // This is a tradeoff for this mocked-data assignment.
  // In a real app, we'd fetch data based on the authenticated user's selected brand.
  
  const acmeData = getModuleData(params.slug, 'acme');
  const globexData = getModuleData(params.slug, 'globex');

  if (!acmeData || !globexData) {
    notFound();
  }

  const allData = {
    acme: acmeData,
    globex: globexData,
  }

  return <ModuleDetails allData={allData} />;
}
