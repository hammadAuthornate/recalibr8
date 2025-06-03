"use client";

import {
  DollarSign,
  TrendingUp,
  Target,
  Activity,
  MoreHorizontal,
} from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    <div className="p-6 space-y-6">
      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Earned Today */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Earned Today</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$150.98</div>
            <div className="h-[80px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
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
          </CardContent>
        </Card>

        {/* Earned This Month */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Earned This Month
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,350.98</div>
            <div className="h-[80px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
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
          </CardContent>
        </Card>

        {/* Active Strategies */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Strategies
            </CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <div className="h-[80px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
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
          </CardContent>
        </Card>

        {/* Total Strategies */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Strategies
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">112</div>
            <div className="h-[80px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
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
          </CardContent>
        </Card>
      </div>

      {/* Your Strategies Table */}
      <Card>
        <CardHeader>
          <CardTitle>Your Strategies</CardTitle>
        </CardHeader>
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
