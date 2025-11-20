import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AllMySonsPage() {
  return (
    <div className="container max-w-4xl mx-auto py-20 px-4">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
      <h1 className="text-4xl font-bold mb-4">All My Sons</h1>
      <p className="text-xl text-muted-foreground mb-8">Software Development Project Manager</p>
      <div className="prose dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Manager II</h2>
          <p className="text-lg">
            Oversaw software development for the company&apos;s custom CMS and various applications.
            Coordinated between stakeholders and development teams to ensure timely delivery.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Manager I</h2>
          <p className="text-lg">
            Managed application testing, debugging, & team of UAT users.
            Transitioned from sales to support the development team; directed developers abroad.
          </p>
        </section>
      </div>
    </div>
  );
}

