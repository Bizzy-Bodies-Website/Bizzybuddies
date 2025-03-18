import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export const KeyFeaturesSection = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="bg-light-cream bg-opacity-50 rounded-sm border-none md:w-1/2">
            <div className="p-8 md:p-12">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <p className="opacity-40 font-desktop-title-label font-[number:var(--desktop-title-label-font-weight)] text-grey-2 text-[length:var(--desktop-title-label-font-size)] tracking-[var(--desktop-title-label-letter-spacing)] leading-[var(--desktop-title-label-line-height)] [font-style:var(--desktop-title-label-font-style)]">
                    BIRTHDAYS
                  </p>
                  <h2 className="font-desktop-title-headline-4 font-[number:var(--desktop-title-headline-4-font-weight)] text-black text-[length:var(--desktop-title-headline-4-font-size)] tracking-[var(--desktop-title-headline-4-letter-spacing)] leading-[var(--desktop-title-headline-4-line-height)] [font-style:var(--desktop-title-headline-4-font-style)]">
                    BIRTHDAY PARTIES
                  </h2>
                </div>

                <p className="font-desktop-body-body-copy-1 font-[number:var(--desktop-body-body-copy-1-font-weight)] text-grey-2 text-[length:var(--desktop-body-body-copy-1-font-size)] tracking-[var(--desktop-body-body-copy-1-letter-spacing)] leading-[var(--desktop-body-body-copy-1-line-height)] [font-style:var(--desktop-body-body-copy-1-font-style)]">
                  Book a birthday with our specialised party team. Whether you
                  would like a football or superhero themed party, we&#39;ve got
                  you covered!
                </p>

                <div className="mt-2">
                  <button
                    // variant="ghost"
                    className="p-0 h-auto flex items-center gap-4 hover:bg-transparent"
                  >
                    <span className="font-desktop-button-button-text font-[number:var(--desktop-button-button-text-font-weight)] text-black text-[length:var(--desktop-button-button-text-font-size)] tracking-[var(--desktop-button-button-text-letter-spacing)] leading-[var(--desktop-button-button-text-line-height)] [font-style:var(--desktop-button-button-text-font-style)]">
                      View Birthday Parties
                    </span>
                    <div className="w-10 h-10 rounded-full border-2 border-bb-red flex items-center justify-center">
                      <ArrowRightIcon className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            {/* <Image
              className="w-full h-auto object-cover"
              alt="Child at birthday party"
              src=""
              width={1440}
              height={720}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
