import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { Construction, Pencil as Fence, Trees, LayoutDashboard, Wallet as Wall, Flower2 } from "lucide-react";

interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: "Landscaping", url: "/", icon: Flower2 },
  { name: "Driveways", url: "/driveways", icon: Construction },
];

export function StickyTopNavBar() {
  const [activeTab, setActiveTab] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") {
      setActiveTab("Landscaping");
    } else {
      const currentItem = navItems.find(item => item.url === path);
      if (currentItem) {
        setActiveTab(currentItem.name);
      }
    }
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",
        isScrolled ? "bg-granite-dark/95 shadow-md backdrop-blur-md" : "bg-granite-dark/70 backdrop-blur-sm"
      )}
      style={{ position: 'fixed', width: '100%' }}
    >
      <div className="flex justify-center py-2">
        <div className="flex gap-2 px-4 py-1 rounded-full overflow-x-auto max-w-full no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => {
                  setActiveTab(item.name);
                  window.scrollTo(0, 0);
                }}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 whitespace-nowrap",
                  "text-gray-300 hover:text-[#FF5733]",
                  isActive && "bg-granite-medium text-[#FF5733]"
                )}
              >
                {isMobile ? (
                  <Icon size={18} strokeWidth={2.2} />
                ) : (
                  <>
                    <Icon size={16} strokeWidth={2} />
                    <span>{item.name}</span>
                  </>
                )}

                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#FF5733]/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}