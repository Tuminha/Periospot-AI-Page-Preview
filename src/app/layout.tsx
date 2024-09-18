// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Syne } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import './globals.css'
import { ReactNode } from 'react'

const fontHeading = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="container flex items-center justify-between py-4">
            <div className="ml-20 mt-10"> {/* Added margin to the logo container */}
              <Image
                src="/images/Periospot_AI_Logo.png"
                alt="Periospot AI Logo"
                width={70}
                height={70}
                className="w-auto h-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-12 ml-24">
              <Link href="/" className="text-base font-medium text-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-base font-medium text-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/services" className="text-base font-medium text-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/contact" className="text-base font-medium text-foreground hover:text-primary transition-colors">Contact</Link>
              <Link href="/blog" className="text-base font-medium text-foreground hover:text-primary transition-colors">Blog</Link>
            </nav>
            <div className="md:hidden">
              {/* Add a mobile menu button here if needed */}
            </div>
          </div>
        </header>
        <main className="pt-[80px]">
          {children}
        </main>
      </body>
    </html>
  )
}