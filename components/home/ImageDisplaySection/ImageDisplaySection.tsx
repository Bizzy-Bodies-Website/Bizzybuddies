import React from "react";
import client, { urlFor } from "../../../sanity"; // Ensure urlFor is properly imported
import Image from "next/image";
import { PortableText } from "@portabletext/react";

interface ImageData {
  asset: { _ref: string };
}

interface ImageDisplaySectionProps {
  data?: {
    title: string;
    description?: any[]; // Allow Portable Text
    image?: ImageData;
  };
}

export const ImageDisplaySection: React.FC<ImageDisplaySectionProps> = ({
  data,
}) => {
  return (
    <section className="w-full py-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">
        {/* Image on the left */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center mr-0 lg:mr-[-30px]  z-10">
          {/* <Image
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-cover rounded-sm"   alt="Sports coaching session"
              src="/assets/Oalh2MojUuk (3).png"
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
              alt="Child at birthday party"
              src="/assets/Oalh2MojUuk (3).png"
              width={1440}
              height={627}
              priority
            />
          )}
        </div>

        {/* Content column */}
        <div className="w-full lg:w-1/2 bg-[#FDF6EF] rounded-sm border-none flex justify-center">
          <div className="p-6 sm:p-8 md:p-12 lg:px-24 remove-padding add-padding text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 font-desktop-title-label text-[#636362] tracking-[var(--desktop-title-label-letter-spacing)] text-[length:var(--desktop-title-label-font-size)] leading-[var(--desktop-title-label-line-height)]">
                  COACHING
                </p>

                <h2 className="font-desktop-title-headline-4 text-[#111111] text-[length:var(--desktop-title-headline-4-font-size)] tracking-[var(--desktop-title-headline-4-letter-spacing)] leading-[var(--desktop-title-headline-4-line-height)]">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
