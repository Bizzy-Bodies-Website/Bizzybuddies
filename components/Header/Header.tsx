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
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FF0000] ${
        scrolled ? "py-4 bg-brand-red shadow-md" : "py-4 bg-brand-red"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center bg-[#FF0000] border-[3px] border-black rounded-full p-4 absolute top-5">
            <Image
              className="w-[80px] h-[80px] object-cover"
              alt="Logo"
              src="/assets/logo.svg"
              width={80}
              height={80}
            />
          </Link>

          <div></div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`menu-item text-white font-semibold  ${
                  isActive(item.path) ? "menu-active " : ""
                } ${
                  item.name === "Contact Us"
                    ? "bg-transparent border-white border-2 hover:bg-black hover:text-[#ffffff] px-6 py-2 rounded-full transition-all duration-300 font-medium"
                    : "hover:border-b-2 hover:border-white pb-1"
                }`}
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {item.name}
              </Link>
            ))}
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
