import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FXAnalyticsPage() {
  return (
    <div className="container max-w-4xl mx-auto py-20 px-4">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
      <h1 className="text-4xl font-bold mb-4">FX Analytics</h1>
      <p className="text-xl text-muted-foreground mb-8">Chief Product Officer & Web Product Manager</p>
      <div className="prose dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Chief Product Officer</h2>
          <p className="text-lg">
            Facilitated a successful company sale and owned the strategy of product/services, websites, & applications.
            Managed cross-functional teams to deliver high-impact features.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Web Product Manager</h2>
          <p className="text-lg">
            Founding member who selected the tech stack and assembled the first development team.
            Oversaw software development for a customer-facing app and internal systems.
          </p>
        </section>
      </div>
    </div>
  );
}

