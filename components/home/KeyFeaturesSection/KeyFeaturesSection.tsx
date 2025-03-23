import { ArrowRightIcon } from "lucide-react";
import React from "react";

export const KeyFeaturesSection = () => {
  return (
<section className="w-full py-10 relative">
  <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 lg:px-8">

    {/* show only on desktop */}
    <div className="hidden lg:flex w-full lg:w-1/2 mb-6 lg:mb-0 justify-center lg:ml-[-30px] order-1 lg:order-2">
      <img
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-contain rounded-sm"
        alt="Child at birthday party"
        src="/assets/Oalh2MojUuk (2).png"
        width="1440"
        height="627"
      />
    </div>

    <div className="bg-[#FDF6EF] rounded-sm border-none w-full lg:w-1/2 order-2 lg:order-1">
      <div className="p-6 sm:p-8 md:p-12 lg:px-24 lg:py-[190px] text-center lg:text-left">
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
            would like a football or superhero themed party, we've got
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

    {/* show only on mobile and tablet */}
    <div className="block lg:hidden w-full mb-6 flex justify-center order-1">
      <img
        className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto object-contain rounded-sm"
        alt="Child at birthday party"
        src="/assets/Oalh2MojUuk (2).png"
        width="1440"
        height="627"
      />
    </div>
  </div>
</section>
  );
};
