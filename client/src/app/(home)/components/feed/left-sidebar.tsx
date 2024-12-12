import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  User, 
  Users, 
  Bookmark, 
  Calendar, 
  Clock,
  Star,
  Heart
} from "lucide-react"
import { Avatar } from "@/components/ui/avatar"

const sidebarItems = [
  {
    icon: User,
    label: "Your Profile",
    href: "/profile"
  },
  {
    icon: Users,
    label: "Friends",
    href: "/friends"
  },
  {
    icon: Bookmark,
    label: "Saved",
    href: "/saved"
  },
  {
    icon: Calendar,
    label: "Events",
    href: "/events"
  },
  {
    icon: Clock,
    label: "Memories",
    href: "/memories"
  },
  {
    icon: Star,
    label: "Favorites",
    href: "/favorites"
  },
  {
    icon: Heart,
    label: "Dating",
    href: "/dating"
  }
]

export function LeftSidebar() {
  return (
    <aside className="w-[280px] fixed left-0 top-14 h-screen border-r bg-background">
      <ScrollArea className="h-[calc(100vh-3.5rem)] py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Avatar>
                <img src="/placeholder-user.jpg" alt="Profile" />
              </Avatar>
              <span>John Doe</span>
            </Button>
            {sidebarItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start gap-3"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}