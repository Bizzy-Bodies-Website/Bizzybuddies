import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import client, { urlFor } from "../../../sanity"; // Ensure urlFor is properly imported

interface ImageData {
  asset: { _ref: string };
}

interface ServicesSectionProps {
  data?: {
    title: string;
    description?: any[]; // Allow Portable Text
    image?: ImageData;
  };
}

export const ImageGallerySection: React.FC<ServicesSectionProps> = ({
  data,
}) => {
  return (
    <section className="w-full py-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">
        {/* Image on the left */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center mr-0 lg:mr-[-30px]  z-10">
          {/* <Image
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-cover rounded-sm"
            alt="Children playing sports outdoors"
            src="/assets/about3.svg"
            width={1440}
            height={627}
          /> */}

          {data?.image ? (
            <img
              className="w-full h-auto object-cover rounded-md max-h-[627px]"
              alt="About Section Image"
              src={urlFor(data.image).url()}
            />
          ) : (
            <Image
              className="w-full h-auto object-cover rounded-md max-h-[627px]"
              alt="Children playing outdoors"
              src="/assets/about3.svg"
              width={1440}
              height={627}
              priority
            />
          )}
        </div>

        {/* Content on the right */}
        <div className="w-full lg:w-1/2 bg-[#FDF6EF] rounded-sm border-none flex justify-center">
          <div className="p-6 sm:p-8 md:p-12 lg:px-24 lg:py-[100px] text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 font-desktop-title-label text-[#636362] tracking-wide text-sm sm:text-base md:text-lg">
                  FOUNDER
                </p>
                <h2 className="font-desktop-title-headline-4 text-[#111111] text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight">
                  {data?.title}
                </h2>
              </div>

              <p className="font-desktop-body-body-copy-1 text-[#636362] text-sm sm:text-base md:text-lg leading-relaxed"></p>

              <div
                className="font-desktop-body-body-copy-1 text-[#636362] text-sm sm:text-base md:text
              lg:text-lg leading-relaxed"
              >
                {/* {data?.description ? (
                  <PortableText value={data?.description} />
                ) : (
                  ""
                )} */}

                {data?.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
