
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-kirboero-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">
              <span className="text-kirboero-teal">Kirboero</span> Asset Management
            </h4>
            <p className="text-gray-300 mb-4">
              A licensed SFC Type 9 asset management company specializing in technology investments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-kirboero-teal transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-kirboero-teal transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-kirboero-teal transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-kirboero-teal transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/flagship-fund" className="text-gray-300 hover:text-kirboero-teal transition">
                  Flagship Fund
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-kirboero-teal transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-kirboero-teal transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-kirboero-teal transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-kirboero-teal transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-300 hover:text-kirboero-teal transition">
                  Investment Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/regulatory" className="text-gray-300 hover:text-kirboero-teal transition">
                  Regulatory Information
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-kirboero-teal shrink-0 mt-1" size={18} />
                <span className="text-gray-300">
                  Central Plaza, 18 Harbour Road, Wanchai, Hong Kong
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-kirboero-teal shrink-0" size={18} />
                <span className="text-gray-300">+852 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-kirboero-teal shrink-0" size={18} />
                <span className="text-gray-300">info@kirboero.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Kirboero Asset Management Limited. All rights reserved.
            <br />
            <span className="text-sm mt-2 block">
              Licensed by the Securities and Futures Commission of Hong Kong (SFC) - Type 9
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
