"use client";

import { Search, Filter, SortAsc, Bookmark } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Marketplace() {
  // Sample chart data for different strategies
  const generateChartData = () => {
    return Array.from({ length: 7 }, (_, i) => ({
      value: Math.random() * 100 + 50,
    }));
  };

  const strategies = [
    {
      id: 1,
      name: "Alpha Scalper",
      description: "High-frequency scalping strategy",
      returns: "+24.5%",
      subscribers: "1,247",
      rating: "4.8",
      price: "$49/month",
      chartData: generateChartData(),
    },
    {
      id: 2,
      name: "Momentum Master",
      description: "Trend-following momentum strategy",
      returns: "+18.2%",
      subscribers: "892",
      rating: "4.6",
      price: "$39/month",
      chartData: generateChartData(),
    },
    {
      id: 3,
      name: "Whale Sniper",
      description: "Large order detection and following",
      returns: "+31.7%",
      subscribers: "2,156",
      rating: "4.9",
      price: "$79/month",
      chartData: generateChartData(),
    },
    {
      id: 4,
      name: "DIP Hunter",
      description: "Buy the dip strategy with ML signals",
      returns: "+12.8%",
      subscribers: "634",
      rating: "4.3",
      price: "$29/month",
      chartData: generateChartData(),
    },
    {
      id: 5,
      name: "Arbitrage Ghost",
      description: "Cross-exchange arbitrage opportunities",
      returns: "+28.9%",
      subscribers: "3,421",
      rating: "4.7",
      price: "$99/month",
      chartData: generateChartData(),
    },
    {
      id: 6,
      name: "Grid Master",
      description: "Advanced grid trading algorithm",
      returns: "+15.4%",
      subscribers: "756",
      rating: "4.4",
      price: "$35/month",
      chartData: generateChartData(),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>

        {/* Search and Filters */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search strategies..." className="pl-10 w-64" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <SortAsc className="w-4 h-4 mr-2" />
            Sort
          </Button>
        </div>
      </div>

      {/* Strategy Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strategies.map((strategy) => (
          <Card key={strategy.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{strategy.name}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    {strategy.description}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
              <Badge className="w-fit bg-emerald-500 hover:bg-emerald-500">
                {strategy.returns}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Chart */}
              <div className="h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={strategy.chartData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Subscribers</p>
                  <p className="font-semibold">{strategy.subscribers}</p>
                </div>
                <div>
                  <p className="text-gray-500">Rating</p>
                  <p className="font-semibold">⭐ {strategy.rating}</p>
                </div>
              </div>

              {/* Price and Subscribe */}
              <div className="flex items-center justify-between pt-2">
                <span className="font-semibold text-lg">{strategy.price}</span>
                <Button
                  size="sm"
                  className="bg-emerald-500 hover:bg-emerald-600"
                >
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-6">
        <Button variant="outline" className="px-8">
          Load More Strategies
        </Button>
      </div>
    </div>
  );
}
