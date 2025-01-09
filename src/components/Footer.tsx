import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle, MessageSquare } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import LogoSvg from "../assets/logo.svg";
import { useState, FormEvent } from "react";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setError("Incorrect email or password");
    } catch (err) {
      setError("An error occurred during login");
      console.error(err);
    }
  };

  return (
    <footer className="bg-accent mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-light hover:text-text transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-light hover:text-text transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-text-light hover:text-text transition-colors">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-light hover:text-text transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-text">{t.footer.contact}</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-text-light">
                <Mail size={16} />
                <span>info@solariis.com</span>
              </li>
              <li className="flex items-center space-x-2 text-text-light">
                <Phone size={16} />
                <span>+58 (412) 0907684</span>
              </li>
              <li className="flex items-center space-x-2 text-text-light">
                <MapPin size={16} />
                <span>Nueva Esparta, Campiña, T-5, Venezuela</span>
              </li>
              <li className="flex items-center space-x-2 text-text-light">
                <MessageCircle size={16} />
                <a 
                  href="https://wa.me/584120907684" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-text transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center space-x-2 text-text-light">
                <MessageSquare size={16} />
                <a 
                  href="https://t.me/solariis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-text transition-colors"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* Login Form section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text">Distributor Login</h4>
            <p className="text-text-light">Access your distributor or reseller account</p>
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-text px-4 py-2 rounded-lg transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-center space-x-4 mb-4">
            <div className="flex items-end">
              <img src={LogoSvg} alt="Solariis Logo" className="w-32 h-auto" />
            </div>
          </div>
          <p className="text-center text-text-light text-body-sm">
            © 2025 Solariis Venezuela C.A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
