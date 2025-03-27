import { ArrowRightIcon } from "lucide-react";
import React from "react";
import client, { urlFor } from "../../../sanity"; // Ensure urlFor is properly imported
import Image from "next/image";
import { PortableText } from "@portabletext/react";

interface ImageData {
  asset: { _ref: string };
}

interface HighlightsSectionProps {
  data?: {
    title: string;
    description?: any[]; // Allow Portable Text
    image?: ImageData;
  };
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({
  data,
}) => {
  return (
    <section className="w-full py-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 gap-4 md:gap-0">
        {/* Image First on Small Screens, Second on Large */}
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 lg:ml-[-30px]">
          {/* <Image
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-contain rounded-sm"
            alt="Child at birthday party"
            src="/assets/Oalh2MojUuk (4).png"
            width={1440}
            height={627}
          /> */}

          {data?.image ? (
            <img
              className="w-full h-auto object-cover rounded-md max-h-[627px]"
              alt="About Section Image"
              src={urlFor(data.image).url()}
              // width={1440}
              // height={627}
              // priority
            />
          ) : (
            <Image
              className="w-full h-auto object-cover rounded-md max-h-[627px]"
              alt="About Section Image"
              src="/assets/Oalh2MojUuk (4).png"
              width={1440}
              height={627}
              priority
            />
          )}
        </div>

        {/* Content Second on Small Screens, First on Large */}
        <div className="bg-[#FDF6EF] rounded-sm border-none w-full lg:w-1/2 order-2 lg:order-1">
          <div className="p-6 sm:p-8 md:p-12 lg:px-24  remove-padding add-padding3 text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 text-[#636362] text-sm md:text-base lg:text-lg font-desktop-title-label">
                  GROUP SESSIONS
                </p>
                <h2 className="font-desktop-title-headline-4 text-black text-[length:var(--desktop-title-headline-4-font-size)] tracking-[var(--desktop-title-headline-4-letter-spacing)] leading-[var(--desktop-title-headline-4-line-height)] [font-style:var(--desktop-title-headline-4-font-style)]">
                  {data?.title || ""}
                </h2>
              </div>

              <div className="font-desktop-body-body-copy-1 text-[#636362] text-[length:var(--desktop-body-body-copy-1-font-size)] tracking-[var(--desktop-body-body-copy-1-letter-spacing)] leading-[var(--desktop-body-body-copy-1-line-height)] [font-style:var(--desktop-body-body-copy-1-font-style)]">
                {data?.description ? (
                  <PortableText value={data.description} />
                ) : (
                  ""
                )}
              </div>
              <div className="mt-2">
                <button className="p-0 h-auto flex items-center gap-4 hover:bg-transparent">
                  <span className="text-[#111111] text-sm md:text-base lg:text-lg font-medium">
                    View Saturday Sessions
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-solid border-[#ff0000]">
                    <ArrowRightIcon className="w-5 h-5 text-[#ff0000]" />
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
