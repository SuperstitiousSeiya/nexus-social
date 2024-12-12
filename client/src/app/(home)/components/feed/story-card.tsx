import images from "@/assets/images"
import { Avatar } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Image from "next/image"
interface StoryCardProps {
    name: string
    imageUrl?: string
    isActive?: boolean
}

export function StoryCard({ name, imageUrl, isActive }: StoryCardProps) {
    return (
        <div className="flex flex-col items-center space-y-1">
            <div
                className={cn(
                    "w-16 h-16 rounded-full p-0.5",
                    isActive ? "bg-gradient-to-tr from-yellow-400 to-fuchsia-600" : "bg-muted"
                )}
            >
                <Avatar className="w-full h-full border-2 border-background">
                    <Image src={images.francis} width={40} height={40} alt={name} />
                </Avatar>
            </div>
            <span className="text-xs font-medium truncate w-20 text-center">{name}</span>
        </div>
    )
}