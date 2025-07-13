import { MoonIcon, Rocket, Sun, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "../theme-provider";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { label: "Services" },
    { label: "API" },
    { label: "Blog" },
    { label: "Sign in" },
    { label: "Sign up" },
    { label: "Giveaway" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!mobileMenuOpen) {
        setScrolled(window.scrollY > 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Main Header */}
      <header className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300",
        !mobileMenuOpen && scrolled
          ? "bg-white/80 dark:bg-[#070C40]/90"
          : "bg-transparent dark:bg-transparent",
      )}>
        <div className="flex w-full container mx-auto justify-between items-center py-4 px-4 md:py-6 max-w-7xl">
          {/* Logo */}
          <div>
            <img
              src="https://storage.perfectcdn.com/l1n66r/c4mtdk51py62fylx.webp"
              alt="Light logo"
              className={`h-8 md:h-10 ${theme === "dark" ? "hidden" : "block"}`}
            />
            <img
              src="https://storage.perfectcdn.com/l1n66r/j5qydepq2djguici.webp"
              alt="Dark logo"
              className={`h-8 md:h-10 ${theme === "dark" ? "block" : "hidden"}`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 text-[#00000094] dark:text-white font-bold text-lg">
            {navItems.map((item, index) => (
              <p key={index} className="hover:text-primary cursor-pointer">
                {item.label}
              </p>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex gap-4 items-center">
            <Button
              onClick={toggleTheme}
              variant="outline"
              className="rounded-full w-9 h-9 md:w-10 md:h-10"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 md:h-5 md:w-5" />
              ) : (
                <MoonIcon className="h-4 w-4 md:h-5 md:w-5" />
              )}
            </Button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2"
            >
              <Menu className="h-6 w-6" />
            </button>

            <Button
              variant="outline"
              style={{
                background: "linear-gradient(to right, #31A0FF, #6561F3, #0066FF)",
              }}
              className="text-white h-10 md:h-12 rounded-2xl hover:text-[#ffff] hover:shadow-lg hidden lg:flex"
            >
              <Rocket className="mr-2" />
              Start Promotion
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 min-w-[280px] bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col`}
      >
        <div className="p-4 flex justify-between items-center border-b dark:border-gray-700">
          <div className="flex items-center">
            <img
              src={
                theme === "dark"
                  ? "https://storage.perfectcdn.com/l1n66r/j5qydepq2djguici.webp"
                  : "https://storage.perfectcdn.com/l1n66r/c4mtdk51py62fylx.webp"
              }
              alt="Logo"
              className="h-8"
            />
          </div>
          <button onClick={() => setMobileMenuOpen(false)} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 flex-grow space-y-4 overflow-y-auto">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block py-2 text-gray-800 dark:text-gray-200 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <div className="mt-4 pb-4">
            <Button
              variant="outline"
              className="w-full text-white h-12 rounded-2xl hover:text-[#ffff] hover:shadow-lg bg-gradient-primary"
            >
              <Rocket className="mr-2" />
              Start Promotion
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;