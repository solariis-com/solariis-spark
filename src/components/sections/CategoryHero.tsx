import { Button } from "@/components/ui/button";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";

const CategoryHero = () => {
  const { language } = useLanguage();
  const t = translations[language].categories;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/d29aa07d-0654-4c3a-80be-33656915a549.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-display mb-4">{t.title}</h1>
        <p className="text-body-lg max-w-3xl mx-auto mb-8">
          {t.description}
        </p>
        <Button asChild size="lg" className="animate-fade-up">
          <a href="#categories">{t.exploreButton}</a>
        </Button>
      </div>
    </section>
  );
};

export default CategoryHero;