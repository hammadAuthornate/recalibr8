"use client";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useRouter } from "next/navigation";

const Login = () => {
  const [error, setError] = useState("");
  //   const router = useRouter();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const email = formData.get("email");
    const password = formData.get("password");

    console.log("form ", formData, " email ", email, " password ", password);

    // if (email === "admin@recalibr8.com" && password === "recalibrate2025") {
    //   localStorage.setItem("isAuthenticated", "true");
    //   localStorage.setItem("userEmail", email);
    //   router.push("/");
    // } else {
    //   setError("Invalid email or password");
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-emerald-500">recalibr8.</h1>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Welcome Back
          </CardTitle>
          <p className="text-gray-600">Sign in to your account</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@recalibr8.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <Button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600"
            >
              Sign In
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-500">
            Demo credentials: admin@recalibr8.com / recalibrate2025
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
