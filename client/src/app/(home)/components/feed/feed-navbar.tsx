import { Button } from "@/components/ui/button"
import { Home, Users, PlayCircle, Bell, Hop } from "lucide-react"
import Link from "next/link"

const navItems = [
    { icon: Home, label: "Home", href: "/feeds" },
    { icon: Users, label: "Friends", href: "/friends" },
    { icon: PlayCircle, label: "Watch", href: "/watch" },
    { icon: Hop, label: "Marketplace", href: "/marketplace" },
]

export function FeedNavbar() {
    return (
        <nav className="bg-background border-b sticky top-0 z-40">
            <div className="flex justify-between items-center px-4 py-2 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <Link href="/feeds" className="text-xl font-bold">
                        Nexus
                    </Link>
                </div>

                <div className="flecx space-x-1">
                    {navItems.map((item) => (
                        <Link key={item.label} href={item.href}>
                            <Button variant="ghost" className="h-12 px-4">
                                <item.icon className="h-6 w-6" />
                            </Button>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Bell className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}