"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { getPortfolios } from "@/lib/portfolio-data"
import { Eye } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const portfolios = getPortfolios()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
              Galería de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portafolios
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-pretty max-w-2xl mx-auto">
              Explora y selecciona un usuario para ver su presentación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios.map((portfolio, index) => (
              <Card
                key={portfolio.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="relative">
                  <div className="flex flex-col items-center text-center gap-4 mb-4">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={portfolio.avatar || "/placeholder.svg"}
                        alt={portfolio.name}
                        fill
                        className="object-cover"
                        style={portfolio.id === "juan-marcos-castro" ? { objectPosition: "center 20%" } : undefined}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {portfolio.name}
                      </CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{portfolio.title}</p>
                    </div>
                  </div>

                  <CardDescription className="text-base leading-relaxed text-center line-clamp-2">
                    {portfolio.bio}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {portfolio.specialties.slice(0, 3).map((specialty, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="w-full" size="lg">
                    <Link href={`/portafolio/${portfolio.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      Ver Portafolio
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
