import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const categories = [
    {
      key: "skincare",
      image: "/lovable-uploads/7acb4e9d-c852-4bb5-afa9-9e91be10a7c0.png"
    },
    {
      key: "haircare",
      image: "/lovable-uploads/98af4ef5-abb3-49be-b3b8-f7d69d917f30.png"
    },
    {
      key: "wellness",
      image: "/lovable-uploads/432c0ff8-3f4f-4199-a36a-8d63f851bd8a.png"
    },
    {
      key: "makeup",
      image: "/lovable-uploads/bc578a58-dea8-4c91-9ac8-423c5d6b3ca4.png"
    }
  ];

  return (
    <div className="min-h-screen font-body">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-24">
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
          <div className="animate-fade-up space-y-8 text-center max-w-4xl">
            <h1 className="font-heading text-display text-white mb-6 leading-tight">
              {t.hero.title}
              <span className="block text-primary">{t.hero.subtitle}</span>
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
              <Link
                to="/about"
                className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-button font-semibold"
              >
                {t.hero.cta.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <h3 className="font-heading text-h3 text-text mb-4">{t.features.forBrands.title}</h3>
              <p className="text-body text-text-light mb-4">
                {t.features.forBrands.description}
              </p>
              <Link
                to="/contact"
                className="text-text hover:text-text-light transition-colors text-button"
              >
                {t.features.forBrands.link} →
              </Link>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-heading text-h3 text-text mb-4">{t.features.forDistributors.title}</h3>
              <p className="text-body text-text-light mb-4">
                {t.features.forDistributors.description}
              </p>
              <Link
                to="/contact"
                className="text-text hover:text-text-light transition-colors text-button"
              >
                {t.features.forDistributors.link} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading text-h2 text-text mb-8">{t.categories.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.key}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src={`${category.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={t.categories[category.key].title}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                </div>
                <h3 className="font-heading text-h3 text-text mb-3">{t.categories[category.key].title}</h3>
                <p className="text-body text-text-light mb-4">{t.categories[category.key].description}</p>
                <ul className="space-y-2 text-body text-text-light">
                  {t.categories[category.key].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
