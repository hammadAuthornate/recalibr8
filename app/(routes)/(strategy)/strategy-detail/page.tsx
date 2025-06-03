"use client";

import {
  ArrowLeft,
  DollarSign,
  Calendar,
  Activity,
  Settings as SettingsIcon,
} from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function StrategyDetail() {
  const router = useRouter();

  // Sample chart data
  const earningsData = [
    { value: 60 },
    { value: 65 },
    { value: 70 },
    { value: 68 },
    { value: 75 },
    { value: 80 },
    { value: 78 },
  ];

  const monthlyData = [
    { value: 450 },
    { value: 480 },
    { value: 520 },
    { value: 510 },
    { value: 530 },
    { value: 540 },
    { value: 535 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="p-2"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Alpha Scalper</h1>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Earned Today */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">$80.07</p>
                <p className="text-sm text-gray-500">Earned Today</p>
              </div>
            </div>
            <div className="mt-4 h-16">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={earningsData}>
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
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">$530.98</p>
                <p className="text-sm text-gray-500">Earned This Month</p>
              </div>
            </div>
            <div className="mt-4 h-16">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
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

        {/* Status */}
        <Card className="bg-blue-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-lg font-bold">Published</p>
                <p className="text-sm text-white/80">Status</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold">04-03-2025</p>
              <p className="text-sm text-white/80">Published At</p>
            </div>
          </CardContent>
        </Card>

        {/* Active Period */}
        <Card className="bg-emerald-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-lg font-bold">Active</p>
                <p className="text-sm text-white/80">Payment</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold">30+ Days</p>
              <p className="text-sm text-white/80">Active since</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Configuration Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">
            Configure
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Active Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base font-medium">Active</Label>
              <p className="text-sm text-gray-500">
                Turn your strategy on or off
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          {/* Access Settings */}
          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium">Access</Label>
              <p className="text-sm text-gray-500">
                Decide who can access your strategy
              </p>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                className="bg-emerald-500 text-white border-emerald-500"
              >
                PRIVATE
              </Button>
              <Button variant="outline">GATED</Button>
              <Button variant="outline">PUBLIC</Button>
            </div>
          </div>

          {/* Domain */}
          <div className="space-y-2">
            <Label className="text-base font-medium">Domain</Label>
            <p className="text-sm text-gray-500">
              Set a custom domain or host under recalibr8
            </p>
            <Input
              placeholder="https://www.yourdomain.com"
              className="max-w-md"
            />
          </div>
        </CardContent>
      </Card>

      {/* Payouts Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">
            Payouts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Account Name</span>
                <span className="text-gray-900">••••••••</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Account Type</span>
                <span className="text-gray-900">••••••••</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Account Number</span>
                <span className="text-gray-900">••••••••</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Account Location</span>
                <span className="text-gray-900">••••••••</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Weekly Subscription Card */}
              <Card className="bg-blue-500 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Weekly Subscription</h3>
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/80 mb-2">
                    Your users will access the Bot with subscription
                  </p>
                  <p className="text-sm text-white/80">
                    You can set up some other limits
                  </p>
                  <p className="text-xs text-white/60 mt-2">Custom Domain</p>
                </CardContent>
              </Card>

              {/* Usage Limits Card */}
              <Card className="border-2 border-gray-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Usage Limits
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Can accept the Usage Limits Payments
                  </p>
                  <p className="text-sm text-gray-600">
                    Your users will access the Bot without Limits
                  </p>
                  <p className="text-sm text-gray-600">
                    You can still set some other limits
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Custom Domain</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
