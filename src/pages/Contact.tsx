import { useLanguage } from "@/contexts/LanguageContext"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Globe, Instagram, Facebook, Linkedin } from "lucide-react"

export default function Contact() {
  const { language } = useLanguage()

  const translations = {
    en: {
      hero: {
        title: "Let's Connect – Partner with Solariis",
        subtitle: "Whether you're a brand looking to expand into the Venezuelan market or a retailer seeking premium beauty and wellness products, we're here to help.",
        cta: "Get in Touch"
      },
      sections: {
        reach: "How to Reach Us",
        reachDesc: "We are always open to new business opportunities and partnerships. Contact us through any of the following channels:",
        business: "Business Inquiries",
        businessDesc: "For inquiries related to brand partnerships, distribution opportunities, or retail collaborations, please contact us at:",
        support: "Customer Support",
        supportDesc: "If you are a retailer, distribuidor, or customer needing assistance, we're here to help.",
        social: "Follow Us on Social Media",
        socialDesc: "Stay connected with Solariis for the latest updates, new brand launches, and industry trends:",
        form: "Contact Form",
        formDesc: "Have a question or want to discuss potential business opportunities? Fill out the form below, and we'll get back to you soon.",
        outro: "Let's build something great together! 🚀"
      }
    },
    es: {
      hero: {
        title: "Conectemos – Asóciate con Solariis",
        subtitle: "Ya sea que seas una marca que busca expandirse en el mercado venezolano o un minorista en busca de productos premium de belleza y bienestar, estamos aquí para ayudar.",
        cta: "Contáctanos"
      },
      sections: {
        reach: "Cómo Contactarnos",
        reachDesc: "Siempre estamos abiertos a nuevas oportunidades de negocio y asociaciones. Contáctanos a través de cualquiera de los siguientes canales:",
        business: "Consultas Comerciales",
        businessDesc: "Para consultas relacionadas con asociaciones de marca, oportunidades de distribución o colaboraciones minoristas, contáctenos en:",
        support: "Atención al Cliente",
        supportDesc: "Si eres minorista, distribuidor o cliente y necesitas ayuda, estamos aquí para ayudarte.",
        social: "Síguenos en Redes Sociales",
        socialDesc: "Mantente conectado con Solariis para las últimas actualizaciones, lanzamientos de nuevas marcas y tendencias de la industria:",
        form: "Formulario de Contacto",
        formDesc: "¿Tienes una pregunta o quieres discutir oportunidades de negocio potenciales? Completa el formulario a continuación y nos pondremos en contacto contigo pronto.",
        outro: "¡Construyamos algo grandioso juntos! 🚀"
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-neutral-brown h-[40vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-brown/90 to-neutral-brown/70">
          <img 
            src="/lovable-uploads/photo-1605810230434-7631ac76ec81" 
            alt="Collaboration" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="container relative z-10 text-accent">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">{translations[language].hero.title}</h1>
            <p className="text-xl mb-8">{translations[language].hero.subtitle}</p>
            <Button size="lg" className="text-lg">
              {translations[language].hero.cta}
            </Button>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* How to Reach Us */}
        <section>
          <h2 className="text-3xl font-bold mb-4">{translations[language].sections.reach}</h2>
          <p className="mb-8">{translations[language].sections.reachDesc}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h4 className="font-semibold mb-1">Headquarters</h4>
                <p className="text-text/80">123 Business Avenue, Suite 100, Caracas, Venezuela</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-text/80">+58 (212) 555-0123</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-text/80">contact@solariis.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h4 className="font-semibold mb-1">Website</h4>
                <p className="text-text/80">www.solariis.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Inquiries & Support */}
        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">{translations[language].sections.business}</h2>
            <p className="mb-4">{translations[language].sections.businessDesc}</p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>business@solariis.com</span>
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">{translations[language].sections.support}</h2>
            <p className="mb-4">{translations[language].sections.supportDesc}</p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>support@solariis.com</span>
            </p>
          </section>
        </div>

        {/* Social Media */}
        <section>
          <h2 className="text-2xl font-bold mb-4">{translations[language].sections.social}</h2>
          <p className="mb-8">{translations[language].sections.socialDesc}</p>
          <div className="flex gap-6">
            <a href="https://instagram.com/solariis" className="text-text hover:text-primary transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="https://facebook.com/solariis" className="text-text hover:text-primary transition-colors">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/company/solariis" className="text-text hover:text-primary transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-center">{translations[language].sections.form}</h2>
            <p className="text-center mb-8">{translations[language].sections.formDesc}</p>
            <ContactForm />
            <p className="text-center mt-8 text-lg font-medium">
              {translations[language].sections.outro}
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}