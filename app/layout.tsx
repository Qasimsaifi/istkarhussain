import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import FloatingContact from '@/components/floating-contact'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Istkar Hussain | Interior Design & Carpentry',
    description: 'Premium interior design and custom carpentry services. Transform your spaces with elegant, functional design solutions.',
    generator: 'v0.app',
    icons: {
        icon: [
            {
                url: 'portrait-designer-istkar.jpg',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: 'portrait-designer-istkar.jpg',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: 'portrait-designer-istkar.jpg',
                type: 'image/svg+xml',
            },
        ],
        apple: 'portrait-designer-istkar.jpg',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`font-sans antialiased`}>
                <FloatingContact />
                {children}
                <Analytics />
            </body>
        </html>
    )
}
