import { MarketplaceSidebar } from "./components/marketplace-slider"


export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <MarketplaceSidebar />
      <main className="flex-1 py-6 px-4">
        {children}
      </main>
    </div>
  )
}