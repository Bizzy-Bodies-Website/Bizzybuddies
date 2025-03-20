import React from "react";

export const ContactUsSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FF0000",
      }}
      className="w-full py-[120px] bg-bb-red bg-cover relative"
    >
        {/* <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left"> */}

      <div className="container mx-auto h-full flex flex-col sm:flex-row items-center justify-between px-4">
        {/* Left side - Headings */}
        <div className="flex flex-col items-start">
          <span className="opacity-70 font-desktop-title-CTA-label font-[number:var(--desktop-title-CTA-label-font-weight)] text-white text-[length:var(--desktop-title-CTA-label-font-size)] tracking-[var(--desktop-title-CTA-label-letter-spacing)] leading-[var(--desktop-title-CTA-label-line-height)] whitespace-nowrap [font-style:var(--desktop-title-CTA-label-font-style)]">
            INTERESTED?
          </span>

          <h2 className="font-desktop-title-CTA-title font-[number:var(--desktop-title-CTA-title-font-weight)] text-white text-[length:var(--desktop-title-CTA-title-font-size)] tracking-[var(--desktop-title-CTA-title-letter-spacing)] leading-[var(--desktop-title-CTA-title-line-height)] [font-style:var(--desktop-title-CTA-title-font-style)]">
            CONTACT <br />
            US TODAY!
          </h2>
        </div>

        {/* Right side - Text and buttons */}
        <div className="max-w-[461px] flex flex-col gap-8">
          <p className="font-desktop-title-CTA-body font-[number:var(--desktop-title-CTA-body-font-weight)] text-white text-[length:var(--desktop-title-CTA-body-font-size)] tracking-[var(--desktop-title-CTA-body-letter-spacing)] leading-[var(--desktop-title-CTA-body-line-height)] [font-style:var(--desktop-title-CTA-body-font-style)]">
            We would love you to become part of the family. If you have any
            questions or would love to join our join our holiday sports camps
            camps, get in touch!
          </p>

          <div className="flex gap-6 mt-auto">
            <button className="w-[198px] h-14 rounded-[100px] bg-white text-bb-red hover:bg-white/90 font-desktop-button-large-button-text font-[number:var(--desktop-button-large-button-text-font-weight)] text-[length:var(--desktop-button-large-button-text-font-size)] tracking-[var(--desktop-button-large-button-text-letter-spacing)] leading-[var(--desktop-button-large-button-text-line-height)] [font-style:var(--desktop-button-large-button-text-font-style)]">
              Contact Us
            </button>

            <button
              // variant="outline"
              className="w-[188px] h-14 rounded-[100px] bg-[#ff4040] text-white border-2 border-white hover:bg-[#ff4040]/90 hover:text-white font-desktop-button-large-button-text font-[number:var(--desktop-button-large-button-text-font-weight)] text-[length:var(--desktop-button-large-button-text-font-size)] tracking-[var(--desktop-button-large-button-text-letter-spacing)] leading-[var(--desktop-button-large-button-text-line-height)] [font-style:var(--desktop-button-large-button-text-font-style)]"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
