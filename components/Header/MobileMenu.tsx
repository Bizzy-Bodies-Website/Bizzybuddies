"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, X } from "lucide-react"
import Image from "next/image"

interface NavItem {
  name: string
  path: string
}

interface MobileMenuProps {
  isOpen: boolean
  navItems: NavItem[]
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems, onClose }) => {
  const pathname = usePathname()

  // Get the last 2 items separately
  const lastTwoNavItems = navItems.slice(-2)
  const otherNavItems = navItems.slice(0, -2)

  return (
    <div
      className={`fixed inset-0 bg-[#FF0000] z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col`}
      style={{
        backgroundImage: "url('/assets/bg1.svg')",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="p-6 flex justify-between items-start">
        <Link href="/">
          <Image
            className="w-[50px] h-[50px] object-cover"
            alt="Logo"
            src="/assets/logo.svg"
            width={50}
            height={50}
          />
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-8">
        <nav className="flex flex-col">
          {otherNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="group py-5 border-b border-white/20 flex justify-between items-center"
            >
              <span className="text-white text-sm font-bold uppercase">{item.name}</span>
              <ArrowRight size={20} className="text-white" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Render the last two items just above Privacy Policy */}
      <div className="px-6 pt-4">
        {lastTwoNavItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="group py-4 border-b border-white/20 flex justify-between items-center"
          >
            <span className="text-white text-sm font-bold uppercase">{item.name}</span>
            <ArrowRight size={20} className="text-white" />
          </Link>
        ))}
      </div>

      <div className="p-6 text-center text-white">
        <Link href="/privacy-policy" className="text-xl font-semibold text-[14px]">
          <span>Privacy Policy</span>
        </Link>
        <p className="mt-2 text-sm">© BIZZY BUDDIES {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default MobileMenu
