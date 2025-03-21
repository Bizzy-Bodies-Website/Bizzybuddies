import Image from "next/image";
import React from "react";

export const ServicesOverviewSection = () => {
  return (
    <section className="flex justify-center py-20 w-full px-4 md:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px] max-w-7xl w-full">
        <div className="w-full lg:w-1/2">
          <Image
            className="w-full h-auto object-cover rounded-md max-h-[627px]"
            alt="Children playing outdoors"
            src="/assets/Oalh2MojUuk.png"
            width={1440}
            height={627}
            priority
          />
        </div>

        <div className="w-full lg:w-1/2 border-none shadow-none">
          <div className="p-0">
            <div className="flex flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-4">
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                  }}
                  className="opacity-40 font-desktop-title-label text-grey-2 text-sm md:text-base lg:text-lg"
                >
                  ABOUT US
                </div>
                <h2 className="font-desktop-title-headline-5 text-black text-xl md:text-2xl lg:text-3xl font-bold">
                  A LITTLE BIT ABOUT <br /> BIZZY BUDDIES
                </h2>
              </div>

              <p className="font-desktop-body-body-copy-1 text-grey-2 text-sm md:text-base lg:text-lg leading-relaxed">
                Launched in 2019, we are a multi-sports coaching company for
                children aged 18 months - 11 years old.
                <br />
                <br />
                Our sessions combine education with physical activity, focusing
                on ABC&apos;s (agility, balance, and coordination) whilst also
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
