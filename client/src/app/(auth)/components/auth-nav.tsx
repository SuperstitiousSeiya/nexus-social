import Link from 'next/link'
import React from 'react'

export default function AuthNav() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 text-xl font-bold">
                        SocialApp
                    </Link>
                </div>
            </nav>
        </header>
    )
}

