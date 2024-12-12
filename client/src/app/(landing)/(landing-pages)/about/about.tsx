import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Trophy,
  Heart,
  Target,
  Users,
  Globe,
  Star
} from "lucide-react"

const aboutCards = [
  {
    title: "Our Mission",
    description: "To connect people and build meaningful communities while providing a safe and engaging platform for self-expression.",
    icon: Target,
  },
  {
    title: "Our Values",
    description: "We believe in transparency, user privacy, and fostering positive interactions that enrich people's lives.",
    icon: Heart,
  },
  {
    title: "Global Reach",
    description: "Connecting millions of users across 150+ countries, bringing people together regardless of distance.",
    icon: Globe,
  },
  {
    title: "Community First",
    description: "Building features and policies that put our community's needs and safety at the forefront of everything we do.",
    icon: Users,
  },
  {
    title: "Innovation",
    description: "Constantly evolving and improving our platform with cutting-edge technology and user-focused features.",
    icon: Star,
  },
  {
    title: "Achievement",
    description: "Recognized as a leading social platform with numerous awards for user experience and community building.",
    icon: Trophy,
  },
]

export function About() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            About Us
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Learn about our journey, mission, and the values that drive us to create the best social experience for our users.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {aboutCards.map((card) => (
            <Card key={card.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <card.icon className="h-8 w-8 text-primary" />
                  <CardTitle>{card.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}