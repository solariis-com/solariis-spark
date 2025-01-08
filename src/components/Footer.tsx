import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import LogoSvg from "../assets/logo.svg";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-accent mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-text">{t.footer.company}</h3>
            <LogoSvg className="w-32 h-auto" />
            <p className="text-text-light">
              LIVE RADIANTLY
            </p>
          </div>

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
                <Link to="/products" className="text-text-light hover:text-text transition-colors">
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
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-text">{t.footer.newsletter.title}</h4>
            <p className="text-text-light">{t.footer.newsletter.description}</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-text px-4 py-2 rounded-lg transition-colors"
              >
                {t.footer.newsletter.subscribe}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-text-light">
            © 2025 Solariis Venezuela C.A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
