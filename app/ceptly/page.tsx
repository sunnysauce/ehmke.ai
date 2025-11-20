import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CeptlyPage() {
  return (
    <div className="container max-w-4xl mx-auto py-20 px-4">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
      <h1 className="text-4xl font-bold mb-4">Ceptly</h1>
      <p className="text-xl text-muted-foreground mb-8">CEO & Founder</p>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg">
          Building a SaaS visual ideation tool driving from &quot;concept&quot; to reality. 
          Ceptly addresses a gap in the product development process focusing on true ideation help and requirement creation, aims to reduce direct implementation time.
        </p>
      </div>
    </div>
  );
}

