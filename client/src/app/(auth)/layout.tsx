import React from 'react'
import AuthNav from './components/auth-nav'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <AuthNav />
            {children}
        </main>
    )
}
