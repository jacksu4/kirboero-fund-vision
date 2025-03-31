
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FundFeatures from "@/components/FundFeatures";
import PortfolioHighlights from "@/components/PortfolioHighlights";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import Testimonials from "@/components/Testimonials";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const FlagshipFundPage = () => {
  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-r from-kirboero-navy to-kirboero-darknavy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              Kirboero Flagship <span className="text-kirboero-gold">Tech</span> Fund
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in">
              Our flagship fund provides targeted exposure to innovative technology 
              companies with significant growth potential across global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-kirboero-teal hover:bg-kirboero-teal/90 text-white">
                Download Fund Factsheet
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Investment Approach
              </Button>
            </div>
            
            <div className="mt-24 animate-fade-in">
              <button 
                onClick={scrollToSection} 
                className="text-white hover:text-kirboero-teal transition-colors"
              >
                <ArrowDown className="mx-auto h-8 w-8 animate-bounce" />
                <span className="sr-only">Scroll down</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fund Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fund Overview
            </h2>
            <p className="text-lg text-gray-700">
              A growth-oriented equity fund focused on technology sector leaders and innovators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-kirboero-lightblue rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Fund Type</h3>
              <p className="text-gray-700">Equity - Technology Sector</p>
            </div>
            
            <div className="bg-kirboero-lightblue rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Inception Date</h3>
              <p className="text-gray-700">January 2019</p>
            </div>
            
            <div className="bg-kirboero-lightblue rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">AUM</h3>
              <p className="text-gray-700">$475 Million</p>
            </div>
            
            <div className="bg-kirboero-lightblue rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Benchmark</h3>
              <p className="text-gray-700">NASDAQ-100 Index</p>
            </div>
            
            <div className="bg-kirboero-lightblue rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Management Fee</h3>
              <p className="text-gray-700">1.25% per annum</p>
            </div>
            
            <div className="bg-kirboero-lightblue rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Performance Fee</h3>
              <p className="text-gray-700">15% over high water mark</p>
            </div>
          </div>
        </div>
      </section>
      
      <FundFeatures />
      <PortfolioHighlights />
      <PerformanceMetrics />
      
      {/* Investment Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investment Process
            </h2>
            <p className="text-lg text-gray-700">
              Our disciplined approach combines fundamental research with 
              quantitative analysis to identify exceptional investment opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="flex">
              <div className="h-12 w-12 rounded-full bg-kirboero-navy flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-3">Idea Generation</h3>
                <p className="text-gray-700">
                  We scan the technology universe for companies with disruptive potential,
                  leveraging our network of industry contacts, proprietary screening tools,
                  and thematic research to identify candidates.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="h-12 w-12 rounded-full bg-kirboero-navy flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-3">Fundamental Analysis</h3>
                <p className="text-gray-700">
                  Our team conducts rigorous research including financial modeling,
                  management interviews, competitive analysis, and technological assessment
                  to evaluate long-term growth potential.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="h-12 w-12 rounded-full bg-kirboero-navy flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-3">Valuation & Risk Assessment</h3>
                <p className="text-gray-700">
                  We employ multiple valuation methodologies and stress testing
                  to determine intrinsic value, appropriate entry points, and understand
                  potential downside risks for each investment.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="h-12 w-12 rounded-full bg-kirboero-navy flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-3">Portfolio Construction</h3>
                <p className="text-gray-700">
                  Investments are sized according to conviction level, risk/reward profile,
                  and correlation with existing holdings to create an optimal portfolio
                  that balances growth potential with risk management.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="h-12 w-12 rounded-full bg-kirboero-navy flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
                5
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-3">Ongoing Monitoring</h3>
                <p className="text-gray-700">
                  We continuously evaluate portfolio companies against our investment thesis,
                  track key performance indicators, and stay alert to changing industry dynamics
                  and competitive threats.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="h-12 w-12 rounded-full bg-kirboero-navy flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
                6
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-3">Risk Management</h3>
                <p className="text-gray-700">
                  Our disciplined framework includes position size limits, sector exposure controls,
                  regular stress testing, and predefined exit strategies to protect capital
                  and optimize returns through market cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-kirboero-navy to-kirboero-darknavy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Invest in the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join institutional investors and high-net-worth individuals who trust 
              Kirboero to manage their technology investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-kirboero-teal hover:bg-kirboero-teal/90 text-white">
                Request Fund Documents
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FlagshipFundPage;
