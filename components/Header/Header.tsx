"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { name: "Camps", path: "/camps" },
    { name: "Birthday Parties", path: "/birthday-parties" },
    { name: "Saturday Sessions", path: "/saturday-sessions" },
    { name: "Events", path: "/events" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`fixe top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FF0000] ${
        scrolled ? "py-1 bg-brand-red shadow-md" : "py-2 bg-brand-red"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
          href="/">
          <Image
            className="w-[50px] h-[50px] object-cover"
            alt="Logo"
            src="/assets/logo.svg"
            width={50}
            height={50}
          />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`menu-item text-white ${
                  isActive(item.path) ? "menu-active" : ""
                }`}
                style={{ fontFamily: "var(--font-poppins)" }} // ✅ Apply Poppins
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={navItems[4].path}
              className={`menu-item text-white ${
                isActive(navItems[4].path) ? "menu-active" : ""
              }`}
              style={{ fontFamily: "var(--font-poppins)" }} // ✅ Apply Poppins
            >
              {navItems[4].name}
            </Link>
            <Link
              href={navItems[5].path}
              className="bg-transparent border border-white text-white hover:bg-white hover:text-[#FF0000] px-6 py-2 rounded-full transition-all duration-300"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: "500" }} // ✅ Apply Poppins
            >
              {navItems[5].name}
            </Link>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 z-[60]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X size={28} className="transition-all duration-300" />
            ) : (
              <Menu size={28} className="transition-all duration-300" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} navItems={navItems} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
