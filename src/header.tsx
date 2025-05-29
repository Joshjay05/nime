import { Menu, Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../public/asset/Nigeria.jpg";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    "HOME",
    "ABOUT US",
    "PARTNERSHIPS",
    "RESOURCES",
    "TAPPAMS",
    "CONTACT US",
  ];

  // Toggle body scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="h-8 w-28 sm:h-10 sm:w-32 lg:h-12 lg:w-40 overflow-hidden rounded">
                <img
                  src={logo}
                  alt="Nigeria Logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {menuItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`text-sm xl:text-base font-medium transition-all duration-200 hover:text-red-500 relative ${
                    index === 0 ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  {item}
                  {index === 0 && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-red-500 rounded"></span>
                  )}
                </a>
              ))}
              <Search className="h-5 w-5 xl:h-6 xl:w-6 text-red-500 cursor-pointer hover:scale-110 transition-transform" />
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 z-60 relative hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 h-full w-72 sm:w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl transform transition-all duration-300">
            <div className="pt-16 sm:pt-20 px-4 sm:px-6">
              <div className="flex flex-col space-y-4 sm:space-y-6">
                {menuItems.map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={`text-base sm:text-lg font-medium py-3 border-b border-gray-100 transition-colors ${
                      index === 0
                        ? "text-red-500"
                        : "text-gray-700 hover:text-red-500"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                {/* <div className="pt-4">
                  <button className="flex items-center gap-3 text-gray-700 hover:text-red-500 transition-colors">
                    <Search className="h-5 w-5" />
                    <span className="text-base sm:text-lg font-medium">
                      Search
                    </span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
