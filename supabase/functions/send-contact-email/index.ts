import { serve } from "https://deno.land/std@0.190.0/http/server.ts"

const RESEND = Deno.env.get('RESEND')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
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

    const formData: ContactFormData = await req.json()
    console.log('Received form data:', formData)

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      throw new Error('Missing required fields')
    }

    // Format the email HTML
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `

    // Initialize Resend with the API key
    const resend = {
      emails: {
        send: async (data: any) => {
          const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${RESEND}`,
            },
            body: JSON.stringify(data),
          });
          return res.json();
        },
      },
    };

    // Send email using the new Resend format
    const emailResponse = await resend.emails.send({
      from: 'Solariis Contact Form <onboarding@resend.dev>',
      to: ['info@solariis.com'],
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: emailHtml,
      reply_to: formData.email,
    });

    console.log('Email sent successfully:', emailResponse)

    return new Response(JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    return new Response(
      JSON.stringify({ error: error.message }), 
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})