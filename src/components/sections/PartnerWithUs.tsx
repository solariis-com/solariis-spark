import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";

const PartnerWithUs = () => {
  const { language } = useLanguage();
  const t = translations[language].categories.partnerWithUs;

  return (
    <section className="py-20 bg-primary/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6">{t.title}</h2>
        <p className="text-body-lg max-w-2xl mx-auto mb-8">
          {t.description}
        </p>
        <div className="space-y-4">
          <p className="text-body-lg font-semibold">{t.contact}</p>
          <Button asChild size="lg" variant="default">
            <Link to="/contact">{t.button}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;