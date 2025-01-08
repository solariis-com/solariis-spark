import { serve } from "https://deno.land/std@0.190.0/http/server.ts"

const RESEND = Deno.env.get('RESEND')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    if (!RESEND) {
      throw new Error('RESEND API key is not set')
    }

    const formData = await req.json()
    console.log('Received form data:', formData)

    // Format the email HTML
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `

    // Send email using Resend
    console.log('Sending email via Resend...')
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev', // Using Resend's testing email
        to: ['advertti@gmail.com'], // During testing, only send to verified email
        subject: `New Contact Form: ${formData.subject}`,
        html: emailHtml,
        reply_to: formData.email,
      }),
    })

    const data = await res.json()
    console.log('Resend API response:', data)

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: res.ok ? 200 : 400,
    })
  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    return new Response(
      JSON.stringify({ error: error.message }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})