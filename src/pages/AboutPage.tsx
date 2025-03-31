
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import { Shield, Award, TrendingUp, Users, BriefcaseBusiness } from "lucide-react";

const AboutPage = () => {
  const team = [
    {
      name: "David Chen",
      title: "Founder & Chief Investment Officer",
      bio: "With over 20 years of experience in technology investments, David founded Kirboero Asset Management in 2018. Previously, he was a Managing Director at Goldman Sachs Asset Management, overseeing tech sector investments across Asia.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Sarah Wong",
      title: "Portfolio Manager",
      bio: "Sarah brings 15 years of investment experience specializing in semiconductor and software sectors. Prior to joining Kirboero, she was a Senior Analyst at Fidelity International and holds a CFA designation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Michael Zhang",
      title: "Head of Research",
      bio: "Michael leads our research team with deep expertise in technology sector analysis. He previously worked at Morgan Stanley's technology investment banking division and holds an MBA from Harvard Business School.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Jennifer Liu",
      title: "Chief Operating Officer",
      bio: "Jennifer oversees operations, compliance, and risk management. She brings 18 years of experience from her previous roles at BlackRock and the Securities and Futures Commission of Hong Kong.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-kirboero-navy to-kirboero-darknavy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              About <span className="text-kirboero-teal">Kirboero</span> Asset Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in">
              A boutique asset management firm specializing in technology investments
              with an unwavering commitment to excellence and innovation.
            </p>
          </div>
        </div>
      </div>
      
      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Company
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Kirboero Asset Management was founded in 2018 with a clear mission: to provide 
                investors with exceptional returns through specialized technology-focused 
                investment strategies. Licensed by the Securities and Futures Commission of 
                Hong Kong (SFC Type 9), we combine deep sector expertise with disciplined 
                investment processes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our flagship fund focuses on companies at the forefront of technological 
                innovation across various sectors, including artificial intelligence, cloud 
                computing, electric vehicles, semiconductor technology, and digital transformation.
              </p>
              <p className="text-lg text-gray-700">
                Based in Hong Kong with a global investment reach, we serve institutional 
                investors, family offices, and high-net-worth individuals seeking exposure 
                to transformative technology trends through actively managed strategies.
              </p>
            </div>
            
            <div className="order-first lg:order-last">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Kirboero Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kirboero-navy/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-medium text-lg">
                    Kirboero Headquarters - Central Plaza, Hong Kong
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-kirboero-lightblue">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-700">
              These core principles guide everything we do at Kirboero Asset Management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-kirboero-navy rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-700">
                We operate with unwavering ethical standards, transparency, and always 
                place our clients' interests first in every decision we make.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-kirboero-navy rounded-lg flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-700">
                We pursue the highest standards in investment research, portfolio 
                management, and client service, continuously striving to improve.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-kirboero-navy rounded-lg flex items-center justify-center mx-auto mb-6">
                <BriefcaseBusiness className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-700">
                We embrace forward-thinking in our investment approaches, seeking 
                emerging trends and applying creative solutions to complex challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-700">
              Meet the experienced professionals who guide our investment strategy and operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="rounded-xl overflow-hidden aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-kirboero-teal font-medium mb-3">{member.title}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Regulatory Information */}
      <section className="py-20 bg-kirboero-lightblue">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Regulatory Information
            </h2>
            <p className="text-lg text-gray-700">
              We maintain the highest standards of regulatory compliance and transparency.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <Award className="text-kirboero-teal mr-4" size={28} />
              <h3 className="text-xl font-bold">SFC Type 9 Licensed</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Kirboero Asset Management Limited is licensed by the Securities and Futures 
              Commission of Hong Kong (SFC) for Type 9 regulated activity (Asset Management) 
              under the Securities and Futures Ordinance (SFO).
            </p>
            <p className="text-gray-700 mb-6">
              License Number: AXX123 (for illustration purposes only)
            </p>
            <p className="text-gray-700">
              We are committed to operating with the highest standards of integrity and 
              compliance with all applicable regulations. Our robust governance framework 
              ensures that we meet our fiduciary obligations to clients at all times.
            </p>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
