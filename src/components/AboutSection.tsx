
import { Award, Users, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Kirboero Asset Management
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2018, Kirboero Asset Management is a boutique investment firm 
              specializing in technology-focused investment strategies. We are licensed by 
              the Securities and Futures Commission of Hong Kong (SFC) with a Type 9 license 
              for asset management.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our team combines extensive experience in technology sector analysis with 
              disciplined investment processes to deliver exceptional returns for our clients. 
              We serve institutional investors, family offices, and high-net-worth individuals 
              seeking exposure to transformative technology trends.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-kirboero-teal/10 flex items-center justify-center shrink-0 mr-3">
                  <Award className="h-5 w-5 text-kirboero-teal" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">SFC Licensed</h4>
                  <p className="text-gray-600 text-sm">Type 9 regulated entity</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-kirboero-teal/10 flex items-center justify-center shrink-0 mr-3">
                  <Users className="h-5 w-5 text-kirboero-teal" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Expert Team</h4>
                  <p className="text-gray-600 text-sm">Technology specialists</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-kirboero-teal/10 flex items-center justify-center shrink-0 mr-3">
                  <Shield className="h-5 w-5 text-kirboero-teal" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Risk Focused</h4>
                  <p className="text-gray-600 text-sm">Robust risk management</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-kirboero-teal/10 flex items-center justify-center shrink-0 mr-3">
                  <Target className="h-5 w-5 text-kirboero-teal" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Performance</h4>
                  <p className="text-gray-600 text-sm">Track record of excellence</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-kirboero-navy hover:bg-kirboero-navy/90">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div className="order-first lg:order-last">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Kirboero Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-48 w-48 bg-kirboero-teal rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 h-48 w-48 bg-kirboero-gold rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
