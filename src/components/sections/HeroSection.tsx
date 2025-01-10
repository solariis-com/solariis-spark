import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("/lovable-uploads/2402b619-b4b5-464a-b073-a3f87599ae58.png")',
          backgroundPosition: 'center 20%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full">
        <div className="animate-fade-up space-y-8 max-w-4xl">
          <h1 className="font-heading text-display text-white mb-6 leading-tight">
            {t.hero.title} <span className="text-primary">{t.hero.subtitle}</span>
          </h1>
          <p className="text-body-lg text-white/90 mb-8">
            {t.hero.description}
          </p>
          <div className="space-x-6">
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-button font-semibold shadow-lg hover:shadow-primary/30"
            >
              {t.hero.cta.partner}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;