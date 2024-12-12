import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  ShoppingBag, 
  Bell, 
  Car, 
  Home, 
  Tv, 
  Shirt, 
  Gift,
  PlusCircle
} from "lucide-react"

const categories = [
  { icon: ShoppingBag, label: "Browse All", href: "/feed/marketplace" },
  { icon: Bell, label: "Notifications", href: "/feed/marketplace/notifications" },
  { icon: Car, label: "Vehicles", href: "/feed/marketplace/vehicles" },
  { icon: Home, label: "Property", href: "/feed/marketplace/property" },
  { icon: Tv, label: "Electronics", href: "/feed/marketplace/electronics" },
  { icon: Shirt, label: "Clothing", href: "/feed/marketplace/clothing" },
  { icon: Gift, label: "Collectibles", href: "/feed/marketplace/collectibles" },
]

export function MarketplaceSidebar() {
  return (
    <aside className="w-[280px] border-r bg-background">
      <ScrollArea className="h-[calc(100vh-3.5rem)] py-4">
        <div className="px-3 py-2">
          <div className="mb-4">
            <Button className="w-full justify-start gap-2">
              <PlusCircle className="h-5 w-5" />
              Create New Listing
            </Button>
          </div>
          <div className="space-y-1">
            {categories.map((category) => (
              <Button
                key={category.label}
                variant="ghost"
                className="w-full justify-start gap-3"
              >
                <category.icon className="h-5 w-5" />
                <span>{category.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}