import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const videos = [
  {
    id: 1,
    title: "Amazing Sunset Time-lapse",
    author: "Nature Channel",
    avatar: "/placeholder-user.jpg",
    thumbnail: "/placeholder-video.jpg",
    views: "12K",
    likes: "1.2K",
    comments: 234,
  },
  {
    id: 2,
    title: "Quick Cooking Tips",
    author: "Food Masters",
    avatar: "/placeholder-user.jpg",
    thumbnail: "/placeholder-video.jpg",
    views: "8.5K",
    likes: "956",
    comments: 145,
  },
]

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((video) => (
        <Card key={video.id} className="overflow-hidden">
          <div className="aspect-video relative">
            <Image
              width={400}
              height={400}
              src={video.thumbnail}
              alt={video.title}
              className="object-cover w-full h-full"
            />
          </div>
          <CardContent className="p-4">
            <div className="flex space-x-4">
              <Avatar>
                <img src={video.avatar} alt={video.author} />
              </Avatar>
              <div>
                <h3 className="font-semibold">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.author}</p>
                <p className="text-sm text-muted-foreground">
                  {video.views} views
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Button variant="ghost" size="sm" className="space-x-2">
              <Heart className="w-4 h-4" />
              <span>{video.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>{video.comments}</span>
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}