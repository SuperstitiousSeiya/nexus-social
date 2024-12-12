import { PostCard } from "./post-card"

const posts = [
  {
    author: {
      name: "John Doe",
      avatar: "/placeholder-user.jpg"
    },
    content: {
      text: "Just launched my new project! 🚀",
      image: "/placeholder-post.jpg"
    },
    stats: {
      likes: 120,
      comments: 24
    },
    timestamp: "2h ago"
  },
  {
    author: {
      name: "Jane Smith",
      avatar: "/placeholder-user.jpg"
    },
    content: {
      text: "Beautiful sunset at the beach 🌅",
      image: "/placeholder-post.jpg"
    },
    stats: {
      likes: 89,
      comments: 12
    },
    timestamp: "4h ago"
  }
]

export function FeedSection() {
  return (
    <div className="max-w-xl mx-auto">
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  )
}