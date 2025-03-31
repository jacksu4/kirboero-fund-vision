
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  BarChart, 
  Search, 
  Scale 
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Growth-Focused",
    description:
      "Our flagship fund targets high-growth technology companies with sustainable competitive advantages and strong market positions."
  },
  {
    icon: Search,
    title: "Rigorous Research",
    description:
      "Our investment decisions are backed by in-depth fundamental analysis and proprietary research methodologies."
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Sophisticated risk assessment frameworks to protect capital while maximizing returns across market cycles."
  },
  {
    icon: BarChart,
    title: "Data-Driven",
    description:
      "Leveraging advanced analytics and alternative data sources to identify investment opportunities ahead of the market."
  },
  {
    icon: Scale,
    title: "Diversification",
    description:
      "Strategic allocation across technology sub-sectors to balance growth potential with portfolio resilience."
  },
  {
    icon: Zap,
    title: "Active Management",
    description:
      "Dynamic portfolio adjustments to capitalize on evolving market conditions and technological trends."
  }
];

const FundFeatures = () => {
  return (
    <section className="py-20 bg-kirboero-lightblue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Flagship Fund
          </h2>
          <p className="text-lg text-gray-700">
            Our technology-focused investment approach combines deep industry expertise 
            with disciplined processes to deliver consistent long-term returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-kirboero-teal/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="text-kirboero-teal" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundFeatures;
