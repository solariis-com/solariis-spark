import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";

const FeaturesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
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
  );
};

export default FeaturesSection;