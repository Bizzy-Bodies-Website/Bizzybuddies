import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import client, { urlFor } from "../../../sanity"; // Ensure urlFor is properly imported
import { PortableText } from "@portabletext/react";

interface ImageData {
  asset: { _ref: string };
}

interface ImageGallerySectionProps {
  data?: {
    title: string;
    description?: any[]; // Allow Portable Text
    image?: ImageData;
  };
}

export const ImageGallerySection: React.FC<ImageGallerySectionProps> = ({
  data,
}) => {
  return (
    <section className="w-full py-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">
        {/* Image on the left */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center mr-0 lg:mr-[-30px]  z-10">
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
              alt="Children playing outdoors"
              src="/assets/Oalh2MojUuk.png"
              width={1440}
              height={627}
              priority
            />
          )}
        </div>

        {/* Content on the right */}
        <div className="w-full lg:w-1/2 bg-[#FDF6EF] rounded-sm border-none flex justify-center">
          <div className="p-6 sm:p-8 md:p-12 lg:px-24 lg:py-[120px] text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 font-desktop-title-label text-[#636362] tracking-wide text-sm sm:text-base md:text-lg">
                  SATURDAYS
                </p>
                <h2 className="font-desktop-title-headline-4 text-black text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight">
                  {data?.title || ""}
                </h2>
              </div>

              <div className="font-desktop-body-body-copy-1 text-[#636362] text-sm sm:text-base md:text-lg leading-relaxed">
                {data?.description ? (
                  <PortableText value={data.description} />
                ) : (
                  ""
                )}
              </div>

              <div className="mt-4 flex justify-center lg:justify-start">
                <button className="p-0 h-auto flex items-center gap-4 hover:bg-transparent">
                  <span className="font-desktop-button-button-text text-[#111111] text-sm sm:text-base md:text-lg">
                    View Saturday Sessions
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-solid border-[#ff0000]">
                    <ArrowRightIcon className="w-5 h-5 text-[#111111]" />
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
