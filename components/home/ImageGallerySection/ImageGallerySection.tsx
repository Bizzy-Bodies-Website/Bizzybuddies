import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export const ImageGallerySection = () => {
  return (
    <section className="w-full py-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">
        {/* Image on the left */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center mr-0 lg:mr-[-30px]  z-10">
          <Image
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-cover rounded-sm"
            alt="Children playing sports outdoors"
            src="/assets/Oalh2MojUuk (1).png"
            width={1440}
            height={627}
          />
        </div>

        {/* Content on the right */}
        <div className="w-full lg:w-1/2 bg-[#FDF6EF] rounded-sm border-none flex justify-center">
          <div className="p-6 sm:p-8 md:p-12 lg:px-24 lg:py-[180px] text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 font-desktop-title-label text-grey-2 tracking-wide text-sm sm:text-base md:text-lg">
                  SATURDAYS
                </p>
                <h2 className="font-desktop-title-headline-4 text-black text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight">
                  HOLIDAY MULTISPORT CAMPS
                </h2>
              </div>

              <p className="font-desktop-body-body-copy-1 text-grey-2 text-sm sm:text-base md:text-lg leading-relaxed">
                We offer our extremely popular Holiday Multisport Camps all year
                round. Children can learn various sports throughout the week,
                such as football, cricket and tennis. We also play fun games
                such as dodgeball and tagging and evasion games.
              </p>

              <div className="mt-4 flex justify-center lg:justify-start">
                <button className="p-0 h-auto flex items-center gap-4 hover:bg-transparent">
                  <span className="font-desktop-button-button-text text-black text-sm sm:text-base md:text-lg">
                    View Saturday Sessions
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-solid border-[#ff0000]">
                    <ArrowRightIcon className="w-5 h-5 text-black" />
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
