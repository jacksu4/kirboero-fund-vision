
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const performanceData = {
  "1Y": [
    { month: "Jan", KAM: 8.2, "S&P 500": 6.1 },
    { month: "Feb", KAM: 10.5, "S&P 500": 7.8 },
    { month: "Mar", KAM: 9.3, "S&P 500": 6.5 },
    { month: "Apr", KAM: 12.7, "S&P 500": 8.9 },
    { month: "May", KAM: 14.2, "S&P 500": 9.3 },
    { month: "Jun", KAM: 11.9, "S&P 500": 8.5 },
    { month: "Jul", KAM: 16.3, "S&P 500": 10.2 },
    { month: "Aug", KAM: 18.7, "S&P 500": 12.4 },
    { month: "Sep", KAM: 21.2, "S&P 500": 13.5 },
    { month: "Oct", KAM: 23.9, "S&P 500": 14.8 },
    { month: "Nov", KAM: 27.4, "S&P 500": 16.3 },
    { month: "Dec", KAM: 35.6, "S&P 500": 19.2 },
  ],
  "3Y": [
    { year: "2021", KAM: 42.3, "S&P 500": 26.9 },
    { year: "2022", KAM: -12.4, "S&P 500": -19.4 },
    { year: "2023", KAM: 58.7, "S&P 500": 24.2 },
  ],
  "5Y": [
    { year: "2019", KAM: 38.4, "S&P 500": 28.9 },
    { year: "2020", KAM: 61.2, "S&P 500": 16.3 },
    { year: "2021", KAM: 42.3, "S&P 500": 26.9 },
    { year: "2022", KAM: -12.4, "S&P 500": -19.4 },
    { year: "2023", KAM: 58.7, "S&P 500": 24.2 },
  ],
};

const metrics = [
  { label: "Annualized Return (5Y)", value: "32.4%" },
  { label: "Sharpe Ratio", value: "1.82" },
  { label: "Beta", value: "1.24" },
  { label: "Alpha", value: "11.7%" },
  { label: "Max Drawdown", value: "18.6%" },
  { label: "Tracking Error", value: "7.8%" },
];

const PerformanceMetrics = () => {
  const [timeRange, setTimeRange] = useState<"1Y" | "3Y" | "5Y">("1Y");

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fund Performance
          </h2>
          <p className="text-lg text-gray-700">
            Consistent outperformance driven by our disciplined investment approach
            and technology expertise.
          </p>
        </div>

        <Card className="bg-white rounded-xl p-6 shadow-lg mb-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold">Performance vs Benchmark</h3>
            <div className="flex space-x-2">
              <Button
                variant={timeRange === "1Y" ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange("1Y")}
                className={timeRange === "1Y" ? "bg-kirboero-navy" : ""}
              >
                1 Year
              </Button>
              <Button
                variant={timeRange === "3Y" ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange("3Y")}
                className={timeRange === "3Y" ? "bg-kirboero-navy" : ""}
              >
                3 Years
              </Button>
              <Button
                variant={timeRange === "5Y" ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange("5Y")}
                className={timeRange === "5Y" ? "bg-kirboero-navy" : ""}
              >
                5 Years
              </Button>
            </div>
          </div>

          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={performanceData[timeRange]}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey={timeRange === "1Y" ? "month" : "year"}
                  tick={{ fill: "#666" }}
                />
                <YAxis
                  tickFormatter={(tick) => `${tick}%`}
                  tick={{ fill: "#666" }}
                />
                <Tooltip
                  formatter={(value) => [`${value}%`, undefined]}
                  labelFormatter={(label) => `${label}`}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="KAM"
                  stroke="#2CA6A4"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Kirboero Fund"
                />
                <Line
                  type="monotone"
                  dataKey="S&P 500"
                  stroke="#0A2342"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-md transition-shadow"
            >
              <h4 className="text-gray-600 mb-2">{metric.label}</h4>
              <p className="text-3xl font-bold text-kirboero-navy">
                {metric.value}
              </p>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500 text-center italic">
          Past performance is not indicative of future results. Performance data as of December 31, 2023.
        </p>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
