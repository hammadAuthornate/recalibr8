"use client";

import {
  Bell,
  Check,
  X,
  TrendingUp,
  AlertTriangle,
  Info,
  DollarSign,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Strategy Performance Alert",
      message: "Alpha Scalper has exceeded 25% monthly returns",
      time: "2 minutes ago",
      read: false,
      icon: TrendingUp,
      color: "emerald",
    },
    {
      id: 2,
      type: "warning",
      title: "Risk Management Alert",
      message: "Whale Sniper has reached 80% of daily loss limit",
      time: "15 minutes ago",
      read: false,
      icon: AlertTriangle,
      color: "yellow",
    },
    {
      id: 3,
      type: "info",
      title: "New Subscriber",
      message: "Your Momentum Master strategy gained 5 new subscribers",
      time: "1 hour ago",
      read: true,
      icon: Info,
      color: "blue",
    },
    {
      id: 4,
      type: "success",
      title: "Payout Processed",
      message:
        "Monthly earnings of $2,840 have been transferred to your account",
      time: "3 hours ago",
      read: true,
      icon: DollarSign,
      color: "emerald",
    },
    {
      id: 5,
      type: "info",
      title: "Strategy Published",
      message: "Your Dip Hunter strategy is now live in the marketplace",
      time: "1 day ago",
      read: true,
      icon: Check,
      color: "blue",
    },
    {
      id: 6,
      type: "warning",
      title: "Market Volatility Alert",
      message: "High volatility detected in BTC/USDT pair",
      time: "2 days ago",
      read: true,
      icon: AlertTriangle,
      color: "yellow",
    },
  ];

  const getIconBg = (color: string) => {
    const colors = {
      emerald: "bg-emerald-100 text-emerald-600",
      yellow: "bg-yellow-100 text-yellow-600",
      blue: "bg-blue-100 text-blue-600",
    };
    //@ts-expect-error type error
    return colors[color] || colors.blue;
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          {unreadCount > 0 && (
            <Badge className="bg-red-500 text-white hover:bg-red-500">
              {unreadCount} new
            </Badge>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
          <Button variant="outline" size="sm">
            <Bell className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <Card
              key={notification.id}
              className={`border-0 shadow-sm transition-all duration-200 hover:shadow-md ${
                !notification.read
                  ? "bg-blue-50 border-l-4 border-l-blue-500"
                  : "bg-white"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${getIconBg(
                      notification.color
                    )}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3
                          className={`font-medium ${
                            !notification.read
                              ? "text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          {notification.title}
                        </h3>
                        <p
                          className={`mt-1 text-sm ${
                            !notification.read
                              ? "text-gray-700"
                              : "text-gray-500"
                          }`}
                        >
                          {notification.message}
                        </p>
                        <p className="mt-2 text-xs text-gray-400">
                          {notification.time}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2 ml-4">
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                        <Button variant="ghost" size="sm">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State */}
      {notifications.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bell className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No notifications
          </h3>
          <p className="text-gray-500">
            You&apos;re all caught up! Check back later for updates.
          </p>
        </div>
      )}

      {/* Load More */}
      {notifications.length > 0 && (
        <div className="flex justify-center pt-6">
          <Button variant="outline">Load More Notifications</Button>
        </div>
      )}
    </div>
  );
}
