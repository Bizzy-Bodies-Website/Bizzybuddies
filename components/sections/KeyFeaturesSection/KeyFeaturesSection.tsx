import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export const KeyFeaturesSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="bg-light-cream bg-opacity-50 rounded-sm border-none w-full lg:w-1/2">
            <div className="p-6 md:p-10 lg:p-12">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <p className="opacity-40 text-grey-2 text-sm md:text-base lg:text-lg font-semibold">
                    BIRTHDAYS
                  </p>
                  <h2 className="text-black text-xl md:text-2xl lg:text-3xl font-bold">
                    BIRTHDAY PARTIES
                  </h2>
                </div>

                <p className="text-grey-2 text-sm md:text-base lg:text-lg leading-relaxed">
                  Book a birthday with our specialised party team. Whether you
                  would like a football or superhero themed party, we&#39;ve got
                  you covered!
                </p>

                <div className="mt-2">
                  <button className="p-0 h-auto flex items-center gap-4 hover:bg-transparent">
                    <span className="text-black text-sm md:text-base lg:text-lg font-medium">
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

          <div className="w-full lg:w-1/2">
            <Image
              className="w-full h-auto object-cover rounded-md"
              alt="Child at birthday party"
              src="/assets/Oalh2MojUuk (2).png"
              width={1440}
              height={720}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};