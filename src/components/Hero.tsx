
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-r from-kirboero-navy to-kirboero-darknavy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Investing in the 
              <span className="text-kirboero-gold"> Future </span>
              of Technology
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Kirboero Asset Management combines deep market expertise with innovative investment strategies to deliver exceptional returns through our flagship technology fund.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-kirboero-teal hover:bg-kirboero-teal/90 text-white">
                <Link to="/flagship-fund" className="flex items-center">
                  Explore Our Fund <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1642790551116-18e150f248e5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000"
                  alt="Technology Investments" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kirboero-navy/70 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                  <span className="font-bold text-kirboero-navy">+35.6%</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">YTD Performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
