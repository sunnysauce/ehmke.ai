import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { SocialLinks } from "@/components/ui/social-links";
import { ShareButton } from "@/components/ui/share-button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-28">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Michael Ehmke</h1>
          <h2 className="text-2xl mb-6">Chief Product Officer at FX Analytics</h2>
          <p className="text-lg max-w-2xl mb-8">
            Driving product strategy and innovation in data analytics solutions that empower businesses to make informed decisions.
          </p>
          <div className="flex gap-4">
            {/* 
            <Button asChild size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            */}
            <Button variant="secondary" size="lg" asChild>
              <Link href="https://linkedin.com/in/michaelehmke" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                As the Chief Product Officer at FX Analytics, I lead the product vision, 
                strategy, and execution for our data analytics SaaS platform. With a passion 
                for creating intuitive, powerful solutions, I help organizations transform 
                their data into actionable insights.
              </p>
              <p className="text-lg">
                My approach combines deep technical understanding with user-centered design 
                principles to deliver products that solve real business problems.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Core Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    Product Strategy & Roadmapping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    Data Analytics & Visualization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    SaaS Product Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    Cross-functional Leadership
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    User Experience Design
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* 
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>FX Analytics Dashboard</CardTitle>
                <CardDescription>Enterprise data visualization platform</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="bg-slate-100 rounded-md h-48 mb-4 flex items-center justify-center">
                  <p className="text-slate-400">Dashboard Screenshot</p>
                </div>
                <p>
                  Led the redesign of our flagship analytics dashboard, resulting in a 40% 
                  improvement in user engagement and 25% reduction in time-to-insight.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex w-full gap-2">
                  <Button variant="outline" className="flex-1">View Case Study</Button>
                  <ShareButton 
                    title="FX Analytics Dashboard" 
                    description="Enterprise data visualization platform by Michael Ehmke"
                  />
                </div>
              </CardFooter>
            </Card>
            
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Data Integration Framework</CardTitle>
                <CardDescription>Enterprise data connector suite</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="bg-slate-100 rounded-md h-48 mb-4 flex items-center justify-center">
                  <p className="text-slate-400">Architecture Diagram</p>
                </div>
                <p>
                  Architected a flexible data integration framework that reduced customer 
                  onboarding time from weeks to days and expanded our integration capabilities by 300%.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex w-full gap-2">
                  <Button variant="outline" className="flex-1">View Details</Button>
                  <ShareButton 
                    title="Data Integration Framework" 
                    description="Enterprise data connector suite by Michael Ehmke"
                  />
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      */}

      {/* Combined Experience and Contact Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Experience Section */}
          <div id="experience">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Chief Product Officer</CardTitle>
                <CardDescription>FX Analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Leading product strategy and development for a cutting-edge data analytics 
                  SaaS platform that helps businesses derive meaningful insights from complex data.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developing and executing the product roadmap aligned with business objectives</li>
                  <li>Managing cross-functional teams to deliver innovative solutions</li>
                  <li>Driving user-centered design and continuous product improvement</li>
                  <li>Collaborating with customers to ensure product-market fit</li>
                </ul>
              </CardContent>
            </Card>
            {/* Additional experience cards can be added here */}
          </div>

          {/* Contact Section */}
          <div id="contact">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <Card>
              <CardContent >
                <p className="mb-6">
                  Interested in discussing potential 
                  collaborations?<br />
                  Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p>michael@ehmke.ai</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                    <Link href="https://www.linkedin.com/in/michaelehmke/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/michaelehmke
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Connect With Me</h3>
                    <SocialLinks />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* 
      <footer className="py-8 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© {new Date().getFullYear()} Michael Ehmke. All rights reserved.</p>
            <SocialLinks className="text-slate-300 hover:text-white" />
          </div>
        </div>
      </footer>
      */}
    </main>
  );
}
