import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Building2, Network, BarChart3, ShieldCheck } from "lucide-react";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen font-body">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/lovable-uploads/1f330680-333d-4790-9386-648e3aedd506.png")',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up space-y-6">
            <h1 className="font-heading text-display text-white mb-4">
              Bringing Global Wellness & Beauty to You
            </h1>
            <p className="text-body-lg text-white/90 max-w-3xl mx-auto">
              Solariis is dedicated to introducing and commercializing premium health, wellbeing, and beauty brands in Venezuela.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
                <a href="#learn-more">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Who We Are */}
        <section id="learn-more" className="mb-20 animate-fade-up">
          <h2 className="font-heading text-h2 text-text mb-6">Who We Are</h2>
          <p className="text-body text-text-light">
            Solariis is a company committed to importing, representing, and commercializing premium brands in the health, wellbeing, and beauty industries. Our goal is to bridge global brands with the Venezuelan market, ensuring access to high-quality and innovative products.
          </p>
        </section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <section className="animate-fade-up">
            <h2 className="font-heading text-h2 text-text mb-6">Our Mission</h2>
            <p className="text-body text-text-light">
              At Solariis, we believe in empowering consumers with trusted, high-quality wellness and beauty products. Our mission is to strategically introduce and position international brands, ensuring successful market penetration while maintaining the integrity and value of each brand we represent.
            </p>
          </section>
          <section className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-heading text-h2 text-text mb-6">Our Vision</h2>
            <p className="text-body text-text-light">
              We aspire to establish Solariis as a key player in the beauty and wellness industry, building long-term relationships with international brands, retailers, and consumers while upholding excellence and reliability in distribution.
            </p>
          </section>
        </div>

        {/* What We Do */}
        <section className="mb-20">
          <h2 className="font-heading text-h2 text-text mb-8">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-heading text-h4 text-text mb-3">Brand Representation & Market Expansion</h3>
              <p className="text-body text-text-light">
                Acting as official representatives for international beauty and wellness brands.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Network className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-heading text-h4 text-text mb-3">Import & Distribution</h3>
              <p className="text-body text-text-light">
                Bringing high-quality products to trusted retail chains, pharmacies, and e-commerce platforms.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-heading text-h4 text-text mb-3">Marketing & Brand Awareness</h3>
              <p className="text-body text-text-light">
                Developing localized strategies, digital marketing, and retail activations to position brands effectively.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <ShieldCheck className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-heading text-h4 text-text mb-3">Regulatory & Compliance Support</h3>
              <p className="text-body text-text-light">
                Handling import logistics, legal registrations, and local market compliance for seamless brand entry.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Solariis */}
        <section className="mb-20">
          <h2 className="font-heading text-h2 text-text mb-8">Why Choose Solariis?</h2>
          <p className="text-body text-text-light mb-8">
            We are committed to building strong partnerships and ensuring that international brands succeed in the Venezuelan market.
          </p>
          <div className="space-y-6">
            {[
              {
                title: "Strategic Retail & Distribution Network",
                description: "Access to leading retailers, pharmacies, and online marketplaces."
              },
              {
                title: "Regulatory & Compliance Expertise",
                description: "Ensuring smooth market entry and adherence to local regulations."
              },
              {
                title: "Branding & Growth Support",
                description: "Developing tailored marketing strategies to enhance brand awareness and consumer engagement."
              },
              {
                title: "Commitment to Excellence",
                description: "Upholding high-quality standards and ethical business practices in every partnership."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-h4 text-text mb-2">{item.title}</h3>
                  <p className="text-body text-text-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partner Brand */}
        <section className="mb-20">
          <h2 className="font-heading text-h2 text-text mb-8">Our First Partner Brand: Elizavecca</h2>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <p className="text-body text-text-light mb-6">
              We are proud to introduce Elizavecca as our first official brand partner. With a proven track record in innovative Korean skincare, Elizavecca products align with our mission to bring trusted, high-quality beauty solutions to Venezuela.
            </p>
            <div className="text-sm text-text-light italic">
              This section will expand as we onboard more brands.
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center bg-muted p-12 rounded-2xl animate-fade-up">
          <h2 className="font-heading text-h2 text-text mb-6">Get in Touch</h2>
          <p className="text-body text-text-light mb-8 max-w-2xl mx-auto">
            If you are an international brand looking to enter the Venezuelan market or a retailer interested in premium beauty and wellness products, we'd love to connect.
          </p>
          <p className="text-body-lg text-text mb-8">Let's build something great together!</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;