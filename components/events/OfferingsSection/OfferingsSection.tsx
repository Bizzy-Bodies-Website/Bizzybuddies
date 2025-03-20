import React from "react";

export const OfferingsSection = () => {
  return (
    <section className="relative w-full h-[583px]">
      <div className="relative w-full max-w-[1440px] h-full mx-auto bg-cover bg-center">
        <div className="flex flex-col items-center justify-center h-full px-4">
          <h1 className="font-desktop-title-headline-1 text-white text-[length:var(--desktop-title-headline-1-font-size)] text-center tracking-[var(--desktop-title-headline-1-letter-spacing)] leading-[var(--desktop-title-headline-1-line-height)] [font-style:var(--desktop-title-headline-1-font-style)] mb-[22px]">
            NEW EVENT
          </h1>

          <h2 className="font-desktop-title-subheading-1 text-white text-[length:var(--desktop-title-subheading-1-font-size)] text-center tracking-[var(--desktop-title-subheading-1-letter-spacing)] leading-[var(--desktop-title-subheading-1-line-height)] [font-style:var(--desktop-title-subheading-1-font-style)] max-w-[629px]">
            HALLOWEEN SPECTACULAR
          </h2>

          <p>October 30th 2021</p>
        </div>
      </div>
    </section>
  );
};
