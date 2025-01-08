import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";

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

const CategoriesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-h2 text-text mb-8 text-center">{t.categories.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  );
};

export default CategoriesSection;