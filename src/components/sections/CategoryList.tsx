import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";
import ProductCategory from "../ProductCategory";

const CategoryList = () => {
  const { language } = useLanguage();
  const t = translations[language].categories;

  const categories = [
    {
      title: t.skincare.title,
      description: t.skincare.description,
      imageSrc: "/lovable-uploads/7acb4e9d-c852-4bb5-afa9-9e91be10a7c0.png",
      features: [
        {
          title: "Hydration & Anti-Aging",
          description: "Formulated with advanced ingredients like hyaluronic acid, retinol, and peptides to deeply hydrate, improve elasticity, and reduce fine lines."
        },
        {
          title: "Deep Cleansing & Purifying",
          description: "Clay masks, exfoliators, and gentle cleansers that help remove impurities, minimize pores, and maintain balanced skin."
        },
        {
          title: "Brightening & Even-Tone Solutions",
          description: "Skincare infused with vitamin C, niacinamide, and botanical extracts to promote a radiant complexion and even skin tone."
        },
        {
          title: "Sun Protection",
          description: "Lightweight, high-SPF sun creams offering broad-spectrum UV protection, keeping skin shielded from sun damage while maintaining hydration."
        }
      ]
    },
    {
      title: t.wellness.title,
      description: t.wellness.description,
      imageSrc: "/lovable-uploads/432c0ff8-3f4f-4199-a36a-8d63f851bd8a.png",
      features: [
        {
          title: "Nutritional Supplements",
          description: "High-quality vitamins, minerals, and herbal supplements to support immune health, energy, and overall well-being."
        },
        {
          title: "Stress Relief & Relaxation",
          description: "Aromatherapy, essential oils, and self-care products designed to promote relaxation, reduce stress, and improve sleep quality."
        },
        {
          title: "Detox & Gut Health",
          description: "Herbal blends, fiber-rich supplements, and probiotics to improve digestion, aid metabolism, and support internal cleansing."
        },
        {
          title: "Muscle Recovery & Joint Health",
          description: "Products designed for post-workout recovery, joint flexibility, and overall mobility support."
        }
      ]
    },
    {
      title: t.haircare.title,
      description: t.haircare.description,
      imageSrc: "/lovable-uploads/98af4ef5-abb3-49be-b3b8-f7d69d917f30.png",
      features: [
        {
          title: "Hair Care & Treatments",
          description: "Nourishing shampoos, conditioners, and intensive treatments infused with collagen, keratin, and ceramides to restore strength and shine."
        },
        {
          title: "Body Care & Hydration",
          description: "Luxurious lotions, body scrubs, and moisturizing treatments enriched with shea butter, aloe vera, and botanical extracts to keep skin soft and smooth."
        },
        {
          title: "Oral Hygiene & Personal Care",
          description: "Premium toothpaste, mouthwashes, and hygiene essentials to ensure a fresh, clean, and healthy routine."
        },
        {
          title: "Frizz Control & Styling",
          description: "Leave-in treatments, styling sprays, and curl enhancers to maintain smooth, manageable hair with lasting hold."
        }
      ]
    },
    {
      title: t.makeup.title,
      description: t.makeup.description,
      imageSrc: "/lovable-uploads/bc578a58-dea8-4c91-9ac8-423c5d6b3ca4.png",
      features: [
        {
          title: "Long-Lasting Foundations & Concealers",
          description: "Lightweight, buildable coverage that evens out skin tone while keeping skin hydrated."
        },
        {
          title: "Lip Care & Color",
          description: "Hydrating lip balms, vibrant lipsticks, and high-shine glosses for long-lasting color and nourishment."
        },
        {
          title: "Eye Makeup & Definition",
          description: "High-pigment eyeshadows, waterproof mascaras, and precise eyeliners for an expressive, bold look."
        },
        {
          title: "Makeup Setting & Skincare Fusion",
          description: "Setting sprays, primers, and hybrid makeup products infused with skincare benefits to enhance and protect the skin."
        }
      ]
    }
  ];

  return (
    <section id="categories" className="py-20 bg-neutral-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16">{t.sectionTitle}</h2>
        <p className="text-body text-center max-w-3xl mx-auto mb-12">
          {t.sectionDescription}
        </p>
        
        <div className="grid grid-cols-1 gap-16 mb-20">
          {categories.map((category, index) => (
            <ProductCategory
              key={index}
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;