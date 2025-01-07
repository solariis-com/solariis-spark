import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
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

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-light">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                style={{ animationDelay: `${(item - 1) * 0.2}s` }}
              >
                <div className="aspect-square bg-accent rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-text-light">Coming Soon</span>
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">Product {item}</h3>
                <p className="text-text-light">
                  Premium health and beauty products coming to our portfolio soon.
                </p>
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