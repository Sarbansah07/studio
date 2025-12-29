import BrandSelector from "@/components/pages/dashboard/BrandSelector";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Search,
  Network,
  PanelLeft,
  Bot,
  Play,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "/app/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/app/audit", icon: Search, label: "Audit" },
  { href: "/app/architecture", icon: Network, label: "Architecture" },
  { href: "/app/audit-run", icon: Play, label: "Run AI Audit" },
];

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
       <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/app/dashboard"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              >
                <Bot className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Kasparro</span>
              </Link>
              {navItems.map(item => (
                 <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      <div className="relative ml-auto flex-1 md:grow-0">
        <BrandSelector />
      </div>
      <ThemeToggle />
    </header>
  );
}
