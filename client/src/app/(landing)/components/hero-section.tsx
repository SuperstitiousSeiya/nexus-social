import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Connect with friends in a whole new way
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Share moments, create memories, and stay connected with your loved ones.
                        Join our growing community of millions of users worldwide.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/feeds" prefetch>
                            <Button size="lg">Get started</Button>
                        </Link>
                        <Link href="/learn-more" prefetch>
                            <Button variant="outline" size="lg">
                                Learn more
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}