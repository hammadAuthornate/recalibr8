"use client";
import OutsideClickHandler from "react-outside-click-handler";
import { ChevronDown, CreditCard, LogOut } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function SidebarUserMenu() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <>
      {/* User Profile */}
      <div className="relative">
        <OutsideClickHandler
          onOutsideClick={() => setUserMenuOpen(false)}
        >
          <div
            className="bg-white text-black rounded-t-3xl cursor-pointer"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            <div className="flex items-center space-x-3 p-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/next.svg" />
                <AvatarFallback className="bg-emerald-500">H</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Haider</p>
                <p className="text-xs opacity-60">Premium</p>
              </div>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  userMenuOpen ? "" : "rotate-180"
                }`}
              />
            </div>
          </div>

          {/* User Menu Dropdown */}
          {userMenuOpen && (
            <div className="absolute bottom-full right-0 bg-white rounded-3xl shadow-lg border border-gray-200 mb-1 w-full">
              <div className="py-4 px-2">
                <button className="flex rounded-lg cursor-pointer items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <CreditCard className="w-4 h-4 mr-3" />
                  Manage Subscription
                </button>
                <button
                  //   onClick={handleLogout}
                  className="flex rounded-lg cursor-pointer items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Log Out
                </button>
              </div>
            </div>
          )}
        </OutsideClickHandler>
      </div>
    </>
  );
}
