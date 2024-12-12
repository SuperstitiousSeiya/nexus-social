
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { MessageCircle, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import images from "@/assets/images"

interface Contact {
  id: string
  name: string
  avatar: string
  status: "online" | "offline"
  lastMessage: string
}

const contacts: Contact[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "/placeholder-user.jpg",
    status: "online",
    lastMessage: "Hey, how are you?"
  },
  {
    id: "2",
    name: "Jane Smith",
    avatar: "/placeholder-user.jpg",
    status: "offline",
    lastMessage: "See you tomorrow!"
  }
]

export function MessageDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-0 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="w-80">
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <h3 className="font-semibold">Messages</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0 max-h-96 overflow-auto">
            {contacts.map((contact) => (
              <Button
                key={contact.id}
                variant="ghost"
                className="w-full justify-start p-4 h-auto"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Avatar>
                      <Image src={images.francis} width={40} height={40} alt={contact.name} />
                    </Avatar>
                    <span
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${contact.status === "online" ? "bg-green-500" : "bg-gray-400"
                        }`}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{contact.name}</span>
                    <span className="text-xs text-muted-foreground truncate max-w-[180px]">
                      {contact.lastMessage}
                    </span>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}