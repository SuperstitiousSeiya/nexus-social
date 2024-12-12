import images from "@/assets/images"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react"
import Image from "next/image"

interface PostCardProps {
    author: {
        name: string
        avatar: string
    }
    content: {
        text?: string
        image?: string
    }
    stats: {
        likes: number
        comments: number
    }
    timestamp: string
}

export function PostCard({ author, content, stats, timestamp }: PostCardProps) {
    return (
        <Card className="mb-6">
            <CardHeader className="flex flex-row items-center space-x-4 p-4">
                <Avatar>
                    <Image src={images.francis} width={40} height={40} alt={author.name} />
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-semibold">{author.name}</span>
                    <span className="text-xs text-muted-foreground">{timestamp}</span>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                {content.text && (
                    <p className="p-4 pt-0">{content.text}</p>
                )}
                {content.image && (
                    <Image width={40} height={40} src={images.francis} alt="Post content" className="w-full" />
                )}
            </CardContent>
            <CardFooter className="p-4 flex justify-between">
                <div className="flex space-x-4">
                    <Button variant="ghost" size="sm" className="space-x-2">
                        <Heart className="w-4 h-4" />
                        <span>{stats.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="space-x-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>{stats.comments}</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4" />
                    </Button>
                </div>
                <Button variant="ghost" size="sm">
                    <Bookmark className="w-4 h-4" />
                </Button>
            </CardFooter>
        </Card>
    )
}