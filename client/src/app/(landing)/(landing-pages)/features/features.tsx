import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Users, 
  Share2, 
  Shield, 
  MessageSquare, 
  Bell, 
  Image, 
  Video, 
  Hash 
} from "lucide-react"

const features = [
  {
    title: "Connect with Friends",
    description: "Find and connect with friends, family, and like-minded people from around the world. Build your network and stay in touch with the people who matter most.",
    icon: Users,
  },
  {
    title: "Share Your Story",
    description: "Share photos, videos, and updates about your life with your network. Create and curate your personal timeline to showcase your journey.",
    icon: Share2,
  },
  {
    title: "Private & Secure",
    description: "Your privacy is our priority. Advanced security features keep your data safe with end-to-end encryption and customizable privacy settings.",
    icon: Shield,
  },
  {
    title: "Real-time Chat",
    description: "Instant messaging with individual friends or group conversations. Stay connected with real-time notifications and message delivery.",
    icon: MessageSquare,
  },
  {
    title: "Smart Notifications",
    description: "Stay updated with intelligent notifications about the content and people you care about most. Customize your notification preferences.",
    icon: Bell,
  },
  {
    title: "Photo Sharing",
    description: "Share your favorite moments with high-quality photo uploads. Create albums and organize your memories with easy-to-use tools.",
    icon: Image,
  },
  {
    title: "Video Streaming",
    description: "Share and watch videos with your network. Live streaming capabilities let you broadcast moments as they happen.",
    icon: Video,
  },
  {
    title: "Trending Topics",
    description: "Stay in the loop with trending hashtags and topics. Join conversations about the things that matter to you and your community.",
    icon: Hash,
  },
]

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Features
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Discover all the powerful features that make our platform the perfect place to connect, share, and engage with your community.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}