import { useTranslation } from "@/contexts/LanguageContext"
import { ContactForm } from "@/components/ContactForm"

export default function Contact() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-h1 font-heading mb-4">{t.nav.contact}</h1>
          <p className="text-body text-text/80 max-w-2xl mx-auto">
            Have questions about our products or services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}