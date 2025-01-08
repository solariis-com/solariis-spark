import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCategory from "../components/ProductCategory";

const Categories = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const categories = [
    {
      title: "Beauty & Skincare",
      description: "Enhance natural beauty with top-tier skincare solutions designed to nourish, protect, and rejuvenate the skin.",
      imageSrc: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80",
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
      title: "Health & Wellness",
      description: "Prioritizing well-being with trusted health products that enhance daily life and overall vitality.",
      imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
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
      title: "Personal Care",
      description: "Everyday essentials for a healthier and more confident lifestyle.",
      imageSrc: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80",
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
      title: "Cosmetics & Makeup",
      description: "Innovative formulas designed to enhance natural beauty with a flawless finish.",
      imageSrc: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80",
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
    <>
      <Navbar />
      <div className="min-h-screen pt-24 bg-background">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
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
            <h1 className="text-display mb-4">Discover Our Product Categories</h1>
            <p className="text-body-lg max-w-3xl mx-auto mb-8">
              At Solariis, we bring premium health, wellness, and beauty products to the market, 
              carefully curated to meet the needs of consumers and retailers.
            </p>
            <Button asChild size="lg" className="animate-fade-up">
              <a href="#categories">Explore our categories below!</a>
            </Button>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-20 bg-neutral-beige">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-16">Our Product Categories</h2>
            <p className="text-body text-center max-w-3xl mx-auto mb-12">
              We specialize in importing and distributing high-quality brands across the following categories:
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

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-16">Why Choose Solariis?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Ensure Authenticity & Quality – We bring internationally recognized, high-standard products.",
                "Support Retailers & Distributors – Providing a structured supply chain with reliable distribution.",
                "Comply with Local Regulations – Ensuring all products meet safety and regulatory requirements.",
                "Expand Brand Reach – Helping international brands establish a strong presence in Venezuela."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-accent hover:bg-accent-dark transition-colors">
                  <p className="text-body">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner With Us Section */}
        <section className="py-20 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6">Partner With Us</h2>
            <p className="text-body-lg max-w-2xl mx-auto mb-8">
              If you are a retailer, distributor, or brand looking to enter the market, 
              we are here to collaborate. Explore our product categories and discover how we can work together.
            </p>
            <div className="space-y-4">
              <p className="text-body-lg font-semibold">📩 Contact us today to learn more!</p>
              <Button asChild size="lg" variant="default">
                <Link to="/contact">Get in Touch 🚀</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
