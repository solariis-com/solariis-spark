import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  const categories = [
    {
      title: "Skincare",
      description: "Premium skincare solutions including moisturizers, serums, cleansers, and treatments.",
      items: ["Moisturizers & Creams", "Serums & Treatments", "Cleansers & Toners", "Sunscreens"],
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      title: "Haircare",
      description: "Professional haircare products for all hair types and concerns.",
      items: ["Shampoos & Conditioners", "Hair Masks", "Oils & Serums", "Styling Products"],
      image: "/lovable-uploads/98af4ef5-abb3-49be-b3b8-f7d69d917f30.png"
    },
    {
      title: "Wellness & Self-Care",
      description: "Holistic wellness solutions for mind, body, and soul.",
      items: ["Body Care", "Essential Oils", "Supplements", "Relaxation Aids"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      title: "Makeup & Beauty",
      description: "Essential beauty products for a flawless, natural look.",
      items: ["BB & CC Creams", "Primers", "Lip Care", "Eye Care"],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    },
    {
      title: "Beauty Tools",
      description: "Innovative beauty tools and accessories for enhanced skincare routines.",
      items: ["Facial Rollers", "LED Devices", "Styling Tools", "Applicators"],
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
    },
    {
      title: "Eco-Friendly Beauty",
      description: "Sustainable and environmentally conscious beauty solutions.",
      items: ["Organic Products", "Zero-Waste", "Cruelty-Free", "Clean Beauty"],
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-light to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text mb-6">
              Elevating Health & Beauty Brands
            </h1>
            <p className="text-xl text-text-light mb-8 max-w-2xl mx-auto">
              We connect exceptional health and beauty products with the right partners and distributors.
            </p>
            <div className="space-x-4">
              <Link
                to="/contact"
                className="inline-block bg-primary hover:bg-primary-dark text-text px-8 py-3 rounded-lg transition-colors"
              >
                Partner with Us
              </Link>
              <Link
                to="/about"
                className="inline-block bg-white hover:bg-gray-50 text-text px-8 py-3 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <h3 className="text-xl font-semibold text-text mb-4">For Brands</h3>
              <p className="text-text-light mb-4">
                We help exceptional health and beauty brands reach their full potential in new markets.
              </p>
              <Link
                to="/contact"
                className="text-text hover:text-text-light transition-colors"
              >
                Learn more →
              </Link>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold text-text mb-4">For Distributors</h3>
              <p className="text-text-light mb-4">
                Access premium health and beauty products from vetted, innovative brands.
              </p>
              <Link
                to="/contact"
                className="text-text hover:text-text-light transition-colors"
              >
                Learn more →
              </Link>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-semibold text-text mb-4">Our Promise</h3>
              <p className="text-text-light mb-4">
                Quality, transparency, and excellence in every partnership we build.
              </p>
              <Link
                to="/about"
                className="text-text hover:text-text-light transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text mb-8">Our Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src={`${category.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={category.title}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">{category.title}</h3>
                <p className="text-text-light mb-4 text-sm">{category.description}</p>
                <ul className="space-y-2 text-sm text-text-light">
                  {category.items.map((item, itemIndex) => (
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