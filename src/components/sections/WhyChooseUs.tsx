import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";

const WhyChooseUs = () => {
  const { language } = useLanguage();
  const t = translations[language].categories.whyChooseUs;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.items.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-accent hover:bg-accent-dark transition-colors">
              <p className="text-body">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;