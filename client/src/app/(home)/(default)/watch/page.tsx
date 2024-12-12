import { VideoGrid } from "../../components/watch/video-grid";


export default function WatchPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Watch</h1>
      {/* <WatchCategories /> */}
      <VideoGrid />
    </div>
  )
}