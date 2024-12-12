import { FeedSection } from "../../components/feed/feed-section";
import { StoriesSection } from "../../components/feed/stories-section";
import { TooltipProvider, TooltipTrigger, TooltipContent, Tooltip } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function FeedPage() {
    return (
        <div className="">
            <StoriesSection />
            <FeedSection />
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <Button className="sticky bottom-4 ml-20 right-4 bg-primary rounded-full size-16 text-white">
                            <PlusCircle width={40} height={40} />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Add post
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}