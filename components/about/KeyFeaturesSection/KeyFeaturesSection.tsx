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
    label: string;
  };
}

export const KeyFeaturesSection: React.FC<ServicesSectionProps> = ({
  data,
}) => {
  return (
    <section className="w-full py-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">
        {/* Image First on Small Screens, Second on Large */}
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 lg:ml-[-30px]">
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

        {/* Content Second on Small Screens, First on Large */}
        <div className="bg-[#FDF6EF] rounded-sm border-none w-full lg:w-1/2 order-2 lg:order-1">
          <div className="p-6 sm:p-8 md:p-12 lg:px-24 add-padding3 remove-padding text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 text-[#636362] text-sm md:text-base lg:text-lg font-semibold">
                  {data?.label}
                </p>
                <h2 className="text-[#111111] text-xl md:text-2xl lg:text-3xl font-bold">
                {data?.title}
                </h2>
              </div>

              <p className="text-[#636362] text-sm md:text-base lg:text-lg leading-relaxed">
              {data?.description}
              </p>

              {/* <p className="text-[#636362] text-sm md:text-base lg:text-lg leading-relaxed">
                Noah has been coaching children for over 15 years. He has helped
                children work and develop their fine and gross motor skills,
                hand-eye coordination, and social skills.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
