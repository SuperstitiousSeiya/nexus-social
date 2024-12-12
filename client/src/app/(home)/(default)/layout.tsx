import { FeedNavbar } from "../components/feed/feed-navbar"
import { LeftSidebar } from "../components/feed/left-sidebar"
import { RightSidebar } from "../components/feed/right-sidebar"
import { MessageDrawer } from "../components/messaging/message-drawer"


export default function FeedLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <FeedNavbar />
            <div className="flex">
                <LeftSidebar />
                <main className="flex-1 ml-[280px] mr-[280px] relative">
                    <div className="max-w-3xl mx-auto py-6 px-4">
                        {children}
                    </div>
                </main>
                <RightSidebar />
                <MessageDrawer />
            </div>
        </>
    )
}