import React from "react";
import { PortableText } from "@portabletext/react";
import client, { urlFor } from "../../../sanity"; // Ensure urlFor is properly imported

interface BenefitsOverviewSectionProps {
  data: any; // Replace 'any' with the actual type if known
  text: any
}

interface Benefit {
  _id: string;
  title: string;
  description: string;
}

export const BenefitsOverviewSection: React.FC<
  BenefitsOverviewSectionProps
> = ({ data, text }) => {
  console.log("BenefitsOverviewSection", text);


  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FF0000",
      }}
      className="w-full py-16 bg-bb-red bg-cover relative"
    >
      <div className="container mx-auto px-4">
        {/* Header content */}
        <div className="flex flex-col items-center gap-4 mb-24">
          <h2 className="font-desktop-title-headline-2 text-[length:var(--desktop-title-headline-2-font-size)] text-center tracking-[var(--desktop-title-headline-2-letter-spacing)] leading-[var(--desktop-title-headline-2-line-height)] text-white max-w-[861px]">
          {text?.title}
          </h2>
          <p className="font-desktop-title-subheading-2 text-[length:var(--desktop-title-subheading-2-font-size)] text-center tracking-[var(--desktop-title-subheading-2-letter-spacing)] leading-[var(--desktop-title-subheading-2-line-height)] text-white max-w-[574px]">
          {text?.description}
          </p>
        </div>

        {/* Benefits divs */}
        <div className="flex flex-wrap justify-center gap-12">
          {data?.map((benefit: Benefit) => (
            <div key={benefit?._id} className="bg-transparent border-none w-64">
              <div className="flex flex-col items-center gap-2.5 p-0">
                <h3 className="font-desktop-title-headline-5 text-[length:var(--desktop-title-headline-5-font-size)] text-center tracking-[var(--desktop-title-headline-5-letter-spacing)] leading-[var(--desktop-title-headline-5-line-height)] text-white whitespace-nowrap">
                  {benefit?.title}
                </h3>
                <p className="font-desktop-body-body-copy-1 text-[length:var(--desktop-body-body-copy-1-font-size)] text-center tracking-[var(--desktop-body-body-copy-1-letter-spacing)] leading-[var(--desktop-body-body-copy-1-line-height)] text-white">
                  {benefit?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
