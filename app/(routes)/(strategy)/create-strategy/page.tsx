"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Settings, ArrowRight, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateStrategy() {
  const [currentStep, setCurrentStep] = useState(1);
  const [strategyData, setStrategyData] = useState({
    name: "",
    description: "",
    market: "",
    timeframe: "",
    riskLevel: "",
  });

  const steps = [
    { id: 1, name: "Customize", description: "Choose your approach" },
    { id: 2, name: "Strategy", description: "Configure parameters" },
    { id: 3, name: "Final Values", description: "Review and publish" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setStrategyData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Create Your Strategy</h2>
              <p className="text-gray-600">
                Choose how you want to create your trading strategy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* AI Generation Option */}
              <Card className="border-2 border-dashed border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Generate With AI
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Let our AI create a strategy based on your preferences
                  </p>
                  <Link href="/ai-prompt">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Generate With AI
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Custom Strategy Option */}
              <Card className="border-2 border-dashed border-gray-200 hover:border-emerald-300 transition-colors cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Go Fully Customized
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Build your strategy from scratch with full control
                  </p>
                  <Button
                    onClick={nextStep}
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                  >
                    Go Fully Customized
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Strategy Configuration
              </h2>
              <p className="text-gray-600">
                Set up your trading strategy parameters
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Strategy Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter strategy name"
                    value={strategyData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="market">Market</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("market", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select market" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="crypto">Cryptocurrency</SelectItem>
                      <SelectItem value="forex">Forex</SelectItem>
                      <SelectItem value="stocks">Stocks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeframe">Timeframe</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("timeframe", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1m">1 Minute</SelectItem>
                      <SelectItem value="5m">5 Minutes</SelectItem>
                      <SelectItem value="15m">15 Minutes</SelectItem>
                      <SelectItem value="1h">1 Hour</SelectItem>
                      <SelectItem value="4h">4 Hours</SelectItem>
                      <SelectItem value="1d">1 Day</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="risk">Risk Level</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("riskLevel", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select risk level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low Risk</SelectItem>
                      <SelectItem value="medium">Medium Risk</SelectItem>
                      <SelectItem value="high">High Risk</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  className="w-full p-3 border border-gray-300 rounded-md resize-none"
                  rows={4}
                  placeholder="Describe your trading strategy..."
                  value={strategyData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Review & Publish</h2>
              <p className="text-gray-600">
                Review your strategy configuration and publish
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Strategy Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-500">
                        Name
                      </Label>
                      <p className="font-medium">
                        {strategyData.name || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">
                        Market
                      </Label>
                      <p className="font-medium">
                        {strategyData.market || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">
                        Timeframe
                      </Label>
                      <p className="font-medium">
                        {strategyData.timeframe || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">
                        Risk Level
                      </Label>
                      <p className="font-medium">
                        {strategyData.riskLevel || "Not specified"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-500">
                      Description
                    </Label>
                    <p className="font-medium">
                      {strategyData.description || "No description provided"}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Publish Strategy
                </Button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-center space-x-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.id
                    ? "bg-emerald-500 border-emerald-500 text-white"
                    : "border-gray-300 text-gray-500"
                }`}
              >
                {step.id}
              </div>
              <div className="ml-3">
                <p
                  className={`text-sm font-medium ${
                    currentStep >= step.id
                      ? "text-emerald-600"
                      : "text-gray-500"
                  }`}
                >
                  {step.name}
                </p>
                <p className="text-xs text-gray-500">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-16 h-0.5 ml-8 ${
                    currentStep > step.id ? "bg-emerald-500" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="max-w-6xl mx-auto">{renderStepContent()}</div>

      {/* Navigation Buttons */}
      {currentStep > 1 && (
        <div className="max-w-6xl mx-auto mt-8 flex justify-between">
          <Button variant="outline" onClick={prevStep}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          {currentStep < 3 && (
            <Button
              onClick={nextStep}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
