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
          <div className="p-6 sm:p-8 md:p-12 lg:px-24 lg:py-[120px] text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 font-desktop-title-label text-[#636362] tracking-wide text-sm sm:text-base md:text-lg">
                  CAMPS
                </p>
                <h2 className="font-desktop-title-headline-4 text-black text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight">
                  Mutlisport Camp
                </h2>
              </div>

              <p className="font-desktop-body-body-copy-1 text-[#636362] text-sm sm:text-base md:text-lg leading-relaxed">
                Come and try our multisport camp for boys and girls aged 3 - 11
                years. The kids won't get bored playing various sports such as
                football, tennis, dodgeball, tag rugby and more! With lots of
                throwing, running, catching and jumping, we provide a fun-filled
                day of sporting activities.
              </p>

              <div className="mt-4 flex flex-col md:flex justify-center lg:justify-between gap-4">
                <button className="p-0 h-auto flex items-center gap-4 md:gap-2 hover:bg-transparent">
                  <span className="font-desktop-button-button-text text-black text-sm sm:text-base md:text-[14px]">
                    Contact us for more information
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-solid border-[#ff0000]">
                    <ArrowRightIcon className="w-3 h-3 text-[#ff0000]" />
                  </div>
                </button>

                <button className="p-0 h-auto flex items-center gap-2 hover:bg-transparent">
                  <span className="font-desktop-button-button-text text-black text-sm sm:text-base md:text-[14px]">
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
