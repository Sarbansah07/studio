import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AUDIT_MODULES } from "@/lib/constants";

const CoreModules = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            A 360° View of Your AI-Search Performance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform analyzes your brand through seven core modules, providing a holistic understanding of your digital presence.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {AUDIT_MODULES.map((module) => (
              <Card key={module.id} className="p-4 transition-transform hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="rounded-lg bg-secondary p-3">
                    <module.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{module.name}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
             <Card className="p-4 bg-primary/10 flex items-center justify-center text-center transition-transform hover:-translate-y-1 sm:col-start-2 lg:col-start-auto xl:col-start-4">
                <CardTitle className="text-base text-primary">And more to come...</CardTitle>
              </Card>
        </div>
      </div>
    </section>
  );
};

export default CoreModules;
