
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-kirboero-navy">
              <span className="text-kirboero-teal">Kirboero</span> Asset Management
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-kirboero-navy hover:text-kirboero-teal transition font-medium"
            >
              Home
            </Link>
            <Link
              to="/flagship-fund"
              className="text-kirboero-navy hover:text-kirboero-teal transition font-medium"
            >
              Flagship Fund
            </Link>
            <Link
              to="/about"
              className="text-kirboero-navy hover:text-kirboero-teal transition font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-kirboero-navy hover:text-kirboero-teal transition font-medium"
            >
              Contact
            </Link>
            <Button className="bg-kirboero-teal hover:bg-kirboero-teal/90 text-white">
              Investor Login
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-kirboero-navy focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md mt-2 py-4 px-4 rounded-b-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-kirboero-navy hover:text-kirboero-teal transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/flagship-fund"
                className="text-kirboero-navy hover:text-kirboero-teal transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Flagship Fund
              </Link>
              <Link
                to="/about"
                className="text-kirboero-navy hover:text-kirboero-teal transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-kirboero-navy hover:text-kirboero-teal transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-kirboero-teal hover:bg-kirboero-teal/90 text-white w-full">
                Investor Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
