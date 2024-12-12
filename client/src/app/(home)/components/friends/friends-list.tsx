import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, MoreHorizontal } from "lucide-react"
import Image from "next/image"
const friends = [
  { id: 1, name: "John Doe", avatar: "/placeholder-user.jpg", mutualFriends: 12 },
  { id: 2, name: "Jane Smith", avatar: "/placeholder-user.jpg", mutualFriends: 8 },
  { id: 3, name: "Mike Johnson", avatar: "/placeholder-user.jpg", mutualFriends: 15 },
]

export function FriendsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {friends.map((friend) => (
        <Card key={friend.id}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <Image width={40} height={40} src={friend.avatar} alt={friend.name} />
                </Avatar>
                <div>
                  <h3 className="font-semibold">{friend.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {friend.mutualFriends} mutual friends
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="icon" variant="ghost">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}