import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export const KeyFeaturesSection = () => {
  return (
    <section className="w-full py-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FDF6EF] rounded-sm border-none w-full lg:w-1/2">
          <div className="p-6 sm:p-8 md:p-12 lg:px-24 lg:py-[200px] text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 text-[#636362] text-sm md:text-base lg:text-lg font-semibold">
                  BIRTHDAYS
                </p>
                <h2 className="text-black text-xl md:text-2xl lg:text-3xl font-bold">
                  BIRTHDAY PARTIES
                </h2>
              </div>

              <p className="text-[#636362] text-sm md:text-base lg:text-lg leading-relaxed">
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
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center ml-[-30px]">
          <Image
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-contain rounded-sm"
            alt="Child at birthday party"
            src="/assets/Oalh2MojUuk (2).png"
            width={1440}
            height={627}
          />
        </div>
      </div>
    </section>
  );
};
