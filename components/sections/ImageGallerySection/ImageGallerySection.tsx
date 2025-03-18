import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export const ImageGallerySection = () => {
  return (
    <section className="w-full py-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Image on the left */}
        <div className="w-full lg:w-1/2">
          <Image
            className="w-full h-auto object-cover rounded-sm"
            alt="Children playing sports outdoors"
            src="/assets/Oalh2MojUuk (1).png"
            width={1440}
            height={627}
          />
        </div>

        {/* Content on the right */}
        <div className="w-full lg:w-1/2 bg-light-cream bg-opacity-50 rounded-sm border-none">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 font-desktop-title-label text-grey-2 tracking-[var(--desktop-title-label-letter-spacing)] text-[length:var(--desktop-title-label-font-size)] leading-[var(--desktop-title-label-line-height)]">
                  SATURDAYS
                </p>

                <h2 className="font-desktop-title-headline-4 text-black text-[length:var(--desktop-title-headline-4-font-size)] tracking-[var(--desktop-title-headline-4-letter-spacing)] leading-[var(--desktop-title-headline-4-line-height)]">
                  HOLIDAY MULTISPORT CAMPS
                </h2>
              </div>

              <p className="font-desktop-body-body-copy-1 text-grey-2 text-[length:var(--desktop-body-body-copy-1-font-size)] tracking-[var(--desktop-body-body-copy-1-letter-spacing)] leading-[var(--desktop-body-body-copy-1-line-height)]">
                We offer our extremely popular Holiday Multisport Camps all year
                round. Children can learn various sports throughout the week,
                such as football, cricket and tennis. We also play fun games
                such as dodgeball and tagging and evasion games.
              </p>

              <div className="mt-2">
                <button
                  // variant="ghost"
                  className="p-0 h-auto flex items-center gap-4 hover:bg-transparent"
                >
                  <span className="font-desktop-button-button-text text-black text-[length:var(--desktop-button-button-text-font-size)] text-center tracking-[var(--desktop-button-button-text-letter-spacing)] leading-[var(--desktop-button-button-text-line-height)]">
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
