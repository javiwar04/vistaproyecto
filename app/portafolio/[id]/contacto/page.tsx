"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { getPortfolioById, type Portfolio } from "@/lib/portfolio-data"
import { Mail, Phone, MessageCircle, Instagram, Github, Linkedin, CheckCircle2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ContactoPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  useEffect(() => {
    const data = getPortfolioById(params.id)
    if (data) {
      setPortfolio(data)
    } else {
      router.push("/")
    }
  }, [params.id, router])

  // 🔹 Nueva función adaptada a Formspree
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      const response = await fetch("https://formspree.io/f/xdkwbvpq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "✅ ¡Mensaje enviado con éxito! Te responderé pronto.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
        form.reset()
      } else {
        setSubmitStatus({
          type: "error",
          message: "❌ Ocurrió un error al enviar el mensaje. Intenta nuevamente.",
        })
      }
    } catch (error) {
      console.error("Error al enviar:", error)
      setSubmitStatus({
        type: "error",
        message: "⚠️ Error de conexión. Verifica tu internet e intenta de nuevo.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!portfolio) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
            Contacto
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-pretty">
            ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Envíame un mensaje</CardTitle>
              <CardDescription className="text-base">
                Completa el formulario y me pondré en contacto contigo lo antes posible
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitStatus.type && (
                <Alert
                  className={`mb-6 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                      : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                  )}
                  <AlertDescription
                    className={
                      submitStatus.type === "success"
                        ? "text-green-800 dark:text-green-200"
                        : "text-red-800 dark:text-red-200"
                    }
                  >
                    {submitStatus.message}
                  </AlertDescription>
                </Alert>
              )}

              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xdkwbvpq"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className="text-base"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Correo Electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="text-base"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="¿De qué quieres hablar?"
                    className="text-base"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    className="resize-none text-base"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Campo oculto opcional: cambia el asunto del correo que recibirás */}
                <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio" />

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  <Mail className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Información de Contacto</CardTitle>
                <CardDescription className="text-base">Otras formas de conectar conmigo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <a
                  href={`mailto:${portfolio.contact.email}`}
                  className="flex items-center space-x-4 group hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">{portfolio.contact.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${portfolio.contact.phone}`}
                  className="flex items-center space-x-4 group hover:bg-gray-50 dark:hover:bg-gray-700/20 p-3 rounded-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Teléfono</p>
                    <p className="text-gray-600 dark:text-gray-400">{portfolio.contact.phone}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${portfolio.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center space-x-4 group hover:bg-green-50 dark:hover:bg-green-900/20 p-3 rounded-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">WhatsApp</p>
                    <p className="text-gray-600 dark:text-gray-400">{portfolio.contact.whatsapp}</p>
                  </div>
                </a>

                <a
                  href={`https://instagram.com/${portfolio.contact.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center space-x-4 group hover:bg-pink-50 dark:hover:bg-pink-900/20 p-3 rounded-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Instagram</p>
                    <p className="text-gray-600 dark:text-gray-400">{portfolio.contact.instagram}</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Redes Sociales</CardTitle>
                <CardDescription className="text-base">Conéctate conmigo en redes sociales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`https://github.com/${portfolio.contact.github}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="GitHub"
                  >
                    <Github className="w-7 h-7 text-white" />
                  </a>

                  {portfolio.contact.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${portfolio.contact.linkedin}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-7 h-7 text-white" />
                    </a>
                  )}

                  <a
                    href={`https://wa.me/${portfolio.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-7 h-7 text-white" />
                  </a>

                  <a
                    href={`https://instagram.com/${portfolio.contact.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-7 h-7 text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
