"use client";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signIn } from "next-auth/react";

export default function Login() {
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setError("");

      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const email = formData.get("email");
      const password = formData.get("password");
      const name = formData.get("name");

      if (!email || !password || (mode === "signup" && !name)) {
        setError("Please fill in all required fields");
        return;
      }

      const authAction = mode === "signin" ? "sign-in" : "sign-up";
      const response = await signIn(authAction, {
        email,
        password,
        ...((mode === "signup" && { name }) || {}),
        redirect: false,
        redirectTo: "/",
      });

      if (!response) {
        throw new Error("No response from authentication service");
      }

      if (response.error) {
        // Handle specific NextAuth error messages
        switch (response.error) {
          case "CredentialsSignin":
            throw new Error("Invalid email or password");
          case "OAuthSignin":
            throw new Error("Error occurred while signing in with OAuth");
          case "OAuthCallback":
            throw new Error("Error occurred while processing OAuth callback");
          case "OAuthCreateAccount":
            throw new Error("Error occurred while creating OAuth account");
          case "EmailCreateAccount":
            throw new Error("Error occurred while creating email account");
          case "Callback":
            throw new Error("Error occurred during authentication callback");
          case "EmailSignin":
            throw new Error("Error sending sign in email");
          case "AccountNotLinked":
            throw new Error("Account not linked to any credentials");
          case "Configuration":
            throw new Error("Authentication server configuration error");
          default:
            throw new Error(response.error);
        }
      }

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      // Authentication successful
      // window.location.href = response.url || "/";
    } catch (e) {
      console.error("Authentication error:", e);
      if (e instanceof Error) {
        setError(e.message || "An error occurred during authentication");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-emerald-500">recalibr8.</h1>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs
            value={mode}
            onValueChange={(value) => setMode(value as "signin" | "signup")}
          >
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <div className="text-center mb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Welcome Back
                </CardTitle>
                <p className="text-gray-600">Sign in to your account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input
                    id="signin-email"
                    name="email"
                    type="email"
                    placeholder="admin@recalibr8.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <Input
                    id="signin-password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {error && (
                  <div className="text-red-500 text-sm text-center">
                    {error}
                  </div>
                )}
                <Button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600"
                >
                  Sign In
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <div className="text-center mb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Create Account
                </CardTitle>
                <p className="text-gray-600">Sign up for a new account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Name</Label>
                  <Input
                    id="signup-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    name="password"
                    type="password"
                    placeholder="Choose a password"
                    required
                  />
                </div>
                {error && (
                  <div className="text-red-500 text-sm text-center">
                    {error}
                  </div>
                )}
                <Button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600"
                >
                  Sign Up
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
