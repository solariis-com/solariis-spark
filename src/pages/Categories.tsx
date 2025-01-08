import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Categories = () => {
  const { language } = useLanguage();
  const t = translations[language];

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
              {/* Beauty & Skincare */}
              <Card className="bg-white/80 backdrop-blur overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="h-[300px] md:h-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80"
                      alt="Beauty and Skincare Products"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardHeader>
                      <CardTitle className="text-h3">Beauty & Skincare</CardTitle>
                      <CardDescription className="text-body">
                        Enhance natural beauty with top-tier skincare solutions designed to nourish, protect, and rejuvenate the skin.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4 text-body">
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Hydration & Anti-Aging:</span> Formulated with advanced ingredients like hyaluronic acid, retinol, and peptides to deeply hydrate, improve elasticity, and reduce fine lines.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Deep Cleansing & Purifying:</span> Clay masks, exfoliators, and gentle cleansers that help remove impurities, minimize pores, and maintain balanced skin.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Brightening & Even-Tone Solutions:</span> Skincare infused with vitamin C, niacinamide, and botanical extracts to promote a radiant complexion and even skin tone.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Sun Protection:</span> Lightweight, high-SPF sun creams offering broad-spectrum UV protection, keeping skin shielded from sun damage while maintaining hydration.
                        </li>
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Health & Wellness */}
              <Card className="bg-white/80 backdrop-blur overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="h-[300px] md:h-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
                      alt="Health and Wellness Products"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardHeader>
                      <CardTitle className="text-h3">Health & Wellness</CardTitle>
                      <CardDescription className="text-body">
                        Prioritizing well-being with trusted health products that enhance daily life and overall vitality.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4 text-body">
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Nutritional Supplements:</span> High-quality vitamins, minerals, and herbal supplements to support immune health, energy, and overall well-being.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Stress Relief & Relaxation:</span> Aromatherapy, essential oils, and self-care products designed to promote relaxation, reduce stress, and improve sleep quality.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Detox & Gut Health:</span> Herbal blends, fiber-rich supplements, and probiotics to improve digestion, aid metabolism, and support internal cleansing.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Muscle Recovery & Joint Health:</span> Products designed for post-workout recovery, joint flexibility, and overall mobility support.
                        </li>
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Personal Care */}
              <Card className="bg-white/80 backdrop-blur overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="h-[300px] md:h-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80"
                      alt="Personal Care Products"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardHeader>
                      <CardTitle className="text-h3">Personal Care</CardTitle>
                      <CardDescription className="text-body">
                        Everyday essentials for a healthier and more confident lifestyle.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4 text-body">
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Hair Care & Treatments:</span> Nourishing shampoos, conditioners, and intensive treatments infused with collagen, keratin, and ceramides to restore strength and shine.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Body Care & Hydration:</span> Luxurious lotions, body scrubs, and moisturizing treatments enriched with shea butter, aloe vera, and botanical extracts to keep skin soft and smooth.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Oral Hygiene & Personal Care:</span> Premium toothpaste, mouthwashes, and hygiene essentials to ensure a fresh, clean, and healthy routine.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Frizz Control & Styling:</span> Leave-in treatments, styling sprays, and curl enhancers to maintain smooth, manageable hair with lasting hold.
                        </li>
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Cosmetics & Makeup */}
              <Card className="bg-white/80 backdrop-blur overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="h-[300px] md:h-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80"
                      alt="Cosmetics and Makeup Products"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardHeader>
                      <CardTitle className="text-h3">Cosmetics & Makeup</CardTitle>
                      <CardDescription className="text-body">
                        Innovative formulas designed to enhance natural beauty with a flawless finish.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4 text-body">
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Long-Lasting Foundations & Concealers:</span> Lightweight, buildable coverage that evens out skin tone while keeping skin hydrated.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Lip Care & Color:</span> Hydrating lip balms, vibrant lipsticks, and high-shine glosses for long-lasting color and nourishment.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Eye Makeup & Definition:</span> High-pigment eyeshadows, waterproof mascaras, and precise eyeliners for an expressive, bold look.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">Makeup Setting & Skincare Fusion:</span> Setting sprays, primers, and hybrid makeup products infused with skincare benefits to enhance and protect the skin.
                        </li>
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
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