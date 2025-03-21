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
            src="/assets/about3.svg"
            width={1440}
            height={627}
          />
        </div>

        {/* Content on the right */}
        <div className="w-full lg:w-1/2 bg-[#FDF6EF] rounded-sm border-none flex justify-center">
          <div className="p-6 sm:p-8 md:p-12 lg:px-24 lg:py-[180px] text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 font-desktop-title-label text-[#636362] tracking-wide text-sm sm:text-base md:text-lg">
                  FOUNDER
                </p>
                <h2 className="font-desktop-title-headline-4 text-black text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight">
                  HEY, I’M REISS!
                </h2>
              </div>

              <p className="font-desktop-body-body-copy-1 text-[#636362] text-sm sm:text-base md:text-lg leading-relaxed">
                Reiss is the founder and director of Bizzy Buddies. He has been
                teaching sports to children for over 18 years. He is an FA
                qualified football coach, LTA qualified tennis coach and
                currently the Head of PE at The Falcons Pre-Prep for Boys in
                Chiswick.
              </p>

              <p
                className="font-desktop-body-body-copy-1 text-[#636362] text-sm sm:text-base md:text
              lg:text-lg leading-relaxed"
              >
                Reiss has a great passion for teaching children and observing
                their development. He has previously worked as a nanny and has
                also supported various SEND children in primary schools across
                London.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
