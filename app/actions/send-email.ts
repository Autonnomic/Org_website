"use server"

/**
 * Resend sandbox (`onboarding@resend.dev`): you may only deliver to your
 * verified account email (or addresses on a verified domain).
 *
 * Set in `.env.local`:
 * - RESEND_API_KEY
 * - RESEND_TO=comma,separated,inboxes      (must match Resend’s allowed test recipient for your API key)
 *
 * After verifying autonnomic.com at resend.com/domains:
 * - RESEND_FROM=Autonnomic <hello@autonnomic.com>
 * - RESEND_TO can be any team addresses on that domain.
 */
const DEFAULT_SANDBOX_TO = "veerasreekar@autonnomic.com"
const DEFAULT_FROM = "Autonnomic <onboarding@resend.dev>"

export async function sendContactEmail(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      success: false,
      message: "Email is not configured. Add RESEND_API_KEY to your environment.",
    }
  }

  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const companyName = formData.get("companyName") as string
  const inquiry = formData.get("inquiry") as string
  const replyEmailRaw = formData.get("email") as string | null
  const replyEmail = replyEmailRaw?.trim() ?? ""

  const toList = (process.env.RESEND_TO ?? DEFAULT_SANDBOX_TO)
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean)

  if (toList.length === 0) {
    return { success: false, message: "RESEND_TO is empty or invalid." }
  }

  const from = process.env.RESEND_FROM?.trim() || DEFAULT_FROM

  const subject = `New demo request: ${firstName} ${lastName} (${companyName})`
  const body = `
New contact / demo request

Name: ${firstName} ${lastName}
Company: ${companyName}
${replyEmail ? `Their email (Reply-To): ${replyEmail}` : "Their email: (not collected)"}

Inquiry:
${inquiry}

---
Sent from the Autonnomic contact form.
`.trim()

  const payload: Record<string, unknown> = {
    from,
    to: toList,
    subject,
    text: body,
  }

  if (replyEmail) {
    payload.reply_to = replyEmail
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    })

    const data = (await response.json()) as {
      message?: string
      name?: string
    }

    if (!response.ok) {
      throw new Error(data.message || data.name || "Failed to send email")
    }

    return { success: true, message: "Thank you! Your request has been sent successfully." }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to send email. Please try again.",
    }
  }
}
