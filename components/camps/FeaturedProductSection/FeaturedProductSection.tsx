"use client";

import React, { useState } from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export const FeaturedProductSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState({
    company: false,
    events: false,
  });

  // Company navigation links
  const companyLinks = [
    { title: "Home", href: "#" },
    { title: "About Us", href: "#" },
    { title: "Contact Us", href: "#" },
  ];

  // Events navigation links
  const eventsLinks = [
    { title: "Camps", href: "#" },
    { title: "Birthday Parties", href: "#" },
    { title: "Saturday sessions", href: "#" },
    { title: "Events", href: "#" },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <FacebookIcon className="w-5 h-5" />,
      href: "#",
      label: "Facebook",
    },
    {
      icon: <TwitterIcon className="w-5 h-5" />,
      href: "#",
      label: "Twitter",
    },
  ];

  const toggleMenu = (menu: "company" | "events") => {
    setIsMobileMenuOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <footer className="w-full bg-[#111111] py-6 px-4 md:py-8 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row justify-between mb-8">
          {/* Logo */}
          <div className="w-[440px]">
            <h2 className="text-white text-5xl md:text-[64px] font-bold leading-tight">
              BIZZY BUDDIES
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-16">
            {/* Company links */}
            <div className="text-right">
              <h3 className="text-white text-sm font-bold mb-4">COMPANY</h3>
              <nav className="flex flex-col gap-6">
                {companyLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Events links */}
            <div className="text-right">
              <h3 className="text-white text-sm font-bold mb-4">EVENTS</h3>
              <nav className="flex flex-col gap-6">
                {eventsLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center">
          {/* Logo */}
          <h2 className="text-white text-4xl font-bold mb-8">BIZZY BUDDIES</h2>

          {/* Mobile Navigation Menu */}
          <div className="w-full text-center mb-8">
            {/* Company Section */}
            <div className="mb-6">
              <h3 className="text-white text-sm font-bold mb-4">COMPANY</h3>
              <nav className="flex flex-col gap-6">
                {companyLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white"
                  >
                    {link.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Events Section */}
            <div className="mb-6">
              <h3 className="text-white text-sm font-bold mb-4">EVENTS</h3>
              <nav className="flex flex-col gap-6">
                {eventsLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white"
                  >
                    {link.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-white hover:text-white/70 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Separator line */}
          <div className="w-full h-px bg-white/20 mb-6" />

          {/* Copyright */}
          <div className="text-white/50 text-sm tracking-wider text-center">
            ©BIZZY BUDDIES 2021
          </div>
        </div>

        {/* Desktop Footer Bottom */}
        <div className="hidden md:block">
          {/* Social media icons */}
          <div className="flex justify-start gap-4 mb-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-white hover:text-white/70 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Separator line */}
          <div className="h-px bg-white/20 mb-6" />

          {/* Copyright and privacy policy */}
          <div className="flex justify-between items-center">
            <div className="text-white/50 text-sm tracking-wider">
              ©BIZZY BUDDIES 2021
            </div>
            <a
              href="#"
              className="text-white text-sm tracking-wider hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
