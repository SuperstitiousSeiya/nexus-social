import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Share2 } from "lucide-react"
import Image from "next/image"
const products = [
    {
        id: 1,
        title: "Vintage Camera",
        price: "$299",
        location: "New York, NY",
        image: "/placeholder-product.jpg",
        likes: 24,
    },
    {
        id: 2,
        title: "Mountain Bike",
        price: "$599",
        location: "Los Angeles, CA",
        image: "/placeholder-product.jpg",
        likes: 18,
    },
]

export function ProductGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                    <div className="aspect-square relative">
                        <Image
                            width={400}
                            height={400}
                            src={product.image}
                            alt={product.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <CardContent className="p-4">
                        <h3 className="font-semibold">{product.title}</h3>
                        <p className="text-lg font-bold">{product.price}</p>
                        <p className="text-sm text-muted-foreground">{product.location}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                        <Button variant="ghost" size="sm" className="space-x-2">
                            <Heart className="w-4 h-4" />
                            <span>{product.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                            <Share2 className="w-4 h-4" />
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}