"use client";
import { useState } from "react";
import { ArrowLeft, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export default function AIPrompt() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const suggestions = [
    "Create a momentum trading strategy for Bitcoin that uses RSI and MACD indicators",
    "Build a scalping bot for Ethereum with 1-minute timeframes and tight stop losses",
    "Design a DCA strategy that buys dips during market downturns",
    "Develop an arbitrage strategy between Binance and Coinbase",
    "Create a grid trading bot for sideways market conditions",
    "Build a trend-following strategy using moving average crossovers",
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      router.push("/my-strategies");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="p-2"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Generate with AI</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Describe Your Trading Strategy
          </h2>
          <p className="text-gray-600 text-lg">
            Tell our AI what kind of trading strategy you want to create, and
            we&apos;ll build it for you.
          </p>
        </div>

        {/* Prompt Input */}
        <div className="bg-white rounded-2xl shadow-sm border-0 p-8 mb-8">
          <div className="space-y-4">
            <Textarea
              placeholder="Describe your trading strategy in detail... For example: 'Create a momentum trading strategy for Bitcoin that uses RSI and MACD indicators with a 15-minute timeframe, targeting 2-3% profits with 1% stop losses.'"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-32 text-lg border-0 resize-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">
                {prompt.length}/1000 characters
              </p>
              <Button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Generate Strategy
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Popular Strategy Ideas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setPrompt(suggestion)}
                className="text-left p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
              >
                <p className="text-gray-600 group-hover:text-blue-700 transition-colors">
                  {suggestion}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">AI-Powered</h4>
            <p className="text-sm text-gray-600">
              Advanced AI analyzes your requirements and creates optimized
              strategies
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Customizable</h4>
            <p className="text-sm text-gray-600">
              Fine-tune parameters and adjust settings after generation
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Ready to Deploy
            </h4>
            <p className="text-sm text-gray-600">
              Generated strategies are immediately ready for backtesting and
              deployment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
