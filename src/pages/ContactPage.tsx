
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-kirboero-navy to-kirboero-darknavy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              Contact <span className="text-kirboero-teal">Kirboero</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in">
              We're here to answer your questions and discuss how our investment
              solutions can help you achieve your financial goals.
            </p>
          </div>
        </div>
      </div>
      
      {/* Quick Contact Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-kirboero-lightblue rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-kirboero-navy rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-bold mb-2">Visit Us</h3>
              <p className="text-gray-700">
                Central Plaza, 18 Harbour Road, Wanchai, Hong Kong
              </p>
            </div>
            
            <div className="bg-kirboero-lightblue rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-kirboero-navy rounded-full flex items-center justify-center mb-4">
                <Phone className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-gray-700">+852 1234 5678</p>
              <p className="text-gray-700">+852 8765 4321</p>
            </div>
            
            <div className="bg-kirboero-lightblue rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-kirboero-navy rounded-full flex items-center justify-center mb-4">
                <Mail className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-gray-700">info@kirboero.com</p>
              <p className="text-gray-700">investor.relations@kirboero.com</p>
            </div>
            
            <div className="bg-kirboero-lightblue rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-kirboero-navy rounded-full flex items-center justify-center mb-4">
                <Clock className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-bold mb-2">Business Hours</h3>
              <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-700">Hong Kong Time (HKT)</p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-700">
              Our office is located in the heart of Hong Kong's financial district.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9915024968647!2d114.17152347596173!3d22.281197179666142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005a22a33e3d%3A0x28ae6d200496e742!2sCentral%20Plaza%2C%2018%20Harbour%20Rd%2C%20Wan%20Chai%2C%20Hong%20Kong!5e0!3m2!1sen!2sus!4v1705410095459!5m2!1sen!2sus"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
