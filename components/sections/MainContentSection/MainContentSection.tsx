import Image from "next/image";
import React from "react";

export const MainContentSection = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <Image
              className="w-full h-auto object-cover rounded-sm"
              alt="Children in small group training session"
              src="/assets/Oalh2MojUuk (5).png"
              width={1440}
              height={720}
            />
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-light-cream bg-opacity-50 border-none rounded-sm p-6">
              <div className="p-0">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-4">
                    <p className="opacity-40 font-desktop-title-label text-grey-2 tracking-[var(--desktop-title-label-letter-spacing)] text-[length:var(--desktop-title-label-font-size)] leading-[var(--desktop-title-label-line-height)] [font-style:var(--desktop-title-label-font-style)]">
                      GROUP SESSIONS
                    </p>

                    <h2 className="font-desktop-title-headline-4 text-black text-[length:var(--desktop-title-headline-4-font-size)] tracking-[var(--desktop-title-headline-4-letter-spacing)] leading-[var(--desktop-title-headline-4-line-height)] [font-style:var(--desktop-title-headline-4-font-style)]">
                      SMALL GROUP <br />
                      SESSIONS
                    </h2>
                  </div>

                  <p className="font-desktop-body-body-copy-1 text-grey-2 text-[length:var(--desktop-body-body-copy-1-font-size)] tracking-[var(--desktop-body-body-copy-1-letter-spacing)] leading-[var(--desktop-body-body-copy-1-line-height)] [font-style:var(--desktop-body-body-copy-1-font-style)]">
                    Perfect for early years children and private group sessions
                    with a smaller group of children. Perfect to get more
                    focused training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
