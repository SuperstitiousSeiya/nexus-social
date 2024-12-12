import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { StoryCard } from "./story-card"

const stories = [
  { name: "Your Story", imageUrl: "/placeholder-user.jpg", isActive: false },
  { name: "John Doe", imageUrl: "/placeholder-user.jpg", isActive: true },
  { name: "Jane Smith", imageUrl: "/placeholder-user.jpg", isActive: true },
  { name: "Mike Johnson", imageUrl: "/placeholder-user.jpg", isActive: true },
  { name: "Sarah Wilson", imageUrl: "/placeholder-user.jpg", isActive: true },
  { name: "Alex Brown", imageUrl: "/placeholder-user.jpg", isActive: true },
]

export function StoriesSection() {
  return (
    <div className="bg-card rounded-lg p-4 mb-6 sticky top-[4rem] pt-10 z-40">
      <ScrollArea>
        <div className="flex space-x-4">
          {stories.map((story) => (
            <StoryCard key={story.name} {...story} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}