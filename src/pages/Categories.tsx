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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {/* Beauty & Skincare */}
              <Card className="bg-white/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-h3">Beauty & Skincare</CardTitle>
                  <CardDescription className="text-body">
                    Enhance natural beauty with top-tier skincare solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-body">
                    <li>• Facial creams, serums & treatments</li>
                    <li>• Cleansers & toners</li>
                    <li>• Masks & exfoliants</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Health & Wellness */}
              <Card className="bg-white/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-h3">Health & Wellness</CardTitle>
                  <CardDescription className="text-body">
                    Prioritizing well-being with trusted health products.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-body">
                    <li>• Nutritional supplements & vitamins</li>
                    <li>• Herbal & natural remedies</li>
                    <li>• Self-care & relaxation products</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Personal Care */}
              <Card className="bg-white/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-h3">🛁 Personal Care</CardTitle>
                  <CardDescription className="text-body">
                    Everyday essentials for a healthier lifestyle.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-body">
                    <li>• Hair care (shampoos, conditioners, treatments)</li>
                    <li>• Body care (lotions, scrubs, deodorants)</li>
                    <li>• Oral hygiene & personal hygiene</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Cosmetics & Makeup */}
              <Card className="bg-white/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-h3">💄 Cosmetics & Makeup</CardTitle>
                  <CardDescription className="text-body">
                    Innovative formulas for radiant beauty.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-body">
                    <li>• Foundations, concealers & powders</li>
                    <li>• Lipsticks, glosses & eye makeup</li>
                    <li>• Makeup removers & setting sprays</li>
                  </ul>
                </CardContent>
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