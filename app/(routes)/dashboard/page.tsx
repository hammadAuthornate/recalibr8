"use client";

import {
  MoreHorizontal,
  CircleDollarSign,
  ArrowUpRight,
  Bot,
} from "lucide-react";
import {
  ResponsiveContainer,
  Area,
  Tooltip,
  AreaChart,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { convertToAreaChartData } from "@/lib/utils";

export default function Dashboard() {
  const chartData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
    { name: "Jun", value: 700 },
  ];

  const strategies = [
    {
      name: "Alpha Scalper",
      date: "04-03-2025",
      earned: "$348",
      activeSince: "30+ Days",
      status: "Published",
      payment: "Active",
    },
    {
      name: "Momentum Master",
      date: "12-02-2025",
      earned: "$1230",
      activeSince: "2 months",
      status: "Published",
      payment: "Active",
    },
    {
      name: "Whale Sniper",
      date: "28-01-2025",
      earned: "$2890",
      activeSince: "3 months",
      status: "Published",
      payment: "Active",
    },
    {
      name: "Dip Hunter",
      date: "15-01-2025",
      earned: "$819",
      activeSince: "4 days",
      status: "Pending",
      payment: "Under Review",
    },
    {
      name: "Arbitrage Ghost",
      date: "08-01-2025",
      earned: "$4712",
      activeSince: "3 months",
      status: "Published",
      payment: "Active",
    },
    {
      name: "Trend Surfer",
      date: "22-12-2024",
      earned: "$563",
      activeSince: "19 days",
      status: "Pending",
      payment: "Under Review",
    },
    {
      name: "Subway Master",
      date: "18-12-2024",
      earned: "$892",
      activeSince: "25 days",
      status: "Published",
      payment: "Active",
    },
  ];

  const getStatusBadge = (status: string) => {
    if (status === "Published") {
      return <Badge variant="secondary">Published</Badge>;
    }
    return <Badge variant="outline">Pending</Badge>;
  };

  const getPaymentBadge = (payment: string) => {
    if (payment === "Active") {
      return (
        <Badge className="bg-emerald-500 hover:bg-emerald-500">Active</Badge>
      );
    }
    return <Badge variant="outline">Under Review</Badge>;
  };

  return (
    <div className="p-6 space-y-3">
      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Earned Today */}
        <Card className="justify-between">
          <div>
            <div className="flex justify-between px-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                <CircleDollarSign className="h-5 w-5 text-white" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black/70">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
            <div className="px-3">
              <div className="text-3xl font-[900] tracking-[-1px]">$150.98</div>
              <div className="text-xl opacity-50 tracking-[-1px]">
                Earned Today
              </div>
            </div>
          </div>
          <div className="h-[120px] mt-4 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={convertToAreaChartData(chartData)}
                margin={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                }}
              >
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#16b191"
                  fill="#16b1926e"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="justify-between">
          <div>
            <div className="flex justify-between px-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                <CircleDollarSign className="h-5 w-5 text-white" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black/70">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
            <div className="px-3">
              <div className="text-3xl font-[900] tracking-[-1px]">
                $1,350.98
              </div>
              <div className="text-xl opacity-50 tracking-[-1px]">
                Earned This Month
              </div>
            </div>
          </div>
          <div className="h-[120px] mt-4 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={convertToAreaChartData(chartData)}
                margin={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                }}
              >
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#16b191"
                  fill="#16b1926e"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="bg-gradient-to-b from-secondary to-primary justify-between">
          <div className="flex justify-between px-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="px-4 py-4 text-white">
            <div className="text-3xl font-[900] tracking-[-1px]">23</div>
            <div className="text-xl opacity-50 tracking-[-1px]">
              Active Strategies
            </div>
          </div>
        </Card>
        <Card className="justify-between">
          <div className="flex justify-between px-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black/70">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="text-3xl font-[900] tracking-[-1px]">112</div>
            <div className="text-xl opacity-50 tracking-[-1px]">
              Total Strategies
            </div>
          </div>
        </Card>
      </div>
      <h2 className="text-2xl font-[900] my-4 tracking-[-1px]">
        Your Strategies
      </h2>
      <Card>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Strategy</th>
                  <th className="text-left py-3 px-4">Earned</th>
                  <th className="text-left py-3 px-4">Active since</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Payment</th>
                  <th className="text-left py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {strategies.map((strategy, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{strategy.name}</p>
                        <p className="text-sm text-gray-500">{strategy.date}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium">{strategy.earned}</td>
                    <td className="py-3 px-4">{strategy.activeSince}</td>
                    <td className="py-3 px-4">
                      {getStatusBadge(strategy.status)}
                    </td>
                    <td className="py-3 px-4">
                      {getPaymentBadge(strategy.payment)}
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
