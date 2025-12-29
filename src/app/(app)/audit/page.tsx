import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function AuditDefaultPage() {
    return (
        <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 text-center p-12">
                <div className="p-4 bg-secondary rounded-full">
                    <ArrowLeft className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Select an Audit Module</h2>
                <p className="text-muted-foreground max-w-sm">
                    Choose one of the seven modules from the sidebar to view detailed scores, insights, and recommendations for your selected brand.
                </p>
            </CardContent>
        </Card>
    )
}
