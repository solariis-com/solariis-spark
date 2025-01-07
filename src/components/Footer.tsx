import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-text">Solariis</h3>
            <p className="text-text-light">
              Bringing exceptional health and beauty products to the market.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-text">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-light hover:text-text transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-light hover:text-text transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-text-light hover:text-text transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-light hover:text-text transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-text">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-text-light">
                <Mail size={16} />
                <span>info@solariis.com</span>
              </li>
              <li className="flex items-center space-x-2 text-text-light">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-text-light">
                <MapPin size={16} />
                <span>123 Business Ave, Suite 100</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-text">Newsletter</h4>
            <p className="text-text-light">Stay updated with our latest news.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-text px-4 py-2 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-text-light">
            © {new Date().getFullYear()} Solariis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;