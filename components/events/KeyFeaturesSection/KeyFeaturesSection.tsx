import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export const KeyFeaturesSection = () => {
  return (
    <section className="w-full py-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FDF6EF] rounded-sm border-none w-full lg:w-1/2">
          <div className="p-6 sm:p-8 md:p-12 lg:px-24 lg:py-[220px] text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 text-[#636362] text-sm md:text-base lg:text-lg font-semibold">
                  Director
                </p>
                <h2 className="text-black text-xl md:text-2xl lg:text-3xl font-bold">
                  HEY, I’M NOAH!
                </h2>
              </div>

              <p className="text-[#636362] text-sm md:text-base lg:text-lg leading-relaxed">
                Noah is a director at Bizzy Buddies. He is a fully qualified
                primary school teacher, who has worked with a range of year
                groups throughout his seven year teaching career. Noah is
                currently Head of Reception, Head of Science and Head of Games,
                at The Falcons School for Boys.
              </p>

              <p className="text-[#636362] text-sm md:text-base lg:text-lg leading-relaxed">
                Noah has been coaching children for over 15 years. He has helped
                children work and develop their fine and gross motor skills,
                hand-eye coordination and social skills.
              </p>

            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center ml-[-30px]">
          <Image
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-contain rounded-sm"
            alt="Child at birthday party"
            src="/assets/about3.svg"
            width={1440}
            height={627}
          />
        </div>
      </div>
    </section>
  );
};
