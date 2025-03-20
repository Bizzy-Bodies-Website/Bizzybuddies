import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export const HighlightsSection = () => {
  return (
    // <section className="w-full py-10 relative">
    //   <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">
    //     <div className="bg-[#FDEFE0] rounded-sm border-none w-full lg:w-1/2">
    //       <div className="p-6 sm:p-8 md:p-12 lg:px-24 lg:py-[220px] text-center lg:text-left">
    //         <div className="flex flex-col gap-5">
    //           <div className="flex flex-col gap-4">
    //             <p className="opacity-40 font-desktop-title-label font-[number:var(--desktop-title-label-font-weight)] text-grey-2 text-[length:var(--desktop-title-label-font-size)] tracking-[var(--desktop-title-label-letter-spacing)] leading-[var(--desktop-title-label-line-height)] w-full [font-style:var(--desktop-title-label-font-style)]">
    //               GROUP SESSIONS
    //             </p>

    //             <h2 className="font-desktop-title-headline-4 font-[number:var(--desktop-title-headline-4-font-weight)] text-black text-[length:var(--desktop-title-headline-4-font-size)] tracking-[var(--desktop-title-headline-4-letter-spacing)] leading-[var(--desktop-title-headline-4-line-height)] w-full [font-style:var(--desktop-title-headline-4-font-style)]">
    //               SATURDAY MULTISPORT SESSIONS
    //             </h2>
    //           </div>

    //           <p className="w-[441px] font-desktop-body-body-copy-1 font-[number:var(--desktop-body-body-copy-1-font-weight)] text-grey-2 text-[length:var(--desktop-body-body-copy-1-font-size)] tracking-[var(--desktop-body-body-copy-1-letter-spacing)] leading-[var(--desktop-body-body-copy-1-line-height)] [font-style:var(--desktop-body-body-copy-1-font-style)]">
    //             Come down and join in our fun multisport sessions on a Saturday
    //             morning. Providing a fantastic introduction into sport for
    //             little ones, we focus on fun and games to develop your
    //             child&#39;s physical development.
    //           </p>

    //           <div className="flex items-center gap-[18px]">
    //             <button className="p-0 h-auto font-desktop-button-button-text font-[number:var(--desktop-button-button-text-font-weight)] text-black text-[length:var(--desktop-button-button-text-font-size)] text-center tracking-[var(--desktop-button-button-text-letter-spacing)] leading-[var(--desktop-button-button-text-line-height)] [font-style:var(--desktop-button-button-text-font-style)]">
    //               View Saturday Sessions
    //             </button>

    //             <button className="w-10 h-10 rounded-full border-2 border-[#ff0000] p-0 flex items-center justify-center">
    //               <ArrowRightIcon className="h-3 w-[13px]" />
    //             </button>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center ml-[-30px]">
    //         <Image
    //           className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-contain rounded-sm"
    //           alt="Children playing sports"
    //           src="/assets/Oalh2MojUuk (4).png"
    //           width={641}
    //           height={627}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="w-full py-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FDEFE0] rounded-sm border-none w-full lg:w-1/2">
          <div className="p-6 sm:p-8 md:p-12 lg:px-24 lg:py-[190px] text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 text-grey-2 text-sm md:text-base lg:text-lg font-semibold">
                  GROUP SESSIONS
                </p>
                <h2 className="text-black text-xl md:text-2xl lg:text-3xl font-bold">
                  SATURDAY MULTISPORT SESSIONS
                </h2>
              </div>

              <p className="text-grey-2 text-sm md:text-base lg:text-lg leading-relaxed">
                Come down and join in our fun multisport sessions on a Saturday
                morning. Providing a fantastic introduction into sport for
                little ones, we focus on fun and games to develop your
                child&#39;s physical development.
              </p>

              <div className="mt-2">
                <button className="p-0 h-auto flex items-center gap-4 hover:bg-transparent">
                  <span className="text-black text-sm md:text-base lg:text-lg font-medium">
                  View Saturday Sessions
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
            src="/assets/Oalh2MojUuk (4).png"
            width={1440}
            height={627}
          />
        </div>
      </div>
    </section>
  );
};
