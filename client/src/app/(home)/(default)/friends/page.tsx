import { FriendsList } from "../../components/friends/friends-list";


export default function FriendsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-6">Friends</h1>
        {/* <FriendRequests /> */}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">People You May Know</h2>
        {/* <Suggestions /> */}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">All Friends</h2>
        <FriendsList />
      </div>
    </div>
  )
}