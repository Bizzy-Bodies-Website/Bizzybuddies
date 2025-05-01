"use client";

import { useRouter } from "next/navigation";
import React from "react";
export const ContactUsSection = (data: any) => {
  const router = useRouter();
  const sectionData = data.data;

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
            INTERESTED?
          </span>

          <h2 className="font-desktop-title-CTA-title font-[number:var(--desktop-title-CTA-title-font-weight)] text-white text-[length:var(--desktop-title-CTA-title-font-size)] tracking-[var(--desktop-title-CTA-title-letter-spacing)] leading-[var(--desktop-title-CTA-title-line-height)] [font-style:var(--desktop-title-CTA-title-font-style)]">
            {sectionData.title || "CONTACT US TODAY!"}
          </h2>
        </div>

        {/* Right side - Text and buttons */}
        <div className="w-full md:max-w-[461px] flex flex-col gap-6 md:gap-8">
          <p className="font-desktop-title-CTA-body font-[number:var(--desktop-title-CTA-body-font-weight)] text-white text-[length:var(--desktop-title-CTA-body-font-size)] tracking-[var(--desktop-title-CTA-body-letter-spacing)] leading-[var(--desktop-title-CTA-body-line-height)] [font-style:var(--desktop-title-CTA-body-font-style)] text-center md:text-left">
            {sectionData.description || "We would love you to become part of the family. If you have any questions or would love to join our holiday sports camps, get in touch!"}
          </p>

          <div
            onClick={() => router.push("/contact")}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 md:mt-auto w-full justify-center md:justify-start"
          >
            <button className="w-full sm:w-[198px] h-12 sm:h-14 rounded-[100px] bg-white text-bb-red hover:bg-white/90 font-desktop-button-large-button-text font-[number:var(--desktop-button-large-button-text-font-weight)] text-[length:var(--desktop-button-large-button-text-font-size)] tracking-[var(--desktop-button-large-button-text-letter-spacing)] leading-[var(--desktop-button-large-button-text-line-height)] [font-style:var(--desktop-button-large-button-text-font-style)]">
              {sectionData.buttonText || "Contact Us"}
            </button>

            {/* <button
              onClick={() => router.push("/about")}
              className="w-full sm:w-[188px] h-12 sm:h-14 rounded-[100px] bg-[#ff4040] text-white border-2 border-white hover:bg-[#ff4040]/90 hover:text-white font-desktop-button-large-button-text font-[number:var(--desktop-button-large-button-text-font-weight)] text-[length:var(--desktop-button-large-button-text-font-size)] tracking-[var(--desktop-button-large-button-text-letter-spacing)] leading-[var(--desktop-button-large-button-text-line-height)] [font-style:var(--desktop-button-large-button-text-font-style)]"
            >
              About Us
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
