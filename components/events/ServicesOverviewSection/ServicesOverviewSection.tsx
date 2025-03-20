import Image from "next/image";
import React from "react";

export const ServicesOverviewSection = () => {
  return (
    <section className="flex justify-center py-20 w-full px-4 md:px-8">
      <div className="flex flex-col gap-[80px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px] max-w-7xl w-full">
          <div className="w-full lg:w-1/2">
            <Image
              className="w-full h-auto object-cover rounded-md max-h-[627px]"
              alt="Children playing outdoors"
              src="/assets/about.svg"
              width={1440}
              height={627}
              priority
            />
          </div>

          <div className="w-full lg:w-1/2 border-none shadow-none">
            <div className="p-0">
              <div className="flex flex-col items-start gap-5">
                <div className="flex flex-col items-start gap-4">
                  <div className="opacity-40 font-desktop-title-label text-grey-2 text-sm md:text-base lg:text-lg">
                    ABOUT US
                  </div>
                  <h2 className="font-desktop-title-headline-5 text-black text-xl md:text-2xl lg:text-3xl font-bold">
                    ABOUT BIZZY BUDDIES
                  </h2>
                </div>

                <p className="font-desktop-body-body-copy-1 text-grey-2 text-sm md:text-base lg:text-lg leading-relaxed">
                  Bizzy Buddies is a sports coaching company based in Chiswick
                  W4, for children aged 18months - 11 years. It was set up in
                  January 2020 by Reiss Mcgrath.
                  <br />
                  <br />
                  It is run by friends and business partners Reiss McGrath and
                  Noah Kibreab. Both of whom are teachers.
                  <br />
                  <br />
                  Reiss and Noah have been teaching sports for over 18 years to
                  various children across London, in schools and for several
                  sports coaching companies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px] max-w-7xl w-full">
          <div className="w-full lg:w-1/2 border-none shadow-none">
            <div className="p-0">
              <div className="flex flex-col items-start gap-5">
                {/* <div className="flex flex-col items-start gap-4">
                  <div className="opacity-40 font-desktop-title-label text-grey-2 text-sm md:text-base lg:text-lg">
                    ABOUT US
                  </div>
                  <h2 className="font-desktop-title-headline-5 text-black text-xl md:text-2xl lg:text-3xl font-bold">
                    ABOUT BIZZY BUDDIES
                  </h2>
                </div> */}

                <p className="font-desktop-body-body-copy-1 text-grey-2 text-sm md:text-base lg:text-lg leading-relaxed">
                  We offer weekend sports classes, holiday sports camps, PPA
                  cover and birthday parties.
                  <br />
                  <br />
                  Our main focus is on the children enjoying themselves and
                  developing a love for playing sport from an early age.
                  <br />
                  <br />
                  We believe that children learn best through play. With that in
                  mind, we tailor our sessions to maximise the fun aspect so
                  that children do not even realise they are learning new
                  skills, vital for their future physical development.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <Image
              className="w-full h-auto object-cover rounded-md max-h-[627px]"
              alt="Children playing outdoors"
              src="/assets/about2.svg"
              width={1440}
              height={627}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
