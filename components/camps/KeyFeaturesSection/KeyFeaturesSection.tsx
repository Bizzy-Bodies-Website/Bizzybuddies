import { urlFor } from "@/sanity";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ImageData {
  asset: { _ref: string };
}

interface KeyFeaturesSectionProps {
  data?: {
    title: string;
    description?: any; // Allow Portable Text
    image?: ImageData;
  };
}

export const KeyFeaturesSection: React.FC<KeyFeaturesSectionProps> = ({
  data,
}) => {
  return (
    <section className="w-full py-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 gap-4 md:gap-0">
        {/* Image First on Small Screens, Second on Large */}
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 lg:ml-[-30px]">
          {data?.image?.asset?._ref ? (
            <img
              className="w-full h-auto object-cover rounded-md max-h-[627px]"
              alt="About Section Image"
              src={urlFor(data.image.asset._ref).url()}
            />
          ) : (
            <Image
              className="w-full h-auto object-cover rounded-md max-h-[627px]"
              alt="About Section Image"
              src="/assets/Oalh2MojUuk (2).png"
              width={1440}
              height={627}
              priority
            />
          )}
        </div>

        {/* Content Second on Small Screens, First on Large */}
        <div className="bg-[#FDF6EF] rounded-sm border-none w-full lg:w-1/2 order-2 lg:order-1">
          <div className="p-6 sm:p-8 md:p-12 lg:px-24 text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 text-[#636362] text-sm md:text-base lg:text-lg font-semibold">
                  CAMPS
                </p>
                <h2 className="font-desktop-title-headline-4 text-[#111111] text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight">
                  {data?.title || ""}
                </h2>
              </div>

              <p className="text-[#636362] text-sm md:text-base lg:text-lg leading-relaxed">
                {data?.description}
              </p>

              <div className="mt-4 flex flex-col md:flex justify-center lg:justify-between gap-4">
                <button className="p-0 h-auto flex items-center gap-4 md:gap-2 hover:bg-transparent">
                  <span className="font-desktop-button-button-text text-[#111111] text-sm sm:text-base md:text-[14px]">
                    Contact us for more information
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-solid border-[#ff0000]">
                    <ArrowRightIcon className="w-3 h-3 text-[#ff0000]" />
                  </div>
                </button>

                <button className="p-0 h-auto flex items-center gap-2 hover:bg-transparent">
                  <span className="font-desktop-button-button-text text-[#111111] text-sm sm:text-base md:text-[14px]">
                    Book now{" "}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-solid border-[#ff0000]">
                    <ArrowRightIcon className="w-3 h-3 text-[#ff0000]" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
