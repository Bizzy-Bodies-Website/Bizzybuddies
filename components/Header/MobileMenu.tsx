'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div 
      className={`fixed inset-0 bg-brand-red z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:hidden pt-20`}
    >
      <div className="h-full overflow-y-auto pb-24">
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`menu-item-mobile flex justify-between items-center ${
                isActive(item.path) ? 'bg-white/10' : ''
              }`}
            >
              <span>{item.name}</span>
              <ChevronRight size={20} className="text-white/70" />
            </Link>
          ))}
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 bg-brand-red p-4 text-center text-white text-xs">
          <p>Privacy Policy</p>
          <p className="mt-2">© {new Date().getFullYear()} BRAND NAME</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
