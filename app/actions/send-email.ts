"use server"

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const companyName = formData.get("companyName") as string
  const inquiry = formData.get("inquiry") as string

  // Email content
  const subject = `New Contact Sales Request from ${firstName} ${lastName}`
  const body = `
New contact sales request received:

Name: ${firstName} ${lastName}
Company: ${companyName}

Inquiry:
${inquiry}

---
This email was sent from the Autonnomic contact sales form.
  `.trim()

  try {
    // Using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Autonnomic <onboarding@resend.dev>", // You'll need to verify your domain with Resend
        to: ["sreekarreddy299@gmail.com"],
        subject: subject,
        text: body,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Failed to send email")
    }

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to send email. Please try again.",
    }
  }
}
