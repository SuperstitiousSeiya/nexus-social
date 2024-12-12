import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 text-xl font-bold">
                        Nexus
                    </Link>
                </div>
                <div className="flex gap-x-12">
                    <Link
                        href="/features"
                        className="text-sm font-semibold leading-6 hover:text-primary transition-colors"
                    >
                        Features
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-semibold leading-6 hover:text-primary transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-semibold leading-6 hover:text-primary transition-colors"
                    >
                        Contact
                    </Link>
                </div>
                <div className="flex flex-1 justify-end gap-x-6">
                    <Link href="/login" prefetch>
                        <Button variant="ghost">Log in</Button>
                    </Link>
                    <Link href="/signup" prefetch>
                        <Button>Sign up</Button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}