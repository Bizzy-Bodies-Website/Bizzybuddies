'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { name: 'Camps', path: '/camps' },
    { name: 'Birthday Parties', path: '/birthday-parties' },
    { name: 'Saturday Sessions', path: '/saturday-sessions' },
    { name: 'Events', path: '/events' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-brand-red shadow-md' : 'py-4 bg-brand-red'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* <Logo /> */}

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.slice(0, 4).map((item) => (
              <Link key={item.name} href={item.path} className={`menu-item ${isActive(item.path) ? 'menu-active' : ''}`}>
                {item.name}
              </Link>
            ))}
            <Link href={navItems[4].path} className={`menu-item ${isActive(navItems[4].path) ? 'menu-active' : ''}`}>
              {navItems[4].name}
            </Link>
            <Link
              href={navItems[5].path}
              className="bg-transparent border border-white text-white hover:bg-white hover:text-brand-red px-6 py-2 rounded-full transition-all duration-300"
            >
              {navItems[5].name}
            </Link>
          </nav>

          <button onClick={toggleMenu} className="md:hidden text-white p-2 z-[60]" aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? <X size={28} className="transition-all duration-300" /> : <Menu size={28} className="transition-all duration-300" />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} navItems={navItems} />
    </header>
  );
};

export default Header;
