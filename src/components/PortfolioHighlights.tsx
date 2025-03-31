
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const companies = [
  {
    name: "Tesla, Inc.",
    ticker: "TSLA",
    sector: "Electric Vehicles & Clean Energy",
    description: "Leading electric vehicle manufacturer and clean energy company",
    allocation: 15.2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
  },
  {
    name: "NVIDIA Corporation",
    ticker: "NVDA",
    sector: "Semiconductors & AI",
    description: "Global leader in AI computing and graphics processing units",
    allocation: 14.7,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg"
  },
  {
    name: "Microsoft Corporation",
    ticker: "MSFT",
    sector: "Software & Cloud Services",
    description: "Leading provider of cloud computing and enterprise software solutions",
    allocation: 12.3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    name: "Apple Inc.",
    ticker: "AAPL",
    sector: "Consumer Electronics",
    description: "Global technology company specializing in consumer electronics and software",
    allocation: 11.8,
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  {
    name: "Amazon.com, Inc.",
    ticker: "AMZN",
    sector: "E-commerce & Cloud Services",
    description: "World's largest online retailer and leading cloud services provider",
    allocation: 10.5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    name: "Alphabet Inc.",
    ticker: "GOOGL",
    sector: "Internet Services & AI",
    description: "Parent company of Google and leading provider of internet-related services",
    allocation: 9.8,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  }
];

const PortfolioHighlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Portfolio Highlights
          </h2>
          <p className="text-lg text-gray-700">
            Our flagship fund invests in leading technology companies with strong competitive positions and significant growth potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 flex-shrink-0 bg-white rounded-md flex items-center justify-center">
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className="h-6 object-contain"
                      />
                    </div>
                    <div className="flex items-center space-x-1 text-kirboero-teal font-medium text-sm">
                      <span>{company.ticker}</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{company.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{company.sector}</p>
                  <p className="text-gray-700 mb-4 text-sm">{company.description}</p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Portfolio Allocation</span>
                    <span className="text-kirboero-navy font-bold">{company.allocation}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            * Portfolio allocations as of latest quarter. Holdings subject to change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHighlights;
