import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, recipientEmail, recipientName } = await request.json()

    // Validar que todos los campos requeridos estén presentes
    if (!name || !email || !subject || !message || !recipientEmail) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Crear el contenido del email en HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: bold;
              color: #667eea;
              margin-bottom: 5px;
            }
            .value {
              padding: 10px;
              background-color: #f5f5f5;
              border-radius: 5px;
              border-left: 3px solid #667eea;
            }
            .message-box {
              background-color: #f5f5f5;
              padding: 15px;
              border-radius: 5px;
              border-left: 3px solid #667eea;
              white-space: pre-wrap;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nuevo Mensaje de Contacto</h1>
              <p>Has recibido un nuevo mensaje desde tu portafolio</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">De:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Asunto:</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">Mensaje:</div>
                <div class="message-box">${message}</div>
              </div>
              <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto de tu portafolio</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Usar Resend para enviar el email
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      // Si no hay API key de Resend, usar un servicio alternativo o retornar error
      console.error("RESEND_API_KEY no está configurada")
      return NextResponse.json(
        { error: "El servicio de email no está configurado. Por favor contacta al administrador." },
        { status: 500 },
      )
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portafolio <onboarding@resend.dev>", // Email verificado en Resend
        to: [recipientEmail],
        subject: `Nuevo mensaje de contacto: ${subject}`,
        html: emailHtml,
        reply_to: email, // Para que puedas responder directamente al remitente
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Error de Resend:", errorData)
      return NextResponse.json({ error: "Error al enviar el email" }, { status: 500 })
    }

    const data = await response.json()
    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error("Error en el servidor:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
