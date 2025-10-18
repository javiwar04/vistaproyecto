import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Footer } from "@/components/footer"
import ParticleBackground from "@/components/particles"

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Portafolio profesional de desarrollador full stack especializado en React, Next.js y tecnologías modernas",
  generator: "v0.app",
  icons: {
    icon: "/iconweb.png", // ✅ tu nuevo favicon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ParticleBackground />
        <div className="min-h-screen flex flex-col relative z-10">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
