'use client';
import { urlFor } from "@/sanity";
import { PortableText } from "@portabletext/react";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface ImageData {
  asset: { _ref: string };
}

interface ImageGallerySectionProps {
  data?: {
    title: string;
    description?: any; // Allow Portable Text
    image?: ImageData;
    subtitle: string;
    buttons: any[];
  };
}

export const ContactUsSection: React.FC<ImageGallerySectionProps> = ({
  data,
}) => {
  const router = useRouter();
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FF0000",
      }}
      className="w-full py-12 md:py-16 lg:py-24 xl:py-32 bg-bb-red bg-cover relative"
    >
      <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-4 gap-8 md:gap-12">
        {/* Left side - Headings */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          <span className="opacity-70 font-desktop-title-CTA-label font-[number:var(--desktop-title-CTA-label-font-weight)] text-white text-[length:var(--desktop-title-CTA-label-font-size)] tracking-[var(--desktop-title-CTA-label-letter-spacing)] leading-[var(--desktop-title-CTA-label-line-height)] whitespace-nowrap [font-style:var(--desktop-title-CTA-label-font-style)]">
            {data?.subtitle}
          </span>

          <h2 className="w-full md:w-[398px] font-desktop-title-CTA-title font-[number:var(--desktop-title-CTA-title-font-weight)] text-white text-[length:var(--desktop-title-CTA-title-font-size)] tracking-[var(--desktop-title-CTA-title-letter-spacing)] leading-[var(--desktop-title-CTA-title-line-height)] [font-style:var(--desktop-title-CTA-title-font-style)]">
            {data?.title || ""}
          </h2>
        </div>

        {/* Right side - Text and buttons */}
        <div className="w-full md:max-w-[461px] flex flex-col gap-6 md:gap-8">
          <p className="font-desktop-title-CTA-body font-[number:var(--desktop-title-CTA-body-font-weight)] text-white text-[length:var(--desktop-title-CTA-body-font-size)] tracking-[var(--desktop-title-CTA-body-letter-spacing)] leading-[var(--desktop-title-CTA-body-line-height)] [font-style:var(--desktop-title-CTA-body-font-style)] text-center md:text-left">
            {data?.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 md:mt-auto w-full justify-center md:justify-start">
            <button onClick={() => router.push('/contact')} className="w-full sm:w-[198px] cursor-pointer h-12 sm:h-14 text-white border-white border-2 hover:bg-black hover:text-[#ffffff] px-6 py-2 rounded-full transition-all duration-300 font-medium font-desktop-button-large-button-text font-[number:var(--desktop-button-large-button-text-font-weight)] text-[length:var(--desktop-button-large-button-text-font-size)] tracking-[var(--desktop-button-large-button-text-letter-spacing)] leading-[var(--desktop-button-large-button-text-line-height)] [font-style:var(--desktop-button-large-button-text-font-style)]">
              {data?.buttons[0]?.text}
            </button>

            {/* <button
              // variant="outline"
              className="w-full sm:w-[188px] h-12 sm:h-14 rounded-[100px] bg-[#ff4040] text-white border-2 border-white hover:bg-[#ff4040]/90 hover:text-white font-desktop-button-large-button-text font-[number:var(--desktop-button-large-button-text-font-weight)] text-[length:var(--desktop-button-large-button-text-font-size)] tracking-[var(--desktop-button-large-button-text-letter-spacing)] leading-[var(--desktop-button-large-button-text-line-height)] [font-style:var(--desktop-button-large-button-text-font-style)]"
            >
              {data?.buttons[1]?.text}
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
