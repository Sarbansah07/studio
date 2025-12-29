"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AUDIT_MODULES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function ModuleSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block">
      <nav className="grid gap-1">
        <h3 className="px-4 py-2 text-sm font-semibold text-muted-foreground">Audit Modules</h3>
        {AUDIT_MODULES.map((module) => (
          <Link
            key={module.id}
            href={`/app/audit/${module.id}`}
            className={cn(
              "flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary",
              pathname === `/app/audit/${module.id}`
                ? "bg-accent text-primary font-semibold"
                : ""
            )}
          >
            <module.icon className="h-4 w-4" />
            {module.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
