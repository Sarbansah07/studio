import ModuleSidebar from "@/components/pages/audit/ModuleSidebar";

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-[250px_1fr] gap-8 items-start">
      <ModuleSidebar />
      <div className="min-w-0">{children}</div>
    </div>
  );
}
