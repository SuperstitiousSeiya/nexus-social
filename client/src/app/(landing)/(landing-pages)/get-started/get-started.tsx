import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Rocket,
  Settings,
  UserPlus,
  Key,
  Download,
  Code
} from "lucide-react"

const steps = [
  {
    title: "Create Account",
    description: "Sign up for free and create your personal account in just a few clicks.",
    icon: UserPlus,
    action: "Sign Up Now",
    href: "/signup"
  },
  {
    title: "Install Dependencies",
    description: "Download and install all necessary tools and packages to get started.",
    icon: Download,
    action: "View Requirements",
    href: "/docs/requirements"
  },
  {
    title: "Configure Settings",
    description: "Set up your environment and customize your preferences.",
    icon: Settings,
    action: "Configure",
    href: "/docs/configuration"
  },
  {
    title: "API Integration",
    description: "Get your API keys and integrate our services into your project.",
    icon: Key,
    action: "Get API Keys",
    href: "/docs/api"
  },
  {
    title: "Start Coding",
    description: "Begin building with our comprehensive documentation and examples.",
    icon: Code,
    action: "View Docs",
    href: "/docs"
  },
  {
    title: "Launch Project",
    description: "Deploy your project and start reaching users worldwide.",
    icon: Rocket,
    action: "Deploy Now",
    href: "/docs/deployment"
  },
]

export function GetStarted() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Get Started
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Follow these simple steps to begin your journey with our platform.
            We&apos;ve made it easy to get up and running quickly.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <step.icon className="h-8 w-8 text-primary" />
                  <CardTitle>
                    <span className="text-primary mr-2">{index + 1}.</span>
                    {step.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base text-muted-foreground">
                  {step.description}
                </p>
                <Button variant="outline" className="w-full group" asChild>
                  <a href={step.href}>
                    {step.action}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}