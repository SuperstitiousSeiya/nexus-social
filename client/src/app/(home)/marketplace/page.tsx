import { ProductGrid } from "./components/product-grid";


export default function MarketplacePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Marketplace</h1>
      </div>
      {/* <MarketplaceFilters /> */}
      <ProductGrid />
    </div>
  )
}