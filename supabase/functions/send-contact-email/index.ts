import { serve } from "https://deno.land/std@0.190.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactSubmission {
  id: string
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { record } = await req.json()
    const submission = record as ContactSubmission

    // Format the email HTML
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Subject:</strong> ${submission.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${submission.message}</p>
      <p><em>Submitted at: ${new Date(submission.created_at).toLocaleString()}</em></p>
    `

    console.log('Sending email for submission:', submission.id)

    // Send email using Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Solariis Contact Form <contact@solariis.com>',
        to: ['info@solariis.com'],
        subject: `New Contact Form Submission: ${submission.subject}`,
        html: emailHtml,
      }),
    })

    if (!res.ok) {
      const error = await res.text()
      console.error('Resend API error:', error)
      throw new Error(`Failed to send email: ${error}`)
    }

    const data = await res.json()
    console.log('Email sent successfully:', data)

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})