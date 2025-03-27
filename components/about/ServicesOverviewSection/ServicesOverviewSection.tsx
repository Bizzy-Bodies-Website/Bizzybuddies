import { urlFor } from "@/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";

interface ImageData {
  asset: { _ref: string };
}

interface ServicesSectionProps {
  data?: {
    title: string;
    description1?: string;
    description2?: string;
    image1?: ImageData;
    image2?: ImageData;
    label: string;
  };
}

export const ServicesOverviewSection: React.FC<ServicesSectionProps> = ({
  data,
}) => {
  return (
    <section className="flex justify-center py-20 w-full px-4 md:px-8">
      <div className="flex flex-col gap-[80px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px] max-w-7xl w-full">
          <div className="w-full lg:w-1/2">
            {/* <Image
              className="w-full h-auto object-cover rounded-md max-h-[627px]"
              alt="Children playing outdoors"
              src="/assets/about.svg"
              width={1440}
              height={627}
              priority
            /> */}

            {data?.image1 ? (
              <img
                className="w-full h-auto object-cover rounded-md max-h-[627px]"
                alt="About Section Image"
                src={urlFor(data.image1).url()}
              />
            ) : (
              <Image
                className="w-full h-auto object-cover rounded-md max-h-[627px]"
                alt="Children playing outdoors"
                src="/assets/about.svg"
                width={1440}
                height={627}
                priority
              />
            )}
          </div>

          <div className="w-full lg:w-1/2 border-none shadow-none">
            <div className="p-0">
              <div className="flex flex-col items-start gap-5">
                <div className="flex flex-col items-start gap-4">
                  <div className="opacity-40 font-desktop-title-label text-[#636362] text-sm md:text-base lg:text-lg">
                    {data?.label}
                  </div>
                  <h2 className="font-desktop-title-headline-5 text-[#111111] text-xl md:text-2xl lg:text-3xl font-bold">
                    {data?.title}
                  </h2>
                </div>

                <div className="font-desktop-body-body-copy-1 text-[#636362] text-sm md:text-base lg:text-lg leading-relaxed">
                  {data?.description1}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px] max-w-7xl w-full">
          <div className="w-full lg:w-1/2 border-none shadow-none">
            <div className="p-0">
              <div className="flex flex-col items-start gap-5">
                <p className="font-desktop-body-body-copy-1 text-[#636362] text-sm md:text-base lg:text-lg leading-relaxed">
                  {data?.description2}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            {data?.image2 ? (
              <img
                className="w-full h-auto object-cover rounded-md max-h-[627px]"
                alt="About Section Image"
                src={urlFor(data.image2).url()}
              />
            ) : (
              <Image
                className="w-full h-auto object-cover rounded-md max-h-[627px]"
                alt="Children playing outdoors"
                src="/assets/about2.svg"
                width={1440}
                height={627}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
