
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FundFeatures from "@/components/FundFeatures";
import PortfolioHighlights from "@/components/PortfolioHighlights";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FundFeatures />
      <PortfolioHighlights />
      <PerformanceMetrics />
      <AboutSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
