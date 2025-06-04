"use client";

import { Bell, LayoutDashboard, Settings, Store, Target } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./SidebarNavigation.css"
import { useEffect, useRef, useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Marketplace", href: "/marketplace", icon: Store },
  { name: "My Strategies", href: "/strategies", icon: Target },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function SidebarNavigation({
  onClick,
}: {
  onClick: (val: boolean) => void;
}) {
  const pathname = usePathname();
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [bgStyle, setBgStyle] = useState({ top: 0, height: 0, opacity: 0 });

  useEffect(() => {
    const index = navigation.findIndex((item) =>
      item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)
    );

    if (index !== -1 && itemRefs.current[index]) {
      const el = itemRefs.current[index];
      const { offsetTop, offsetHeight } = el!;
      setBgStyle({
        top: offsetTop,
        height: offsetHeight,
        opacity: 1,
      });
    }else {
      setBgStyle(prev => ({
        ...prev,
        opacity: 0,
      }));
    }
  }, [pathname]);

  return (
    <nav className="flex-1 z-0 relative">
      {/* Background blob */}
      <div
        className="w-full bg-white absolute -z-10 menuBackground ml-[10px] max-lg:rounded-full lg:rounded-l-full  transition-all duration-300"
        style={{
          top: bgStyle.top,
          height: bgStyle.height,
          opacity: bgStyle.opacity,
        }}
      ></div>

      {/* Navigation items */}
      <div className="w-full px-4 space-y-1">
        {navigation.map((item, index) => {
          const Icon = item.icon;
          const active =
            item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
          return (
            <div
              key={item.name}
              ref={(el) => { itemRefs.current[index] = el; }}
              className="relative"
            >
              <Link
                href={item.href}
                onClick={() => onClick(false)}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  active ? 'text-[#16B191]' : 'text-white/80 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}