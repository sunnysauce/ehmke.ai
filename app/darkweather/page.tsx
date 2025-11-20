import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DarkWeatherPage() {
  return (
    <div className="container max-w-4xl mx-auto py-20 px-4">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
      <h1 className="text-4xl font-bold mb-4">Dark Weather</h1>
      <p className="text-xl text-muted-foreground mb-8">Chief Technology Officer & Co-founder</p>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg">
          Leading development of a sophisticated weather application with AI integration.
          Created branding guidelines and conceived business strategy with the founder.
        </p>
      </div>
    </div>
  );
}

