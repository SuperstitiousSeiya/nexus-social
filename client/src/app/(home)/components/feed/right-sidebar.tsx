import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import Image from "next/image"
import images from "@/assets/images"
const contacts = [
    { name: "Alice Cooper", status: "online", avatar: "/placeholder-user.jpg" },
    { name: "Bob Wilson", status: "offline", avatar: "/placeholder-user.jpg" },
    { name: "Carol Smith", status: "online", avatar: "/placeholder-user.jpg" },
    { name: "Dave Johnson", status: "online", avatar: "/placeholder-user.jpg" },
]

const birthdays = [
    { name: "Emma Davis", avatar: "/placeholder-user.jpg" },
]

export function RightSidebar() {
    return (
        <aside className="w-[280px] fixed right-0 top-14 h-screen border-l bg-background">
            <ScrollArea className="h-[calc(100vh-3.5rem)]">
                <div className="p-4 space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium">Birthdays</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {birthdays.map((person) => (
                                <div key={person.name} className="flex items-center gap-3">
                                    <Avatar>
                                        <Image width={40} height={40} src={images.francis} alt={person.name} />
                                    </Avatar>
                                    <p className="text-sm">
                                        <span className="font-medium">{person.name}</span>
                                        &apos;s birthday is today
                                    </p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium">Contacts</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            {contacts.map((contact) => (
                                <Button
                                    key={contact.name}
                                    variant="ghost"
                                    className="w-full justify-start gap-3 relative"
                                >
                                    <div className="relative">
                                        <Avatar>
                                            <Image width={40} height={40} src={images.francis} alt={contact.name} />
                                        </Avatar>
                                        <span
                                            className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-background ${contact.status === "online" ? "bg-green-500" : "bg-gray-400"
                                                }`}
                                        />
                                    </div>
                                    <span className="text-sm">{contact.name}</span>
                                </Button>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </ScrollArea>
        </aside>
    )
}