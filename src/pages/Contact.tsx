import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { ContactForm } from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Globe, Instagram, Facebook, Linkedin } from "lucide-react";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24">
        {/* Hero Section */}
        <div className="relative h-[40vh] mb-16">
          <div className="absolute inset-0 bg-neutral-brown/30 z-10" />
          <img
            src="/lovable-uploads/bc578a58-dea8-4c91-9ac8-423c5d6b3ca4.png"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-center mb-4">{t.contact.hero.title}</h1>
            <p className="text-body text-center max-w-2xl mb-8">
              {t.contact.hero.subtitle}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mb-16">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="mb-8">{t.contact.reachUs.title}</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-heading text-h4 mb-2">{t.contact.reachUs.address.title}</h4>
                    <p>{t.contact.reachUs.address.value}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-heading text-h4 mb-2">{t.contact.reachUs.phone.title}</h4>
                    <p>{t.contact.reachUs.phone.value}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-heading text-h4 mb-2">{t.contact.reachUs.email.title}</h4>
                    <p>{t.contact.reachUs.email.value}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-heading text-h4 mb-2">{t.contact.reachUs.website.title}</h4>
                    <p>{t.contact.reachUs.website.value}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="mb-6">{t.contact.social.title}</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-text-light hover:text-primary transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-text-light hover:text-primary transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-text-light hover:text-primary transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-8">{t.contact.form.title}</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;