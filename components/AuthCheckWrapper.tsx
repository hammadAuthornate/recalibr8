"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function AuthCheckWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    router.push("/login");
  }

  return <>{children}</>;
}
