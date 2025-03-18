import Image from "next/image";
import React from "react";

export const ImageDisplaySection = () => {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[100px]">
          {/* Image column */}
          <div className="flex-1">
            <Image
              className="w-full max-w-[641px] h-auto object-cover"
              alt="Sports coaching session"
              src="/assets/Oalh2MojUuk (3).png"
              width={641}
              height={720}
            />
          </div>

          {/* Content column */}
          <div className="flex-1 bg-light-cream bg-opacity-50 rounded-sm border-none">
            <div className="pt-10 pb-10">
              <div className="flex flex-col items-start gap-5">
                <div className="flex flex-col items-start gap-4">
                  <p className="opacity-40 font-desktop-title-label text-grey-2 tracking-[var(--desktop-title-label-letter-spacing)] text-[length:var(--desktop-title-label-font-size)] leading-[var(--desktop-title-label-line-height)]">
                    COACHING
                  </p>

                  <h2 className="font-desktop-title-headline-4 text-black text-[length:var(--desktop-title-headline-4-font-size)] tracking-[var(--desktop-title-headline-4-letter-spacing)] leading-[var(--desktop-title-headline-4-line-height)]">
                    1V1 SPORTS COACHING
                  </h2>
                </div>

                <p className="font-desktop-body-body-copy-1 text-grey-2 text-[length:var(--desktop-body-body-copy-1-font-size)] tracking-[var(--desktop-body-body-copy-1-letter-spacing)] leading-[var(--desktop-body-body-copy-1-line-height)] max-w-[441px]">
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
      </div>
    </section>
  );
};
