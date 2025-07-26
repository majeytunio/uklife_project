import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Notion Sync Blog",
  description: "A blog synced from Notion using Make.com and Next.js",
  icons: {
    icon: [
      { url: 'images/favicon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: 'images/favicon.png' // Optional: for Apple devices
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
