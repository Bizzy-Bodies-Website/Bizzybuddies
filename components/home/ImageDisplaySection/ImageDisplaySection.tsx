import Image from "next/image";
import React from "react";

export const ImageDisplaySection = () => {
  return (
    <section className="w-full py-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">
        {/* Image on the left */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center mr-0 lg:mr-[-30px]  z-10">
          <Image
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-cover rounded-sm"   alt="Sports coaching session"
              src="/assets/Oalh2MojUuk (3).png"
              width={1440}
              height={627}
            />
          </div>

          {/* Content column */}
          <div className="w-full lg:w-1/2 bg-[#FDF6EF] rounded-sm border-none flex justify-center">
          <div className="p-6 sm:p-8 md:p-12 lg:px-24 lg:py-[180px] text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                  <p className="opacity-40 font-desktop-title-label text-[#636362] tracking-[var(--desktop-title-label-letter-spacing)] text-[length:var(--desktop-title-label-font-size)] leading-[var(--desktop-title-label-line-height)]">
                    COACHING
                  </p>

                  <h2 className="font-desktop-title-headline-4 text-[#111111] text-[length:var(--desktop-title-headline-4-font-size)] tracking-[var(--desktop-title-headline-4-letter-spacing)] leading-[var(--desktop-title-headline-4-line-height)]">
                    1V1 SPORTS COACHING
                  </h2>
                </div>

                <p className="font-desktop-body-body-copy-1 text-[#636362] text-[length:var(--desktop-body-body-copy-1-font-size)] tracking-[var(--desktop-body-body-copy-1-letter-spacing)] leading-[var(--desktop-body-body-copy-1-line-height)] max-w-[441px]">
                  We offer 1v1 sports coaching to take your child&#39;s sporting
                  ability to the next level. Whether they want to brush up on
                  their shooting technique in football, or their backhand stroke
                  in tennis - we&#39;ve got it covered! With specialised
                  coaches, we&#39;ll work together to improve your child&#39;s
                  game.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
