import Link from "next/link";
import { Plus, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Strategies() {
  const strategies = [
    {
      id: "alpha-scalper",
      name: "Alpha Scalper",
      date: "04-03-2025",
      earned: "$348",
      activeSince: "30+ Days",
      status: "Published",
      payment: "Active",
    },
    {
      id: "momentum-master",
      name: "Momentum Master",
      date: "12-02-2025",
      earned: "$1230",
      activeSince: "2 months",
      status: "Published",
      payment: "Active",
    },
    {
      id: "whale-sniper",
      name: "Whale Sniper",
      date: "28-01-2025",
      earned: "$2890",
      activeSince: "3 months",
      status: "Published",
      payment: "Active",
    },
    {
      id: "dip-hunter",
      name: "Dip Hunter",
      date: "15-01-2025",
      earned: "$819",
      activeSince: "4 days",
      status: "Pending",
      payment: "Under Review",
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
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Strategies</h1>
        <Link href="/create-strategy">
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            <Plus className="w-4 h-4 mr-2" />
            Create Strategy
          </Button>
        </Link>
      </div>

      {/* Strategies Table */}
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
                {strategies.map((strategy) => (
                  <tr key={strategy.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <Link
                          href={`/strategy/${strategy.id}`}
                          className="font-medium hover:text-emerald-600 transition-colors"
                        >
                          {strategy.name}
                        </Link>
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

      {/* Empty State for New Users */}
      {strategies.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No strategies yet
          </h3>
          <p className="text-gray-500 mb-6">
            Create your first trading strategy to get started
          </p>
          <Link href="/create-strategy">
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Strategy
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
