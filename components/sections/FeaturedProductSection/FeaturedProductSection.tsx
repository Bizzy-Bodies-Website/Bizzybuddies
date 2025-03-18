import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import React from "react";

export const FeaturedProductSection = () => {
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
      icon: <InstagramIcon className="w-6 h-6" />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <FacebookIcon className="w-6 h-6" />,
      href: "#",
      label: "Facebook",
    },
    { icon: <TwitterIcon className="w-6 h-6" />, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="w-full bg-black py-16 px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Main footer content */}
        <div className="flex flex-row justify-between mb-24">
          {/* Logo */}
          <div className="w-[440px]">
            <h2 className="font-desktop-title-headline-4 text-white text-[64px] leading-[72px]">
              BIZZY BUDDIES
            </h2>
          </div>

          {/* Company links */}
          <div className="text-right">
            <h3 className="font-desktop-title-headline-6 text-white text-[length:var(--desktop-title-headline-6-font-size)] tracking-[var(--desktop-title-headline-6-letter-spacing)] leading-[var(--desktop-title-headline-6-line-height)] mb-[59px]">
              COMPANY
            </h3>
            <nav className="flex flex-col gap-[32px]">
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-desktop-button-secondary-button-text text-white opacity-70 text-[length:var(--desktop-button-secondary-button-text-font-size)] tracking-[var(--desktop-button-secondary-button-text-letter-spacing)] leading-[var(--desktop-button-secondary-button-text-line-height)] text-right"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Events links */}
          <div className="text-right">
            <h3 className="font-desktop-title-headline-6 text-white text-[length:var(--desktop-title-headline-6-font-size)] tracking-[var(--desktop-title-headline-6-letter-spacing)] leading-[var(--desktop-title-headline-6-line-height)] mb-[59px]">
              EVENTS
            </h3>
            <nav className="flex flex-col gap-[32px]">
              {eventsLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-desktop-button-secondary-button-text text-white opacity-70 text-[length:var(--desktop-button-secondary-button-text-font-size)] tracking-[var(--desktop-button-secondary-button-text-letter-spacing)] leading-[var(--desktop-button-secondary-button-text-line-height)] text-right"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Footer bottom section */}
        <div>
          {/* Social media icons */}
          <div className="flex items-start gap-2.5 mb-6">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>

          {/* Separator line */}
          {/* <Separator className="bg-white/20 mb-6" /> */}

          {/* Copyright and privacy policy */}
          <div className="flex justify-between items-center">
            <div className="font-normal text-white/50 text-sm tracking-[0.42px] leading-[14px]">
              ©BIZZY BUDDIES 2021
            </div>
            <a
              href="#"
              className="font-normal text-white text-sm text-right tracking-[0.42px] leading-[14px]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
