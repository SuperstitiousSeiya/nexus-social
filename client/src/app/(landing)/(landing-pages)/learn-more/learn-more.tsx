import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Video,
  Users,
  MessageSquare,
  Newspaper,
  GraduationCap,
  ArrowRight
} from "lucide-react"

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and API references to help you understand every aspect of our platform.",
    icon: BookOpen,
    action: "Read Docs",
    href: "/docs"
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step video tutorials covering basic to advanced topics.",
    icon: Video,
    action: "Watch Now",
    href: "/tutorials"
  },
  {
    title: "Community Forums",
    description: "Join our active community to discuss ideas, share projects, and get help from other developers.",
    icon: Users,
    action: "Join Discussion",
    href: "/community"
  },
  {
    title: "Support Center",
    description: "Get direct assistance from our support team for any technical issues or questions.",
    icon: MessageSquare,
    action: "Get Support",
    href: "/support"
  },
  {
    title: "Blog & Updates",
    description: "Stay up to date with the latest features, best practices, and industry insights.",
    icon: Newspaper,
    action: "Read Blog",
    href: "/blog"
  },
  {
    title: "Learning Paths",
    description: "Structured learning paths to help you master our platform at your own pace.",
    icon: GraduationCap,
    action: "Start Learning",
    href: "/learning-paths"
  },
]

export function LearnMore() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Learn More
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Discover our comprehensive learning resources and support options to help you make the most of our platform.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <resource.icon className="h-8 w-8 text-primary" />
                  <CardTitle>{resource.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base text-muted-foreground">
                  {resource.description}
                </p>
                <Button variant="outline" className="w-full group" asChild>
                  <a href={resource.href}>
                    {resource.action}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="mt-24 mx-auto max-w-2xl text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Need More Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Can&apos;t find what you&apos;re looking for? Our team is here to help you succeed.
              </p>
              <Button variant="secondary" asChild>
                <a href="/contact">Contact Support</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}