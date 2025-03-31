
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center px-4 py-16">
          <h1 className="text-8xl font-bold text-kirboero-navy mb-6">404</h1>
          <p className="text-3xl text-gray-700 mb-6">Page Not Found</p>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button className="bg-kirboero-navy hover:bg-kirboero-navy/90">
            <Link to="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" /> Return to Home
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
