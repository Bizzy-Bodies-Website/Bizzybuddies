import Image from "next/image";
import React from "react";

export const ServicesOverviewSection = () => {
  return (
    <section className="flex justify-center py-20 w-full">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[100px] max-w-7xl">
        <div className="w-full md:w-1/2">
          {/* <Image
            className="w-full h-auto object-cover rounded-md max-h-[627px]"
            alt="Children playing outdoors"
            src=""
            width={1440}
            height={627}
          /> */}
        </div>

        <div className="w-full md:w-1/2 border-none shadow-none">
          <div className="p-0">
            <div className="flex flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-4">
                <div className="opacity-40 font-desktop-title-label font-[number:var(--desktop-title-label-font-weight)] text-grey-2 text-[length:var(--desktop-title-label-font-size)] tracking-[var(--desktop-title-label-letter-spacing)] leading-[var(--desktop-title-label-line-height)] [font-style:var(--desktop-title-label-font-style)]">
                  ABOUT US
                </div>

                <h2 className="font-desktop-title-headline-5 font-[number:var(--desktop-title-headline-5-font-weight)] text-black text-[length:var(--desktop-title-headline-5-font-size)] tracking-[var(--desktop-title-headline-5-letter-spacing)] leading-[var(--desktop-title-headline-5-line-height)] [font-style:var(--desktop-title-headline-5-font-style)]">
                  A LITTLE BIT ABOUT <br />
                  BIZZY BUDDIES
                </h2>
              </div>

              <p className="font-desktop-body-body-copy-1 font-[number:var(--desktop-body-body-copy-1-font-weight)] text-grey-2 text-[length:var(--desktop-body-body-copy-1-font-size)] tracking-[var(--desktop-body-body-copy-1-letter-spacing)] leading-[var(--desktop-body-body-copy-1-line-height)] [font-style:var(--desktop-body-body-copy-1-font-style)]">
                Launched in 2019 we are a multi-sports coaching company for
                children aged 18months - 11 years old.
                <br />
                <br />
                Our sessions combine education with physical activity, focusing
                on ABC&apos;s (agility, balance and co-ordination) whilst also
                developing fine and gross motor skills.
                <br />
                <br />
                In our specifically tailored classes, children will learn to
                hone vital skills needed for their future physical development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
