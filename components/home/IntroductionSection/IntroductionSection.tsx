"use client"

import React from "react";

interface OfferingsSectionProps {
  // existing props
  data?: {
    title: string;
    subtitle: string;
    backgroundImage?: {
      asset: {
        _ref: string;
      };
    };
  };
}

export const IntroductionSection: React.FC<OfferingsSectionProps> = ({
  data,
}) => {
  return (
    <section className="w-full py-12">
      <div className="w-full bg-bb-red overflow-hidden border-0">
        <div className="p-0 relative">

          <div className="absolut inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-white max-w-3xl">
              <h2 className="w-full lg:w-[600px] font-desktop-title-headline-2 text-[length:var(--desktop-title-headline-2-font-size)] text-center tracking-[var(--desktop-title-headline-2-letter-spacing)] leading-[var(--desktop-title-headline-2-line-height)]">
                {data?.title}
              </h2>

              <p className="w-full lg:w-[450px] font-desktop-title-subheading-2 text-[length:var(--desktop-title-subheading-2-font-size)] text-center tracking-[var(--desktop-title-subheading-2-letter-spacing)] leading-[var(--desktop-title-subheading-2-line-height)]">
                {data?.subtitle} 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
