import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import CategoriesSection from "../components/sections/CategoriesSection";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default Index;