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

export const ServicesOverviewSection: React.FC<ServicesSectionProps> = ({ data }) => {
  return (
    <section className="flex justify-center py-20 w-full px-4 md:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px] max-w-7xl w-full">
        
        {/* Image Section */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
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
              src="/assets/Oalh2MojUuk.png"
              width={1440}
              height={627}
              priority
            />
          )}
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="w-full lg:w-1/2 border-none shadow-none"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="p-0">
            <div className="flex flex-col items-start gap-5">
              
              {/* Section Title */}
              <motion.div 
                className="flex flex-col items-start gap-4"
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div
                  style={{ fontFamily: "var(--font-bebas)" }}
                  className="opacity-40 font-desktop-title-label text-[#636362] text-sm md:text-base lg:text-lg"
                >
                  ABOUT US
                </div>
                <h2 className="w-full lg:w-[400px] font-desktop-title-headline-5 text-[#111111] text-xl md:text-2xl lg:text-3xl font-bold">
                  {data?.title || "A LITTLE BIT ABOUT BIZZY BUDDIES"}
                </h2>
              </motion.div>

              {/* Rich Text Description */}
              <motion.div 
                className="font-desktop-body-body-copy-1 text-[#636362] text-sm md:text-base lg:text-lg leading-relaxed"
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {data?.description ? <PortableText value={data.description} /> : "No description available."}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
