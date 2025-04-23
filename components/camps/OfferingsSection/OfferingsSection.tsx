"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface OfferingsSectionProps {
  data?: {
    title: string;
    subtitle: string;
    backgroundImage?: {
      _upload: {
        previewImage: string;
      };
    };
  };
}

export const OfferingsSection: React.FC<OfferingsSectionProps> = ({ data }) => {
  const { scrollYProgress } = useScroll();

  // Create fade and scale animations based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  // Function to handle scroll to next section
  const handleScrollToNextSection = () => {
    // Get the current section's height
    const currentSectionHeight = 583; // Height of current section in pixels

    // Scroll down by the height of the current section
    window.scrollTo({
      top: window.scrollY + currentSectionHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      className="relative w-full h-[583px] overflow-hidden"
      style={{
        opacity,
        scale,
        transformOrigin: "center center",
      }}
    >
      <div className="relative w-full max-w-[1440px] h-full mx-auto bg-cover bg-center">
        <div className="flex flex-col items-center justify-center h-full px-4 max-w-[900px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-desktop-title-headline-1 text-white text-[length:var(--desktop-title-headline-1-font-size)] text-center tracking-[var(--desktop-title-headline-1-letter-spacing)] leading-[var(--desktop-title-headline-1-line-height)] [font-style:var(--desktop-title-headline-1-font-style)] mb-[22px]"
          >
            {data?.title}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-desktop-title-subheading-1 text-white text-[length:var(--desktop-title-subheading-1-font-size)] text-center tracking-[var(--desktop-title-subheading-1-letter-spacing)] leading-[var(--desktop-title-subheading-1-line-height)] [font-style:var(--desktop-title-subheading-1-font-style)] max-w-[629px]"
          >
            {data?.subtitle}
          </motion.h2>
        </div>
      </div>

      <motion.div
        className="animate-bounce flex justify-center mt-[-80px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
          onClick={handleScrollToNextSection}
        >
          <path
            d="M14.8848 20.8834L19.9424 25.9556L24.9999 20.8834"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M19.9436 25.8896L19.9436 14.0545"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M20 38.8402C9.49876 38.8402 0.999999 30.3997 0.999999 20.0053C1 9.61088 9.49876 1.17041 20 1.17041C30.5012 1.17041 39 9.61088 39 20.0053C39 30.3997 30.5012 38.8402 20 38.8402Z"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    </motion.section>
  );
};
