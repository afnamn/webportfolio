'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation' // Importing hook to get the current route
import './globals.css' // Import global styles here

export default function Layout({ children }: { children: ReactNode }) {
    const pathname = usePathname()

    // Conditionally add class to the homepage for background image
    const isHomePage = pathname === '/' ? 'home-page-background' : ''

    return (
        <html lang="en">
            <body className={isHomePage}>
                {/* Main container */}
                <div className="container mx-auto p-4">
                    {/* Navigation bar */}
                    <div className="navbar">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/experience">Experience</a>
                        <a href="/projects">Projects</a>
                    </div>

                    {/* Page content (children) */}
                    <main>{children}</main>
                </div>

                {/* Afnan Monzur Section at the bottom-left */}
                {isHomePage && (
                    <div className="afnan-monzur-section">
                        <div className="afnan-monzur-text">
                            <div className="afnan">Afnan</div>
                            <div className="reflection">Monzur</div>
                        </div>
                    </div>
                )}
            </body>
        </html>
    )
}
