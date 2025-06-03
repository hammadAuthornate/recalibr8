"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import SidebarNavigation from "./SidebarNavigation";
import SidebarUserMenu from "./SidebarUserMenu";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-emerald-500 text-white hover:bg-emerald-600"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#16B191] text-white flex flex-col transition-transform duration-300 ease-in-out`}
      >
        {/* Logo */}
        <div className="px-6 py-12 text-center">
          <h1 className="text-3xl font-bold">recalibr8.</h1>
        </div>

        <SidebarNavigation onClick={setMobileMenuOpen} />
        <SidebarUserMenu />
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
