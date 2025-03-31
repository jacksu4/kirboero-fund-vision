
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "Kirboero's technology-focused strategy has consistently delivered superior returns for our institutional portfolio. Their deep understanding of the tech sector sets them apart from other asset managers.",
    author: "Sarah Chen",
    title: "CIO, Pacific Investments"
  },
  {
    quote:
      "We've been impressed with Kirboero's disciplined approach to selecting high-growth tech companies. Their rigorous research process and risk management framework have proven effective through various market cycles.",
    author: "Michael Johnson",
    title: "Director of Investments, Capital Trust"
  },
  {
    quote:
      "As a long-term investor in Kirboero's flagship fund, I've witnessed firsthand their ability to identify transformative technology trends ahead of the market, resulting in excellent portfolio performance.",
    author: "David Wong",
    title: "Head of Alternative Investments, Horizon Partners"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-kirboero-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300">
              Trusted by institutional investors and high-net-worth individuals worldwide
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden md:block">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                <ArrowLeft size={20} />
              </Button>
            </div>

            <div className="bg-kirboero-navy/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12">
              <Quote className="text-kirboero-gold opacity-30 h-16 w-16 mb-6" />
              
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-medium text-white">
                    {testimonials[current].author}
                  </p>
                  <p className="text-kirboero-teal">
                    {testimonials[current].title}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden md:block">
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-8 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10"
            >
              <ArrowRight size={20} />
            </Button>
          </div>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  current === index ? "bg-kirboero-teal" : "bg-white/30"
                }`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
