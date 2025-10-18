"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getPortfolioById, type Portfolio } from "@/lib/portfolio-data"
import { useRouter } from "next/navigation"
import { Mail, MessageCircle, Instagram, Github, Linkedin, Info, FolderOpen } from "lucide-react"
import Carousel from "@/components/carousel"

export default function PortafolioHomePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null)

  useEffect(() => {
    const data = getPortfolioById(params.id)
    if (data) {
      setPortfolio(data)
    } else {
      router.push("/")
    }
  }, [params.id, router])

  if (!portfolio) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
      {/* Hero Section with Carousel */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Carousel images={portfolio.carouselImages} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
              {portfolio.name}
            </h1>
            <p className="text-2xl text-blue-600 dark:text-blue-400 mb-6">{portfolio.title}</p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty leading-relaxed">
              {portfolio.bio}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-12">
            <a
              href={`mailto:${portfolio.contact.email}`}
              className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl group"
            >
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href={`https://wa.me/${portfolio.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer noopener"
              className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-green-50 dark:hover:bg-green-900/30 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl group"
            >
              <MessageCircle className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
            </a>
            <a
              href={`https://instagram.com/${portfolio.contact.instagram.replace("@", "")}`}
              target="_blank"
              rel="noreferrer noopener"
              className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-50 dark:hover:bg-pink-900/30 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl group"
            >
              <Instagram className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" />
            </a>
            <a
              href={`https://github.com/${portfolio.contact.github}`}
              target="_blank"
              rel="noreferrer noopener"
              className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl group"
            >
              <Github className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            </a>
            {portfolio.contact.linkedin && (
              <a
                href={`https://linkedin.com/in/${portfolio.contact.linkedin}`}
                target="_blank"
                rel="noreferrer noopener"
                className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Mis Especialidades
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
            Áreas en las que me destaco y ofrezco soluciones
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.specialties.map((specialty, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {specialty}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            ¿Qué Ofrezco?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg max-w-3xl mx-auto">
            Soluciones profesionales adaptadas a tus necesidades, con enfoque en calidad y resultados
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Info className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-center">Conoce Más Sobre Mí</CardTitle>
                <CardDescription className="text-center text-base">
                  Descubre mi trayectoria, intereses, habilidades y metas profesionales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full" size="lg">
                  <Link href={`/portafolio/${params.id}/acerca`}>
                    <Info className="mr-2 h-5 w-5" />
                    Ver Perfil Completo
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/50 dark:to-teal-950/50 border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FolderOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-center">Mis Proyectos</CardTitle>
                <CardDescription className="text-center text-base">
                  Explora los proyectos que he desarrollado con tecnologías modernas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full" size="lg" variant="default">
                  <Link href={`/portafolio/${params.id}/proyectos`}>
                    <FolderOpen className="mr-2 h-5 w-5" />
                    Ver Proyectos
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">¿Tienes un proyecto en mente?</h2>
          <p className="text-xl text-blue-100 mb-8 text-pretty">
            Estoy disponible para nuevos proyectos y colaboraciones. ¡Trabajemos juntos!
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href={`/portafolio/${params.id}/contacto`}>
              <Mail className="mr-2 h-5 w-5" />
              Contáctame Ahora
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
