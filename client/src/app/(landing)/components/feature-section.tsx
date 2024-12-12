import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Share2, Shield, MessageSquare } from "lucide-react"

const features = [
  {
    title: "Connect with Friends",
    description: "Find and connect with friends, family, and like-minded people from around the world.",
    icon: Users,
  },
  {
    title: "Share Your Story",
    description: "Share photos, videos, and updates about your life with your network.",
    icon: Share2,
  },
  {
    title: "Private & Secure",
    description: "Your privacy is our priority. Advanced security features to keep your data safe.",
    icon: Shield,
  },
  {
    title: "Real-time Chat",
    description: "Instant messaging with individual friends or group conversations.",
    icon: MessageSquare,
  },
]

export function FeatureSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to stay connected
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our platform provides all the essential features for a seamless social networking experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary" />
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}