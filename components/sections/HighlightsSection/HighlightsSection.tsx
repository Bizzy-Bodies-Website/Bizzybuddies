import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export const HighlightsSection = () => {
  return (
    <section className="w-full py-10">
      <div className="relative w-full max-w-[1360px] mx-auto">
        <div className="relative overflow-hidden border-none">
          <div className="p-0">
            <div className="flex flex-row items-center">
              {/* Background color panel */}
              <div className="absolute left-0 top-0 w-[758px] h-full bg-light-cream rounded-sm opacity-50" />

              {/* Content container */}
              <div className="flex items-center gap-[99px] py-[39px] px-[139px] relative z-10">
                {/* Text content */}
                <div className="w-[481px]">
                  <div className="flex flex-col items-start gap-5">
                    <div className="flex flex-col items-start gap-4">
                      <p className="opacity-40 font-desktop-title-label font-[number:var(--desktop-title-label-font-weight)] text-grey-2 text-[length:var(--desktop-title-label-font-size)] tracking-[var(--desktop-title-label-letter-spacing)] leading-[var(--desktop-title-label-line-height)] w-full [font-style:var(--desktop-title-label-font-style)]">
                        GROUP SESSIONS
                      </p>

                      <h2 className="font-desktop-title-headline-4 font-[number:var(--desktop-title-headline-4-font-weight)] text-black text-[length:var(--desktop-title-headline-4-font-size)] tracking-[var(--desktop-title-headline-4-letter-spacing)] leading-[var(--desktop-title-headline-4-line-height)] w-full [font-style:var(--desktop-title-headline-4-font-style)]">
                        SATURDAY MULTISPORT SESSIONS
                      </h2>
                    </div>

                    <p className="w-[441px] font-desktop-body-body-copy-1 font-[number:var(--desktop-body-body-copy-1-font-weight)] text-grey-2 text-[length:var(--desktop-body-body-copy-1-font-size)] tracking-[var(--desktop-body-body-copy-1-letter-spacing)] leading-[var(--desktop-body-body-copy-1-line-height)] [font-style:var(--desktop-body-body-copy-1-font-style)]">
                      Come down and join in our fun multisport sessions on a
                      Saturday morning. Providing a fantastic introduction into
                      sport for little ones, we focus on fun and games to
                      develop your child&#39;s physical development.
                    </p>

                    <div className="flex items-center gap-[18px]">
                      <button
                        // variant="link"
                        className="p-0 h-auto font-desktop-button-button-text font-[number:var(--desktop-button-button-text-font-weight)] text-black text-[length:var(--desktop-button-button-text-font-size)] text-center tracking-[var(--desktop-button-button-text-letter-spacing)] leading-[var(--desktop-button-button-text-line-height)] [font-style:var(--desktop-button-button-text-font-style)]"
                      >
                        View Saturday Sessions
                      </button>

                      <button
                        // variant="outline"
                        // size="icon"
                        className="w-10 h-10 rounded-full border-2 border-[#ff0000] p-0 flex items-center justify-center"
                      >
                        <ArrowRightIcon className="h-3 w-[13px]" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <Image
                  className="w-[641px] h-[627px] object-cover"
                  alt="Children playing sports"
                  src="/assets/Oalh2MojUuk (4).png"
                  width={641}
                  height={627}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
