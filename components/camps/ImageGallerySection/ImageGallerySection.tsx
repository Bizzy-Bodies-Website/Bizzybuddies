import { urlFor } from "@/sanity";
import { PortableText } from "@portabletext/react";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ImageData {
  asset: { _ref: string };
}

interface ImageGallerySectionProps {
  data?: {
    title: string;
    description?: any; // Allow Portable Text
    image?: ImageData;
    linkText: string;
    linkUrl: string;
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
          {data?.image?.asset?._ref ? (
            <img
              className="w-full h-auto object-cover rounded-md max-h-[627px]"
              alt="About Section Image"
              src={urlFor(data.image.asset._ref).url()}
            />
          ) : (
            <Image
              className="w-full h-auto object-cover rounded-md max-h-[627px]"
              alt="About Section Image"
              src="/assets/Oalh2MojUuk (2).png"
              width={1440}
              height={627}
              priority
            />
          )}
        </div>

        {/* Content on the right */}
        <div className="w-full lg:w-1/2 bg-[#FDF6EF] rounded-sm border-none flex justify-center">
          <div className="p-6 sm:p-8 md:p-12 lg:px-24 text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 font-desktop-title-label text-[#636362] tracking-wide text-sm sm:text-base md:text-lg">
                  CAMPS
                </p>
                <h2 className="font-desktop-title-headline-4 text-[#111111] text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight">
                  {data?.title || ""}
                </h2>
              </div>

              <p className="font-desktop-body-body-copy-1 text-[#636362] text-sm sm:text-base md:text-lg leading-relaxed">
                {/* {data?.description ? (
                  <PortableText value={data.description} />
                ) : (
                  ""
                )} */}
                {data?.description}
              </p>

              <div className="mt-4 flex flex-col md:flex justify-center lg:justify-between gap-4">
                <Link
                  href="/contact"
                  className="p-0 h-auto flex items-center gap-4 md:gap-2 hover:bg-transparent"
                >
                  <span className="font-desktop-button-button-text text-[#111111] text-sm sm:text-base md:text-[14px]">
                    Contact us for more information
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-solid border-[#ff0000]">
                    <ArrowRightIcon className="w-3 h-3 text-[#ff0000]" />
                  </div>
                </Link>

                {data?.linkUrl && data?.linkText && (
                  <Link
                    href={data?.linkUrl || "#"}
                    className="p-0 h-auto flex items-center gap-2 hover:bg-transparent"
                  >
                    <span className="font-desktop-button-button-text text-[#111111] text-sm sm:text-base md:text-[14px]">
                      {data?.linkText || ""}
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-solid border-[#ff0000]">
                      <ArrowRightIcon className="w-3 h-3 text-[#ff0000]" />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
